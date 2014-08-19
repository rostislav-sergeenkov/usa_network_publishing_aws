<?php
/**
 * @file
 * This template is used to print a single field in a view.
 *
 * It is not actually used in default Views, as this is registered as a theme
 * function which has better performance. For single overrides, the template is
 * perfectly okay.
 *
 * Variables available:
 * - $view: The view object
 * - $field: The field handler object that can process the input
 * - $row: The raw SQL result that can be used
 * - $output: The processed output that will normally be used.
 *
 * When fetching output from the $row, this construct should be used:
 * $data = $row->{$field->field_alias}
 *
 * The above will guarantee that you'll always get the correct data,
 * regardless of any changes in the aliasing that might happen if
 * the view is modified.
 */
?>
<?php if ($row->field_field_cover_item[0]['rendered']['#view_mode'] == 'block_cover_title'):?>
<?php
  $output = '';
  $filepath = $row->field_field_cover_item[0]['rendered']['file']['#path'];
  $alt = $row->field_field_cover_item[0]['rendered']['#file']->alt;
  $title = $row->field_field_cover_item[0]['rendered']['#file']->title;
  $data_src = image_style_url('gallery_block_cover', $filepath);
  $output .= '<img src="" data-src="' . $data_src . '" alt="' . $alt . '" title="' . $title . '"/>';
  $output .= '<noscript>';
  $output .= theme('image_style', array('style_name' => 'gallery_block_cover', 'path' => $filepath, 'alt' => $alt, 'title' => $title));
  $output .= '</noscript>';
?>
<?php endif; ?>
<?php print $output; ?>