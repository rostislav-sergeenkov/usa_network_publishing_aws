<?php
/**
 * @file
 * usanetwork_og_metatags.features.inc
 */

/**
 * Implements hook_metatag_export_default_alter().
 */
function usanetwork_og_metatags_metatag_export_default_alter(&$data) {
  if (isset($data['node:media_gallery'])) {
    $data['node:media_gallery']['config']['og:description'] = array(
      'value' => '[node:title] Photos | [node:summary]',
    ); /* WAS: '' */
    $data['node:media_gallery']['config']['og:title'] = array(
      'value' => '[node:field-show:title] | [node:title]',
    ); /* WAS: '' */
  }
  if (isset($data['node:person'])) {
    $data['node:person']['config']['og:title'] = array(
      'value' => '[node:field-show:title] | [node:field_person_first_name] [node:field_person_last_name]',
    ); /* WAS: '' */
  }
  if (isset($data['node:tv_episode'])) {
    $data['node:tv_episode']['config']['og:image']['value'] = '[node:field_tv_cover_media]'; /* WAS: '[node:field_usa_og_image]' */
    $data['node:tv_episode']['config']['og:title'] = array(
      'value' => '[node:field-show:title] | [node:title]',
    ); /* WAS: '' */
  }
  if (isset($data['node:tv_season'])) {
    $data['node:tv_season']['config']['og:description'] = array(
      'value' => '[node:field-show:title] | [node:title]',
    ); /* WAS: '' */
    $data['node:tv_season']['config']['og:title'] = array(
      'value' => '[node:field-show:title] | [node:title]',
    ); /* WAS: '' */
  }
  if (isset($data['node:tv_show'])) {
    $data['node:tv_show']['config']['og:image']['value'] = '[node:field_logo]'; /* WAS: '[node:field_usa_og_image]' */
    unset($data['node:tv_show']['config']['og:description']);
  }
  if (isset($data['node:usa_tve_video'])) {
    $data['node:usa_tve_video']['config']['og:description'] = array(
      'value' => '[node:title] | [node:summary]',
    ); /* WAS: '' */
    $data['node:usa_tve_video']['config']['og:title'] = array(
      'value' => '[node:field-show:title] | [node:title]',
    ); /* WAS: '' */
  }
  if (isset($data['node:usa_video'])) {
    $data['node:usa_video']['config']['og:description'] = array(
      'value' => '[node:title] | [node:summary]',
    ); /* WAS: '' */
    $data['node:usa_video']['config']['og:title'] = array(
      'value' => '[node:field-show:title] | [node:title]',
    ); /* WAS: '' */
  }
}
