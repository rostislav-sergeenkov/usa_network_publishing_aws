<?php
/*
* @file
* Template for main gallery view
*
* Available variables:
*  $slides: slides foe displaying
*    $slides['image'] - src for displayed image
*    $slides['title'] - gallery's item title
*    $slides['video'] - src image for video
*    $slides['video_link'] - video link
*  $logo: src for logo image in correct format
*  $node_path: Path to current node
*  $player: Player's path
*  $advert_block: Rendered advertise block
*  $isset_video: Check if video element exists
*/
?>
<div id="shared-container" class="<?php print (!empty($isset_video)) ? 'set-video' : ''; ?>">
  <div class="choose-top3-img">
    <?php if (!empty($logo_top)): ?>
      <img src="<?php print $logo_top; ?>" alt="<?php print $logo_top_alt; ?>" title="" />
    <?php endif; ?>
    <a href="<?php print $node_path; ?>" class="choose-top3-button show-color"><?php print t('create your own'); ?></a>
  </div>
  <div class="chosen-items-block show-color">
    <div class="chosen-items-inner">
      <div id="chosen-player" class="chosen-player">
        <?php if (!empty($isset_video)): ?>
          <div id="slider-player" data-player-src="<?php print $player; ?>" ></div>
        <?php endif; ?>
        <div class="img-wrapper<?php print (empty($slides[0]['video']) && empty($slides[0]['video_link'])) ? ' no-video' : ''; ?>">
          <img src="<?php print $slides[0]['image']; ?>">
        </div>
        <div class="title"><?php print (!empty($slides[0]['title']))? $slides[0]['title']: ''; ?></div>
      </div>
      <div id="chosen-items-block-wrapper" class="chosen-items-block-wrapper">
        <?php foreach ($slides as $key => $slide) : ?>
        <div class="chosen-item-thumb show-color show-font<?php print ($key == 0) ?  ' active' : '' ?><?php print (empty($slide['video']) && empty($slide['video_link'])) ? ' no-video' : ''; ?>"
             <?php print !empty($slide['video']) ? 'data-src="'.$slide['video'].'"' : ''; ?>
             <?php print !empty($slide['video_link']) ?  'data-src-link="'.$slide['video_link'].'"' : ''; ?>>
          <div class="img-wrapper">
            <img src="<?php print $slide['image']; ?>">
          </div>
          <?php if (!empty($slide['title'])): ?>
            <div class="title"><?php print $slide['title']; ?></div>
          <?php endif; ?>
        </div>
        <?php endforeach; ?>
      </div>
      <div class="node-wrapper advert">
        <div class="advertisement">
          <div id="topbox">
          <?php if (!empty($advert_block)): ?>
            <?php print $advert_block; ?>
          <?php endif; ?>
          </div
        </div>
      </div>
    </div>
  </div>
</div>
