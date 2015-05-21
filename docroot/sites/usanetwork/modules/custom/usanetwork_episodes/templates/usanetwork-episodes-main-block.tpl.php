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
  <div class="episode-info-block">
    <?php print $sharebar; ?> <br>
    <?php print $episode_title; ?> <br>
    <?php print $body; ?> <br>
    <?php print $season_number; ?> <br>
    <?php print $episode_number; ?> <br>
    <?php print $episode_video_link; ?> <br>
    <?php print $image_mobile; ?> <br>
    <?php print $image_desktop; ?> <br>
    <?php print $air_date_text; ?> <br>
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
