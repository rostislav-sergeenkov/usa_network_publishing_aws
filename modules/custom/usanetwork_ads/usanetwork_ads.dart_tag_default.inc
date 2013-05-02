<?php
/**
 * @file
 * usanetwork_ads.dart_tag_default.inc
 */

/**
 * Implements hook_default_dart_tag().
 */
function usanetwork_ads_default_dart_tag() {
  $export = array();

  $tag = new stdClass();
  $tag->disabled = FALSE; /* Edit this to true to make a default tag disabled initially */
  $tag->api_version = 1;
  $tag->machinename = 'ad300x250';
  $tag->name = 'ad300x250';
  $tag->pos = 'test_showpages';
  $tag->sz = '300x250';
  $tag->block = 1;
  $tag->settings = 'a:3:{s:9:"overrides";a:3:{s:4:"site";s:0:"";s:4:"zone";s:0:"";s:4:"slug";s:0:"";}s:7:"options";a:2:{s:10:"scriptless";i:0;s:6:"method";s:3:"adj";}s:8:"key_vals";a:0:{}}';
  $export['ad300x250'] = $tag;

  $tag = new stdClass();
  $tag->disabled = FALSE; /* Edit this to true to make a default tag disabled initially */
  $tag->api_version = 1;
  $tag->machinename = 'ad300x250_iframe';
  $tag->name = 'ad300x250_iframe';
  $tag->pos = 'test_showpages';
  $tag->sz = '300x250';
  $tag->block = 1;
  $tag->settings = 'a:3:{s:9:"overrides";a:3:{s:4:"site";s:0:"";s:4:"zone";s:0:"";s:4:"slug";s:0:"";}s:7:"options";a:2:{s:10:"scriptless";i:0;s:6:"method";s:3:"adi";}s:8:"key_vals";a:0:{}}';
  $export['ad300x250_iframe'] = $tag;

  $tag = new stdClass();
  $tag->disabled = FALSE; /* Edit this to true to make a default tag disabled initially */
  $tag->api_version = 1;
  $tag->machinename = 'usa_ad_728x90';
  $tag->name = 'usa_ad_728x90';
  $tag->pos = 'head_top';
  $tag->sz = '728x90';
  $tag->block = 1;
  $tag->settings = 'a:3:{s:9:"overrides";a:3:{s:4:"site";s:0:"";s:4:"zone";s:0:"";s:4:"slug";s:0:"";}s:7:"options";a:2:{s:10:"scriptless";i:0;s:6:"method";s:3:"adj";}s:8:"key_vals";a:0:{}}';
  $export['usa_ad_728x90'] = $tag;

  return $export;
}
