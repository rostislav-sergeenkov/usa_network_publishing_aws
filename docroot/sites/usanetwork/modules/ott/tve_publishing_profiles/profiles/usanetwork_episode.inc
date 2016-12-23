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
    'slug' => isset($episode->slug) ? $episode->slug : NULL,
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

  return $output;

  $wrapper = entity_metadata_wrapper('node', $episode);

  if (!empty($wrapper)) {
    $output['subhead'] = $wrapper->field_subhead->value();
    // The list of description fields.
    $fields = [
      'shortDescription' => 'field_description',
      'mediumDescription' => 'field_medium_description',
      'longDescription' => 'field_long_description',
      'contentRating' => 'field_rating',
      'episodeNumber' => ['field_episode_number', 'integer'],
      'episodeType' => 'field_episode_type',
      'secondaryEpisodeNumber' => ['field_secondary_episode_number', 'integer'],
      'datePublished' => ['field_original_airdate', 'integer'],
      'supplementaryAiring' => ['field_supplementary_airing', 'integer'],
      'productionNumber' => ['field_production_number', 'integer'],
      'promoKicker' => 'field_promotional_kicker',
      'promoTitle' => 'field_promotional_title',
      'promoDescription' => 'field_promotional_description',
    ];

    $rich_text_fields = [
      'longDescription',
    ];

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

    $media_items = $wrapper->field_media->value();
    foreach ($media_items as $index => $item) {
      if ('video/mpx' == $item['filemime']) {
        // Load TVE Video (ott_video) node related to MPX Video file.
        $ott_video = OttMediaItem::getItemByFile((object) $item)->getNode();
        if (!$ott_video) {
          watchdog('ott_publishing',
            'TVE Video node associated with MPX Video (fid=%fid) not found.',
            ['%fid' => $item['fid']],
            WATCHDOG_WARNING
          );
          continue;
        }

        $item['uuid'] = $ott_video->uuid;
        $item['type'] = 'video';
      }
      $output['media'][$index] = [
        'uuid' => isset($item['uuid']) ? $item['uuid'] : '',
        'itemType' => isset($item['type']) ? $item['type'] : '',
        'usage' => '',
      ];

      if (!empty($item['usage'])) {
        $term = taxonomy_term_load($item['usage']);
        $output['media'][$index]['usage'] = isset($term->name) ? $term->name : '';
      }
    }

    $tags = $wrapper->field_tags->value();
    foreach ($tags as $tag) {
      $output['tags'][] = $tag->uuid;
    }
    $categories = $wrapper->field_episode_categories->value();
    foreach ($categories as $category) {
      $output['categories'][] = $category->uuid;
    }
    $links = $wrapper->field_external_link->value();
    foreach ($links as $link) {
      $output['links'][] = [
        'text' => $link['title'],
        'href' => $link['url'],
      ];
    }
    $cast = $wrapper->field_cast_collection->value();
    $output['castCredit'] = !empty($cast->uuid) ? $cast->uuid : '';
    $associations = $wrapper->field_series_season_episode->value();
    $associations_uids = entity_get_uuid_by_id('node', array_values($associations));

    if (!empty($associations['show']) && isset($associations_uids[$associations['show']])) {
      $output['program']['programUuid'] = $associations_uids[$associations['show']];
    }
    if (!empty($associations['season']) && isset($associations_uids[$associations['season']])) {
      $output['program']['seasonUuid'] = $associations_uids[$associations['season']];
    }
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
    'itemType' => 'episode',
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
  $a = 1;
  //$image_status = tve_media_gallery_image_publishing($episode, 'node', $instance);
  //$cast_credit_status = tve_cast_credit_publishing_response_callback($episode, $profile, $instance);

  //return is_null($cast_credit_status) ? NULL : ($image_status == TRUE && $cast_credit_status == TRUE);
  return TRUE;
}
