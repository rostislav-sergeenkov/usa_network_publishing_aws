<?php
/**
 * @file
 * usanetwork_mods.linkit_profiles.inc
 */

/**
 * Implements hook_default_linkit_profiles().
 */
function usanetwork_mods_default_linkit_profiles() {
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
        'comment_node_character_profile' => 0,
        'comment_node_media_gallery' => 0,
        'comment_node_movie' => 0,
        'comment_node_person' => 0,
        'comment_node_tv_episode' => 0,
        'comment_node_tv_season' => 0,
        'comment_node_tv_show' => 0,
      ),
      'group_by_bundle' => 0,
    ),
    'entity:field_collection_item' => array(
      'result_description' => '',
      'bundles' => array(
        'field_movie_credit' => 0,
        'field_episode_credit' => 0,
        'field_pub_relation_movie' => 0,
        'field_pub_relation_tv_shows' => 0,
        'field_show_links' => 0,
      ),
      'group_by_bundle' => 0,
    ),
    'entity:node' => array(
      'result_description' => '',
      'bundles' => array(
        'character_profile' => 0,
        'media_gallery' => 0,
        'movie' => 0,
        'person' => 0,
        'tv_episode' => 0,
        'tv_season' => 0,
        'tv_show' => 0,
      ),
      'group_by_bundle' => 0,
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

  return $export;
}
