<?php

?>
<div id="top3-slider-wrapper">
  <div id="slider-player" data-player-src="<?php print $player; ?>"></div>
  <div id="play-button" class="round-button"></div>
  <div id="slider-container" data-nid="<?php print $nid; ?>">
    <div class="slider-wrapper">
      <?php foreach ($slides as $key => $slide) : ?>
        <div class="slide">
          <div class="slide-content">
            <div class="slide-content-inner"
                 data-slide-id="<?php print $key; ?>"
                 data-fid="<?php print $slide['fid']; ?>">
              <?php if (!empty($slide['image'])) : ?>
                <div class="img-wrapper">
                  <img src="<?php print $slide['image']; ?>">
                </div>
              <?php endif; ?>
              <?php if (!empty($slide['title'])) : ?>
                <div class="title"><?php print $slide['title']; ?></div>
              <?php endif; ?>
            </div>
            <?php if (!empty($slide['video'])): ?>
              <div class="video-data"
                   data-src="<?php print $slide['video']; ?>"
                   data-src-link="<?php print $slide['video_link']; ?>">
              </div>
            <?php endif; ?>
          </div>
        </div>
      <?php endforeach; ?>
    </div>


    <div id="counter">
      <span class="current-slide"></span>
      /
      <span class="total-slides"></span>
    </div>

    <div id="info" class="round-button"></div>
    <div
      class="container-message"><div class="message-wrapper"><div class="message-wrapper-inner"><?php print t('Sorry you have already added that item.'); ?></div></div></div>
    <div id="info-block">
      <div id="info-close" class="close-button round-button"></div>
      <div class="info-block-back"></div>
      <div class="info-block-wrapper">
        <div class="info-text">
          <div
            class="top-text"><?php print t('Select your top 3 favorite ') . $top3_title . t(' and then share them with your friends and family!'); ?></div>
          <div
            class="color-text show-color show-font"><?php print t('How it works'); ?></div>
          <div
            class="bottom-text"><?php print t('Use the icon shown below to click & drag'); ?><br><?php print t('the thumbnail into the ranking boxes.'); ?><br><?php print t('Fill all 3 boxes and share your personalized page.'); ?></div>
          <div id="start-button"
               class="show-color"><?php print t('Start now!'); ?></div>
        </div>
        <div class="help-image"></div>
        <div class="info-drag-group">
          <div class="info-drag-item"></div>
          <div class="info-drag-item"></div>
          <div class="info-drag-item"></div>
        </div>
      </div>
    </div>
    <div id="drag-icon-block">
    </div>
    <div id="share-block-preview">
      <div class="share-block-preview-wrapper">
        <div class="preview-buttons">
          <div id="share-preview-close" class="share-preview-close preview-button"><span><?php print t("Wait I'not finished"); ?></span><br><?php print t('Change selections'); ?></div>
          <div id="share-button" class="show-color preview-button"><span><?php print t("Yup! These are the best"); ?></span><br><?php print t('Create my top3 link'); ?></div>
        </div>
        <div class="preview-items-block">
          <div class="first preview-item show-color show-font" id="preview-one" data-id="one">

          </div>
          <div class="second preview-item show-color show-font" id="preview-two" data-id="two">

          </div>
          <div class="third preview-item show-color show-font" id="preview-three" data-id="three">

          </div>
        </div>
      </div>
    </div>
    <div id="share-block" class="show-color">
      <div class="share-block-gigya-container">
        <div class="top-text"><?php print t('Share your top 3 ') . $top3_title . t(' now!'); ?></div>
        <div id="gigya-share-top3"></div>
      </div>

      <div class="share-block-wrapper">
        <div class="first show-color show-font">

        </div>
        <div class="img-wrap">
          <div class="second show-color show-font">

          </div>
          <div class="third show-color show-font">

          </div>
        </div>
      </div>
    </div>
    <div id="share-img"></div>
    <div class="prev control-button"></div>
    <div class="next control-button"></div>

    <div id="drop-area" class="drop-area">
      <div class="drag-group">
        <div class="drop-area__item show-color show-font" id="one"></div>
        <div class="drop-area__item show-color show-font" id="two"></div>
        <div class="drop-area__item show-color show-font" id="three"></div>
      </div>
    </div>

  </div>
</div>
<div class="right-sidebar">

  <div class="choose-top3-img">
    <div class="top-choose-top3">
      <div
        class="first-line"><?php print t('Choose'); ?></div><?php print t(' your top '); ?>
      <span>3</span></div>
    <?php if (!empty($logo)) : ?>
      <img src="<?php print $logo; ?>" alt="">
    <?php endif; ?>
    <div
      class="bottom-choose-top3"><?php print t('& share them with your friends'); ?></div>
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
