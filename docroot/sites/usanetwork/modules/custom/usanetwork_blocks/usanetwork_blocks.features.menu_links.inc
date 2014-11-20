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

  // Exported menu link: menu-apps-services_featured-show-apps:node/37016
  $menu_links['menu-apps-services_featured-show-apps:node/37016'] = array(
    'menu_name' => 'menu-apps-services',
    'link_path' => 'node/37016',
    'router_path' => 'node/%',
    'link_title' => 'Featured Show apps',
    'options' => array(
      'identifier' => 'menu-apps-services_featured-show-apps:node/37016',
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
  // Exported menu link: menu-apps-services_usa-on-social-media:user
  $menu_links['menu-apps-services_usa-on-social-media:user'] = array(
    'menu_name' => 'menu-apps-services',
    'link_path' => 'user',
    'router_path' => 'user',
    'link_title' => 'USA on Social Media',
    'options' => array(
      'attributes' => array(),
      'identifier' => 'menu-apps-services_usa-on-social-media:user',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 1,
  );
  // Exported menu link: menu-apps-services_usa-sync:user
  $menu_links['menu-apps-services_usa-sync:user'] = array(
    'menu_name' => 'menu-apps-services',
    'link_path' => 'user',
    'router_path' => 'user',
    'link_title' => 'USA Sync',
    'options' => array(
      'attributes' => array(),
      'identifier' => 'menu-apps-services_usa-sync:user',
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
  t('Featured Show apps');
  t('Live TV');
  t('Shop');
  t('USA NOW Viewing Apps');
  t('USA Sync');
  t('USA on Social Media');
  t('Viewing Schedule');


  return $menu_links;
}
