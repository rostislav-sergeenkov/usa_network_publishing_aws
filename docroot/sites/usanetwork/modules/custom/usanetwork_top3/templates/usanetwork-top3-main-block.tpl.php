<div id="slider-container">

  <div class="slider-wrapper">
    <?php foreach ($slides as $key => $slide) : ?>
      <div class="slide">
        <div class="play-button">play-button</div>
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


  <div class="counter">
    <span class="current-slide"></span>
    /
    <span class="total-slides"></span>
  </div>

  <div class="info">info</div>
  <div class="container-message">This slide has already chosen!</div>
  <div id="compare-button">Compare</div>
  <div id="share-block">
    <div class="first">

    </div>
    <div class="img-wrap">
      <div class="second">

      </div>
      <div class="third">

      </div>
    </div>
    <div id="share-button">Share</div>
  </div>
  <div id="share-img"></div>
  <div class="prev control-button">prev</div>
  <div class="next control-button">next</div>

  <div id="drop-area" class="drop-area show" style="z-index: 1000; margin: 120px 0px 0px;">
    <div class="numGroup" style="display: none;">
      <ul>
        <li class="num1">1</li>
        <li class="num2">2</li>
        <li class="num3">3</li>
      </ul>
    </div>
    <div class="drag-group">
      <div class="first-wrapper"></div>
      <div class="second-wrapper"></div>
      <div class="third-wrapper"></div>
      <div class="drop-area__item" id="one"></div>
      <div class="drop-area__item" id="two"></div>
      <div class="drop-area__item" id="three"></div>
    </div>
  </div>

</div>
