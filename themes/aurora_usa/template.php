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

function aurora_usa_preprocess_html(&$vars) {
  // adding usa-social body class to global and show pages
  if(arg(2) == 'social' || arg(0) == 'social') {
    $vars['classes_array'][] = drupal_html_class('usa-social');
  }
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
  drupal_add_js(libraries_get_path('jpanelmenu') . '/jquery.jpanelmenu.min.js', array('group' => JS_THEME, 'every_page' => TRUE));
  $theme_path = drupal_get_path('theme', 'aurora_usa');
  drupal_add_js($theme_path . '/javascripts/main-navigation.js');
  drupal_add_js($theme_path . '/javascripts/social-filter-dropdown.js',array('weight' => -5));
  drupal_add_js($theme_path . '/javascripts/filter-dropdown.js');
  $icomoon_ie_fix = array(
    '#tag' => 'script',
    '#attributes' => array(
      'src' => $theme_path . '/javascripts/icomoon-lte-ie7.js',
    ),
    '#prefix' => '<!--[if lte IE 9]>',
    '#suffix' => '</script><![endif]-->',
  );
  drupal_add_html_head($icomoon_ie_fix, 'icomoon_ie_fix');
  if(arg(0) == 'social') {
    drupal_add_js($theme_path . '/javascripts/follow-social.js');
  }
  $node = menu_get_object();
  if ($node && $node->type == "media_gallery") {
    drupal_add_js($theme_path . '/javascripts/flexslider-gallery.js');
    drupal_add_js($theme_path . '/javascripts/media-gallery-tabs.js');
  }
  // add ios touch icon
  $ios_icon = array(
    '#tag' => 'link',
    '#attributes' => array(
      'rel' => 'apple-touch-icon',
      'href' => $theme_path . '/images/ios-home.png',
    ),
  );
  drupal_add_html_head($ios_icon, 'apple_touch_icon');
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

function aurora_usa_preprocess_block(&$vars, $hook) {
  switch($vars['block']->bid) {
    case 'views-usa_shows-block_1':
      if(arg(2) == 'social' || arg(0) == 'social') {
        $vars['classes_array'][] = drupal_html_class('carousel');
      }
      break;
    case 'views-usa_cast-block_2':
    case 'views-usa_shows-block_2':
      $vars['classes_array'][] = drupal_html_class('social-follow-block');
      break;
  }
}


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
  if (isset($vars['element']['#object']->type)) {
    if (($vars['element']['#object']->type == 'media_gallery') && ($vars['element']['#field_name'] == 'field_media_items')) {
      append_cover_to_media($vars);
      // REMOVED in favor of node titles
      // append_count_to_caption($vars);
    }
  }

  switch ($vars['element']['#field_name']) {
    // homepage aspots
    case 'field_usa_hp_arefs':
    case 'field_usa_hp_brefs':
    case 'field_usa_hp_crefs':
      $vars['classes_array'][] = drupal_html_class('slides');
    break;
    case 'field_hp_promos':
      drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/jquery.carouFredSel.min.js');
      drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/home-carousel.js');
      foreach ($vars['items'] as $delta => $item) {
        $vars['item_attributes_array'][$delta]['class'] = 'carousel-item';
      }
    break;

    case 'field_role':
      if (isset($vars['element']['#view_mode']) && strip_tags($vars['element'][0]['#markup']) == 'Character') {
        switch ($vars['element']['#view_mode']) {
          case 'cast_carousel':
            // modify role field text
            $vars['items'][0]['#markup'] = t('played by');
            break;
          case 'follow_social':
            //remove role field
            unset($vars['items'][0]);
            break;
        }
      }
    break;
    case 'field_usa_character_thumb':
      // making thumb clickable
      if (isset($vars['element']['#view_mode']))  {
        switch($vars['element']['#view_mode']) {
          case 'follow_social' :
            $node = $vars['element']['#object'];
            $url = drupal_lookup_path('alias', "node/" . $node->nid);
            $thumb = $vars['items'][0];
            $vars['items'][0] = l(render($thumb), $url, array('html' => TRUE));
            break;

          case 'cast_carousel':
            // $node = $vars['element']['#object'];
            // $url = drupal_lookup_path('alias',"node/".$node->nid);
            // $vars['test'] = drupal_lookup_path('alias',"node/".$node->nid);
            // $thumb = $vars['items'][0];
            // $vars['items'][0] = l(render($thumb), $url, array('html' => TRUE));
            break;
          }
        }
      break;
  }
}

// append the cover image, node title, and node body to the media gallery item list
function append_cover_to_media(&$vars) {
  $node = $vars['element']['#object'];
  $language = $node->language;
  array_unshift($vars['items'], $vars['items'][0]);
  $cover = $node->field_cover_item[$language][0];
  $vars['items'][0]['file']['#path'] = $cover['uri'];
  $vars['items'][0]['file']['#width'] = $cover['image_dimensions']['width'];
  $vars['items'][0]['file']['#height'] = $cover['image_dimensions']['height'];
  $vars['items'][0]['file']['#alt'] = $cover['field_file_image_alt_text'];
  $vars['items'][0]['file']['#title'] = $cover['field_file_image_title_text'];
  // REMOVED in favor of node titles
  // $new_caption = '<div class="caption-body">' . $node->body[$language][0]['safe_value'] . '</div>';
  // $vars['items'][0]['field_caption']['#items'][0]['value'] = $new_caption;
  // $vars['items'][0]['field_caption']['#items'][0]['safe_value'] = $new_caption;
  // $vars['items'][0]['field_caption'][0]['#markup'] = $new_caption;
}
// REMOVED in favor of node titles
// function append_count_to_caption(&$vars) {
//   $total = count($vars['items']);
//   foreach ($vars['items'] as $key => &$item) {
//     $counter = $key + 1 ."/". $total;
//     if (isset($item['field_caption'])) {
//       $append_caption = $item['field_caption']['#items'][0]['safe_value'] .= '<div class="gallery-counter">'. $counter .'</div>';
//       $item['field_caption']['#items'][0]['value'] = $append_caption;
//       $item['field_caption']['#items'][0]['safe_value'] = $append_caption;
//       $item['field_caption'][0]['#markup'] = $append_caption;
//     } else {
//       $append_caption = '<div class="gallery-counter">'. $counter .'</div>';
//       $item['field_caption'][0]['#markup'] = $append_caption;
//     }
//   }
// }
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
    if($vars['view']->name == 'usa_cast' && $vars['view']->current_display == 'block_1') {
      drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/jquery.carouFredSel.min.js');
      drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/cast-carousel.js');
    }

    if($vars['view']->name == 'usa_shows' && $vars['view']->current_display == 'block_1') {
      drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/jquery.carouFredSel.min.js');
      drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/show-carousel.js');
    }
  }


}

