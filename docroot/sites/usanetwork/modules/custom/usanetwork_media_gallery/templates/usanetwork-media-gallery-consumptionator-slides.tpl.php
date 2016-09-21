<?php
/**
 * $slides - array of pre-rendered slides
 * $sharebar - gigya sharebar
 * $interstitial_ad_enabled - iterstatial ad enabled (1 - Yes, 0 - No)
 * $interstitial_ad_frequency - quantity of slides before ad
 */
?>
<div class="gallery-wrapper<?php print (!empty($endcard)) ? ' gallery-with-endcard' : ''; ?>" data-id="<?php print $gallery_id; ?>" data-path="<?php print $gallery_path; ?>">
  <?php if (!empty($interstitial_ad_enabled) && !empty($interstitial_ad_frequency)): ?>
    <div class="interstitial-wrap" data-slides-counter="<?php print $interstitial_ad_frequency ?>">
      <div id="gallery-interstitial-block" class="interstitial-block" data-scalemps="1"></div>
      <div class="interstitial-next">
        <span><?php print t('continue'); ?></span>
      </div>
    </div>
  <?php endif; ?>
  <div class="gallery-list">
    <?php if (!empty($slides)): ?>
      <?php foreach ($slides as $slide): ?>
        <div class="slide">
          <?php print $slide; ?>
        </div>
      <?php endforeach; ?>
    <?php endif; ?>
  </div>
  <div class="gallery-pager-wrap"></div>
  <div class="slide-next slide-control"></div>
  <div class="slide-prev slide-control"></div>
  <div class="share-bar">
    <?php if (!empty($endcard)): ?>
      <h3 class="endcard-label"><?php print t('Share the gallery'); ?></h3>
    <?php endif; ?>
    <?php print $sharebar; ?>
  </div>
</div>
