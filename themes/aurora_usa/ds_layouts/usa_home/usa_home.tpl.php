<?php 
  $theme_path = drupal_get_path('theme', 'aurora_usa');
  drupal_add_js($theme_path . '/javascripts/home-sliders.js');
?>

<div class="<?php print $classes;?> usa-home">
  <div class="tiles" data-module-type="SliderTiles">
    <div class="tiles-inner">
    <?php if ($aspot): ?>
      <div id="main-slider" class="usa-home-aspot flexslider aspot"><?php print $aspot; ?></div>
    <?php endif; ?>
    <?php if ($ad): ?>
      <div class="usa-home-ad ad"><?php print $ad; ?></div>
    <?php endif; ?>
    <?php if ($bspot): ?>
      <div class="usa-home-bspot flexslider secondary-slider b-spot"><?php print $bspot; ?></div>
    <?php endif; ?>
    <?php if ($cspot): ?>
      <div class="usa-home-cspot flexslider secondary-slider c-spot"><?php print $cspot; ?></div>
    <?php endif; ?>
    </div>
  </div><!-- END tiles -->
  <?php if ($featured): ?>
  <div class="usa-home-featured">
    <div class="featured-carousel">
      <h2><?php print t('Featured'); ?></h2>
      <?php print $featured; ?>
    </div>
  </div>
  <?php endif; ?>
</div>