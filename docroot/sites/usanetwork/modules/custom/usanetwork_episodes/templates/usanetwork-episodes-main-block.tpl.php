<?php
/**
* $sharebar - html placeholder for JS, for sharebar rendering.
* $episode_title - string
* $body - html
* $season_number - integer
* $episode_number - integer
* $episode_video_link - link for "Wath the episode" button.
* $image_mobile - URL for img.
* $image_desktop - URL for img.
* $air_date_text - string
* $ep_carousel - rendered episode carousel block
* $gallery_rec - rendered gallery recap block
*/
?>
<div class="consumptionator-episode-main-block">
  <div class="episode-info-main-block">
    <div class="episode-info-block">
      <div class="episode-info-header">
        <div class="episode-title-block">
          <div class="episode-title">
            <?php print $episode_title; ?>
          </div>
          <div class="additional">
            <?php print t('S').$season_number.t(' episode ').$episode_number.'<span class="aired">'.t('Aired on ').'</span>'.$air_date_text; ?>
          </div>
        </div>
        <div class="share">
          <?php print $sharebar; ?>
        </div>
        <?php if (!empty($episode_video_link)): ?>
          <div class="episode-button">
            <a href="<?php print $episode_video_link; ?>"></a>
          </div>
        <?php endif; ?>
      </div>
      <div class="episode-info-image">
        <?php if (!empty($image_desktop)): ?>
          <div class="asset-img"><img src="<?php print $image_desktop; ?>" alt="" title="<?php print $episode_title; ?>" /></div>
        <?php endif; ?>
      </div>
      <div class="node-wrapper advert">
        <div class="advertisement">
        </div>
      </div>
      <div class="episode-info-description">
        <?php if (!empty($body)): ?>
          <?php print $body; ?>
        <?php endif; ?>
      </div>
    </div>
    <?php if (!empty($gallery_rec)): ?>
      <div class="gallery-recap-block">
        <?php print $gallery_rec; ?>
      </div>
    <?php endif; ?>
  </div>
  <div class="consum-sidebar">
    <?php if (!empty($ep_carousel)): ?>
      <?php print $ep_carousel; ?>
    <?php endif; ?>
  </div>
</div>
