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
  // Viewport!
  $viewport = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'name' => 'viewport',
      'content' => 'width=device-width, initial-scale=1, minimal-ui',
    ),
  );
  drupal_add_html_head($viewport, 'viewport');

  // adding usa-social body class to global and show pages
  if(arg(2) == 'social' || arg(0) == 'social') {
    $vars['classes_array'][] = drupal_html_class('usa-social');
  }
  drupal_add_library('system', 'drupal.ajax');
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
  global $base_path, $base_url;
  $theme_path = drupal_get_path('theme', 'aurora_usa');
  drupal_add_js(libraries_get_path('flexslider') . '/jquery.flexslider-min.js', array('group' => JS_THEME, 'every_page' => TRUE));
  drupal_add_js(libraries_get_path('jRespond') . '/jRespond.min.js', array('group' => JS_THEME, 'every_page' => TRUE));
  drupal_add_js(libraries_get_path('jpanelmenu') . '/jquery.jpanelmenu.js', array('group' => JS_THEME, 'every_page' => TRUE));
  drupal_add_js($theme_path . '/javascripts/jquery.xdomainrequest.min.js');
  drupal_add_js($theme_path . '/javascripts/main-navigation.js');
  drupal_add_js($theme_path . '/javascripts/social-filter-dropdown.js',array('weight' => -5));
  drupal_add_js($theme_path . '/javascripts/filter-dropdown.js');
  drupal_add_js($theme_path . '/javascripts/font-feature-detection.js');
  drupal_add_js($theme_path . '/javascripts/tableheader.js');
  $icomoon_ie_fix = array(
    '#tag' => 'script',
    '#attributes' => array(
      'src' => $base_url .'/'. $theme_path . '/javascripts/icomoon-gte-ie7.js',
    ),
    '#prefix' => '<!--[if lte IE 9]>',
    '#suffix' => '</script><![endif]-->',
  );
  drupal_add_html_head($icomoon_ie_fix, 'icomoon_ie_fix');
  if(arg(0) == 'social') {
    drupal_add_js($theme_path . '/javascripts/follow-social.js');
  }
  $node = menu_get_object();
  if ($node && $node->type == "catchall_seo_page" && !$node->field_show) {
    $vars['page']['catchall_seo_title'] = $node->title;
  }
  if ($node && $node->type == "media_gallery") {
    drupal_add_js($theme_path . '/javascripts/flexslider-gallery.js');
    drupal_add_js($theme_path . '/javascripts/media-gallery-tabs.js');
    drupal_add_js($theme_path . '/javascripts/viewportchecker.js');
  }
  if ($node
    && (($node->type == "tv_show" && !arg(2))
        || $node->type == 'usanetwork_microsite')
  ) {
    $language = $node->language;
    $slideshow = (!empty($node->field_usa_autoscroll) && $node->field_usa_autoscroll[$language][0]['value'] == 1)? true : null;
    $slideshowSpeed = (isset($node->field_usa_slide_speed[$language][0]['value']))? $node->field_usa_slide_speed[$language][0]['value']: null;
    $js_settings = array(
      'slideshow' => $slideshow,
      'slideshowSpeed' => $slideshowSpeed
    );
    drupal_add_js(array('showAspot' => $js_settings), array('type' => 'setting'));
    drupal_add_js($theme_path . '/javascripts/show-toggle.js');
    drupal_add_js($theme_path . '/javascripts/show-flexslider.js');
  }
  // add ios touch icon
  $ios_icon = array(
    '#tag' => 'link',
    '#attributes' => array(
      'rel' => 'apple-touch-icon',
      'href' => $base_url .'/'. $theme_path . '/images/ios-home.png',
    ),
  );

  // touch icon
  drupal_add_html_head($ios_icon, 'apple_touch_icon');

  // custom classes for our utilities wrapper
  // it may help to know which regions are loading
  $util_regions = array();
  $vars['util_classes'] = '';
  //unset page title when catchall seo page without show reference
  if (!empty($vars['page']['catchall_seo_title'])) {
    $vars['title'] = '';
  }
  // also unset page title when the show banner loads
  if (!empty($vars['page']['head_show'])) {
    $util_regions[] = 'utilities-head-show';
    $vars['title'] = '';
  }
  if (!empty($vars['page']['head_general'])) {
    $util_regions[] = 'utilities-head-general';
    $vars['title'] = '';
  }
  if (!empty($vars['page']['search'])) {
    $util_regions[] = 'utilities-search';
  }
  if (!empty($vars['page']['search'])) {
    $util_regions[] = 'utilities-search';
  }
  //Assign SEO H1 field value to page variable
  if (drupal_is_front_page()) {
    if (module_exists('usanetwork_home'))
    $vars['page']['seoh1'] = _usanetwork_home_get_field_value('field_seo_h1');
  }
  $vars['util_classes'] = implode(' ', $util_regions);

  // remove headers and footers for ajax callback
  if (isset($_GET['ajax']) && $_GET['ajax'] == 1) {
    $content = $vars['page']['content'];
    $vars['page'] = array('content' => $content);
    $vars['ajax'] = true;
  }

  // if microsite, don't display the top utilities section
  if ($node && $node->type == 'usanetwork_microsite') {
    $vars['page']['no_utilities'] = true;
    $vars['page']['no_footer'] = true;
    $vars['page']['no_leaderboard'] = true;
  }
}

