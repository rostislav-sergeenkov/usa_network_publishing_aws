<?php

/**
 * Migration class for TVE Video content.
 */
class USANetworkTVEVideoFeedMigration extends XMLMigration {

  public $imgDestDir;

  public function __construct() {

    parent::__construct();

    $this->description = t('Migrate videos from the thePlatform TVE XML feed.');

    $fields = array(
      'pl:id' => t('Player ID'),
      'guid' => t('Guid'),
      'title' => t('Title'),
      'description' => t('Description'),
      'dcterms:valid' => t('Sunrise/Sunset Dates'),
      'media:category' => t('Video Categories'),
      'media:rating' => t('MPAA Rating'),
      'media:content' => t('Actual Video Data'),
      'pubDate' => t('Published/Air Date'),
      'plmedia:defaultThumbnailUrl' => t('Default Thumbnail Image'),
      'pl1:episodeNumber' => t('Episode #'),
      'pl1:seasonNumber' => t('Season #'),
      'pl1:fullEpisode' => t('Full Episode'),
    );

    /*
     * Image destination directory for the content type.
     * If there is no directory for content type files will be moved to Drupal default files directory
    */
    // TODO:  Determine/confirm this directory.
    $this->imgDestDir = "public://video/";

    $options = array();

    //This class has to be added so that we can set the proxy accordingly to read the XML.
    //Right now we are adding the class based on the environment(local) as this is now required for other environments.
    /*
    // Disabled until needed.
    if ('LOCAL SERVER' == variable_get('environment_indicator_text', 'ENVIRONMENT INDICATOR')) {
      $options['reader_class'] = 'MigrateReadUriNBCUProxy';
    }
    //*/

    $items_url = variable_get('usanetwork_theplatform_tve_feed_url', 'http://feed.theplatform.com/f/dCK2IC/lQ46POmX6zQC');

    // TODO: If this is run in cron, set appropriate query parameters to be passed to the api.
    $is_cron = FALSE;
    if ($is_cron) {
      $items_url .= '?range=1-5';
    }

    $item_xpath = '/rss/channel/item';  // relative to document
    $item_ID_xpath = 'guid';  // relative to item_xpath

    $this->source = new MigrateSourceXML($items_url, $item_xpath, $item_ID_xpath, $fields, $options);
    $this->destination = new MigrateDestinationNode('usa_tve_video');
    $this->machineName = "usanetwork_tve_videos";

    $this->map = new MigrateSQLMap($this->machineName,
      array(
        'guid' => array(
          'type' => 'varchar',
          'length' => 255,
          'not null' => TRUE,
          'description' => 'Video ID',
        )
      ),
      MigrateDestinationNode::getKeySchema()
    );

    $this->addFieldMapping('title', 'title')->xpath('title');
    $this->addFieldMapping('body', 'description')->xpath('description')->arguments(array('format' => 'plain_text'));
    $this->addFieldMapping('field_publish_date', 'dcterms:valid');  // Do not use xpath() here.  Will be processed in prepareRow().
    $this->addFieldMapping('field_video_guid', 'guid')->xpath('guid');
    $this->addFieldMapping('field_video_pid', 'pl:id')->xpath('pl:id');
    // Categories and Show handled in the prepare() method.
    $this->addFieldMapping('field_rating', 'media:rating')->xpath('media:rating');
    // Restrictions handled by player.
    $this->addFieldMapping('field_video_thumbnail', 'plmedia:defaultThumbnailUrl')->xpath('plmedia:defaultThumbnailUrl');
    $this->addFieldMapping('field_video_thumbnail:file_replace')->defaultValue(FILE_EXISTS_RENAME);
    $this->addFieldMapping('field_video_thumbnail:destination_dir')->defaultValue($this->imgDestDir);
    $this->addFieldMapping('field_air_date', 'pubDate')->xpath('pubDate');
    $this->addFieldMapping('field_episode_number', 'pl1:episodeNumber')->xpath('pl1:episodeNumber');
    $this->addFieldMapping('field_season_id', 'pl1:seasonNumber')->xpath('pl1:seasonNumber');
    $this->addFieldMapping('field_full_episode', 'pl1:fullEpisode');  // Do not use xpath() here.  Will be processed in prepareRow().

    //This class has to be added so that we can set the proxy accordingly to fetch the contents(images, videos etc).
    //Right now we are adding the class based on the environment(local) as this is now required for other environments.
    /*
    // Disabled until needed.
    if ('LOCAL SERVER' == variable_get('environment_indicator_text', 'ENVIRONMENT INDICATOR')) {
      $this->addFieldMapping('field_main_image:file_class')->defaultValue('MigrateFileUriNBCUProxy');
    }
    //*/
  }

