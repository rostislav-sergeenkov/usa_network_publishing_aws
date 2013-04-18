<?php
/**
 * @file
 * pub_relations_usanetwork.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function pub_relations_usanetwork_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pub_relationships_movie_content';
  $strongarm->value = array(
    'character_profile' => 0,
    'media_gallery' => 0,
    'person' => 0,
    'usanetwork_static_page' => 0,
    'tv_episode' => 0,
    'tv_season' => 0,
    'tv_show' => 0,
  );
  $export['pub_relationships_movie_content'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pub_relationships_tv_content_type_character_profile';
  $strongarm->value = 0;
  $export['pub_relationships_tv_content_type_character_profile'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pub_relationships_tv_content_type_character_profile_level';
  $strongarm->value = 'episode';
  $export['pub_relationships_tv_content_type_character_profile_level'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pub_relationships_tv_content_type_media_gallery';
  $strongarm->value = 0;
  $export['pub_relationships_tv_content_type_media_gallery'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pub_relationships_tv_content_type_media_gallery_level';
  $strongarm->value = 'episode';
  $export['pub_relationships_tv_content_type_media_gallery_level'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pub_relationships_tv_content_type_movie';
  $strongarm->value = 0;
  $export['pub_relationships_tv_content_type_movie'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pub_relationships_tv_content_type_movie_level';
  $strongarm->value = 'episode';
  $export['pub_relationships_tv_content_type_movie_level'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pub_relationships_tv_content_type_person';
  $strongarm->value = 0;
  $export['pub_relationships_tv_content_type_person'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pub_relationships_tv_content_type_person_level';
  $strongarm->value = 'episode';
  $export['pub_relationships_tv_content_type_person_level'] = $strongarm;

  return $export;
}
