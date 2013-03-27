<?php
/**
 * @file
 * pub_media_galleries_override.features.inc
 */

/**
 * Implements hook_field_default_fields_alter().
 */
function pub_media_galleries_override_field_default_fields_alter(&$data) {
  if (isset($data['node-media_gallery-body'])) {
    $data['node-media_gallery-body']['field_instance']['display']['teaser']['weight'] = '1'; /* WAS: '0' */
  }
  if (isset($data['node-media_gallery-field_categories'])) {
    $data['node-media_gallery-field_categories']['field_instance']['display']['teaser']['weight'] = '8'; /* WAS: '0' */
  }
  if (isset($data['node-media_gallery-field_collection'])) {
    $data['node-media_gallery-field_collection']['field_instance']['display']['teaser']['weight'] = '6'; /* WAS: 0 */
  }
  if (isset($data['node-media_gallery-field_content_tags'])) {
    $data['node-media_gallery-field_content_tags']['field_instance']['display']['teaser']['weight'] = '7'; /* WAS: '0' */
  }
  if (isset($data['node-media_gallery-field_cover_item'])) {
    $data['node-media_gallery-field_cover_item']['field_instance']['display']['teaser']['label'] = 'hidden'; /* WAS: 'above' */
    $data['node-media_gallery-field_cover_item']['field_instance']['display']['teaser']['module'] = 'file_entity'; /* WAS: '' */
    $data['node-media_gallery-field_cover_item']['field_instance']['display']['teaser']['settings']['file_view_mode'] = 'teaser'; /* WAS: '' */
    $data['node-media_gallery-field_cover_item']['field_instance']['display']['teaser']['type'] = 'file_rendered'; /* WAS: 'hidden' */
  }
  if (isset($data['node-media_gallery-field_gigya_share_bar'])) {
    $data['node-media_gallery-field_gigya_share_bar']['field_instance']['display']['teaser']['weight'] = '5'; /* WAS: 0 */
  }
  if (isset($data['node-media_gallery-field_media_items'])) {
    $data['node-media_gallery-field_media_items']['field_instance']['display']['teaser']['weight'] = '2'; /* WAS: 0 */
  }
  if (isset($data['node-media_gallery-field_pub_relation_movie'])) {
    $data['node-media_gallery-field_pub_relation_movie']['field_instance']['display']['default']['weight'] = '7'; /* WAS: 7 */
    $data['node-media_gallery-field_pub_relation_movie']['field_instance']['display']['teaser']['weight'] = '3'; /* WAS: 0 */
  }
  if (isset($data['node-media_gallery-field_pub_relation_tv_shows'])) {
    $data['node-media_gallery-field_pub_relation_tv_shows']['field_instance']['display']['default']['weight'] = '8'; /* WAS: 8 */
    $data['node-media_gallery-field_pub_relation_tv_shows']['field_instance']['display']['teaser']['weight'] = '4'; /* WAS: 0 */
  }
}

/**
 * Implements hook_strongarm_alter().
 */
function pub_media_galleries_override_strongarm_alter(&$data) {
  if (isset($data['node_options_media_gallery'])) {
    $data['node_options_media_gallery']->value['0'] = 'revision'; /* WAS: 'promote' */
    unset($data['node_options_media_gallery']->value['1']);
  }
  if (isset($data['node_submitted_media_gallery'])) {
    $data['node_submitted_media_gallery']->value = 0; /* WAS: 1 */
  }
}
