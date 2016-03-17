<?php

define('VOX_BLOG_FEED_MRROBOT_ATOM', 'http://www.theverge.com/rss/partner/usa-network-mr-robot/index.xml');
define('MR_ROBOT_SHOW_ID', 56156);

/**
 * Migration class Vox blog feed.
 */
/*--------------- BEGIN BLOG ---------------*/
class USANetworkVoxBlogFeedMigration extends XMLMigration {

  public $imgDestDir;

  /**
   * Sets up the migration.
   */
  public function __construct($arguments) {
    parent::__construct($arguments);
    $this->description = t('My Test');

    $fields = array(
      'atom:title' => t('Title'),
      'atom:content'  => t('Description'),
      'atom:published' => t('Published'),
      'media:credit' => t('Alt text'),
      'media:thumbnail' => t('Media thumbnail'),
    );

    /*
     * Image destination directory for the content type.
     * If there is no directory for content type files will be moved to Drupal default files directory
    */
    $this->imgDestDir = "public://video";

    $this->machineName = "usanetwork_vox_blog";

    $this->map = new MigrateSQLMap($this->machineName,
      array(
        'id' => array(
          'type' => 'varchar',
          'length' => 255,
          'not null' => TRUE,
          'description' => 'Blog ID',
        )
      ),
      MigrateDestinationNode::getKeySchema()
    );

    $items_url = VOX_BLOG_FEED_MRROBOT_ATOM;
    $item_xpath = '/atom:feed/atom:entry';  // relative to document
    $item_ID_xpath = 'atom:id';

    $namespaces = array(
      'atom' => 'http://www.w3.org/2005/Atom',
      'media'=> "http://search.yahoo.com/mrss/",
    );

    $items_class = new MigrateItemsXML($items_url, $item_xpath, $item_ID_xpath, $namespaces);
    $this->source = new MigrateSourceMultiItems($items_class, $fields);
    $this->destination = new MigrateDestinationNode('consumpt_post');

    $blog = variable_get('blog_migrate_mrrobot_nid', NULL);
    $blog_nid = NULL;
    if (preg_match("/^(.+)\[node:(\d+)\]$/", $blog, $matches)) {
      $blog_nid = $matches[2];
    }

    $this->addFieldMapping('title', 'atom:title')->xpath('atom:title');
    $this->addFieldMapping('field_show')->defaultValue(MR_ROBOT_SHOW_ID);
    $this->addFieldMapping('field_consumptionator_blog')->defaultValue($blog_nid);
    $this->addFieldMapping('body', 'atom:content')->xpath('atom:content');
    $this->addFieldMapping('body:format')->defaultValue('ds_code');
    $this->addFieldMapping('created', 'atom:published')->xpath('atom:published');
    $this->addFieldMapping('field_post_cover', 'media:thumbnail')->xpath('./media:content/media:thumbnail/@url');
    $this->addFieldMapping('field_post_cover:file_replace')->defaultValue(FILE_EXISTS_RENAME);
    $this->addFieldMapping('field_post_cover:destination_dir')->defaultValue($this->imgDestDir);
    $this->addFieldMapping('field_summary', 'shirt_description');
    $this->addFieldMapping('field_usa_og_description', 'shirt_description');

    //@todo may be alt text
    //$this->addFieldMapping('field_post_cover:field_file_image_alt_text', 'media:credit')->xpath('./media:content/media:credit');
  }

  public function prepareRow($current_row) {
    $description = $current_row->xml->content[0]->__toString();
    $shirt_description = htmlspecialchars_decode(strip_tags($description));
    $shirt_description = truncate_utf8(trim($shirt_description), 600, TRUE, FALSE, 5);
    $shirt_description = substr($shirt_description, 0, strrpos($shirt_description, '.'));
    $current_row->shirt_description = $shirt_description . '.';
  }

  public function complete($entity, stdClass $row) {
    $settings = variable_get('usanetwork_ads_site_metric_settings', array());
    $entity_wrapper = entity_metadata_wrapper('node', $entity);
    $show = $entity_wrapper->field_show->value();
    $show_name = $show->title;
    $settings['node']['consumpt_post'][$entity->nid] = array(
      'is_sponsored' => -1,
      'sect' => '',
      'sub' => '',
      'sub2' => '',
      'omniture' => array(
        'variables' => array(
          array(
            'key' => 's.prop3',
            'value' => 'Blog',
          ),
          array(
            'key' => 's.prop4',
            'value' => $show_name . ' : ' . $show_name . ' Blog',
          ),
          array(
            'key' => 's.pageName',
            'value' => $show_name . ' : ' . $show_name . ' Blog : ' . $entity->title,
          ),
          'default' => NULL,
        ),
        'disable' => NULL,
      ),
    );
    variable_set('usanetwork_ads_site_metric_settings', $settings);
  }
}

