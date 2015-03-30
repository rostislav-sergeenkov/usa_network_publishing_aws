<?php
/**
 * @file
 * usanetwork_linkit.linkit_profiles.inc
 */

/**
 * Implements hook_default_linkit_profiles().
 */
function usanetwork_linkit_default_linkit_profiles() {
  $export = array();

  $linkit_profile = new LinkitProfile();
  $linkit_profile->disabled = FALSE; /* Edit this to true to make a default linkit_profile disabled initially */
  $linkit_profile->api_version = 1;
  $linkit_profile->name = 'usanetwork_fields';
  $linkit_profile->admin_title = 'usanetwork_fields';
  $linkit_profile->admin_description = '';
  $linkit_profile->profile_type = '2';
  $linkit_profile->data = array(
    'search_plugins' => array(
      'entity:collection' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'entity:comment' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'entity:taxonomy_term' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'entity:field_collection_item' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'entity:file' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'entity:node' => array(
        'enabled' => 1,
        'weight' => '-10',
      ),
      'entity:user' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
    ),
    'entity:collection' => array(
      'result_description' => '',
    ),
    'entity:comment' => array(
      'result_description' => '',
      'bundles' => array(
        'comment_node_usanetwork_aspot' => 0,
        'comment_node_catchall_page' => 0,
        'comment_node_usa_homepage' => 0,
        'comment_node_media_gallery' => 0,
        'comment_node_movie' => 0,
        'comment_node_person' => 0,
        'comment_node_usanetwork_promo' => 0,
        'comment_node_quiz' => 0,
        'comment_node_usanetwork_static_page' => 0,
        'comment_node_tv_episode' => 0,
        'comment_node_tv_season' => 0,
        'comment_node_tv_show' => 0,
        'comment_node_webform' => 0,
      ),
      'group_by_bundle' => 0,
    ),
    'entity:field_collection_item' => array(
      'result_description' => '',
      'bundles' => array(
        'field_movie_credit' => 0,
        'field_episode_credit' => 0,
        'field_show_links' => 0,
      ),
      'group_by_bundle' => 0,
    ),
    'entity:node' => array(
      'result_description' => '',
      'bundles' => array(
        'catchall_page' => 'catchall_page',
        'media_gallery' => 'media_gallery',
        'movie' => 'movie',
        'person' => 'person',
        'quiz' => 'quiz',
        'usanetwork_static_page' => 'usanetwork_static_page',
        'tv_episode' => 'tv_episode',
        'tv_season' => 'tv_season',
        'tv_show' => 'tv_show',
        'webform' => 'webform',
        'usanetwork_aspot' => 0,
        'usa_homepage' => 0,
        'usanetwork_promo' => 0,
      ),
      'group_by_bundle' => 1,
      'include_unpublished' => 0,
    ),
    'entity:file' => array(
      'result_description' => '',
      'bundles' => array(
        'image' => 0,
        'video' => 0,
        'audio' => 0,
        'document' => 0,
      ),
      'group_by_bundle' => 0,
      'show_scheme' => 0,
      'group_by_scheme' => 0,
      'image_extra_info' => array(
        'thumbnail' => 'thumbnail',
        'dimensions' => 'dimensions',
      ),
    ),
    'entity:taxonomy_term' => array(
      'result_description' => '',
      'bundles' => array(
        'dart_ad_categories' => 0,
        'categories' => 0,
        'genre' => 0,
        'role' => 0,
        'tags' => 0,
        'media_categories' => 0,
        'media_tags' => 0,
        'movie_rating' => 0,
        'movie_types' => 0,
        'rating_attributes' => 0,
        'tv_episode_type' => 0,
        'tv_rating' => 0,
        'cta_type' => 0,
      ),
      'group_by_bundle' => 0,
    ),
    'entity:user' => array(
      'result_description' => '',
    ),
    'insert_plugin' => array(
      'plugin' => 'raw_url',
      'url_method' => '1',
    ),
    'attribute_plugins' => array(
      'rel' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'class' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'accesskey' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'id' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'title' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
    ),
    'autocomplete' => array(
      'charLimit' => '3',
      'wait' => '350',
      'remoteTimeout' => '10000',
    ),
  );
  $export['usanetwork_fields'] = $linkit_profile;

  $linkit_profile = new LinkitProfile();
  $linkit_profile->disabled = FALSE; /* Edit this to true to make a default linkit_profile disabled initially */
  $linkit_profile->api_version = 1;
  $linkit_profile->name = 'wysiwyg_link_it';
  $linkit_profile->admin_title = 'wysiwyg_link_it';
  $linkit_profile->admin_description = '';
  $linkit_profile->profile_type = '1';
  $linkit_profile->data = array(
    'text_formats' => array(
      'wysiwyg_basic' => 'wysiwyg_basic',
      'wysiwyg_mini' => 0,
      'wysiwyg_full_html' => 0,
      'plain_text' => 0,
      'ds_code' => 0,
    ),
    'search_plugins' => array(
      'entity:collection' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'entity:comment' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'entity:taxonomy_term' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'entity:field_collection_item' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'entity:file' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'entity:node' => array(
        'enabled' => 1,
        'weight' => '-10',
      ),
      'entity:user' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
    ),
    'entity:collection' => array(
      'result_description' => '',
    ),
    'entity:comment' => array(
      'result_description' => '',
      'bundles' => array(
        'comment_node_usanetwork_aspot' => 0,
        'comment_node_catchall_page' => 0,
        'comment_node_usa_homepage' => 0,
        'comment_node_media_gallery' => 0,
        'comment_node_movie' => 0,
        'comment_node_person' => 0,
        'comment_node_usanetwork_promo' => 0,
        'comment_node_usanetwork_static_page' => 0,
        'comment_node_tv_episode' => 0,
        'comment_node_tv_season' => 0,
        'comment_node_tv_show' => 0,
        'comment_node_usa_video' => 0,
        'comment_node_usa_tve_video' => 0,
        'comment_node_webform' => 0,
      ),
      'group_by_bundle' => 0,
    ),
    'entity:field_collection_item' => array(
      'result_description' => '',
      'bundles' => array(
        'field_movie_credit' => 0,
        'field_episode_credit' => 0,
        'field_show_links' => 0,
      ),
      'group_by_bundle' => 0,
    ),
    'entity:node' => array(
      'result_description' => '',
      'bundles' => array(
        'catchall_page' => 'catchall_page',
        'media_gallery' => 'media_gallery',
        'movie' => 'movie',
        'person' => 'person',
        'usanetwork_static_page' => 'usanetwork_static_page',
        'tv_episode' => 'tv_episode',
        'tv_season' => 'tv_season',
        'tv_show' => 'tv_show',
        'usa_video' => 'usa_video',
        'usa_tve_video' => 'usa_tve_video',
        'webform' => 'webform',
        'usanetwork_aspot' => 0,
        'usa_homepage' => 0,
        'usanetwork_promo' => 0,
      ),
      'group_by_bundle' => 1,
      'include_unpublished' => 0,
    ),
    'entity:file' => array(
      'result_description' => '',
      'bundles' => array(
        'image' => 0,
        'video' => 0,
        'audio' => 0,
        'document' => 0,
      ),
      'group_by_bundle' => 0,
      'show_scheme' => 0,
      'group_by_scheme' => 0,
      'image_extra_info' => array(
        'thumbnail' => 'thumbnail',
        'dimensions' => 'dimensions',
      ),
    ),
    'entity:taxonomy_term' => array(
      'result_description' => '',
      'bundles' => array(
        'dart_ad_categories' => 0,
        'categories' => 0,
        'genre' => 0,
        'role' => 0,
        'tags' => 0,
        'media_categories' => 0,
        'media_tags' => 0,
        'movie_rating' => 0,
        'movie_types' => 0,
        'rating_attributes' => 0,
        'tv_episode_type' => 0,
        'tv_rating' => 0,
        'cta_type' => 0,
        'usa_video_terms' => 0,
      ),
      'group_by_bundle' => 0,
    ),
    'entity:user' => array(
      'result_description' => '',
    ),
    'insert_plugin' => array(
      'url_method' => '2',
    ),
    'attribute_plugins' => array(
      'rel' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'class' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'accesskey' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'id' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'title' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
    ),
    'autocomplete' => array(
      'charLimit' => '3',
      'wait' => '350',
      'remoteTimeout' => '10000',
    ),
  );
  $export['wysiwyg_link_it'] = $linkit_profile;

  return $export;
}
