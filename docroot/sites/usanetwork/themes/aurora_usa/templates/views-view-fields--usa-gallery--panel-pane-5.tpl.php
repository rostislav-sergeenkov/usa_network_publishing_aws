<?php

/**
 * @file
 * Default simple view template to all the fields as a row.
 *
 * - $view: The view in use.
 * - $fields: an array of $field objects. Each one contains:
 *   - $field->content: The output of the field.
 *   - $field->raw: The raw data for the field, if it exists. This is NOT output safe.
 *   - $field->class: The safe class id to use.
 *   - $field->handler: The Views field handler object controlling this field. Do not use
 *     var_export to dump this object, as it can't handle the recursion.
 *   - $field->inline: Whether or not the field should be inline.
 *   - $field->inline_html: either div or span based on the above flag.
 *   - $field->wrapper_prefix: A complete wrapper containing the inline_html to use.
 *   - $field->wrapper_suffix: The closing tag for the wrapper.
 *   - $field->separator: an optional separator that may appear before a field.
 *   - $field->label: The wrap label text to use.
 *   - $field->label_html: The full HTML of the label to use including
 *     configured element type.
 * - $row: The raw result object from the query, with all data it fetched.
 *
 * @ingroup views_templates
 */
?>
<?php
$output = '';
$h1 = '';
foreach ($fields as $id => $field):
  if ($id == 'field_seo_h1' && strip_tags($field->content) != ''):
    $h1 = $field->content;
  endif;
  if ($id == 'title'):
    if ($h1 == ''):
      $output = '<h1><span>' . $field->content . '</span></h1>';
    else:
      $output = '<h2>' . $field->content . '</h2>' . $h1;
    endif;    
  endif;
endforeach;
print $output;
?>
