<?php
/**
 * @file
 * usanetwork_blocks.features.menu_links.inc
 */

/**
 * Implements hook_menu_default_menu_links().
 */
function usanetwork_blocks_menu_default_menu_links() {
  $menu_links = array();

  // Exported menu link: menu-apps-services_character-arcade:http://www.characterarcade.com
  $menu_links['menu-apps-services_character-arcade:http://www.characterarcade.com'] = array(
    'menu_name' => 'menu-apps-services',
    'link_path' => 'http://www.characterarcade.com',
    'router_path' => '',
    'link_title' => 'Character Arcade',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-apps-services_character-arcade:http://www.characterarcade.com',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 1,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 1,
  );
  // Exported menu link: menu-apps-services_characters-unite:http://www.charactersunite.com
  $menu_links['menu-apps-services_characters-unite:http://www.charactersunite.com'] = array(
    'menu_name' => 'menu-apps-services',
    'link_path' => 'http://www.charactersunite.com',
    'router_path' => '',
    'link_title' => 'Characters Unite',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-apps-services_characters-unite:http://www.charactersunite.com',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 1,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 1,
  );
  // Exported menu link: menu-apps-services_live-tv:videos/live
  $menu_links['menu-apps-services_live-tv:videos/live'] = array(
    'menu_name' => 'menu-apps-services',
    'link_path' => 'videos/live',
    'router_path' => 'videos/live',
    'link_title' => 'Live TV',
    'options' => array(
      'identifier' => 'menu-apps-services_live-tv:videos/live',
      'attributes' => array(),
      'item_attributes' => array(
        'id' => '',
        'class' => '',
        'style' => '',
      ),
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 1,
  );
  // Exported menu link: menu-apps-services_movies:node/51
  $menu_links['menu-apps-services_movies:node/51'] = array(
    'menu_name' => 'menu-apps-services',
    'link_path' => 'node/51',
    'router_path' => 'node/%',
    'link_title' => 'Movies',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-apps-services_movies:node/51',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 1,
  );
  // Exported menu link: menu-apps-services_shop:http://www.nbcuniversalstore.com/?v=usa
  $menu_links['menu-apps-services_shop:http://www.nbcuniversalstore.com/?v=usa'] = array(
    'menu_name' => 'menu-apps-services',
    'link_path' => 'http://www.nbcuniversalstore.com/?v=usa',
    'router_path' => '',
    'link_title' => 'Shop',
    'options' => array(
      'identifier' => 'menu-apps-services_shop:http://www.nbcuniversalstore.com/?v=usa',
      'attributes' => array(),
      'item_attributes' => array(
        'id' => '',
        'class' => '',
        'style' => '',
      ),
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 1,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 1,
  );
  // Exported menu link: menu-apps-services_usa-now-viewing-apps:node/37016
  $menu_links['menu-apps-services_usa-now-viewing-apps:node/37016'] = array(
    'menu_name' => 'menu-apps-services',
    'link_path' => 'node/37016',
    'router_path' => 'node/%',
    'link_title' => 'USA NOW Viewing Apps',
    'options' => array(
      'identifier' => 'menu-apps-services_usa-now-viewing-apps:node/37016',
      'attributes' => array(),
      'item_attributes' => array(
        'id' => '',
        'class' => '',
        'style' => '',
      ),
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 1,
  );
  // Exported menu link: menu-apps-services_viewing-schedule:schedule
  $menu_links['menu-apps-services_viewing-schedule:schedule'] = array(
    'menu_name' => 'menu-apps-services',
    'link_path' => 'schedule',
    'router_path' => 'schedule',
    'link_title' => 'Viewing Schedule',
    'options' => array(
      'identifier' => 'menu-apps-services_viewing-schedule:schedule',
      'attributes' => array(),
      'item_attributes' => array(
        'id' => '',
        'class' => '',
        'style' => '',
      ),
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 1,
  );
  // Translatables
  // Included for use with string extractors like potx.
  t('Character Arcade');
  t('Characters Unite');
  t('Live TV');
  t('Movies');
  t('Shop');
  t('USA NOW Viewing Apps');
  t('Viewing Schedule');


  return $menu_links;
}
