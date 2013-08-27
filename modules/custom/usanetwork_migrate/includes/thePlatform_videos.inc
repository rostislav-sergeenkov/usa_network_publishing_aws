<?php
/**
 * IMPORTANT NOTES
 * any changes made to fields or feed urls should also be changed in:
 * ~/usanetwork/modules/custom/usanetwork_video/usanetwork_video.module
 * under the debugging functions
 * usanetwork_video_admin_debug_feeds()
 *
 */

/**
 * Migration class for TVE Video content.
 */

/* -------------- BEGIN TVE ----------------*/
class USANetworkTVEVideoFeedMigration extends XMLMigration {
#class USANetworkTVEVideoFeedMigrationDisabled extends XMLMigration {

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
      'duration' => t('Video Duration'),
    );

    /*
     * Image destination directory for the content type.
     * If there is no directory for content type files will be moved to Drupal default files directory
    */
    $this->imgDestDir = "public://video";

    $options = array();

    //This class has to be added so that we can set the proxy accordingly to read the XML.
    //Right now we are adding the class based on the environment(local) as this is now required for other environments.
    /*
    // Disabled until needed.
    if ('LOCAL SERVER' == variable_get('environment_indicator_text', 'ENVIRONMENT INDICATOR')) {
      $options['reader_class'] = 'MigrateReadUriNBCUProxy';
    }
    //*/

    $items_url = variable_get('usanetwork_theplatform_tve_feed_url', 'http://feed.theplatform.com/f/HNK2IC/v_LMXFxZY7Z2');

    // TODO: If this is run in cron, set appropriate query parameters to be passed to the api.
    global $usanetwork_migrate_is_cron;

    // we add &byCustomValue={fullEpisode}{true},{entitlement}{auth}
    // filter by full episode and auth required only
    // so we do not have mpx dupes

    if ($usanetwork_migrate_is_cron) {
      // Append query parameters to only retrieve video data updated within the
      // last hour.
      $updated_date = date('c', strtotime('-1 hours'));
      $items_url .= '?&byCustomValue={fullEpisode}{true},{entitlement}{auth}&byUpdated=' . $updated_date . '~&sort=updated|desc&range=1-100';
    }
    else {
      $items_url .= '?range=1-500&byCustomValue={fullEpisode}{true},{entitlement}{auth}';
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
    $this->addFieldMapping('field_video_air_date', 'pubDate');  // Do not use xpath() here.  Will be processed in prepareRow().
    $this->addFieldMapping('field_episode_number', 'pl1:episodeNumber')->xpath('pl1:episodeNumber');
    $this->addFieldMapping('field_season_id', 'pl1:seasonNumber')->xpath('pl1:seasonNumber');
    $this->addFieldMapping('field_full_episode', 'pl1:fullEpisode');  // Do not use xpath() here.  Will be processed in prepareRow().
    $this->addFieldMapping('field_video_duration', 'duration')->xpath('media:group/media:content/@duration');

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

    // Process publishing date field data.
    $dc_terms = $row->xml->xpath('dcterms:valid');
    if (is_array($dc_terms)) {
      $date_data = (string)array_shift($dc_terms);
      $start_date = preg_replace('|.*;?start=([^;]*);.*|', '$1', $date_data);
      $end_date = preg_replace('|.*;?end=([^;]*);.*|', '$1', $date_data);

      // Format the dates for the date field.
      $final_date_data = array(
        'from' => date('m/d/Y h:i:sa', strtotime($start_date)),
        'to' => date('m/d/Y h:i:sa', strtotime($end_date)),
      );
      // Encode in JSON for the date field.
      $row->{'dcterms:valid'} = drupal_json_encode($final_date_data);
    }

    // Convert pl1:fullEpisode value.
    $full_episode = $row->xml->xpath('pl1:fullEpisode');
    if (is_array($full_episode)) {
      $full_episode_value = (string)array_shift($full_episode);
      $row->{'pl1:fullEpisode'} = strtolower($full_episode_value) == 'true' ? 1 : 0;
    }

    // Process air date field data.
    $air_date = $row->xml->xpath('pubDate');
    if (is_array($air_date)) {
      $date_data = (string)array_shift($air_date);
      $final_date_data = array(
        'from' => date('m/d/Y h:i:sa', strtotime($date_data)),
        #'to' => '',
      );
      $row->pubDate = drupal_json_encode($final_date_data);
    }
  }

  public function prepare($entity, stdClass $row) {

    // Attach video categories to entity.
    $video_categories = $row->xml->xpath('media:category');
    _usanetwork_migrate_attach_video_categories($entity, $video_categories);

    // Add the TV Show entity reference.
    _usanetwork_migrate_attach_video_tv_show_reference($entity, $video_categories);
  }

  public function complete($entity, stdClass $row) {

    if (isset($row->{'dcterms:valid'})) {
      $video_date_data = drupal_json_decode($row->{'dcterms:valid'});
      /*
      if ($row->status == 0) {
        $sunrise = strtotime($video_date_data['from']);
      }
      else {
        $sunrise = NULL;
      }
      */
      $sunrise = strtotime($video_date_data['from']);
      $sunset = strtotime($video_date_data['to']);
      /**
      // debug
      watchdog('usanetwork_migrate', '@nid sunrise is @sunrise.',
          array('@nid' => $entity->nid, '@sunrise' => date('m/d/Y h:i:sa', $sunrise)));
      drupal_set_message(t('USA MIGRATE IMPORT: @nid sunrise is @sunrise.',
          array('@nid' => $entity->nid, '@sunrise' => date('m/d/Y h:i:sa', $sunrise))));
      watchdog('usanetwork_migrate', '@nid sunset is @sunset.',
          array('@nid' => $entity->nid, '@sunset' => date('m/d/Y h:i:sa', $sunset)));
      drupal_set_message(t('USA MIGRATE IMPORT: @nid sunset is @sunset.',
          array('@nid' => $entity->nid, '@sunset' => date('m/d/Y h:i:sa', $sunset))));
      */
      // if we have a sunrise date, schedule the revision to publish
      if (isset($sunrise)) {
        $count = db_select('revision_scheduler', 'r')
                 ->fields('r')
                 ->condition('entity_id', $entity->nid, '=')
                 ->condition('entity_type', 'node', '=')
                 ->condition('time_scheduled', $sunrise, '=')
                 ->condition('operation', 'workbench_moderation_to_published', '=')
                 ->execute()
                 ->rowCount();
        if ($count == 0) {
          $set_sunrise = new stdClass();
          $set_sunrise->id = NULL;
          $set_sunrise->entity_type = 'node';
          $set_sunrise->entity_id = $entity->nid;
          $set_sunrise->revision_id = $entity->vid;
          $set_sunrise->operation = 'workbench_moderation_to_published';
          $set_sunrise->time_scheduled = $sunrise;
          $set_sunrise->time_queued = 0;
          $set_sunrise->time_executed = 0;
          revision_scheduler_operation_save($set_sunrise);
        }
      }
      // if we have a sunset date, schedule the revision to draft
      if (isset($sunset)) {
        $count = db_select('revision_scheduler', 'r')
                 ->fields('r')
                 ->condition('entity_id', $entity->nid, '=')
                 ->condition('entity_type', 'node', '=')
                 ->condition('time_scheduled', $sunset, '=')
                 ->condition('operation', 'workbench_moderation_to_draft', '=')
                 ->execute()
                 ->rowCount();
        if ($count == 0) {
          $set_sunset = new stdClass();
          $set_sunset->id = NULL;
          $set_sunset->entity_type = 'node';
          $set_sunset->entity_id = $entity->nid;
          $set_sunset->revision_id = $entity->vid;
          $set_sunset->operation = 'workbench_moderation_to_draft';
          $set_sunset->time_scheduled = $sunset;
          $set_sunset->time_queued = 0;
          $set_sunset->time_executed = 0;
          revision_scheduler_operation_save($set_sunset);
        }
      }
    }

  }
  // remove related entries from revision_scheduler
  public function completeRollback($entity_id) {
    // Code to execute after an entity has been rolled back.
      db_delete('revision_scheduler')
      ->condition('entity_id', $entity_id)
      ->execute();
  }

}
/* -------------- END TVE ----------------*/