/**
 * Override or insert variables in search results template
 */
function aurora_usa_preprocess_search_results(&$variables) {
  // add keywords to template
  $variables['keywords'] = _aurora_usa_search_keywords();

  // search.module shows 10 items per page (this isn't customizable)
  $itemsPerPage = 10;
  // Determine which page is being viewed
  // If $_REQUEST['page'] is not set, we are on page 1
  $currentPage = (isset($_REQUEST['page']) ? $_REQUEST['page'] : 0) + 1;
  // Get the total number of results from the global pager
  $total = $GLOBALS['pager_total_items'][0];
  // Determine which results are being shown ("Showing results x through y")
  $start = ($itemsPerPage * $currentPage) - $itemsPerPage + 1;
  // If on the last page, only go up to $total, not the total that COULD be
  // shown on the page. This prevents things like "Displaying 11-20 of 17".
  $end = (($itemsPerPage * $currentPage) >= $total) ? $total : ($itemsPerPage * $currentPage);
  // If there is more than one page of results:
  if ($total > $itemsPerPage) {
    $variables['search_totals'] = t('Displaying results !start - !end of !total', array(
      '!start' => $start,
      '!end' => $end,
      '!total' => $total,
    ));
  }
  else {
    // Only one page of results, so make it simpler
    $variables['search_totals'] = t('Displaying !total !results_label', array(
      '!total' => $total,
      // Be smart about labels: show "result" for one, "results" for multiple
      '!results_label' => format_plural($total, 'result', 'results'),
    ));
  }

  $variables['pager'] = theme('pager', array(
    'tags' => null,
    'element' => 0,
    'parameters' => array(),
    'quantity' => 3,
    'small' => true,
  ));
}

/**
 * Override or insert variables in pager template
 */
function aurora_usa_pager(&$variables) {
  if (!isset($variables['small']) || !$variables['small']) {
    return theme_pager($variables);
  }

  $tags = $variables['tags'];
  $element = $variables['element'];
  $parameters = $variables['parameters'];
  $quantity = $variables['quantity'];
  global $pager_page_array, $pager_total;

  // Calculate various markers within this pager piece:
  // Middle is used to "center" pages around the current page.
  $pager_middle = ceil($quantity / 2);
  // current is the page we are currently paged to
  $pager_current = $pager_page_array[$element] + 1;
  // first is the first page listed by this pager piece (re quantity)
  $pager_first = $pager_current - $pager_middle + 1;
  // last is the last page listed by this pager piece (re quantity)
  $pager_last = $pager_current + $quantity - $pager_middle;
  // max is the maximum page number
  $pager_max = $pager_total[$element];
  // End of marker calculations.

  // Prepare for generation loop.
  $i = $pager_first;
  if ($pager_last > $pager_max) {
    // Adjust "center" if at end of query.
    $i = $i + ($pager_max - $pager_last);
    $pager_last = $pager_max;
  }
  if ($i <= 0) {
    // Adjust "center" if at start of query.
    $pager_last = $pager_last + (1 - $i);
    $i = 1;
  }
  // End of generation loop preparation.

  $li_previous = theme('pager_previous', array('text' => (isset($tags[1]) ? $tags[1] : t('« prev')), 'element' => $element, 'interval' => 1, 'parameters' => $parameters));
  $li_next = theme('pager_next', array('text' => (isset($tags[3]) ? $tags[3] : t('next »')), 'element' => $element, 'interval' => 1, 'parameters' => $parameters));

  if ($pager_total[$element] > 1) {
    // When there is more than one page, create the pager list.
    if ($i != $pager_max) {
      if ($i > 1) {
        $items[] = array(
          'class' => array('pager-first'),
          'data' => theme('pager_first', array('text' => 1, 'element' => $element, 'parameters' => $parameters)),
        );
        $items[] = array(
          'class' => array('pager-ellipsis'),
          'data' => '…',
        );
      }
      // Now generate the actual pager piece.
      for (; $i <= $pager_last && $i <= $pager_max; $i++) {
        if ($i < $pager_current) {
          $items[] = array(
            'class' => array('pager-item'),
            'data' => theme('pager_previous', array('text' => $i, 'element' => $element, 'interval' => ($pager_current - $i), 'parameters' => $parameters)),
          );
        }
        if ($i == $pager_current) {
          $items[] = array(
            'class' => array('pager-current'),
            'data' => $i,
          );
        }
        if ($i > $pager_current) {
          $items[] = array(
            'class' => array('pager-item'),
            'data' => theme('pager_next', array('text' => $i, 'element' => $element, 'interval' => ($i - $pager_current), 'parameters' => $parameters)),
          );
        }
      }
      if ($i <= $pager_max) {
        $items[] = array(
          'class' => array('pager-ellipsis'),
          'data' => '…',
        );
        $items[] = array(
          'class' => array('pager-last'),
          'data' => theme('pager_last', array('text' => $pager_max, 'element' => $element, 'parameters' => $parameters)),
        );
      }
    }
    // End generation.
    if ($li_previous) {
      $items[] = array(
        'class' => array('pager-previous'),
        'data' => $li_previous,
      );
    }
    if ($li_next) {
      $items[] = array(
        'class' => array('pager-next'),
        'data' => $li_next,
      );
    }
    return '<h2 class="element-invisible">' . t('Pages') . '</h2>' . theme('item_list', array(
      'items' => $items,
      'attributes' => array('class' => array('pager')),
    ));
  }
}

