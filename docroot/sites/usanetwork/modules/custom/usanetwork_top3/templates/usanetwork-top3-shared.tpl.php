<?php

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
      <div class="chosen-items-block-wrapper">
        <div class="first show-color show-font">
          <div class="img-wrapper">
            <img src="<?php print $slides[0]['image']; ?>">
          </div>
          <?php if (isset($slides[0]['title'])): ?>
            <div class="title"><?php print $slides[0]['title']; ?></div>
          <?php endif; ?>
        </div>
        <div class="img-wrap">
          <div class="second show-color show-font">
            <div class="img-wrapper">
              <img src="<?php print $slides[1]['image']; ?>">
            </div>
            <?php if (isset($slides[1]['title'])): ?>
              <div class="title"><?php print $slides[1]['title']; ?></div>
            <?php endif; ?>
          </div>
          <div class="third show-color show-font">
            <div class="img-wrapper">
              <img src="<?php print $slides[2]['image']; ?>">
            </div>
            <?php if (isset($slides[2]['title'])): ?>
              <div class="title"><?php print $slides[2]['title']; ?></div>
            <?php endif; ?>
          </div>
        </div>
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
