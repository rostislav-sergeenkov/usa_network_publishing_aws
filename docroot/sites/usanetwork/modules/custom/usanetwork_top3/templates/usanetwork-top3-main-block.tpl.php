<?php

?>
<div id="slider-container">

  <div class="slider-wrapper">
    <?php foreach ($slides as $key => $slide) : ?>
      <div class="slide">
        <div class="play-button"></div>
        <div class="slide-content">
          <div class="slide-content-inner" data-slide-id="<?php print $key; ?>">
            <div class="img-wrapper">
              <img src="<?php print $slide['image']; ?>">
            </div>
          </div>
          <div class="video-wrapper hide-block"
                 data-src="//player.theplatform.com/p/HNK2IC/dd_usa_vod_noauth/embed/select/EJIlKSvvTE19?autoPlay=false">
              <div class="fix-drag"></div>
            </div>
<!--            <div class="video-wrapper hide-block --><?php //($slide['is_video']) ? print 'is-video' : FALSE; ?><!--"></div>-->
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
  <div id="info-close"></div>
  <div class="container-message">This slide has already chosen!</div>
  <div id="info-block">
    <div class="top-text">Select your top 3 favorite Todd-isms and then share them with your friends and family!</div>
    <div class="color-text show-color show-font">How it works</div>
    <div class="bottom-text">Use the icon shown below to click & drag the thumbnail into the ranking boxes. Fill all 3 boxes and share your personalized page.</div>
    <div class="help-image"></div>
  </div>
  <div id="share-block-preview">
    <div class="first-text-line">Click and drag the thumbnails over a different box to change the order</div>
    <div class="first">

    </div>
    <div class="second">

    </div>
    <div class="third">

    </div>
    <div class="second-text-line">Generate your custom share link</div>
  </div>
  <div id="share-block">
    <div class="first">

    </div>
    <div class="img-wrap">
      <div class="second">

      </div>
      <div class="third">

      </div>
    </div>
  </div>
  <div id="share-img"></div>
  <div class="prev control-button"></div>
  <div class="next control-button"></div>

  <div id="drop-area" class="drop-area show">
    <div class="numGroup" style="display: none;">
      <ul>
        <li class="num1">1</li>
        <li class="num2">2</li>
        <li class="num3">3</li>
      </ul>
    </div>
    <div class="drag-group">
      <div class="drop-area__item show-color" id="one"></div>
      <div class="drop-area__item show-color" id="two"></div>
      <div class="drop-area__item show-color" id="three"></div>
    </div>
  </div>

</div>
<div class="right-sidebar">
  <div class="choose-top3-img">
  </div>
  <div id="share-button">Share</div>
  <div id="share-button-temp">Share</div>
  <div class="node-wrapper advert">
    <div class="advertisement">
      <div id="topbox">
      </div
    </div>
  </div>
</div>
