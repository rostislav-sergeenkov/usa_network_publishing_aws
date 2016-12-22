<?php

/**
 * @file
 * usanetwork_quiz.api.php
 *
 * usanetwork_quiz hooks implementation examples.
 *
 */

/**
 * Quiz themes are defined in drupal theme folder.
 *
 * Create a quiz_themes folder and then a folder name that will
 * be used as key for the theme. The folder should at least have 1 file:
 *
 * - key.inc
 *
  * key.inc must look like this:
 *

// Fuction name is usanetwork_quiz_theme_KEY
  function usanetwork_quiz_theme_key() {
    return array(
      'title' => t('Example theme'),
      'css' => array(       // optional
        'style.css',        // array of css file names relative to theme path
      ),
      'js' => array(       // optional
        'script.js',       // array of javascript file names relative to theme path
      ),
    );
  }
 */

/**
 * hook_usanetwork_quiz_themes_alter(&$themes)
 * Hook for altering themes info.
 *
 * @param array $themes
 *   Set of theme info arrays. See themes definition described earlier.
 */
function hook_usanetwork_quiz_themes_alter(&$themes) {

}
