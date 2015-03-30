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
  $strongarm->name = 'usanetwork_social_chat_children';
  $strongarm->value = 'children:2 -state:ModeratorDeleted,ModeratorFlagged,SystemFlagged,CommunityFlagged -user.state:ModeratorBanned childrenSortOrder:reverseChronological childrenItemsPerPage:2';
  $export['usanetwork_social_chat_children'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_chat_childrenof';
  $strongarm->value = 'childrenof:http://chatter.usanetwork.com';
  $export['usanetwork_social_chat_childrenof'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_chat_echo_app_key';
  $strongarm->value = 'prod.usanetwork';
  $export['usanetwork_social_chat_echo_app_key'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_chat_echo_query_template';
  $strongarm->value = '([CHILDRENOF]/[SHOW]/[FEED] [STATE] [MARKERS] [TAGS] [SOURCE]) [SORTORDER] [SAFEHTML] [ITEMSPERPAGE] [CHILDREN]';
  $export['usanetwork_social_chat_echo_query_template'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_chat_feed';
  $strongarm->value = 'public/comments';
  $export['usanetwork_social_chat_feed'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_chat_identitymanagerurl';
  $strongarm->value = 'https://usanetwork.rpxnow.com/openid/embed?flags=stay_in_window,no_immediate&token_url=[JANRAINTOKENURL]&bp_channel=';
  $export['usanetwork_social_chat_identitymanagerurl'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_chat_itemsperpage';
  $strongarm->value = 'itemsPerPage:20';
  $export['usanetwork_social_chat_itemsperpage'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_chat_markers';
  $strongarm->value = '';
  $export['usanetwork_social_chat_markers'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_chat_safehtml';
  $strongarm->value = 'safeHTML:true';
  $export['usanetwork_social_chat_safehtml'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_chat_sortorder';
  $strongarm->value = 'sortOrder:reverseChronological';
  $export['usanetwork_social_chat_sortorder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_chat_source';
  $strongarm->value = '';
  $export['usanetwork_social_chat_source'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_chat_state';
  $strongarm->value = '-state:ModeratorDeleted,ModeratorFlagged,SystemFlagged,CommunityFlagged -user.state:ModeratorBanned';
  $export['usanetwork_social_chat_state'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_chat_submittargeturl';
  $strongarm->value = 'http://chatter.usanetwork.com/[SHOW]/public/comments';
  $export['usanetwork_social_chat_submittargeturl'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_chat_tags';
  $strongarm->value = '';
  $export['usanetwork_social_chat_tags'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_enable_ideamelt';
  $strongarm->value = 0;
  $export['usanetwork_social_enable_ideamelt'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_global_twitter_echo_query_template';
  $strongarm->value = '([CHILDRENOF]/[PATH] [STATE] [MARKERS] [TAGS] [SOURCE]) [SORTORDER] [SAFEHTML] [ITEMSPERPAGE] [CHILDREN]';
  $export['usanetwork_social_global_twitter_echo_query_template'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_global_twitter_path';
  $strongarm->value = '*';
  $export['usanetwork_social_global_twitter_path'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_ideamelt_api_key';
  $strongarm->value = 'dev.usanetwork';
  $export['usanetwork_social_ideamelt_api_key'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_sync_desktop_url';
  $strongarm->value = 'http://m.usanetwork.com/sync/?ww=OQFL9NEFSDD&show=&layout=web&partner=usa';
  $export['usanetwork_social_sync_desktop_url'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_sync_global_desktop_url';
  $strongarm->value = 'http://m.usanetwork.com/sync/?layout=web&ww=OQFL9NEFSDD&partner=usa&show=usa ';
  $export['usanetwork_social_sync_global_desktop_url'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_sync_global_phone_url';
  $strongarm->value = 'http://m.usanetwork.com/sync/?layout=mobile&ww=Q3FJIIQJ2AA&partner=usamobile&show=usa ';
  $export['usanetwork_social_sync_global_phone_url'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_sync_phone_url';
  $strongarm->value = 'http://m.usanetwork.com/sync/?ww=Q3FJIIQJ2AA&show=&layout=mobile&partner=usamobile';
  $export['usanetwork_social_sync_phone_url'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_sync_show_global';
  $strongarm->value = 1;
  $export['usanetwork_social_sync_show_global'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_trend_base_url';
  $strongarm->value = 'https://www.rebelmouse.com';
  $export['usanetwork_social_trend_base_url'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_trend_global_base_path';
  $strongarm->value = 'USANetwork';
  $export['usanetwork_social_trend_global_base_path'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_trend_global_base_url';
  $strongarm->value = 'https://www.rebelmouse.com';
  $export['usanetwork_social_trend_global_base_url'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_trend_global_url_params';
  $strongarm->value = 'embedded=1&flexible=0&scrollbar_theme=light-2&skip=also-on-rm';
  $export['usanetwork_social_trend_global_url_params'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_trend_show_global';
  $strongarm->value = 1;
  $export['usanetwork_social_trend_show_global'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_trend_url_params';
  $strongarm->value = 'embedded=1&flexible=0&scrollbar_theme=light-2';
  $export['usanetwork_social_trend_url_params'] = $strongarm;

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
