<?php

/**
 * @file
 * OTT Publishing related functionality.
 */

/**
 * OTT Publishing process callback.
 *
 * @param object $episode
 *   Episode object.
 * @param array $profile
 *   Array of profile params.
 * @param object $instance
 *   Object of instance.
 *
 * @return array
 *   Array of output data.
 */
function tv_episode_publishing_process_callback($episode, $profile, $instance) {
  $output = [
    'uuid' => $episode->uuid,
    'itemType' => 'episode',
    'revision' => (int) $episode->vid,
    'slug' => drupal_get_path_alias('node/' . $episode->nid),
    'title' => $episode->title,
    'subhead' => '',
    'shortDescription' => '',
    'mediumDescription' => '',
    'longDescription' => '',
    'media' => [],
    'categories' => [],
    'tags' => [],
    'published' => (boolean) $episode->status,
    'links' => [],
    'contentRating' => '',
    'episodeNumber' => '',
    'episodeType' => '',
    'datePublished' => '',
    'secondaryEpisodeNumber' => '',
    'supplementaryAiring' => '',
    'productionNumber' => '',
    'program' => [
      'programUuid' => '',
      'programItemType' => 'series',
      'seasonUuid' => '',
    ],
    'castCredit' => NULL,
    'promoKicker' => '',
    'promoTitle' => '',
    'promoDescription' => '',
  ];

  $wrapper = entity_metadata_wrapper('node', $episode);

  if (!empty($wrapper)) {
    $output['subhead'] = $wrapper->field_promo_topic->value();

    // The list of description fields.
    $fields = [
      'shortDescription' => 'field_short_synopsis',
      'mediumDescription' => 'field_promo_violator_name',
      'longDescription' => 'body',
      'episodeNumber' => ['field_episode_number', 'integer'],
      'episodeType' => 'field_tv_episode_type',
      'datePublished' => ['field_original_air_date', 'integer'],
      'promoKicker' => 'field_promo_call_to_action_text',
      'promoTitle' => 'field_promo_title',
      'promoDescription' => 'field_promo_long_description',
    ];

    $rich_text_fields = [
      'longDescription',
    ];

    // Fields values
    foreach ($fields as $key => $value) {
      $field = is_array($value) ? $value[0] : $value;
      $type = is_array($value) ? $value[1] : 'string';

      if (!empty($wrapper->$field->value())) {
        if (in_array($key, $rich_text_fields)) {
          // Process rich text fields.
          $value = $wrapper->$field->value();
          $output[$key] = ott_media_process_media_wysiwyg_text($value['value']);
          continue;
        }
        $output[$key] = $wrapper->$field->value();
        settype($output[$key], $type);
      }
    }

    // List of fields with media items.
    $media_fields = tv_episode_publishing_get_image_fields();
    foreach ($media_fields as $field => $usage) {
      $item = $wrapper->{$field}->value();
      $output['media'][] = [
        'uuid' => isset($item['uuid']) ? $item['uuid'] : '',
        'itemType' => isset($item['type']) ? $item['type'] : '',
        'usage' => $usage,
      ];
    }

    // Tags.
    $tags = $wrapper->field_content_tags->value();
    foreach ($tags as $tag) {
      $output['tags'][] = $tag->uuid;
    }

    // Show.
    $show = $wrapper->field_show->value();
    if ($show) {
      $output['program']['programUuid'] = $show->uuid;
    }

    // Season.
    $season = $wrapper->field_show->value();
    if ($season) {
      $output['program']['seasonUuid'] = $season->uuid;
    }

    // Links.
    $output['links'][] = [
      'text' => 'IMDB url',
      'href' => $wrapper->field_imdb_url->value(),
    ];
  }

  return $output;
}

/**
 * OTT Publishing delete callback.
 *
 * @param object $episode
 *   Episode object.
 * @param array $profile
 *   Array of profile params.
 * @param object $instance
 *   Object of instance.
 *
 * @return array
 *   Array of output data.
 */
function tv_episode_publishing_delete_callback($episode, $profile, $instance) {
  return [
    'uuid' => $episode->uuid,
    'itemType' => tve_publishing_profiles_get_item_type($episode->type),
  ];
}

/**
 * OTT Publishing match callback.
 *
 * @param object $item
 *
 * @return bool
 */
function tv_episode_publishing_match_callback($item) {
  return 'tv_episode' == $item->type;
}

/**
 * TVE Episode response callback.
 *
 * @param $episode
 * @param $profile
 * @param $instance
 *
 * @return bool
 */
function tv_episode_publishing_response_callback($episode, $profile, $instance) {
  $status = TRUE;
  $episode = entity_metadata_wrapper('node', $episode);
  foreach (tv_episode_publishing_get_image_fields() as $field => $usage) {
    if (!ott_media_publish_image($episode->{$field}->value())) {
      $status = FALSE;
    }
  }
  return $status;
}

/**
 * Get image fields array.
 *
 * @return array
 *   Image fields names.
 */
function tv_episode_publishing_get_image_fields() {
  return [
    'field_tv_cover_media' => 'Cover',
    'field_usa_og_image' => 'OG',
    'field_promo_image_override' => 'Promo Override',
    'field_usa_ms_episode_thumb' => 'Episode thumb',
  ];
}
