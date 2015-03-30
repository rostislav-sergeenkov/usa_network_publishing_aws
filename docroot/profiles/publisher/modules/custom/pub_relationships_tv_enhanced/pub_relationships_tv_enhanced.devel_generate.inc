<?php

/**
 * @file
 * Devel generate integration for the Pub TV Relationships Enhanced module.
 */

use Publisher\Relationships\TV\TVRelationships;

/**
 * Implements hook_devel_generate().
 */
function pub_relationships_tv_enhanced_devel_generate($object, $field, $instance, $bundle) {
  if (field_behaviors_widget('multiple values', $instance) == FIELD_BEHAVIOR_CUSTOM) {
    return devel_generate_multiple('_pub_relationships_tv_enhanced_devel_generate', $object, $field, $instance, $bundle);
  }
  else {
    return _pub_relationships_tv_enhanced_devel_generate($object, $field, $instance, $bundle);
  }
}

function _pub_relationships_tv_enhanced_devel_generate($object, $field, $instance, $bundle) {
  $item = array();

  $tv_relationship = new TVRelationships($field, array(), array(), array(), 0, LANGUAGE_NONE);
  if ($show_options = $tv_relationship->options_show()) {
    $item['show'] = $tv_relationship->show = array_rand($show_options);
    $item['season'] = 0;
    $item['episode'] = 0;
  }
  if ($instance['widget']['settings']['depth'] >= 2 && !empty($item['show']) && $season_options = $tv_relationship->options_season()) {
    $item['season'] = $tv_relationship->season = array_rand($season_options);
  }
  if ($instance['widget']['settings']['depth'] == 3 && !empty($item['season']) && $episode_options = $tv_relationship->options_episode()) {
    $item['episode'] = $tv_relationship->episode = array_rand($episode_options);
  }

  return $item;
}
