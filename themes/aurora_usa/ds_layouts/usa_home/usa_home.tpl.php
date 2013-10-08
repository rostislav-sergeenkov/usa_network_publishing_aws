<?php
  $slideshow = (!empty($node->field_usa_autoscroll) && $field_usa_autoscroll[$language][0]['value'] == 1)? true: null;
  $slideshowSpeed = (isset($field_usa_slide_speed[$language][0]['value']))? $field_usa_slide_speed[$language][0]['value']: null;
  $js_settings = array(
    'slideshow' => $slideshow,
    'slideshowSpeed' => $slideshowSpeed
  );
  drupal_add_js(array('homeSlides' => $js_settings), array('type' => 'setting'));
  $theme_path = drupal_get_path('theme', 'aurora_usa');
  drupal_add_js($theme_path . '/javascripts/home-sliders.js');
?>

<div class="<?php print $classes;?> usa-home">
  <div class="tiles" data-module-type="SliderTiles">
    <div class="tiles-inner">
    <?php if ($aspot): ?>
      <div id="main-slider" class="usa-home-aspot flexslider a-spot"><?php print $aspot; ?></div>
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
  <div class="usa-home-featured clearfix">
    <div class="view">
      <div class="item-list">
        <?php print $featured; ?>
      </div>
    </div>
  </div>
  <?php endif; ?>
</div>
