<?php

/**
 * @param $entity_type - type of entity.
 * @param $entity - entity object or entity id.
 * @param $image_type - the type of image (in 95% cases you need 'main').
 * @param $limit - the number of values that should be returned from field (let it = 1 if you need a single value).
 * @param $return_uri - the boolean value. It returns file object if it false and returns image uri if it true.
 */
function usanetwork_core_api_get_content_image($entity_type, $entity, $image_type = 'main', $limit = 1, $return_uri = TRUE) {

  if (empty($entity_type) || empty($entity)) {
    return NULL;
  }

  if (!is_object($entity)) {
    $entity_id = $entity;

    $entity = entity_load($entity_type, array($entity));

    if (isset($entity[$entity_id])) {
      $entity = $entity[$entity_id];
    }
  }

  if ($entity_type == 'file') {
    $file_stream_wrapper = file_stream_wrapper_get_instance_by_uri($entity->uri);

    if ($file_stream_wrapper) {
      // The image type for this entity type is always default, the limit is always 1 and return URI only is always true too.
      return @$file_stream_wrapper->getLocalThumbnailPath();
    }
  }
  else {
    $entity_field_aliases_callback = '_usanetwork_core_api_get_' . $entity_type . '_image_field_names';

    if (is_callable($entity_field_aliases_callback)) {
      $entity_field_names = $entity_field_aliases_callback();

      if (empty($entity_field_names)) {
        return NULL;
      }

      $field_name = NULL;

      if (isset($entity_field_names[$entity->type])) {
        if (isset($entity_field_names[$entity->type][$image_type])) {
          $field_name = $entity_field_names[$entity->type][$image_type];
        }
        elseif (isset($entity_field_names[$entity->type]['main'])) {
          $field_name = $entity_field_names[$entity->type]['main'];
        }
        else {
          return NULL;
        }
      }
      else {
        return NULL;
      }

      $entity_field_data = field_get_items($entity_type, $entity, $field_name);

      if (!empty($entity_field_data)) {
        if ($limit == 1) {
          $file_object = reset($entity_field_data);

          if ($return_uri) {
            return (isset($file_object['uri']))
              ? $file_object['uri']
              : NULL;
          }
          else {
            return $file_object;
          }
        }
        else {
          $entity_field_multiple_data = array();

          if ($limit > count($entity_field_data)) {
            $limit = count($entity_field_data);
          }

          foreach ($entity_field_data as $entity_field_data_item) {
            if ($limit > 0) {
              $entity_field_multiple_data[] = ($return_uri)
                ? (
                  isset($entity_field_data_item['uri'])
                    ? $entity_field_data_item['uri']
                    : NULL
                )
                : $entity_field_data_item;

              $limit--;
            }
          }

          return $entity_field_multiple_data;
        }
      }
    }
  }

  return NULL;
}

function usanetwork_core_api_get_media_icon($entity_type, $entity_id) {
  $entity = entity_load($entity_type, array($entity_id));

  if (is_array($entity)) {
    $entity = $entity[$entity_id];
  }

  switch ($entity->type) {
    case 'media_gallery': return 'gallery-icon';
  }

  if (isset($entity->field_call_to_action_type)) {
    $cta_type_field = field_get_items($entity_type, $entity, 'field_call_to_action_type');
    $tid = !empty($cta_type_field[0]['tid']) ? $cta_type_field[0]['tid'] : NULL;

    if (!empty($tid)) {
      $icon = taxonomy_term_load($tid);

      return $icon->name . '-icon';
    }
  }

  return 'video-icon';
}

/**
 * Returns an associated array of image field names of nodes.
 */
function _usanetwork_core_api_get_node_image_field_names() {
  return array(
    // A-Spot
    'usanetwork_aspot' => array(
      'main' => 'field_usa_aspot_desktop',
      'desktop' => 'field_usa_aspot_desktop',
      'mobile' => 'field_usa_aspot_mobile',
      'tablet' => 'field_usa_aspot_tablet_portrait',
      'textline_image' => 'field_text_line_1_image',
    ),
    // Catchall
    'catchall_page' => array(
      'main' => 'field_usa_catchall_media',
      'files' => 'field_usa_catchall_media',
      'og_image' => 'field_usa_og_image',
    ),
    // Global nav image
    'global_nav_image' => array(
      'main' => 'field_gobal_nav_image',
      'global_nav' => 'field_gobal_nav_image',
    ),
    // Media gallery
    'media_gallery' => array(
      'main' => 'field_cover_item',
      'cover' => 'field_cover_item',
      'media_items' => 'field_media_items',
      'og_image' => 'field_usa_og_image',
    ),
    // Person
    'person' => array(
      'main' => 'field_person_cover_photo',
      'cover' => 'field_person_cover_photo',
      'thumbnail' => 'field_usa_character_thumb',
      'og_image' => 'field_usa_og_image',
    ),
    // Post
    'post' => array(
      'main' => 'field_post_cover',
      'cover' => 'field_post_cover',
    ),
    // Promo
    'usanetwork_promo' => array(
      'main' => 'field_promo_regular_image',
      'regular' => 'field_promo_regular_image',
      'wide' => 'field_promo_wide_image',
    ),
    // Quiz
    'quiz' => array(
      'main' => 'field_quiz_splash_image',
      'splash' => 'field_quiz_splash_image',
      'header' => 'field_quiz_header_image',
      'og_image' => 'field_usa_og_image',
    ),
    // Snipe
    'snipe' => array(
      'main' => 'field_usa_support_files',
      'support_files' => 'field_usa_support_files',
    ),
    // Static page
    'usanetwork_static_page' => array(
      'main' => 'field_usa_og_image',
      'og_image' => 'field_usa_og_image',
    ),
    // TV Episode
    'tv_episode' => array(
      'main' => 'field_tv_cover_media',
      'cover' => 'field_tv_cover_media',
      'og_image' => 'field_usa_og_image',
    ),
    // TV Season
    'tv_season' => array(
      'main' => 'field_tv_cover_media',
      'cover' => 'field_tv_cover_media',
    ),
    //TV Show
    'tv_show' => array(
      'main' => 'field_logo',
      'cover' => 'field_tv_cover_media',
      'logo' => 'field_logo',
      'banner' => 'field_banner',
      'on_now' => 'field_usa_tv_on_now',
      'og_image' => 'field_usa_og_image',
      'desktop_carousel' => 'field_tvs_desktop_cimage',
      'mobile_carousel' => 'field_tvs_mobile_cimage',
    ),
    // USA MPX Video
    'usa_video' => array(
      'main' => 'field_video_thumbnail',
      'thumbnail' => 'field_video_thumbnail',
    ),
    // USA TVE Video
    'usa_tve_video' => array(
      'main' => 'field_video_thumbnail',
      'thumbnail' => 'field_video_thumbnail',
    ),
  );
}
