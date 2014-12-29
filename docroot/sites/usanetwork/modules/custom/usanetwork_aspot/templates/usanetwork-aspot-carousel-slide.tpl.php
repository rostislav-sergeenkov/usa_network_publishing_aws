<?php
/**
 * $show_image_bg_offset
 */
?>
<div class="slide">
  <div class="wrp">
    <div class="node usanetwork-aspot <?php print $show_class; ?>" data-show="<?php print $show_class; ?>">
      <a href="<?php print $show_url; ?>" target="_self">
      <?php if (!empty($show_poster)): ?>
        <div class="asset-img" data-picture data-alt="" data-class="tile-img">
          <?php if (!empty($show_poster['mobile'])): ?>
            <div data-src="<?php print $show_poster['mobile']; ?>"></div>
          <?php endif; ?>
          <?php if (!empty($show_poster['mobile_retina'])): ?>
            <div data-media="(min-device-pixel-ratio: 2.0)" data-src="<?php print $show_poster['mobile_retina']; ?>"></div>
          <?php endif; ?>
          <?php if (!empty($show_poster['tablet'])): ?>
            <div data-media="(min-width: 641px)" data-src="<?php print $show_poster['tablet']; ?>"></div>
          <?php endif; ?>
          <?php if (!empty($show_poster['tablet_retina'])): ?>
            <div data-media="(min-width: 641px) and (min-device-pixel-ratio: 2.0)" data-src="<?php print $show_poster['tablet_retina']; ?>"></div>
          <?php endif; ?>
          <?php if (!empty($show_poster['desktop'])): ?>
            <div data-media="(min-width: 1025px)" data-src="<?php print $show_poster['desktop']; ?>"></div>
            <!--[if (IE 8) & (!IEMobile)]><!-->
            <div data-src="<?php print $show_poster['desktop']; ?>"></div>
            <!--<![endif]-->
          <?php endif; ?>
          <?php if (!empty($show_poster['desktop_retina'])): ?>
            <div data-media="(min-width: 1025px) and (min-device-pixel-ratio: 2.0)" data-src="<?php print $show_poster['desktop_retina']; ?>"></div>
          <?php endif; ?>
          <?php if (!empty($show_poster['desktop'])): ?>
            <noscript><img src="<?php print $show_poster['desktop']; ?>" width="2500" height="1407" alt="" title="" /></noscript>
          <?php endif; ?>

        </div>
      <?php endif; ?>
      </a>
      <div class="slide-content">
        <div class="meta-wrap">
          <div class="meta">
            <div class="new-episode"<?php if (!empty($show_title_prefix_style)): print ' style="' . $show_title_prefix_style . '"'; endif; ?>><?php print $show_title_prefix; ?></div>
            <div class="show-title"<?php if (!empty($show_title_style)): print ' style="' . $show_title_style . '"'; endif; ?>><?php print $show_title; ?></div>
            <?php if (!empty($show_timer)): ?>
              <div class="show-timer">
                <div class="start"<?php if (!empty($show_timer['title_prefix_style'])): print ' style="' . $show_timer['title_prefix_style'] . '"'; endif; ?>>
                  <?php print $show_timer['title_prefix']; ?>
                </div>
                <div class="timer" data-timer="<?php print $show_timer['value']; ?>"<?php
                  if (!empty($show_timer['countdown_style'])):
                    print ' style="' . $show_timer['countdown_style'] . '"';
                  endif; ?>></div>
              </div>
            <?php endif; ?>
            <?php if (!empty($cta_buttons)): ?>
              <?php foreach ($cta_buttons as $cta_button): ?>
                <div class="cta-link"<?php if (!empty($cta_button['style'])): print ' style="' . $cta_button['style'] . '"'; endif; ?>>
                  <a href="<?php print $cta_button['url']; ?>" class="show-color hover-avail"><?php print $cta_button['text']; ?></a>
                </div>
              <?php endforeach; ?>
            <?php endif; ?>
          </div>
        </div>
        <?php /*if (!empty($social_meter)): ?>
          <div class="social-meter"<?php if (!empty($social_meter['style'])): print ' style="' . $social_meter['style'] . '"'; endif; ?>>
            <div class="subscribe-and-hot">
              <div class="subscribe show-color show-border">
                <div class="quantity">
                  <span><?php print $social_meter['value'];?></span><?php print $social_meter['multiplier']; ?>
                </div>
                <div class="hashtag"><?php print $social_meter['tag']; ?></div>
              </div>
              <?php if (!empty($social_meter['hot'])): ?>
                <div class="hot-block">
                  <meter low="20" high="50" max="100" optimum="100" value="70"><?php print $social_meter['hot']; ?></meter>
                </div>
              <?php endif; ?>
            </div>
            <?php if (!empty($social_meter['link'])): ?>
              <a href="<?php print $social_meter['link']['url']; ?>" class="<?php $social_meter['link']['class']; ?>"><?php print $social_meter['link']['text']; ?></a>
            <?php endif; ?>
          </div>
        <?php endif; */?>
      </div>
    </div>
  </div>
</div>
