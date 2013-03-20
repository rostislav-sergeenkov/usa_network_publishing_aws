<?php
/**
 * @file
 * usanetwork_mods.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function usanetwork_mods_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pub_relationships_movie_content';
  $strongarm->value = array(
    'character_profile' => 'character_profile',
    'media_gallery' => 'media_gallery',
    'person' => 'person',
    'tv_episode' => 'tv_episode',
    'tv_season' => 'tv_season',
    'tv_show' => 'tv_show',
  );
  $export['pub_relationships_movie_content'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pub_relationships_tv_content_type_character_profile';
  $strongarm->value = 1;
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
  $strongarm->value = 1;
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
  $strongarm->value = 1;
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
  $strongarm->value = 1;
  $export['pub_relationships_tv_content_type_person'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pub_relationships_tv_content_type_person_level';
  $strongarm->value = 'episode';
  $export['pub_relationships_tv_content_type_person_level'] = $strongarm;

  return $export;
}
