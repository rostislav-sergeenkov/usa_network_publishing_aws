<?php

/**
 * @file
 * Replaces some Core text filters with a version that supports HTML5 tags and attributes.
 */

/**
 * Load the HTML5 library and return an instance of it.
 */
function html5_tools_get_html5_instance() {
  if (($library = libraries_load('html5-php')) && !empty($library['loaded'])) {
    $html5 = new \Masterminds\HTML5();
    return $html5;
  }

  throw new Exception('HTML5-PHP could not be loaded!');
}

/**
 * Implements hook_filter_info_alter().
 */
function html5_tools_filter_info_alter(&$info) {
  if (variable_get('html5_tools_replace_filters', 1)) {
    $info['filter_html']['process callback'] = '_html5_tools_filter_html';
    $info['filter_htmlcorrector']['process callback'] = '_html5_tools_filter_htmlcorrector';
  }
}

/**
 * Parses an HTML snippet and returns it as a DOM object.
 *
 * This function loads the body part of a partial HTML document and returns
 * a full DOMDocument object that represents this document. You can use
 * filter_dom_serialize() to serialize this DOMDocument back to a HTML5
 * snippet.
 *
 * @param $text
 *   The partial HTML snippet to load. Invalid mark-up will be corrected on
 *   import.
 * @return
 *   A DOMDocument that represents the loaded HTML snippet.
 *
 * @replaces filter_dom_load()
 */
function html5_tools_filter_dom_load($text) {
  $html5 = html5_tools_get_html5_instance();

  $text = <<<EOL
<!DOCTYPE html>
<html>
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head>
<body>$text</body>
</html>
EOL;

  $dom_document = $html5->loadHTML($text);
  return $dom_document;
}

/**
 * Converts a DOM object back to an HTML snippet.
 *
 * The function serializes the body part of a DOMDocument back to an XHTML
 * snippet. The resulting XHTML snippet will be properly formatted to be
 * compatible with HTML user agents.
 *
 * @param $dom_document
 *   A DOMDocument object to serialize, only the tags below
 *   the first <body> node will be converted.
 *
 * @return
 *   A valid (X)HTML snippet, as a string.
 */
function html5_tools_filter_dom_serialize($dom_document) {
  $body_node = $dom_document->getElementsByTagName('body')->item(0);
  $body_content = '';

  foreach ($body_node->getElementsByTagName('script') as $node) {
    filter_dom_serialize_escape_cdata_element($dom_document, $node);
  }

  foreach ($body_node->getElementsByTagName('style') as $node) {
    filter_dom_serialize_escape_cdata_element($dom_document, $node, '/*', '*/');
  }

  $html5 = html5_tools_get_html5_instance();
  foreach ($body_node->childNodes as $child_node) {
    $body_content .= $html5->saveHTML($child_node);
  }
  return preg_replace('|<([^> ]*)/>|i', '<$1 />', $body_content);
}

/**
 * Implements callback_filter_process().
 *
 * Provides filtering of input into accepted HTML.
 */
function _html5_tools_filter_html($text, $filter) {
  $allowed_tags = preg_split('/\s+|<|>/', $filter->settings['allowed_html'], -1, PREG_SPLIT_NO_EMPTY);
  $text = filter_xss($text, $allowed_tags);

  if ($filter->settings['filter_html_nofollow']) {
    $html_dom = html5_tools_filter_dom_load($text);
    $links = $html_dom->getElementsByTagName('a');
    foreach ($links as $link) {
      $link->setAttribute('rel', 'nofollow');
    }
    $text = html5_tools_filter_dom_serialize($html_dom);
  }

  return trim($text);
}

/**
 * Implements callback_filter_process().
 *
 * Scans the input and makes sure that HTML tags are properly closed.
 */
function _html5_tools_filter_htmlcorrector($text) {
  return html5_tools_filter_dom_serialize(html5_tools_filter_dom_load($text));
}
