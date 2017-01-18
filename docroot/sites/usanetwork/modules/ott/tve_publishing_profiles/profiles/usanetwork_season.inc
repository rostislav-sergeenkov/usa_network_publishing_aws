<?php

/**
 * @file
 * Includes season publishing profile callbacks.
 */

/**
 * OTT Publishing match callback.
 *
 * @param object $item
 *
 * @return bool
 */
function tv_season_publishing_match_callback($item) {
  return 'tv_season' == $item->type;
}

/**
 * OTT Publishing process callback.
 *
 * @param object $season
 *   Season object.
 * @param array $profile
 *   Array of profile params.
 * @param object $instance
 *   Object of instance.
 *
 * @return array
 *   Array of output data.
 */
function tv_season_publishing_process_callback($season, $profile, $instance) {
  $output = [
    'uuid' => $season->uuid,
    'itemType' => 'season',
    'revision' => (int) $season->vid,
    'title' => $season->title,
    'slug'  => drupal_get_path_alias('node/' . $season->nid),
    'subhead'  => '',
    'shortDescription'  => '',
    'mediumDescription' => '',
    'longDescription'   => '',
    'media' => [],
    'categories' => [],
    'tags' => [],
    'published' => (bool) $season->status,
    'links' => [],
    'productionNumber' => '',
    'seasonNumber' => '',
    'seasonStartDate' => '',
    'seasonEndDate' => '',
    'program' => [
      'programUuid' => NULL,
      'programItemType' => 'series',
    ],
    'castCredit' => NULL,
    'promoKicker' => '',
    'promoTitle' => '',
    'promoDescription' => '',
  ];

  $wrapper = entity_metadata_wrapper('node', $season);
  if (!empty($wrapper)) {
    // The list of description fields.
    $fields = [
      'seasonNumber' => ['field_season_id', 'integer'],
      'longDescription' => 'body',
    ];

    // Fill out the output array.
    foreach ($fields as $key => $value) {
      $field = is_array($value) ? $value[0] : $value;
      $type  = is_array($value) ? $value[1] : 'string';

      if (!empty($wrapper->$field->value())) {
        $field_value = $wrapper->$field->value();
        $output_value  = !empty($field_value['summary']) ? $field_value['summary'] : '';
        $output_value .= !empty($field_value['value']) ? ' ' . $field_value['value'] : '';
        $output[$key]  = !empty($output_value) ? strip_tags($output_value) : $field_value;
        settype($output[$key], $type);
      }
    }

    // Fill out image array.
    foreach (tv_season_publishing_get_image_fields() as $field => $usage) {
      $media = $wrapper->{$field}->value();
      if ($media) {
        $output['media'][0] = [
          'uuid' => isset($media['uuid']) ? $media['uuid'] : '',
          'itemType' => isset($media['type']) ? $media['type'] : '',
          'usage' => $usage,
        ];
      }
    }

    $season_date = $wrapper->field_original_air_date->value();
    if (!empty($season_date)) {
      $output['seasonStartDate'] = $season_date['value'];
      $output['seasonEndDate']   = $season_date['value2'];
    }

    $field_show = $wrapper->field_show->value();
    if (!is_null($field_show)) {
      $output['program'] = [
        'programUuid' => isset($field_show->uuid) ? $field_show->uuid : NULL,
        'programItemType' => tve_publishing_profiles_get_item_type($field_show->type),
      ];
    }
  }

  return $output;
}

/**
 * OTT Publishing delete callback.
 *
 * @param object $season
 *   Season object.
 * @param array $profile
 *   Array of profile params.
 * @param object $instance
 *   Object of instance.
 *
 * @return array
 *   Array of output data.
 */
function tv_season_publishing_delete_callback($season, $profile, $instance) {
  return [
    'uuid' => $season->uuid,
    'itemType' => tve_publishing_profiles_get_item_type($season->type),
  ];
}

/**
 * Get image fields array.
 *
 * @return array
 *   Image fields names.
 */
function tv_season_publishing_get_image_fields() {
  return [
    'field_tv_cover_media' => 'Cover',
  ];
}

/**
 * OTT Publishing response callback.
 *
 * @param object $season
 *   Season object object.
 * @param object $profile
 *   Object of publishing profile.
 * @param object $instance
 *   Object of instance.
 *
 * @return array
 *   Array of output data.
 */
function tv_season_publishing_response_callback($season, $profile, $instance) {
  $status = TRUE;

  // Publish images.
  $season_wrapper = entity_metadata_wrapper('node', $season);
  foreach (tv_season_publishing_get_image_fields() as $field => $usage) {
    if (!ott_media_publish_image($season_wrapper->{$field}->value())) {
      $status = FALSE;
    }
  }

  return $status;
}
