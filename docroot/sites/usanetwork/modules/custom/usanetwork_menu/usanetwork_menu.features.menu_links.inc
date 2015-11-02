<?php
/**
 * @file
 * usanetwork_menu.features.menu_links.inc
 */

/**
 * Implements hook_menu_default_menu_links().
 */
function usanetwork_menu_menu_default_menu_links() {
  $menu_links = array();

  // Exported menu link: main-menu_full-episodes:videos
  $menu_links['main-menu_full-episodes:videos'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'videos',
    'router_path' => 'videos',
    'link_title' => 'Full episodes',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'main-menu_full-episodes:videos',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -49,
    'customized' => 1,
  );
  // Exported menu link: main-menu_home:<front>
  $menu_links['main-menu_home:<front>'] = array(
    'menu_name' => 'main-menu',
    'link_path' => '<front>',
    'router_path' => '',
    'link_title' => 'Home',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'main-menu_home:<front>',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 1,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -45,
    'customized' => 1,
  );
  // Exported menu link: main-menu_movies:movies
  $menu_links['main-menu_movies:movies'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'movies',
    'router_path' => 'movies',
    'link_title' => 'Movies',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'main-menu_movies:movies',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -48,
    'customized' => 1,
  );
  // Exported menu link: main-menu_schedule:schedule
  $menu_links['main-menu_schedule:schedule'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'schedule',
    'router_path' => 'schedule',
    'link_title' => 'Schedule',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'main-menu_schedule:schedule',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -47,
    'customized' => 1,
  );
  // Exported menu link: main-menu_shop:http://www.nbcuniversalstore.com/?v=usa
  $menu_links['main-menu_shop:http://www.nbcuniversalstore.com/?v=usa'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'http://www.nbcuniversalstore.com/?v=usa',
    'router_path' => '',
    'link_title' => 'Shop',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'main-menu_shop:http://www.nbcuniversalstore.com/?v=usa&ecid=PRF-NBC-103357&pa=PRF-NBC-103357',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 1,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -46,
    'customized' => 1,
  );
  // Exported menu link: main-menu_shows:<nolink>
  $menu_links['main-menu_shows:<nolink>'] = array(
    'menu_name' => 'main-menu',
    'link_path' => '<nolink>',
    'router_path' => '<nolink>',
    'link_title' => 'Shows',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'main-menu_shows:<nolink>',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
  );
  // Translatables
  // Included for use with string extractors like potx.
  t('Full episodes');
  t('Home');
  t('Movies');
  t('Schedule');
  t('Shop');
  t('Shows');


  return $menu_links;
}
