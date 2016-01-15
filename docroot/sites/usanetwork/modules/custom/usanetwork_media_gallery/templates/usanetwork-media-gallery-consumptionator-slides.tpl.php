<?php
/**
 * $slides - array of pre-rendered slides
 * $sharebar - gigya sharebar
 * $interstitial_ad_enabled - iterstatial ad enabled (1 - Yes, 0 - No)
 * $interstitial_ad_frequency - quantity of slides before ad
 */
?>
<div class="gallery-wrapper" data-id="<?php print $gallery_id; ?>">
  <?php if (!empty($slides)): ?>
    <div class="bxslider bxslider-gallery on-load">
    <?php foreach ($slides as $slide): ?>
      <div class="slide">
        <?php print $slide; ?>
      </div>
    <?php endforeach; ?>
    </div>
    <div class="share-bar">
      <?php print $sharebar; ?>
    </div>
    <?php if (!empty($interstitial_ad_enabled) && !empty($interstitial_ad_frequency)): ?>
      <div class="advert-wrap" data-slides-counter="<?php print $interstitial_ad_frequency ?>">
        <div class="advert-block"></div>
        <div class="advert-next">
          continue
        </div>
      </div>
    <?php endif; ?>
  <?php endif; ?>
</div>
