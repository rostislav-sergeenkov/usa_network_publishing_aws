<?php

/**
 * Override or insert variables into the maintenance page template.
 *
 * @param $vars
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("maintenance_page" in this case.)
 */
function aurora_usa_preprocess_maintenance_page(&$vars, $hook) {
  // When a variable is manipulated or added in preprocess_html or
  // preprocess_page, that same work is probably needed for the maintenance page
  // as well, so we can just re-use those functions to do that work here.
  // aurora_usa_preprocess_html($variables, $hook);
  // aurora_usa_preprocess_page($variables, $hook);

  // This preprocessor will also be used if the db is inactive. To ensure your
  // theme is used, add the following line to your settings.php file:
  // $conf['maintenance_theme'] = 'aurora_usa';
  // Also, check $vars['db_is_active'] before doing any db queries.
}

/**
 * Implements hook_modernizr_load_alter().
 *
 * @return
 *   An array to be output as yepnope testObjects.
 */
function aurora_usa_modernizr_load_alter(&$load) {

  // We will check for touch events, and if we do load the hammer.js script.
  $load[] = array(
    'test' => 'Modernizr.touch',
    'yep'  => array('/'. drupal_get_path('theme','aurora_usa') . '/javascripts/hammer.js'),
  );

  return $load;
}

/**
 * Implements hook_preprocess_html()
 *
 * @param $vars
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("html" in this case.)
 */
/* -- Delete this line if you want to use this function
function aurora_usa_preprocess_html(&$vars) {

}

/**
 * Override or insert variables into the page template.
 *
 * @param $vars
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("page" in this case.)
 */
function aurora_usa_preprocess_page(&$vars) {
  drupal_add_js(libraries_get_path('flexslider') . '/jquery.flexslider-min.js', array('group' => JS_THEME, 'every_page' => TRUE));
  $theme_path = drupal_get_path('theme', 'aurora_usa');
  drupal_add_js($theme_path . '/javascripts/flexslider-gallery.js');
  if ($vars['node']->type == "media_gallery") {
    drupal_add_js($theme_path . '/javascripts/media-gallery-tabs.js');
  }
}

/**
 * Override or insert variables into the region templates.
 *
 * @param $vars
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("region" in this case.)
 */
/* -- Delete this line if you want to use this function
function aurora_usa_preprocess_region(&$vars, $hook) {

}
// */

/**
 * Override or insert variables into the block templates.
 *
 * @param $vars
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("block" in this case.)
 */
/* -- Delete this line if you want to use this function
function aurora_usa_preprocess_block(&$vars, $hook) {

}
// */

/**
 * Override or insert variables into the entity template.
 *
 * @param $vars
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("entity" in this case.)
 */
/* -- Delete this line if you want to use this function
function aurora_usa_preprocess_entity(&$vars, $hook) {

}
// */

/**
 * Override or insert variables into the node template.
 *
 * @param $vars
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("node" in this case.)
 */
/* -- Delete this line if you want to use this function
function aurora_usa_preprocess_node(&$vars, $hook) {
  $node = $vars['node'];
}
// */

/**
 * Override or insert variables into the field template.
 *
 * @param $vars
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("field" in this case.)
 */
function aurora_usa_preprocess_field(&$vars, $hook) {
  if(($vars['element']['#object']->type == 'media_gallery')
    && ($vars['element']['#field_name'] == 'field_media_items')) {
    $vars['items'] = append_cover_to_media($vars);
  }
}

// append the cover image, node title, and node body to the media gallery item list
function append_cover_to_media($vars) {
  $node = $vars['element']['#object'];
  $language = $node->language;
  array_unshift($vars['items'], $vars['items'][0]);
  $cover = $node->field_cover_item[$language][0];
  $vars['items'][0]['file']['#path'] = $cover['uri'];
  $vars['items'][0]['file']['#width'] = $cover['image_dimensions']['width'];
  $vars['items'][0]['file']['#height'] = $cover['image_dimensions']['height'];
  $vars['items'][0]['file']['#alt'] = $cover['field_file_image_alt_text'];
  $vars['items'][0]['file']['#title'] = $cover['field_file_image_title_text'];
  $new_caption = '<div class="caption-title">' . $node->title . '</div><div class="caption-body">' . $node->body[$language][0]['safe_value'] . '</div>';
  $vars['items'][0]['field_caption']['#items'][0]['value'] = $new_caption;
  $vars['items'][0]['field_caption']['#items'][0]['safe_value'] = $new_caption;
  $vars['items'][0]['field_caption'][0]['#markup'] = $new_caption;
  return $vars['items'];
}
// */

/**
 * Override or insert variables into the comment template.
 *
 * @param $vars
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("comment" in this case.)
 */
/* -- Delete this line if you want to use this function
function aurora_usa_preprocess_comment(&$vars, $hook) {
  $comment = $vars['comment'];
}
// */

/**
 * Override or insert variables into the views template.
 *
 * @param $vars
 *   An array of variables to pass to the theme template.
 */
function aurora_usa_preprocess_views_view(&$vars) {
  // $view = $vars['view'];
  if (isset($vars['view']->name)) {
    $views_preprocess_function = 'aurora_usa_preprocess_views_view_fields__' . $vars['view']->name . '__' . $vars['view']->current_display;
    if (function_exists($views_preprocess_function)) {
     $views_preprocess_function($vars);
    }
  }
}
function aurora_usa_views_pre_render(&$view) {
  $views_prerender_function = 'aurora_usa_views_pre_render_' . $view->name . '__' . $view->current_display;
  if (function_exists($views_prerender_function)) {
   $views_prerender_function($view);
  }
}
function aurora_usa_views_pre_render_usa_episodes__panel_pane_3(&$view) {
  $current_season = false;
  $new_results = array();
  foreach ($view->result as $result) {
    $result_season = $result->node_field_data_field_season_nid;
    if ($current_season != $result_season) {
      $current_season = $result_season;
      $new_results[] = $result;
    }
  }
  $view->result = $new_results;
}
function aurora_usa_preprocess_views_view_fields__usa_episodes__panel_pane_3 (&$vars) {
  // my specific preprocess code
}
// */


/**
 * Override or insert css on the site.
 *
 * @param $css
 *   An array of all CSS items being requested on the page.
 */
/* -- Delete this line if you want to use this function
function aurora_usa_css_alter(&$css) {

}
// */

/**
 * Override or insert javascript on the site.
 *
 * @param $js
 *   An array of all JavaScript being presented on the page.
 */
/* -- Delete this line if you want to use this function
function aurora_usa_js_alter(&$js) {

}
// */
