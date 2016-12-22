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
  $tag->machinename = '220x60_sponsor_logo';
  $tag->name = '220x50 sponsor logo';
  $tag->pos = '3';
  $tag->sz = '220x50';
  $tag->block = 1;
  $tag->settings = 'a:3:{s:9:"overrides";a:3:{s:4:"site";s:0:"";s:4:"zone";s:0:"";s:4:"slug";s:0:"";}s:7:"options";a:2:{s:10:"scriptless";i:0;s:6:"method";s:3:"adi";}s:8:"key_vals";a:0:{}}';
  $export['220x60_sponsor_logo'] = $tag;

  $tag = new stdClass();
  $tag->disabled = FALSE; /* Edit this to true to make a default tag disabled initially */
  $tag->api_version = 1;
  $tag->machinename = '300x250_ifr_reload';
  $tag->name = '300x250 iframe reloadable';
  $tag->pos = '7';
  $tag->sz = '300x250';
  $tag->block = 1;
  $tag->settings = 'a:3:{s:9:"overrides";a:3:{s:4:"site";s:0:"";s:4:"zone";s:0:"";s:4:"slug";s:0:"";}s:7:"options";a:2:{s:10:"scriptless";i:0;s:6:"method";s:3:"adi";}s:8:"key_vals";a:0:{}}';
  $export['300x250_ifr_reload'] = $tag;

  $tag = new stdClass();
  $tag->disabled = FALSE; /* Edit this to true to make a default tag disabled initially */
  $tag->api_version = 1;
  $tag->machinename = '300x250_scr';
  $tag->name = '300x250 script';
  $tag->pos = '7';
  $tag->sz = '300x250';
  $tag->block = 1;
  $tag->settings = 'a:3:{s:9:"overrides";a:3:{s:4:"site";s:0:"";s:4:"zone";s:0:"";s:4:"slug";s:0:"";}s:7:"options";a:2:{s:10:"scriptless";i:0;s:6:"method";s:3:"adj";}s:8:"key_vals";a:0:{}}';
  $export['300x250_scr'] = $tag;

  $tag = new stdClass();
  $tag->disabled = FALSE; /* Edit this to true to make a default tag disabled initially */
  $tag->api_version = 1;
  $tag->machinename = '300x250_scr_vid_short';
  $tag->name = '300x250 script video shortform';
  $tag->pos = '7';
  $tag->sz = '300x250';
  $tag->block = 1;
  $tag->settings = 'a:3:{s:9:"overrides";a:3:{s:4:"site";s:0:"";s:4:"zone";s:0:"";s:4:"slug";s:0:"";}s:7:"options";a:2:{s:10:"scriptless";i:0;s:6:"method";s:3:"adj";}s:8:"key_vals";a:0:{}}';
  $export['300x250_scr_vid_short'] = $tag;

  $tag = new stdClass();
  $tag->disabled = FALSE; /* Edit this to true to make a default tag disabled initially */
  $tag->api_version = 1;
  $tag->machinename = '728x90_970x66_ifr_rel';
  $tag->name = '728x90,970x66 iframe reloadable';
  $tag->pos = '1';
  $tag->sz = '728x90,970x66';
  $tag->block = 1;
  $tag->settings = 'a:3:{s:9:"overrides";a:3:{s:4:"site";s:0:"";s:4:"zone";s:0:"";s:4:"slug";s:0:"";}s:7:"options";a:2:{s:10:"scriptless";i:0;s:6:"method";s:3:"adi";}s:8:"key_vals";a:1:{i:0;a:3:{s:3:"key";s:5:"dcopt";s:3:"val";s:3:"ist";s:4:"eval";i:0;}}}';
  $export['728x90_970x66_ifr_rel'] = $tag;

  $tag = new stdClass();
  $tag->disabled = FALSE; /* Edit this to true to make a default tag disabled initially */
  $tag->api_version = 1;
  $tag->machinename = '728x90_970x66_scr';
  $tag->name = '728x90,970x66 script';
  $tag->pos = '1';
  $tag->sz = '728x90,970x66';
  $tag->block = 1;
  $tag->settings = 'a:3:{s:9:"overrides";a:3:{s:4:"site";s:0:"";s:4:"zone";s:0:"";s:4:"slug";s:0:"";}s:7:"options";a:2:{s:10:"scriptless";i:0;s:6:"method";s:3:"adj";}s:8:"key_vals";a:1:{i:0;a:3:{s:3:"key";s:5:"dcopt";s:3:"val";s:3:"ist";s:4:"eval";i:0;}}}';
  $export['728x90_970x66_scr'] = $tag;

  $tag = new stdClass();
  $tag->disabled = FALSE; /* Edit this to true to make a default tag disabled initially */
  $tag->api_version = 1;
  $tag->machinename = '728x90_ifr_reload';
  $tag->name = '728x90 iframe reloadable';
  $tag->pos = '1';
  $tag->sz = '728x90';
  $tag->block = 1;
  $tag->settings = 'a:3:{s:9:"overrides";a:3:{s:4:"site";s:0:"";s:4:"zone";s:0:"";s:4:"slug";s:0:"";}s:7:"options";a:2:{s:10:"scriptless";i:0;s:6:"method";s:3:"adi";}s:8:"key_vals";a:1:{i:0;a:3:{s:3:"key";s:5:"dcopt";s:3:"val";s:3:"ist";s:4:"eval";i:0;}}}';
  $export['728x90_ifr_reload'] = $tag;

  $tag = new stdClass();
  $tag->disabled = FALSE; /* Edit this to true to make a default tag disabled initially */
  $tag->api_version = 1;
  $tag->machinename = '728x90_scr_vid';
  $tag->name = '728x90 script video';
  $tag->pos = '1';
  $tag->sz = '728x90';
  $tag->block = 1;
  $tag->settings = 'a:3:{s:9:"overrides";a:3:{s:4:"site";s:0:"";s:4:"zone";s:0:"";s:4:"slug";s:0:"";}s:7:"options";a:2:{s:10:"scriptless";i:0;s:6:"method";s:3:"adj";}s:8:"key_vals";a:1:{i:0;a:3:{s:3:"key";s:5:"dcopt";s:3:"val";s:3:"ist";s:4:"eval";i:0;}}}';
  $export['728x90_scr_vid'] = $tag;

  return $export;
}
