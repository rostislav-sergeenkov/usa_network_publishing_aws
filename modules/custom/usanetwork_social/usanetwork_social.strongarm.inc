<?php
/**
 * @file
 * usanetwork_social.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function usanetwork_social_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_twitter_children';
  $strongarm->value = 'children:2 -state:ModeratorDeleted,ModeratorFlagged,SystemFlagged,CommunityFlagged -user.state:ModeratorBanned childrenSortOrder:reverseChronological childrenItemsPerPage:2';
  $export['usanetwork_social_twitter_children'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_twitter_childrenof';
  $strongarm->value = 'childrenof:http://chatter.usanetwork.com';
  $export['usanetwork_social_twitter_childrenof'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_twitter_echo_app_key';
  $strongarm->value = 'prod.usanetwork';
  $export['usanetwork_social_twitter_echo_app_key'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_twitter_echo_query_template';
  $strongarm->value = '([CHILDRENOF]/[SHOW]/[FEED] [STATE] [MARKERS] [TAGS] [SOURCE]) [SORTORDER] [SAFEHTML] [ITEMSPERPAGE] [CHILDREN]';
  $export['usanetwork_social_twitter_echo_query_template'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_twitter_feed';
  $strongarm->value = 'id_All';
  $export['usanetwork_social_twitter_feed'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_twitter_itemsperpage';
  $strongarm->value = 'itemsPerPage:20';
  $export['usanetwork_social_twitter_itemsperpage'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_twitter_markers';
  $strongarm->value = '';
  $export['usanetwork_social_twitter_markers'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_twitter_safehtml';
  $strongarm->value = 'safeHTML:true';
  $export['usanetwork_social_twitter_safehtml'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_twitter_sortorder';
  $strongarm->value = 'sortOrder:reverseChronological';
  $export['usanetwork_social_twitter_sortorder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_twitter_source';
  $strongarm->value = 'source:Twitter';
  $export['usanetwork_social_twitter_source'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_twitter_state';
  $strongarm->value = '-state:ModeratorDeleted,ModeratorFlagged,SystemFlagged,CommunityFlagged -user.state:ModeratorBanned';
  $export['usanetwork_social_twitter_state'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_twitter_tags';
  $strongarm->value = '';
  $export['usanetwork_social_twitter_tags'] = $strongarm;

  return $export;
}
