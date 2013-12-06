<?php
/**
 * @file
 * usanetwork_og_metatags.features.features_overrides.inc
 */

/**
 * Implements hook_features_override_default_overrides().
 */
function usanetwork_og_metatags_features_override_default_overrides() {
  // This code is only used for UI in features. Exported alters hooks do the magic.
  $overrides = array();

  // Exported overrides for: metatag
  $overrides["metatag.node:media_gallery.config|og:description"] = array(
    'value' => '[node:title] Photos | [node:summary]',
  );
  $overrides["metatag.node:media_gallery.config|og:title"] = array(
    'value' => '[node:field-show:title] | [node:title]',
  );
  $overrides["metatag.node:person.config|og:title"] = array(
    'value' => '[node:field-show:title] | [node:field_person_first_name] [node:field_person_last_name]',
  );
  $overrides["metatag.node:tv_episode.config|og:image|value"] = '[node:field_tv_cover_media]';
  $overrides["metatag.node:tv_episode.config|og:title"] = array(
    'value' => '[node:field-show:title] | [node:title]',
  );
  $overrides["metatag.node:tv_season.config|og:description"] = array(
    'value' => '[node:field-show:title] | [node:title]',
  );
  $overrides["metatag.node:tv_season.config|og:title"] = array(
    'value' => '[node:field-show:title] | [node:title]',
  );
  $overrides["metatag.node:tv_show.config|og:description"]["DELETED"] = TRUE;
  $overrides["metatag.node:tv_show.config|og:image|value"] = '[node:field_logo]';
  $overrides["metatag.node:usa_tve_video.config|og:description"] = array(
    'value' => '[node:title] | [node:summary]',
  );
  $overrides["metatag.node:usa_tve_video.config|og:title"] = array(
    'value' => '[node:field-show:title] | [node:title]',
  );
  $overrides["metatag.node:usa_video.config|og:description"] = array(
    'value' => '[node:title] | [node:summary]',
  );
  $overrides["metatag.node:usa_video.config|og:title"] = array(
    'value' => '[node:field-show:title] | [node:title]',
  );

 return $overrides;
}