/**
 * Implementation of hook_form_alter
 */

function aurora_usa_form_search_block_form_alter(&$form){

  $form['search_block_form']['#title'] = t('search');
  $form['search_block_form']['#title_display'] = 'before';
  // Add placeholder attribute to the text box
  $form['search_block_form']['#attributes']['placeholder'] = t('Search Now');

  if ($keywords = _aurora_usa_search_keywords()) {
    $form['search_block_form']['#value'] = $keywords;
  }

  $form['actions']['reset'] = array(
    '#markup' => '<button class="form-reset" type="reset"></button>',
    '#weight' => 1000
  );

  // remove keywords from action
  $parts = explode('/', trim($form['#action'], '/'));
  if ($parts[0] == 'search' && count($parts) > 2) {
    $parts = array_slice($parts, 0, 2);
    $form['#action'] = '/' . implode('/', $parts);
  }

  drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/search.js');
}

/**
 * Override or insert variables into the region templates.
 *
 * @param $vars
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("region" in this case.)
 */
function aurora_usa_preprocess_region(&$vars) {
  if ($vars['region'] == 'content') {
    $entity_type = NULL;
    $current_menu_object = _usanetwork_menu_get_object($entity_type);
    if ($entity_type == 'node') {
      if ($current_menu_object && ($current_menu_object->type == 'post')) {
        $category_field = reset(field_get_items('node', $current_menu_object, USANETWORK_FIELD_BLOG));
        if ($category_field) {
          $category = taxonomy_term_load($category_field['tid']);
          module_load_include('inc', 'pathauto', 'pathauto');
          $vars['classes_array'][] = 'blog-term-' . pathauto_cleanstring($category->name);
        }
      }
    } elseif ($entity_type == 'taxonomy_term') {
      if ($current_menu_object->vocabulary_machine_name == 'blog') {
        module_load_include('inc', 'pathauto', 'pathauto');
        $vars['classes_array'][] = 'blog-term-' . pathauto_cleanstring($current_menu_object->name);
      }
    }
  }
}

/**
 * Override or insert variables into the block templates.
 *
 * @param $vars
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("block" in this case.)
 */

