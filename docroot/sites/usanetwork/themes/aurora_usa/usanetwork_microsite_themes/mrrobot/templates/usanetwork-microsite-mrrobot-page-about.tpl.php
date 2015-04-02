<?php
/**
 * Template of About page
 *
 * Variables:
 * - $about_quotations - array of quotations:
 * -  - $about_quotations[n]['quote'] - string value of quote
 * -  - $about_quotations[n]['source'] - string value of source
 * - $title - string value of page title
 * - $description - string value of page description
 * - $background_url - the URL of page background
 * - $ad300x250 - the code to render the 300 x 250 ad
 */
?>

<div class="full-pane">
  <?php if (!empty($title) || !empty($description)): ?>
    <?php if (!empty($h1) && $status == 'active'): ?>
    <h1><?php print $h1; ?></h1>
    <?php elseif (!empty($h1)): ?>
    <h2><?php print $h1; ?></h2>
    <?php else: ?>
      <?php if (!empty($title)): ?>
      <h2><?php print $title; ?></h2>
      <?php endif; ?>
    <div class="underline"></div>
    <?php endif; ?>
    <?php if (!empty($description)): ?>
    <div class="text">
      <?php print $description ?>
    </div>
    <?php endif; ?>
  <?php endif; ?>
</div>