/**
 * Implements hook_views_pre_render().
 */
function aurora_usa_views_pre_render(&$view) {
  $views_prerender_function = 'aurora_usa_views_pre_render_' . $view->name . '__' . $view->current_display;
  if (function_exists($views_prerender_function)) {
   $views_prerender_function($view);
  }
}

/**
 * Implements hook_views_pre_render().
 */
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

/**
 * Implements template_preprocess_panels_pane().
 */
function aurora_usa_preprocess_panels_pane(&$vars) {

  if($vars['pane']->type == 'page_title' && $vars['pane']->panel == 'person_main') {
    $vars['pane_prefix'] = '<div class="person-content-wrapper"><aside id="person-content" class="panel-pane">';
  }

  if($vars['pane']->panel == 'person_image') {
    $vars['pane_prefix'] = '</aside><aside id="person-image" class="panel-pane">';
    $vars['pane_suffix'] = '</aside></div>';
  }
}

/**
 * Implements template_preprocess_views_view_fields().
 */
function aurora_usa_preprocess_views_view_fields(&$vars) {
  $view = $vars['view'];
  if($view->name == 'usa_episodes') {
    if ($vars['view']->current_display == 'panel_pane_3') {
      foreach ($vars['fields'] as $id => $field) {
        $field_output = $view->style_plugin->get_field($view->row_index, $id);
        $node = menu_get_object();
        $ep_from_field = node_load($field->raw);
        $language = $node->language;
        $class = '';
        if ($node->field_season[$language][0]['target_id'] == $ep_from_field->field_season[$language][0]['target_id']) {
          $class .= ' active ';
        }
        if ($field->handler->options['element_default_classes']) {
          $class = 'field-content';
        }

        if ($classes = $field->handler->element_classes($view->row_index)) {
          if ($class) {
            $class .= ' ';
          }
          $class .=  $classes;
        }

        if ($class) {
          $pre = '<' . $field->element_type;
          $pre .= ' class="' . $class . '"';
          $field_output = $pre . '>' . $field_output . '</' . $field->element_type . '>';
        }

        // Protect yourself somewhat for backward compatibility. This will prevent
        // old templates from producing invalid HTML when no element type is selected.
        if (empty($field->element_type)) {
          $field->element_type = 'span';
        }

        $vars['fields'][$id]->content = $field_output;
        break; // this will stop the loop after the first field
      }
    }
  }
}

/**
 * Implements template_preprocess_views_view_list().
 */
function aurora_usa_preprocess_views_view_list(&$vars) {
 $view = $vars['view'];
 switch($view->name) {
    case 'usa_cast' :
    case 'usa_shows' :
      if ($vars['view']->current_display == 'block_1') {
        //get node id for page
        $nid = arg(1);
        //loop thru carousel results
        foreach($view->result as $delta => $item) {
          //if carousel node id == node id for page add class
          if($item->nid == $nid) {
            $vars['classes_array'][$delta] .= ' active';
          }
        }
      }
      break;
  }
}

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

/**
 * Override of theme_field();
 * see theme_field() for available variables
 * aspot mobile image
 */
function aurora_usa_field__field_usa_aspot_desktop($vars) {
  $output = '';
  $filepath = $vars['items'][0]['#item']['uri'];
  $output .= '<div data-src="' . image_style_url('615x350', $filepath) . '" data-media="(min-width: 645px)"></div>';
  $output .= '<div data-src="' . image_style_url('1245x709', $filepath) . '" data-media="(min-width: 645px) and (min-device-pixel-ratio: 2.0)"></div>';
  $output .= '<div data-src="' . image_style_url('1245x709', $filepath) . '" data-media="(min-width: 960px)"></div>';
  $output .= '<div data-src="' . image_style_url('2490x1418', $filepath) . '" data-media="(min-width: 960px) and (min-device-pixel-ratio: 2.0)"></div>';
  $output .= '<noscript>';
  $output .= theme('image_style', array('style_name' => '1245x709', 'path' => $filepath, 'alt' => '', 'title' => ''));
  $output .= '</noscript>';

  return $output;
}

/**
 * Override of theme_field();
 * see theme_field() for available variables
 * aspot mobile image
 */
function aurora_usa_field__field_usa_aspot_mobile($vars) {
  $output = '';
  $filepath = $vars['items'][0]['#item']['uri'];
  $output .= '<div data-src="' . image_style_url('300x250', $filepath) . '"></div>';
  $output .= '<div data-src="' . image_style_url('600x500', $filepath) . '"  data-media="(min-device-pixel-ratio: 2.0)"></div>';

  return $output;
}
