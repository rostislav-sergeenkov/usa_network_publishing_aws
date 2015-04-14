<?php
/**
 *
 */
?>
<div class="aspot-and-episodes <?php print !empty($episodes)? 'episodes-'.count($episodes): 'episodes-empty'; ?>">
  <div class="show-aspot">
    <?php if (!empty($show)): ?>
      <?php print $show ?>
    <?php endif; ?>
  </div>
  <?php if (!empty($episodes)): ?>
    <div class="episodes-list">
      <?php if (!empty($episodes_block_title)): ?>
        <div class="title show-color">
          <div class="title-wrapper">
            <h2><?php print $episodes_block_title; ?></h2>
          </div>
        </div>
      <?php endif; ?>
      <div class="episodes-list-slider vertical" data-mode="vertical">
        <ul class="slider-vertical">
          <?php foreach ($episodes as $episode): ?>
            <li class="slide-item">
              <div class="node node-usanetwork-promo aspot-carousel-promo">
                <a href="<?php print !empty($episode['url']) ? $episode['url'] : '#'; ?>">
                  <div class="meta-wrapper">
                    <div class="meta-wrapper-inner">
                      <div class="meta-icon play-icon resize-avail-1024"></div>
                      <div class="meta">
                        <?php if (!empty($episode['violator'])): ?>
                          <div class="caption"><?php print $episode['violator']; ?></div>
                        <?php endif; ?>
                        <?php if (!empty($episode['title'])): ?>
                          <div class="title"><?php print $episode['title']; ?></div>
                        <?php endif; ?>
                        <?php if (!empty($episode['description'])): ?>
                          <div class="additional"><?php print $episode['description']; ?></div>
                        <?php endif; ?>
                      </div>
                    </div>
                  </div>
                  <?php if (!empty($episode['image_url'])): ?>
                    <div class="asset-img"><?php print $episode['image_url']; ?></div>
                  <?php endif; ?>
                </a>
              </div>
            </li>
          <?php endforeach; ?>
        </ul>
      </div>
        <style>
            .episodes-list-slider.horizontal .bx-controls {
                display: none;
            }
            .episodes-list-slider.horizontal:hover .bx-controls {
                display: block;
            }
            .episodes-list-slider.horizontal .bx-controls a {
                display: block;
                position: absolute;
                top: 54px;
                height: 100%;
                z-index: 9;
                -webkit-transition: width 0.5s ease-out 0.3s;
                -moz-transition: width 0.5s ease-out 0.3s;
                -o-transition: width 0.5s ease-out 0.3s;
                transition: width 0.5s ease-out 0.3s;
                background: rgba(255,255,255,0.6);
            }
            .episodes-list-slider.horizontal .bx-controls a.bx-prev {
                left: 0;
                width: 60px;
            }
            .episodes-list-slider.horizontal .bx-controls a.bx-next {
                right: 0;
                width: 60px;
            }
            .episodes-list-slider.horizontal .bx-controls a:after {
                color: #545454;
                display: block;
                font-family: "ico-font";
                font-size: 32px;
                left: 50%;
                margin-left: -16px;
                margin-top: -16px;
                opacity: 1;
                position: absolute;
                -webkit-transition: opacity 0.5s ease-out 0.3s;
                -moz-transition: opacity 0.5s ease-out 0.3s;
                -o-transition: opacity 0.5s ease-out 0.3s;
                transition: opacity 0.5s ease-out 0.3s;
                top: 42%;
            }
            .episodes-list-slider.horizontal .bx-controls a.bx-prev:after {
                content: "\e607";
            }
            .episodes-list-slider.horizontal .bx-controls a.bx-next:after {
                content: "\e608";
            }
        </style>
      <div class="episodes-list-slider horizontal show-border" data-mode="horizontal">
        <ul class="slider-horizontal">
          <?php foreach ($episodes as $episode): ?>
            <li class="slide-item">
              <div class="node node-usanetwork-promo aspot-carousel-promo">
                <a href="<?php print !empty($episode['url']) ? $episode['url'] : '#'; ?>">
                  <div class="meta-wrapper">
                    <div class="meta-wrapper-inner">
                      <div class="meta-icon play-icon resize-avail-1024"></div>
                      <div class="meta">
                        <?php if (!empty($episode['violator'])): ?>
                          <div class="caption"><?php print $episode['violator']; ?></div>
                        <?php endif; ?>
                        <?php if (!empty($episode['title'])): ?>
                          <div class="title"><?php print $episode['title']; ?></div>
                        <?php endif; ?>
                        <?php if (!empty($episode['description'])): ?>
                          <div class="additional"><?php print $episode['description']; ?></div>
                        <?php endif; ?>
                      </div>
                    </div>
                  </div>
                  <?php if (!empty($episode['image_url'])): ?>
                    <div class="asset-img"><?php print $episode['image_url']; ?></div>
                  <?php endif; ?>
                </a>
              </div>
            </li>
          <?php endforeach; ?>
        </ul>
        <div class="more-button-wrapper">
          <a href="javascript:void(o)" class="more-button more">
            <span class="more-text"><?php print t('Load More'); ?></span>
            <span class="close-text"><?php print t('Close'); ?></span>
          </a>
        </div>
      </div>
    </div>
  <?php endif; ?>
</div>