  public function prepareRow($row) {

    // Process date field data.
    $date_data = (string)array_shift($row->xml->xpath('dcterms:valid'));
    $start_date = preg_replace('|.*;?start=([^;]*);.*|', '$1', $date_data);
    $end_date = preg_replace('|.*;?end=([^;]*);.*|', '$1', $date_data);

    $final_date_data = array(
      'from' => date('m/d/Y h:i:sa', strtotime($start_date)),
      'to' => date('m/d/Y h:i:sa', strtotime($end_date)),
    );

    $row->{'dcterms:valid'} = drupal_json_encode($final_date_data);

    // Convert pl1:fullEpisode value.
    $full_episode_value = (string)array_shift($row->xml->xpath('pl1:fullEpisode'));
    $row->{'pl1:fullEpisode'} = strtolower($full_episode_value) == 'true' ? 1 : 0;
  }

  public function prepare($entity, stdClass $row) {

    // Initially save all video nodes set to unpublished.
    $entity->status = 0;

    // Attach video categories to entity.
    $video_categories = $row->xml->xpath('media:category');
    _usanetwork_migrate_attach_video_categories($entity, $video_categories);

    // Add the TV Show entity reference.
    _usanetwork_migrate_attach_video_tv_show_reference($entity, $video_categories);
  }

  public function complete($entity, stdClass $row) {

    // Save state_flow_schedule data by passing $form_state values to the
    // state_flow_events_revision_submit() and state_flow_schedule_content()
    // state_flow_events_revision form submit handlers.
    module_load_include('inc', 'state_flow', 'state_flow.pages');

    global $user;

    $user = user_load(1);

    $state_flow_form = array();
    $state_flow_form_state = array();
    $state_flow_form_state['values'] = array(
      'node_revision' => $entity,
      'state_flow' => state_flow_load_state_machine($entity),
      'event' => 'schedule',
      'event_comment' => t('Scheduling publication date via migration script.'),
    );
    state_flow_events_revision_submit($state_flow_form, $state_flow_form_state);

    $state_flow_schedule_form = array();
    $state_flow_schedule_form_state = array();
    $video_date_data = drupal_json_decode($row->{'dcterms:valid'});
    $state_flow_schedule_form_state['values'] = array(
      'selected-date' => $video_date_data['from'],
      'event-name' => 'schedule',
      'nid' => $entity->nid,
      'vid' => $entity->vid,
    );
    state_flow_schedule_content($state_flow_schedule_form, $state_flow_schedule_form_state);
  }
}

/* -------------------------------------------------------------------------- */

/**
 * Migration class for MPX Video content.
 */
class USANetworkMPXVideoFeedMigration extends XMLMigration {

  public $imgDestDir;