/* -------------------------------------------------------------------------- */

/**
 * Migration class for MPX Video content.
 */
/* -------------- BEGIN MPX ----------------*/
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
      'nbcu:episodeNumber' => t('Episode #'),  // Not always set for MPX.
      'nbcu:seasonNumber' => t('Season #'),  // Not always set for MPX.
      'pl1:fullEpisode' => t('Full Episode'),  // Not always set for MPX.
      'duration' => t('Video Duration'),
    );

    /*
     * Image destination directory for the content type.
     * If there is no directory for content type files will be moved to Drupal default files directory
    */
    // TODO:  Determine/confirm this directory.
    $this->imgDestDir = "public://video";

    $options = array();

    //This class has to be added so that we can set the proxy accordingly to read the XML.
    //Right now we are adding the class based on the environment(local) as this is now required for other environments.
    /*
    // Disabled until needed.
    if ('LOCAL SERVER' == variable_get('environment_indicator_text', 'ENVIRONMENT INDICATOR')) {
      $options['reader_class'] = 'MigrateReadUriNBCUProxy';
    }
    //*/

    $items_url = variable_get('usanetwork_theplatform_mpx_feed_url', 'http://feed.theplatform.com/f/OyMl-B/UPo0Hq7sZn4q');

    // TODO: If this is run in cron, set appropriate query parameters to be passed to the api.
    global $usanetwork_migrate_is_cron;

    if ($usanetwork_migrate_is_cron) {
      // Append query parameters to only retrieve video data updated within the
      // last hour.
      $updated_date = date('c', strtotime('-1 hour'));
      $items_url .= '?byUpdated=' . $updated_date . '~';
      $items_url .= '&sort=updated|desc';
      $items_url .= '&range=1-100';
    }
    else {
      // limit the number of elements we pull for initial ingestion
      // if the MPX feed grows beyond this we need to edit this number
      $items_url .= '?range=1-1200';
    }

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
    $this->addFieldMapping('field_video_air_date', 'pubDate');  // Do not use xpath() here.  Will be processed in prepareRow().
    $this->addFieldMapping('field_episode_number', 'nbcu:episodeNumber')->xpath('nbcu:episodeNumber');
    $this->addFieldMapping('field_season_id', 'nbcu:seasonNumber')->xpath('nbcu:seasonNumber');
    $this->addFieldMapping('field_full_episode', 'pl1:fullEpisode');  // Do not use xpath() here.  Will be processed in prepareRow().
    $this->addFieldMapping('field_video_duration', 'duration')->xpath('media:group/media:content/@duration');

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

    static $index = 1;
    // Process publishing date field data.
    $dc_terms = $row->xml->xpath('dcterms:valid');
    if (is_array($dc_terms)) {
      $date_data = (string)array_shift($dc_terms);
      $start_date = preg_replace('|.*;?start=([^;]*);.*|', '$1', $date_data);
      $end_date = preg_replace('|.*;?end=([^;]*);.*|', '$1', $date_data);

      // Format the dates for the date field.
      $final_date_data = array(
        'from' => date('m/d/Y h:i:sa', strtotime($start_date)),
        'to' => date('m/d/Y h:i:sa', strtotime($end_date)),
      );
      // Encode in JSON for the date field.
      $row->{'dcterms:valid'} = drupal_json_encode($final_date_data);
    }

    // Convert pl1:fullEpisode value.
    $full_episode_index = 'pl' . $index++ . ':fullEpisode';
    $full_episode = $row->xml->xpath($full_episode_index);
    if (is_array($full_episode)) {
      $full_episode_value = (string)array_shift($full_episode);
      $row->{'pl1:fullEpisode'} = strtolower($full_episode_value) == 'true' ? 1 : 0;
    }

    // Process air date field data.
    $air_date = $row->xml->xpath('pubDate');
    if (is_array($air_date)) {
      $date_data = (string)array_shift($air_date);
      $final_date_data = array(
        'from' => date('m/d/Y h:i:sa', strtotime($date_data)),
        #'to' => '',
      );
      $row->pubDate = drupal_json_encode($final_date_data);
    }
  }

  public function prepare($entity, stdClass $row) {

    // Attach video categories to entity.
    $video_categories = $row->xml->xpath('media:category');
    _usanetwork_migrate_attach_video_categories($entity, $video_categories);

    // Add the TV Show entity reference.
    _usanetwork_migrate_attach_video_tv_show_reference($entity, $video_categories);
  }

  public function complete($entity, stdClass $row) {

    if (isset($row->{'dcterms:valid'})) {
      $video_date_data = drupal_json_decode($row->{'dcterms:valid'});
      /*
      if ($row->status == 0) {
        $sunrise = strtotime($video_date_data['from']);
      }
      else {
        $sunrise = NULL;
      }
      */
      $sunrise = strtotime($video_date_data['from']);
      $sunset = strtotime($video_date_data['to']);
      /**
      // debug
      watchdog('usanetwork_migrate', '@nid sunrise is @sunrise.',
          array('@nid' => $entity->nid, '@sunrise' => date('m/d/Y h:i:sa', $sunrise)));
      drupal_set_message(t('USA MIGRATE IMPORT: @nid sunrise is @sunrise.',
          array('@nid' => $entity->nid, '@sunrise' => date('m/d/Y h:i:sa', $sunrise))));
      watchdog('usanetwork_migrate', '@nid sunset is @sunset.',
          array('@nid' => $entity->nid, '@sunset' => date('m/d/Y h:i:sa', $sunset)));
      drupal_set_message(t('USA MIGRATE IMPORT: @nid sunset is @sunset.',
          array('@nid' => $entity->nid, '@sunset' => date('m/d/Y h:i:sa', $sunset))));
      */
      // if we have a sunrise date, schedule the revision to publish
      if (isset($sunrise)) {
        $count = db_select('revision_scheduler', 'r')
                 ->fields('r')
                 ->condition('entity_id', $entity->nid, '=')
                 ->condition('entity_type', 'node', '=')
                 ->condition('time_scheduled', $sunrise, '=')
                 ->condition('operation', 'workbench_moderation_to_published', '=')
                 ->execute()
                 ->rowCount();
        if ($count == 0) {
          $set_sunrise = new stdClass();
          $set_sunrise->id = NULL;
          $set_sunrise->entity_type = 'node';
          $set_sunrise->entity_id = $entity->nid;
          $set_sunrise->revision_id = $entity->vid;
          $set_sunrise->operation = 'workbench_moderation_to_published';
          $set_sunrise->time_scheduled = $sunrise;
          $set_sunrise->time_queued = 0;
          $set_sunrise->time_executed = 0;
          revision_scheduler_operation_save($set_sunrise);
        }
      }
      // if we have a sunset date, schedule the revision to draft
      if (isset($sunset)) {
        $count = db_select('revision_scheduler', 'r')
                 ->fields('r')
                 ->condition('entity_id', $entity->nid, '=')
                 ->condition('entity_type', 'node', '=')
                 ->condition('time_scheduled', $sunset, '=')
                 ->condition('operation', 'workbench_moderation_to_draft', '=')
                 ->execute()
                 ->rowCount();
        if ($count == 0) {
          $set_sunset = new stdClass();
          $set_sunset->id = NULL;
          $set_sunset->entity_type = 'node';
          $set_sunset->entity_id = $entity->nid;
          $set_sunset->revision_id = $entity->vid;
          $set_sunset->operation = 'workbench_moderation_to_draft';
          $set_sunset->time_scheduled = $sunset;
          $set_sunset->time_queued = 0;
          $set_sunset->time_executed = 0;
          revision_scheduler_operation_save($set_sunset);
        }
      }
    }

  }

  // remove related entries from revision_scheduler
  public function completeRollback($entity_id) {
    // Code to execute after an entity has been rolled back.
      db_delete('revision_scheduler')
      ->condition('entity_id', $entity_id)
      ->execute();
  }

/* -------------- END MPX ----------------*/

}

