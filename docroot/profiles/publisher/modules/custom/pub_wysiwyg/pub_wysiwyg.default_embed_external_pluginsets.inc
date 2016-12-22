<?php
/**
 * @file
 * pub_wysiwyg.default_embed_external_pluginsets.inc
 */

/**
 * Implements hook_default_embed_external_pluginset().
 */
function pub_wysiwyg_default_embed_external_pluginset() {
  $export = array();

  $pluginset = new stdClass();
  $pluginset->disabled = FALSE; /* Edit this to true to make a default pluginset disabled initially */
  $pluginset->api_version = 1;
  $pluginset->name = 'publisher7_default_plugin';
  $pluginset->admin_title = 'Publisher7 default plugin';
  $pluginset->enabled_plugins = 'a:3:{i:0;s:13:"facebook_post";i:1;s:13:"youtube_video";i:2;s:9:"mpx_video";}';
  $export['publisher7_default_plugin'] = $pluginset;

  return $export;
}
