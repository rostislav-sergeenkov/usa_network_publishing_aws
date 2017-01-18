<?php

/**
 * @file
 * OTT Publishing related functionality.
 */

/**
 * OTT Publishing match callback.
 *
 * @param object $item
 *
 * @return bool
 */
function tv_series_publishing_match_callback($item) {
  return 'tv_show' == $item->type;
}

/**
 * OTT Publishing process callback.
 *
 * @param object $series
 *   Series object.
 * @param array $profile
 *   Array of profile params.
 * @param object $instance
 *   Object of instance.
 *
 * @return array
 *   Array of output data.
 */
function tv_series_publishing_process_callback($series, $profile, $instance) {
  $output = [
    'uuid' => $series->uuid,
    'itemType' => 'series',
    'revision' => (int) $series->vid,
    'title' => $series->title,
    'sortTitle' => OttPublishingSortTitle::convertToSortTitle($series->title),
    'slug' => '',
    'subhead' => '',
    'shortDescription' => '',
    'mediumDescription' => '',
    'longDescription' => '',
    'media' => [],
    'categories' => [],
    'tags' => [],
    'published' => (bool) $series->status,
    'links' => [],
    'genre' => [],
    'contentRating' => '',
    'unscripted' => '',
    'syndicated' => '',
    'seriesType' => '',
    'relatedSeries' => [],
    'seriesEpisodeLength' => NULL,
    'daypart' => '',
    'programStatus' => '',
    'currentSeason' => NULL,
    'collection' => '',
    'promoKicker' => '',
    'promoTitle' => '',
    'promoDescription' => '',
  ];

  $wrapper = entity_metadata_wrapper('node', $series);

  if (!empty($wrapper)) {
    // Program status.
    $output['programStatus'] = $wrapper->field_current_show->value() ? 'Current' : '';

    // Show color.
    if (!empty($series->field_usa_tv_show_color)) {
      $output['showColor'] = $series->field_usa_tv_show_color[LANGUAGE_NONE][0]['rgb'];
    }

    // The list of description fields.
    $fields = [
      'longDescription' => 'body',
      'slug' => 'field_pathauto_alias',
      'title' => 'field_display_title',
      'subhead' => 'field_usa_tv_tune_in_date',
      'syndicated' => 'field_syndicated',
    ];

    $rich_text_fields = [
      'longDescription',
    ];

    // Fields values.
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
    $media_fields = tv_show_publishing_get_image_fields();
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

    // mpxMetadata.
    $field_value = $wrapper->field_series_id->value();
    if (!empty($field_value)) {
      $output['mpxMetadata'] = (object) [
        'tmsId' => $field_value,
      ];
    }

    // Genres.
    $genre_value = $wrapper->field_primary_genre->value();
    if (!empty($genre_value)) {
      $output['genre'][] = $genre_value->name;
    }
    foreach ($wrapper->field_additional_genres->value() as $genre_value) {
      $output['genre'][] = $genre_value->name;
    }

    // Show links.
    $links = $wrapper->field_show_links->value();
    $sub_link_fields = [
      'field_main_link',
      'field_child_link',
    ];
    foreach ($links as $link) {
      $link = entity_metadata_wrapper('field_collection_item', $link);
      foreach ($sub_link_fields as $field_name) {
        $field_value = $link->{$field_name}->value();
        if (!empty($field_value)) {
          $output['links'][] = [
            'text' => isset($field_value['title']) ? $field_value['title'] : '',
            'href' => isset($field_value['url']) ? $field_value['url'] : '',
          ];
        }
      }
    }

    // Advanced links.
    $advanced_links_fields = [
      'field_tv_external_links',
      'field_where2watch_providers',
    ];
    foreach ($advanced_links_fields as $field) {
      $links = $wrapper->{$field}->value();
      foreach ($links as $link) {
        $output['links'][] = [
          'text' => $link['title'],
          'href' => $link['url'],
        ];
      }
    }

    $collections_uuids = &tv_show_publishing_collections_uuids();

    // USA Network dynamic entity collection.
    $dynamic_collections_fields = tv_show_publishing_get_dynamic_collections_fields();
    foreach ($dynamic_collections_fields as $field) {
      $content_ids = $wrapper->{$field}->value();
      if (!empty($content_ids)) {
        $collections_uuids[$field] = uuid_generate();
      }
    }

    // Collection fields.
    $collections_fields = tv_show_publishing_get_collections_fields();
    foreach ($collections_fields as $field) {
      $collections_uuids[$field] = uuid_generate();
    }

    $output['collection'] = implode(', ', $collections_uuids);

    // Related show.
    $related_shows = $wrapper->field_usa_tv_related_shows->value();
    foreach ($related_shows as $show) {
      $output['relatedSeries'][] = $show->uuid;
    }

    // Links.
    $links_fields = [
      'field_usa_link_tumblr' => 'Tumblr',
      'field_usa_link_facebook' => 'Facebook',
      'field_usa_link_twitter' => 'Twitter',
      'field_usa_link_instagram' => 'Instagram',
      'field_usa_link_pinterest' => 'Pinterest',
      'field_usa_link_youtube' => 'Youtube',
      'field_usa_link_googleplus' => 'Google+',
      'field_imdb_url' => 'IMDB Url',
      'field_promo_url' => 'Promo Url',
      'field_best_of_section_link' => 'Link',
      'field_articles_view_more_link' => 'View more',
    ];
    foreach ($links_fields as $link_field => $link_title) {
      $output['links'][] = [
        'text' => 'IMDB url',
        'href' => $wrapper->{$link_field}->value(),
      ];
    }
  }

  return $output;
}