function aurora_usa_preprocess_block(&$vars, $hook) {
  if (isset($vars['block']->bid)) {
    switch($vars['block']->bid) {
      case 'views-usa_shows-block_1':
        if(arg(2) == 'social' || arg(0) == 'social') {
          $vars['classes_array'][] = drupal_html_class('carousel');
        }
        break;
      case 'usanetwork_video-usa_video_views':
      case 'usanetwork_mpx_video-usa_mpx_video_views':
        drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/video-dropdowns.js');
        break;
      case 'views-usa_cast-block_2':
      case 'views-usa_shows-block_2':
        $vars['classes_array'][] = drupal_html_class('social-follow-block');
        break;
      case 'usanetwork_video-usa_global_video_nav':
      case 'usanetwork_mpx_video-usa_global_mpx_video_nav':
      case 'usanetwork_mpx_video-usa_show_mpx_video_nav':
      case 'usanetwork_video-usa_show_video_nav':
      case 'usanetwork_social-usa_show_social_tab_nav':
        $vars['classes_array'][] = drupal_html_class('usa-secondary-menu');
        break;
    }
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
/* -- Delete this line if you want to use this function */
function aurora_usa_preprocess_node(&$vars, $hook) {
  $node = $vars['node'];
  $language = $node->language;

  switch ($node->type) {
    case 'usanetwork_promo':
      if(!(empty($node->field_meta_text_bar)) && $node->field_meta_text_bar[LANGUAGE_NONE][0]['value'] == '1') {
        $vars['classes_array'][] = drupal_html_class('promo-hide-overlay');
      }
      break;
    case 'usanetwork_aspot':
      if (isset($vars['field_text_line_1_image']) && count($vars['field_usa_aspot_txt1']) > 0) {
        $alt = $vars['field_usa_aspot_txt1'][0]['safe_value'];
      } else {
        $alt = '';
      }
      if (isset($vars['field_text_line_1_image']) && count($vars['field_text_line_1_image']) > 0) {
        $image_file = file_create_url($vars['field_text_line_1_image'][$language][0]['uri']);
        $width =  $vars['field_text_line_1_image'][$language][0]['width'];
        $height =  $vars['field_text_line_1_image'][$language][0]['height'];
        $line_1_image = '<img src="' . $image_file . '" width="' . $width . '" height="' . $height . '" title="' . $alt . '" alt="' . $alt . '" />';
      } else {
        $line_1_image = '';
      }
      $vars['aspot_title_image'] = $line_1_image;
      break;
  }
}

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
      drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/jquery.touchSwipe.min.js');
      drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/jquery.carouFredSel.min.js');
      drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/microsite_carousel.js');
      foreach ($vars['items'] as $delta => $item) {
        $vars['item_attributes_array'][$delta]['class'] = 'carousel-item';
      }
    break;

    case 'field_role':
      if (isset($vars['element']['#view_mode']) && strip_tags($vars['element'][0]['#markup']) == 'Character') {
        switch ($vars['element']['#view_mode']) {
          case 'cast_carousel':
            // modify role field text
            if(isset($vars['element']['#object']->field_usa_actor_name) && !(empty($vars['element']['#object']->field_usa_actor_name))) {
              $actor_name = $vars['element']['#object']->field_usa_actor_name[LANGUAGE_NONE][0]['value'];
              $vars['items'][0]['#markup'] = t('played by') . ' ' . $actor_name;
            } else {
              $vars['items'][0]['#markup'] = '';
            }

            break;
          case 'follow_social':
            //remove role field
            // hide title with js because ds will not let us properly preprocess
            drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/social-character.js');
            unset($vars['items'][0]);
            break;
        }
      }
      if (isset($vars['element']['#view_mode']) && strip_tags($vars['element'][0]['#markup']) == 'Self') {
        switch ($vars['element']['#view_mode']) {
          case 'follow_social':
            //remove role field
            unset($vars['items'][0]);
            break;
        }
      }
      if (isset($vars['element']['#view_mode']) && strip_tags($vars['element'][0]['#markup']) == 'BLANK') {
        switch ($vars['element']['#view_mode']) {
          case 'cast_carousel':
          case 'follow_social':
            //remove role field
            unset($vars['items'][0]);
            break;
        }
      }
      break;
    // ACTOR NAME IN PEOPLE NODES
    case 'field_usa_actor_name':
       if (isset($vars['element']['#view_mode'])) {
        switch ($vars['element']['#view_mode']) {
          case 'cast_carousel':
            // remove as adding to field role so in same div
            unset($vars['items'][0]);
            break;
          case 'follow_social':
            // link actor name
            $nid = $vars['element']['#object']->nid;
            $name = $vars['element']['#items'][0]['safe_value'];
            $vars['items'][0]['#markup'] = l($name, 'node/' . $nid, array('html' => TRUE));
            break;
        }
      }
      break;
    case 'title':
    case 'field_mpx_title':
      if (isset($vars['element']['#view_mode'])) {
        switch($vars['element']['#view_mode']) {
          case 'vid_teaser_front':
          case 'vid_teaser_episode':
            unset($vars['items'][0]);
            break;
          case 'block_cover_title_lg':
            if ($vars['element']['#bundle'] == 'media_gallery' ) {
              $title = strip_tags($vars['element'][0]['#markup']);
              $vars['items'][0]['#markup'] =  '<h2>' . $title . ' ' . t('gallery') . '</h2>';
            }
            break;
          case 'vid_teaser_show_general':
            $vars['items'][0]['#prefix'] = '<h4>';
            $vars['items'][0]['#suffix'] = '</h4>';
            break;
          case 'cast_carousel':
            $db_select = db_select('node', 'n')
              ->fields('n', array('nid'));
            $db_select->condition('title', strip_tags($vars['element']['#items'][0]['value']));
            $db_select->join('field_data_field_role','fdfr', 'fdfr.entity_id = n.nid');
            $db_select->join('taxonomy_term_data','ttd', 'ttd.tid = fdfr.field_role_tid');
            $db_select->condition('ttd.name', 'BLANK');
            $nid = $db_select->execute()->fetchField();
            if(!empty($nid)) {
              $vars['classes_array'][] = 'role-blank';
            }
            break;
        }
      }
      break;
    case 'field_usa_character_thumb':
      // making thumb clickable
      if (isset($vars['element']['#view_mode'])) {
        switch($vars['element']['#view_mode']) {
          case 'follow_social' :
            $node = $vars['element']['#object'];
            $url = drupal_lookup_path('alias', "node/" . $node->nid);
            $thumb = $vars['items'][0];
            $vars['items'][0] = l(render($thumb), $url, array('html' => TRUE));
            break;
          }
        }
      break;
    // AIRDATE IN VIDEOS
    case 'field_video_air_date':
    case 'field_mpx_airdate':
      // change display
      if (isset($vars['element']['#view_mode'])) {
        switch($vars['element']['#view_mode']) {
          case 'full' :
            $airtime = $vars['element']['#items'][0]['value'];
            $air_custom = date('n/d/Y', $airtime);
            $vars['items'][0]['#markup'] = '(' . $air_custom . ')';
            break;
          case 'vid_teaser_front':
          case 'vid_teaser_episode':
            if (strpos($vars['element']['#object']->type, 'mpx_video') === 0) {
              $title = $vars['element']['#object']->field_mpx_title['und'][0]['safe_value'];
            } else {
            $title = $vars['element']['#object']->title;
            }
            $airtime = $vars['element']['#items'][0]['value'];
            $air_custom = date('n/d/Y', $airtime);
            $vars['classes_array'][] = drupal_html_class('field-name-title');
            $vars['items'][0]['#markup'] = $title . ' (' . $air_custom . ')';
            break;
          }
        }
      break;
    // episode num IN VIDEOS
    case 'field_episode_number':
    case 'field_mpx_episode_number':
      // change display
      if (($vars['element']['#object']->type == 'usa_video') || ($vars['element']['#object']->type == 'usa_tve_video') || (strpos($vars['element']['#object']->type, 'mpx_video') === 0)) {
        if (isset($vars['element']['#view_mode'])) {
          switch($vars['element']['#view_mode']) {
            case 'full' :
            case 'vid_teaser_show_episode':
            case 'vid_teaser_show_general':
              $episode = $vars['element']['#items'][0]['safe_value'];
              $vars['items'][0]['#markup'] = $episode ? t('Episode ') . $episode : '';
              break;
            }
          }
        }
      break;
    // season num IN VIDEOS
    case 'field_season_id':
    case 'field_mpx_season_number':
      // change display
      if (($vars['element']['#object']->type == 'usa_video') || ($vars['element']['#object']->type == 'usa_tve_video') || (strpos($vars['element']['#object']->type, 'mpx_video') === 0)) {
        if (isset($vars['element']['#view_mode'])) {
          switch($vars['element']['#view_mode']) {
            case 'full' :
            case 'vid_teaser_show_episode':
            case 'vid_teaser_show_general':
              $season = $vars['element']['#items'][0]['safe_value'];
                $vars['items'][0]['#markup'] = $season ? t('Season ') . $season : '';
                break;
            }
          }
        }
      break;
    // SHOW TITLE WITHIN VIDEO TEASERS
    case 'field_show':
      // change display
      if (isset($vars['element']['#view_mode'])) {
        switch($vars['element']['#view_mode']) {
          case 'vid_teaser_episode':
          case 'vid_teaser_general':
          $vars['items'][0]['#prefix'] = '<h4>';
          $vars['items'][0]['#suffix'] = '</h4>';
            break;
          }
        }
      break;
    // DURATION WITHIN VIDEO TEASERS
    case 'field_video_duration':
    case 'field_mpx_duration':
      // change display
      $duration = $vars['element']['#items'][0]['value'];
      $duration_custom = gmdate("H:i:s", $duration);
      $vars['items'][0]['#markup'] = $duration_custom;
      break;
    // PROMO line 1 text on
    case 'field_promo_text_line_1':
    case 'field_promo_text_line_1_wide':
      // change display
      if (isset($vars['element']['#view_mode'])) {
        switch($vars['element']['#view_mode']) {
          case 'promo_teaser':
          case 'promo_teaser_large':
          $vars['items'][0]['#prefix'] = '<h3>';
          $vars['items'][0]['#suffix'] = '</h3>';
            break;
          }
        }
      break;
    // display title for shows
    //
    case 'field_display_title':
      // change display
      if (isset($vars['element']['#view_mode'])) {
        switch($vars['element']['#view_mode']) {
          case 'block_cover_title':
          $vars['items'][0]['#prefix'] = '<h4>';
          $vars['items'][0]['#suffix'] = '</h4>';
            break;
          case 'follow_social':
          $vars['items'][0]['#prefix'] = '<div><h4>';
          $vars['items'][0]['#suffix'] = '</h4></div>';
            break;
          }
        }
      break;
    case 'field_seo_h1':
      //change display
      if ($vars['element']['#object']->type == 'media_gallery')  {
        $vars['items'][0]['#prefix'] = '<h1>';
        $vars['items'][0]['#suffix'] = '</h1>';
      }
  }
}

