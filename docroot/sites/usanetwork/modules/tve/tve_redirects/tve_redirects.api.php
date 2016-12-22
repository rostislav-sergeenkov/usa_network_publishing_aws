<?php

/**
 * @file
 * tve_redirects.api.php
 *
 * tve_redirects hooks implementation examples.
 *
 * Recommendation - place implementations of these hooks to a separate inc file
 * with name like:
 *  "my_module.tve_redirects.inc",
 * where 'my_module' - is module name that implements these hooks.
 *
 * @see "tve_redirects.tve_redirects.inc" file as working example.
 */

/**
 * Info hook to declare types of redirects.
 *
 * @return array
 *  An array of redirect types, keyed by the redirect type name. Each redirect
 *  type must define next keys:
 *    'title': Human friendly name of redirect type.
 *    'description': Descriptive information about redirects of this type.
 *    'path': default value for the second part of the redirect url.
 *      Basically generic url pattern for redirects is:
 *      www.example.com/{path_prefix}/{redirect_type}/{identifier}
 *      where:
 *        'path_prefix' is first (and general for all redirect types) path
 *          argument.
 *        'redirect_type' is specific (second) path argument for redirect type.
 *        'identifier' is unique id (name) of a data (media) item.
 */
function hook_tve_redirects_info() {
  $redirects = array(
    'example' => array(
      'title' => t('Example (published articles)'),
      'description' => t('Provides redirects to native node view page if target node is published and is type of "article". Otherwise redirects to front page.'),
      'path' => 'example',
    ),
  );

  return $redirects;
}

/**
 * Media (data) item loading hook.
 *
 * @param string $media_id
 *   Unique id (name) of a data (media) item.
 * @param string $media_type
 *   Type of a media to redirect (same as redirect type).
 *
 * @return mixed
 *   Loaded data (media) item (object, array, whatever) is exists.
 */
function hook_tve_redirects_media_load($media_id, $media_type) {
  if ('example' == $media_type) {
    // Load node by nid (media id) and return node object if found.
    $node = node_load($media_id);
    if ($node && $node->status) {
      return $node;
    }
  }
}

/**
 * Hook to initiate custom redirect.
 *
 * In case no conditions are met for custom redirect - basic redirect to front
 * page will be performed.
 *
 * @param string $media_type
 *   Type of a media to redirect (same as redirect type).
 * @param mixed $media_item
 *   Loaded data (media) item.
 */
function hook_tve_redirects_media_redirect($media_type, $media_item) {
  if ('example' == $media_type) {
    if ($media_item && 'article' == $media_item->type) {
      // Perform permanent redirect to node view page.
      tve_redirects_redirect('node/' . $media_item->nid);
    }
  }
}
