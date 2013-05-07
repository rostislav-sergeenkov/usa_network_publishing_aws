<?php
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
      #'author' => t('Author'),  // Doesn't appear to ever be populated.
      #'dcterms:valid' => t('Sunrise/Sunset Dates'),  // Are these the dates to use?
      'media:category' => t('Video Categories'),
      #'media:keywords' => t('Keywords'),  // Use this?  Group with categories?
      'media:rating' => t('MPAA Rating'),
      'media:restriction' => t('Country Code View Permissions'),
      'media:content' => t('Actual Video Data'),
      'media:thumbnail' => t('Thumbnails of various sizes.'),
      'pubDate' => t('Published/Air Date'),
      'plmedia:defaultThumbnailUrl' => t('Default Thumbnail Image'),
      #'pl1:entitlement' => t('Some Permission?'),  // ???
      'pl1:episodeNumber' => t('Episode #'),
      #'pl1:externalAdvertiserId' => t('Advertiser ID'),  // Not used?
      'pl1:seasonNumber' => t('Season #'),
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

    $items_url = variable_get('usanetwork_theplatform_tve_feed_url', 'http://feed.theplatform.com/f/dCK2IC/lQ46POmX6zQC?range=1-10');

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
    $this->addFieldMapping('field_video_guid', 'guid')->xpath('guid');
    $this->addFieldMapping('field_video_pid', 'pl:id')->xpath('pl:id');
    // TODO: Categories.
    $this->addFieldMapping('field_rating', 'media:rating')->xpath('media:rating');
    // TODO? Restrictions.
    $this->addFieldMapping('field_video_release_url', 'media:content')->xpath('media:content/@url');
    $this->addFieldMapping('field_video_thumbnail', 'plmedia:defaultThumbnailUrl')->xpath('plmedia:defaultThumbnailUrl');
    $this->addFieldMapping('field_video_thumbnail:file_replace')->defaultValue(FILE_EXISTS_RENAME);
    $this->addFieldMapping('field_video_thumbnail:destination_dir')->defaultValue($this->imgDestDir);
    $this->addFieldMapping('field_air_date', 'pubDate')->xpath('pubDate');
    $this->addFieldMapping('field_episode_number', 'pl1:episodeNumber')->xpath('pl1:episodeNumber');
    $this->addFieldMapping('field_season_id', 'pl1:seasonNumber')->xpath('pl1:seasonNumber');

    //This class has to be added so that we can set the proxy accordingly to fetch the contents(images, videos etc).
    //Right now we are adding the class based on the environment(local) as this is now required for other environments.
    if ('LOCAL SERVER' == variable_get('environment_indicator_text', 'ENVIRONMENT INDICATOR')) {
      $this->addFieldMapping('field_main_image:file_class')->defaultValue('MigrateFileUriNBCUProxy');
    }
  }

  public function prepare($entity, stdClass $row) {

    // Initially save all video nodes set to unpublished.
    $entity->status = 0;
  }

  public function prepareRow($row) {

  }

  public function complete($entity, stdClass $row) {

    // Save state_flow_schedule data.
    // TODO:  state_flow_schedule having form problems.  Debug / chat with ericduran.
    #state_flow_schedule_schedule($entity->nid, $entity->vid, $selected_date);
  }
}
?>