/**
 * OTT Publishing delete callback.
 *
 * @param object $series
 *   Series object.
 * @param array $profile
 *   Array of profile params.
 * @param object $instance
 *   Object of instance.
 *
 * @return array
 *   Array of output data.
 */
function tv_series_publishing_delete_callback($series, $profile, $instance) {
  return [
    'uuid' => $series->uuid,
    'itemType' => tve_publishing_profiles_get_item_type($series->type),
  ];
}

/**
 * TVE Series response callback.
 *
 * @param $series
 * @param $profile
 * @param $instance
 *
 * @return bool
 */
function tv_series_ott_publishing_response_callback($series, $profile, $instance) {
  $status = TRUE;

  // Publish images.
  $episode = entity_metadata_wrapper('node', $series);
  foreach (tv_show_publishing_get_image_fields() as $field => $usage) {
    if (!ott_media_publish_image($episode->{$field}->value())) {
      $status = FALSE;
    }
  }

  // Publish collections.
  if (!tv_show_publishing_publish_collections($series, $instance)) {
    $status = FALSE;
  }

  return $status;
}

/**
 * Get image fields array.
 *
 * @return array
 *   Image fields names.
 */
function tv_show_publishing_get_image_fields() {
  return [
    'field_logo' => 'Logo',
    'field_tv_cover_media' => 'Cover',
    'field_banner' => 'Banner',
    'field_social_logo' => 'Social logo',
    'field_usa_og_image' => 'OG',
    'field_tvs_desktop_cimage' => 'Carousel',
    'field_cast_head_image' => 'Head',
    'field_cast_head_mob_image' => 'Head Mobile',
    'field_cast_second_image' => 'Second',
    'field_promo_regular_image' => 'Promo',
    'field_main_logo' => 'Main logo',
    'field_service_logo' => 'Service',
  ];
}

/**
 * Generic method to store static uuids for collections publishing.
 *
 * @return mixed
 */
function &tv_show_publishing_collections_uuids() {
  static $uuids;
  return $uuids;
}

/**
 * Publish collections.
 *
 * @param $series
 * @param $instance
 *
 * @return bool
 */
function tv_show_publishing_publish_collections($series, $instance) {
  $wrapper = entity_metadata_wrapper('node', $series);
  $collections_uuids = tv_show_publishing_collections_uuids();
  $status = TRUE;

  // Collection fields.
  foreach ($collections_uuids as $field => $uuid) {
    $collection = [
      'title' => $series->title . ' collection',
      'items' => [],
      'uuid' => $uuid,
    ];
    $collection_items = $wrapper->{$field}->value();
    foreach ($collection_items as $item) {
      if (!is_object($item)) {
        $item = node_load($item);
      }
      if (is_object($item)) {
        $collection['items'][] = $item;
      }
    }

    // Make an object for publishing purposes.
    $collection = new TvCollection($collection);

    if (!tv_show_publishing_publish_collection($collection, $instance)) {
      $status = FALSE;
    }
  }

  return $status;
}

/**
 * Publish collection.
 *
 * @param array $collection
 * @param object $instance
 *
 * @return bool
 */
function tv_show_publishing_publish_collection($collection, $instance) {
  $profile = OttPublishingProfile::getProfileById("collection");
  if (!$profile) {
    watchdog(
      OTT_PUBLISHING_WATCHDOG,
      'Could not load !profile publishing profile.',
      array('!profile' => "collection"),
      WATCHDOG_ERROR
    );

    return FALSE;
  }

  // Publish collection.
  $publishing_status = ott_publishing_publish_item($collection, $profile, $instance);
  if (!$publishing_status) {
    return FALSE;
  }

  return TRUE;
}

/**
 * Get USA Network Dynamic collections fields names.
 *
 * @return array
 *   fields names
 */
function tv_show_publishing_get_dynamic_collections_fields() {
  return [
    'field_alternative_content',
    'field_show_vlmb_promo',
    'field_show_plmb_promo',
    'field_bcd_spot',
    'field_show_explore_promo',
    'field_best_of_items',
    'field_episodes_manual_elements',
    'field_articles',
    'field_tvs_spec_features',
  ];
}

/**
 * Get collections fields names.
 *
 * @return array
 *   fields names
 */
function tv_show_publishing_get_collections_fields() {
  return [
    'field_show_explore_promo',
    'field_tvs_best_of',
    'field_usa_tv_promo',
    'field_usa_tv_promo_vids',
  ];
}