  public function __construct() {

    parent::__construct();

    $this->description = t('Migrate videos from the thePlatform MPX XML feed.');

    $fields = array(
      'pl:id' => t('Player ID'),  // Not always set for MPX.
      'guid' => t('Guid'),
      'title' => t('Title'),
      'description' => t('Description'),
      'dcterms:valid' => t('Sunrise/Sunset Dates'),
      'media:category' => t('Video Categories'),
      'media:rating' => t('MPAA Rating'),
      'pubDate' => t('Published/Air Date'),
      'plmedia:defaultThumbnailUrl' => t('Default Thumbnail Image'),
      'pl1:episodeNumber' => t('Episode #'),  // Not always set for MPX.
      'pl1:seasonNumber' => t('Season #'),  // Not always set for MPX.
      'pl1:fullEpisode' => t('Full Episode'),  // Not always set for MPX.
    );

    /*
     * Image destination directory for the content type.
     * If there is no directory for content type files will be moved to Drupal default files directory
    */
    // TODO:  Determine/confirm this directory.
    $this->imgDestDir = "public://video/";

    $options = array();

    //This class has to be added so that we can set the proxy accordingly to read the XML.
    //Right now we are adding the class based on the environment(local) as this is now required for other environments.
    /*
    // Disabled until needed.
    if ('LOCAL SERVER' == variable_get('environment_indicator_text', 'ENVIRONMENT INDICATOR')) {
      $options['reader_class'] = 'MigrateReadUriNBCUProxy';
    }
    //*/

    $items_url = variable_get('usanetwork_theplatform_mpx_feed_url', 'http://feed.theplatform.com/f/OyMl-B/8IyhuVgUXDd_');

    // TODO: If this is run in cron, set appropriate query parameters to be passed to the api.
    $is_cron = FALSE;
    if ($is_cron) {
      $items_url .= '?range=1-5';
    }


      $items_url .= '?range=1-150';


    $item_xpath = '/rss/channel/item';  // relative to document
    $item_ID_xpath = 'guid';  // relative to item_xpath

    $this->source = new MigrateSourceXML($items_url, $item_xpath, $item_ID_xpath, $fields, $options);
    $this->destination = new MigrateDestinationNode('usa_video');
    $this->machineName = "usanetwork_mpx_videos";

    $this->map = new MigrateSQLMap($this->machineName,
      array(
        'guid' => array(
          'type' => 'varchar',
          'length' => 255,
          'not null' => TRUE,
          'description' => 'Video ID',
        )
      ),
      MigrateDestinationNode::getKeySchema()
    );

    $this->addFieldMapping('title', 'title')->xpath('title');
    $this->addFieldMapping('body', 'description')->xpath('description')->arguments(array('format' => 'plain_text'));
    $this->addFieldMapping('field_publish_date', 'dcterms:valid');  // Do not use xpath() here.  Will be processed in prepareRow().
    $this->addFieldMapping('field_video_guid', 'guid')->xpath('guid');
    $this->addFieldMapping('field_video_pid', 'pl:id')->xpath('pl:id');
    // Categories and Show handled in prepare() method.
    $this->addFieldMapping('field_rating', 'media:rating')->xpath('media:rating');
    // Restrictions handled by player.
    $this->addFieldMapping('field_video_thumbnail', 'plmedia:defaultThumbnailUrl')->xpath('plmedia:defaultThumbnailUrl');
    $this->addFieldMapping('field_video_thumbnail:file_replace')->defaultValue(FILE_EXISTS_RENAME);
    $this->addFieldMapping('field_video_thumbnail:destination_dir')->defaultValue($this->imgDestDir);
    $this->addFieldMapping('field_air_date', 'pubDate')->xpath('pubDate');
    $this->addFieldMapping('field_episode_number', 'pl1:episodeNumber')->xpath('pl1:episodeNumber');
    $this->addFieldMapping('field_season_id', 'pl1:seasonNumber')->xpath('pl1:seasonNumber');
    $this->addFieldMapping('field_full_episode', 'pl1:fullEpisode');  // Do not use xpath() here.  Will be processed in prepareRow().

    //This class has to be added so that we can set the proxy accordingly to fetch the contents(images, videos etc).
    //Right now we are adding the class based on the environment(local) as this is now required for other environments.
    /*
    // Disabled until needed.
    if ('LOCAL SERVER' == variable_get('environment_indicator_text', 'ENVIRONMENT INDICATOR')) {
      $this->addFieldMapping('field_main_image:file_class')->defaultValue('MigrateFileUriNBCUProxy');
    }
    //*/
  }

  public function prepareRow($row) {

    // Process date field data.
    $date_data = (string)array_shift($row->xml->xpath('dcterms:valid'));
    $start_date = preg_replace('|.*;?start=([^;]*);.*|', '$1', $date_data);
    $end_date = preg_replace('|.*;?end=([^;]*);.*|', '$1', $date_data);

    $final_date_data = array(
      'from' => date('m/d/Y h:i:sa', strtotime($start_date)),
      'to' => date('m/d/Y h:i:sa', strtotime($end_date)),
    );

    $row->{'dcterms:valid'} = drupal_json_encode($final_date_data);

    // Convert pl1:fullEpisode value.
    $full_episode_value = (string)array_shift($row->xml->xpath('pl1:fullEpisode'));
    $row->{'pl1:fullEpisode'} = strtolower($full_episode_value) == 'true' ? 1 : 0;
  }

  public function prepare($entity, stdClass $row) {

    // Initially save all video nodes set to unpublished.
    $entity->status = 0;

    // Attach video categories to entity.
    $video_categories = $row->xml->xpath('media:category');
    _usanetwork_migrate_attach_video_categories($entity, $video_categories);

    // Add the TV Show entity reference.
    _usanetwork_migrate_attach_video_tv_show_reference($entity, $video_categories);
  }

  public function complete($entity, stdClass $row) {

    // Save state_flow_schedule data by passing $form_state values to the
    // state_flow_events_revision_submit() and state_flow_schedule_content()
    // state_flow_events_revision form submit handlers.
    module_load_include('inc', 'state_flow', 'state_flow.pages');

    global $user;

    $user = user_load(1);

    $state_flow_form = array();
    $state_flow_form_state = array();
    $state_flow_form_state['values'] = array(
      'node_revision' => $entity,
      'state_flow' => state_flow_load_state_machine($entity),
      'event' => 'schedule',
      'event_comment' => t('Scheduling publication date via migration script.'),
    );
    state_flow_events_revision_submit($state_flow_form, $state_flow_form_state);

    $state_flow_schedule_form = array();
    $state_flow_schedule_form_state = array();
    $video_date_data = drupal_json_decode($row->{'dcterms:valid'});
    $state_flow_schedule_form_state['values'] = array(
      'selected-date' => $video_date_data['from'],
      'event-name' => 'schedule',
      'nid' => $entity->nid,
      'vid' => $entity->vid,
    );
    state_flow_schedule_content($state_flow_schedule_form, $state_flow_schedule_form_state);
  }
}

