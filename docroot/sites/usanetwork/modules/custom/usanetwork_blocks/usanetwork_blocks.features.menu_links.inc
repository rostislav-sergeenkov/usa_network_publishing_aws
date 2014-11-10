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

  // Exported menu link: menu-apps-services_featured-show-apps:user
  $menu_links['menu-apps-services_featured-show-apps:user'] = array(
    'menu_name' => 'menu-apps-services',
    'link_path' => 'user',
    'router_path' => 'user',
    'link_title' => 'Featured Show apps',
    'options' => array(
      'attributes' => array(),
      'identifier' => 'menu-apps-services_featured-show-apps:user',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 1,
  );
  // Exported menu link: menu-apps-services_live-tv:user
  $menu_links['menu-apps-services_live-tv:user'] = array(
    'menu_name' => 'menu-apps-services',
    'link_path' => 'user',
    'router_path' => 'user',
    'link_title' => 'Live TV',
    'options' => array(
      'attributes' => array(),
      'identifier' => 'menu-apps-services_live-tv:user',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 1,
  );
  // Exported menu link: menu-apps-services_shop:user
  $menu_links['menu-apps-services_shop:user'] = array(
    'menu_name' => 'menu-apps-services',
    'link_path' => 'user',
    'router_path' => 'user',
    'link_title' => 'Shop',
    'options' => array(
      'attributes' => array(),
      'identifier' => 'menu-apps-services_shop:user',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 1,
  );
  // Exported menu link: menu-apps-services_usa-now-viewing-apps:user
  $menu_links['menu-apps-services_usa-now-viewing-apps:user'] = array(
    'menu_name' => 'menu-apps-services',
    'link_path' => 'user',
    'router_path' => 'user',
    'link_title' => 'USA NOW Viewing Apps',
    'options' => array(
      'attributes' => array(),
      'identifier' => 'menu-apps-services_usa-now-viewing-apps:user',
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
  // Exported menu link: menu-apps-services_viewing-schedule:user
  $menu_links['menu-apps-services_viewing-schedule:user'] = array(
    'menu_name' => 'menu-apps-services',
    'link_path' => 'user',
    'router_path' => 'user',
    'link_title' => 'Viewing Schedule',
    'options' => array(
      'attributes' => array(),
      'identifier' => 'menu-apps-services_viewing-schedule:user',
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