/**
 * Override or insert variables into the file entity flexslider template.
 */
function aurora_usa_preprocess_flexslider_file_entity(&$vars) {
  if (isset($vars['element']['#object']->type)) {
    if (($vars['element']['#object']->type == 'media_gallery') && ($vars['element']['#field_name'] == 'field_media_items')) {
      $node = $vars['element']['#object'];
      $language = $node->language;
      $cover = $node->field_cover_item[$language][0];
      if ($cover) {
        array_unshift($vars['element']['#items'], (array) file_load($cover['fid']));
      }
    }
  }
}

// append the cover image, node title, and node body to the media gallery item list
function append_cover_to_media(&$vars) {
  $node = $vars['element']['#object'];
  $language = $node->language;
  array_unshift($vars['items'], $vars['items'][0]);
  $cover = $node->field_cover_item[$language][0];
  $vars['items'][0]['#file'] = file_load($cover['fid']);
  $vars['items'][0]['file']['#path'] = $cover['uri'];
  $vars['items'][0]['file']['#width'] = $cover['image_dimensions']['width'];
  $vars['items'][0]['file']['#height'] = $cover['image_dimensions']['height'];
  $vars['items'][0]['file']['#alt'] = $cover['field_file_image_alt_text'][$language][0]['safe_value'];
  $vars['items'][0]['file']['#title'] = $cover['field_file_image_title_text'];
  $vars['items'][0]['field_caption']['#items'] = $cover['field_caption'][$language];
  $vars['items'][0]['field_caption'][0]['#markup'] = $cover['field_caption'][$language][0]['value'];

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
      drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/jquery.touchSwipe.min.js');
      drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/jquery.carouFredSel.min.js');
      drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/cast-carousel.js');
    }

    if($vars['view']->name == 'usa_shows' && $vars['view']->current_display == 'block_1') {
      drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/jquery.touchSwipe.min.js');
      drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/jquery.carouFredSel.min.js');
      drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/show-carousel.js');
    }
    if($vars['view']->name == 'usa_cast' && $vars['view']->current_display == 'attachment_2') {
      drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/follow-social.js');
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

  if(($vars['pane']->subtype == 'usa_people-panel_pane_4' || $vars['pane']->subtype == 'usa_people-panel_pane_5') && $vars['pane']->panel == 'person_main') {
    $vars['pane_prefix'] = '<div class="person-content-wrapper clearfix"><aside id="person-content" class="panel-pane">';
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
    case 'usa_gallery' :
      if ($vars['view']->current_display == 'panel_pane_1'
        || $vars['view']->current_display == 'panel_pane_3'
        || $vars['view']->current_display == 'panel_pane_4') {
        //get node id for page
        $nid = arg(1);
        //loop thru gallery results
        foreach($view->result as $delta => $item) {
          //if gallery node id == node id for page add class
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
  // polyfill
  drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/matchmedia.js', 'file');
  drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/picturefill.js', 'file');
  $output = '';
  $filepath = $vars['items'][0]['#item']['uri'];
  if ((!isset($vars['element']['#object']->field_usa_aspot_tablet_portrait)) || (empty($vars['element']['#object']->field_usa_aspot_tablet_portrait))) {
    $output .= '<div data-src="' . image_style_url('615x350', $filepath) . '" data-media="(min-width: 645px)"></div>';
    $output .= '<div data-src="' . image_style_url('1245x709', $filepath) . '" data-media="(min-width: 645px) and (min-device-pixel-ratio: 2.0)"></div>';
  }
  $output .= '<div data-src="' . image_style_url('1245x709', $filepath) . '" data-media="(min-width: 960px)"></div>';
  $output .= '<div data-src="' . image_style_url('2490x1418', $filepath) . '" data-media="(min-width: 960px) and (min-device-pixel-ratio: 2.0)"></div>';
  $output .= '<!--[if (IE 8) & (!IEMobile)]>';
  $output .= '<div data-src="' . image_style_url('1245x709', $filepath) . '"></div>';
  $output .= '<![endif]-->';

  $output .= '<noscript>';
  $output .= theme('image_style', array('style_name' => '1245x709', 'path' => $filepath, 'alt' => '', 'title' => ''));
  $output .= '</noscript>';

  return $output;
}

/**
 * Override of theme_field();
 * see theme_field() for available variables
 * aspot tablet portrait image
 */
function aurora_usa_field__field_usa_aspot_tablet_portrait($vars) {
  // polyfill
  drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/matchmedia.js', 'file');
  drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/picturefill.js', 'file');
  $output = '';
  $filepath = $vars['items'][0]['#item']['uri'];
  $output .= '<div data-src="' . image_style_url('615x350', $filepath) . '" data-media="(min-width: 645px)"></div>';
  $output .= '<div data-src="' . image_style_url('1245x709', $filepath) . '" data-media="(min-width: 645px) and (min-device-pixel-ratio: 2.0)"></div>';

  return $output;
}

/**
 * Override of theme_field();
 * see theme_field() for available variables
 * aspot mobile image
 */
function aurora_usa_field__field_usa_aspot_mobile($vars) {
  // polyfill
  drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/matchmedia.js', 'file');
  drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/picturefill.js', 'file');
  $output = '';
  $filepath = $vars['items'][0]['#item']['uri'];
  $output .= '<div data-src="' . image_style_url('300x250', $filepath) . '"></div>';
  $output .= '<div data-src="' . image_style_url('600x500', $filepath) . '" data-media="(min-device-pixel-ratio: 2.0)"></div>';

  return $output;
}

/**
 * Override of theme_field();
 * see theme_field() for available variables
 * promo bspot wide image
 */
function aurora_usa_field__field_promo_wide_image($vars) {
  // custom for certain view modes only
  // c-spot wide image not displayed
  if ($vars['element']['#view_mode'] == 'home_promo') {
    $output = '';
  }
  // b-spot
  if ($vars['element']['#view_mode'] == 'home_promo_bspot') {
    // polyfill
    drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/matchmedia.js', 'file');
    drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/picturefill.js', 'file');
    $output = '';
    $filepath = $vars['items'][0]['#item']['uri'];

    $output .= '<div data-src="' . image_style_url('615x250', $filepath) . '" data-media="(min-width: 710px) and (max-width: 1019px)"></div>';
    $output .= '<div data-src="' . image_style_url('1230x500', $filepath) . '" data-media="(min-width: 710px) and (max-width: 1019px) and (min-device-pixel-ratio: 2.0)"></div>';

    $output .= '<div data-src="' . image_style_url('615x250', $filepath) . '" data-media="(min-width: 1335px)"></div>';
    $output .= '<div data-src="' . image_style_url('1230x500', $filepath) . '" data-media="(min-width: 1335px) and (min-device-pixel-ratio: 2.0)"></div>';
    $output .= '<!--[if (IE 8) & (!IEMobile)]>';
    $output .= '<div data-src="' . image_style_url('615x250', $filepath) . '"></div>';
    $output .= '<![endif]-->';

    $output .= '<noscript>';
    $output .= theme('image_style', array('style_name' => '615x250', 'path' => $filepath, 'alt' => '', 'title' => ''));
    $output .= '</noscript>';
    return $output;
  }
}

/**
 * Override of theme_field();
 * see theme_field() for available variables
 * promo bspot and cspot narrow image
 */
function aurora_usa_field__field_promo_regular_image($vars) {
  // custom for certain view modes only
  // b-spot these are mobile fallbacks
  if ($vars['element']['#view_mode'] == 'home_promo_bspot') {
  // polyfill
    drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/matchmedia.js', 'file');
    drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/picturefill.js', 'file');
    $output = '';
    $filepath = $vars['items'][0]['#item']['uri'];
    $output .= '<div data-src="' . image_style_url('300x250', $filepath) . '"></div>';
    $output .= '<div data-src="' . image_style_url('600x500', $filepath) . '"  data-media="(min-device-pixel-ratio: 2.0)"></div>';
    $output .= '<noscript>';
    $output .= theme('image_style', array('style_name' => '600x500', 'path' => $filepath, 'alt' => '', 'title' => ''));
    $output .= '</noscript>';
    return $output;
  }

  // c-spot
  if ($vars['element']['#view_mode'] == 'home_promo') {
    // polyfill
    drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/matchmedia.js', 'file');
    drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/picturefill.js', 'file');
    $output = '';
    $filepath = $vars['items'][0]['#item']['uri'];
    $output .= '<div data-src="' . image_style_url('300x250', $filepath) . '"></div>';
    $output .= '<div data-src="' . image_style_url('600x500', $filepath) . '"  data-media="(min-device-pixel-ratio: 2.0)"></div>';
    $output .= '<noscript>';
    $output .= theme('image_style', array('style_name' => '600x500', 'path' => $filepath, 'alt' => '', 'title' => ''));
    $output .= '</noscript>';
    return $output;
  }

  // carousel_promo
  if ($vars['element']['#view_mode'] == 'carousel_promo') {
    $output = '';
    $filepath = $vars['items'][0]['#item']['uri'];
    $alt = $vars['items'][0]['#item']['alt'];
    $title = $vars['items'][0]['#item']['title'];
    $data_src = image_style_url('600x500', $filepath);
    $output .= '<img src="" data-src="' . $data_src . '" alt="' . $alt . '" title="' . $title . '"/>';
    $output .= '<noscript>';
    $output .= theme('image_style', array('style_name' => '600x500', 'path' => $filepath, 'alt' => $alt, 'title' => $title));
    $output .= '</noscript>';
    return $output;
  }
}

/**
 * Override of theme_field();
 * see theme_field() for available variables
 */
function aurora_usa_field__field_tv_cover_media($variables) {
  $output = '';

  // Render the label, if it's not hidden.
  if (!$variables['label_hidden']) {
    $output .= '<div class="field-label"' . $variables['title_attributes'] . '>' . $variables['label'] . ':&nbsp;</div>';
  }

  // Render the items.
  $output .= '<div class="field-items"' . $variables['content_attributes'] . '>';
  foreach ($variables['items'] as $delta => $item) {
    $classes = 'field-item ' . ($delta % 2 ? 'odd' : 'even');
    $output .= '<div class="' . $classes . '"' . $variables['item_attributes'][$delta] . '>';
    $output .= drupal_render($item);
    $output .= '<!--[if (IE 8) & (!IEMobile)]>';
    $file = $item['file'];
    unset($file['#theme']);
    $_vars = array();
    foreach ($file as $name => $value) {
      $_vars[str_replace('#', '', $name)] = $value;
    }
    $output .= theme_image_style($_vars);
    $output .= '<![endif]-->';
    $output .= '</div>';
  }
  $output .= '</div>';

  // Render the top-level DIV.
  $output = '<div class="' . $variables['classes'] . '"' . $variables['attributes'] . '>' . $output . '</div>';

  return $output;
}

function aurora_usa_field__field_target($vars) {
  $target = $vars['items'][0]['value'];
  return $target;
}
function aurora_usa_field__field_video_thumbnail($variables) {
  if ($variables['element']['#view_mode'] == 'full') {
    $output = '';

    // Render the label, if it's not hidden.
    if (!$variables['label_hidden']) {
      $output .= '<div class="field-label"' . $variables['title_attributes'] . '>' . $variables['label'] . ':&nbsp;</div>';
    }

    // Render the items.
    $output .= '<div class="field-items"' . $variables['content_attributes'] . '>';
    foreach ($variables['items'] as $delta => $item) {
      $classes = 'field-item ' . ($delta % 2 ? 'odd' : 'even');
      $output .= '<div class="' . $classes . '"' . $variables['item_attributes'][$delta] . '>';
      $output .= drupal_render($item);
      $output .= '<!--[if (IE 8) & (!IEMobile)]>';
      $file = $item['#item'];
      $file['style_name'] = $item['#image_style'];
      $file['path'] = $file['uri'];
      $output .= theme_image_style($file);
      $output .= '<![endif]-->';
      $output .= '</div>';
    }
    $output .= '</div>';

    // Render the top-level DIV.
    $output = '<div class="' . $variables['classes'] . '"' . $variables['attributes'] . '>' . $output . '</div>';
  }

  return $output;
}


/**
 * Returns search keywords.
 */
function _aurora_usa_search_keywords() {
  // add keywords to template
  $path = explode('/', $_GET['q'], 3);
  if(count($path) == 3 && $path[0]=="search") {
    $keywords = $path[2];
  } else {
    $keywords = empty($_REQUEST['keys']) ? '' : $_REQUEST['keys'];
  }
  return urldecode($keywords);
}

/**
* Implements hook_html_head_alter().
*/
function aurora_usa_html_head_alter(&$head_elements) {

  if ($node = menu_get_object()) {
    if (($node->type == 'usa_video') || ($node->type == 'usa_tve_video')) {
      if ($node->field_full_episode[LANGUAGE_NONE][0]['value'] == '0') {
        foreach ($head_elements as $key => $element) {
          switch ($key) {
            case 'metatag_twitter:card':
              unset($head_elements[$key]);
            break;
          }
        }
      }
    }
  }
}

/**
 * Implements hook_page_alter().
 */
function aurora_usa_page_alter(&$page){
  //rewrite pub_analytics_page_alter in pub_analytics.module
  //remove escaping html elemets
  if (path_is_admin(current_path())) {
    return; // No need to track admin pages.
  }
  if (isset($page['page_bottom']['sitecatalyst'])) {
    $report_id = variable_get('sitecatalyst_report_suite_id', '');
    if (!empty($report_id)) {
      if (isset($page['page_bottom']['sitecatalyst'])) {
        $page['page_bottom']['sitecatalyst']['variables']['#markup'] = html_entity_decode(filter_xss($page['page_bottom']['sitecatalyst']['variables']['#markup']));
      }
    } else {
      unset($page['page_bottom']['sitecatalyst']);
    }
  }
}
