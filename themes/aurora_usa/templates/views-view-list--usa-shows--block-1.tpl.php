<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * - $title : The title of this group of rows.  May be empty.
 * - $options['type'] will either be ul or ol.
 * @ingroup views_templates
 */
?>
<?php print $wrapper_prefix; ?>
  <?php if (!empty($title)) : ?>
    <h3><?php print $title; ?></h3>
  <?php endif; ?>
  <?php print $list_type_prefix; ?>  
    <?php foreach ($rows as $id => $row): ?>
      <?php if($id == 0): ?>
         <li class="<?php print $classes_array[$id]; ?>"><a href="/social/"><img src="/<?php print drupal_get_path('theme','aurora_usa') . '/images/usaall_221x184.jpg'; ?>" /></a></li>
      <?php continue; endif; ?>
      <li class="<?php print $classes_array[$id]; ?>"><?php print $row; ?></li>
    <?php endforeach; ?>
  <?php print $list_type_suffix; ?>
<?php print $wrapper_suffix; ?>
