<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * - $title : The title of this group of rows.  May be empty.
 * - $options['type'] will either be ul or ol.
 * @ingroup views_templates
 */

/* 
  initial li is hardcoded b/c USA wants to show 'USA' image as first image in carousel"
*/
$class = arg(0) == 'social' ? 'active' : '';
?>
<?php print $wrapper_prefix; ?>
  <?php if (!empty($title)) : ?>
    <h3><?php print $title; ?></h3>
  <?php endif; ?>
  <?php print $list_type_prefix; ?>  
    <li class="carousel-item <?php print $class; ?>">
      <a href="/social/">
        <figure>
          <img src="/<?php print drupal_get_path('theme','aurora_usa') . '/images/usaall_221x184.jpg'; ?>" />
        </figure>
         <h4>USA All</h4>
      </a>
    </li>
    <?php foreach ($rows as $id => $row): ?>
      <li class="<?php print $classes_array[$id]; ?>"><?php print $row; ?></li>
    <?php endforeach; ?>
  <?php print $list_type_suffix; ?>
<?php print $wrapper_suffix; ?>
