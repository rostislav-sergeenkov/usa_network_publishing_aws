<?php
/*
* @file
* Template for main gallery view
*
* Available variables:
*  $slides: slides foe displaying
*    $slides['image'] - src for displayed image
*    $slides['video'] - src image for video
*  $logo: src for logo image in correct format
*  $node_path: Path to current node
*  $top3_title: Gallery's title
*/
?>
<div id="shared-container">
  <div class="choose-top3-img">
    <div class="top-choose-top3"><div class="first-line"><?php print t('I Chose'); ?></div><?php print t('my top'); ?><span><?php print t('3'); ?></span></div>
    <?php if (!empty($logo)) : ?>
      <img src="<?php print $logo; ?>" alt="">
    <?php endif; ?>
    <a href="<?php print $node_path; ?>" class="choose-top3-button show-color"><?php print t('create your own'); ?></a>
  </div>
  <div class="chosen-items-block show-color">
    <div class="chosen-items-inner">
      <div id="chosen-player" class="chosen-player">
        <div id="slider-player" data-player-src="<?php print $player; ?>"></div>
        <div class="img-wrapper">
          <img src="<?php print $active_element['image']; ?>">
        </div>
        <?php if (!empty($active_element['title'])): ?>
          <div class="title"><?php print $active_element['title']; ?></div>
        <?php endif; ?>
      </div>
      <div id="chosen-items-block-wrapper" class="chosen-items-block-wrapper">
        <?php foreach ($slides as $key => $slide) : ?>
        <div class="chosen-item-thumb first show-color show-font<?php print ($key == 0) ?  ' active' : '' ?>"
             data-src="<?php print !empty($slide['video']) ? $slide['video'] : ''; ?>"
             data-src-link="<?php print !empty($slide['video_link']) ? $slide['video_link'] : ''; ?>">
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
