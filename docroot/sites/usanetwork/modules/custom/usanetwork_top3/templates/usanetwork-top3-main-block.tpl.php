<?php

?>
<div id="slider-container" data-nid="<?php print $nid; ?>">

  <div class="slider-wrapper">
    <?php foreach ($slides as $key => $slide) : ?>
      <div class="slide">
        <?php if (!empty($slide['video'])): ?>
          <div class="play-button"></div>
        <?php endif; ?>
        <div class="slide-content">
          <div class="slide-content-inner" data-slide-id="<?php print $key; ?>" data-fid="<?php print $slide['fid']; ?>">
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
            <div class="video-wrapper hide-block"
                 data-src="<?php print $slide['video']; ?>">
              <div class="fix-drag"></div>
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

  <div id="info"></div>
  <div class="container-message">Sorry you have already added that item.</div>
  <div id="info-block">
    <div id="info-close" class="close-button"></div>
    <div class="info-block-wrapper">
      <div class="info-text">
        <div class="top-text">Select your top 3 favorite Todd-isms and then share them with your friends and family!</div>
        <div class="color-text show-color show-font">How it works</div>
        <div class="bottom-text">Use the icon shown below to click & drag the thumbnail into the ranking boxes. Fill all 3 boxes and share your personalized page.</div>
        <div id="start-button" class="show-color">Start now!</div>
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
    <div id="share-preview-close" class="close-button"></div>
    <div class="share-block-preview-wrapper show-color">
      <div class="first-text-line">CLICK AND DRAG THE THUMBNAILS OVER A DIFFERENT BOX TO CHANGE THE ORDER OR CLOSE TO CONTINUE PICKING YOUR TOP 3</div>
      <div class="preview-items-block">
        <div class="first preview-item" id="preview-one" data-id="one">

        </div>
        <div class="second preview-item" id="preview-two" data-id="two">

        </div>
        <div class="third preview-item" id="preview-three" data-id="three">

        </div>
      </div>
      <div class="last-text-line">Generate your custom share link</div>
    </div>
  </div>
  <div id="share-block" class="show-color">
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
<div class="right-sidebar">

  <div class="choose-top3-img">
    <div class="top-choose-top3"><div class="first-line">Choose</div> your top <span>3</span></div>
    <?php if (!empty($logo)) : ?>
      <img src="<?php print $logo; ?>" alt="">
    <?php endif; ?>
    <div class="bottom-choose-top3">& share them with your friends</div>
  </div>

  <div id="share-button" class="show-color">Share</div>
  <div id="gigya-share-top3"></div>
  <div class="node-wrapper advert">
    <div class="advertisement">
      <div id="topbox">
      </div
    </div>
  </div>
</div>
