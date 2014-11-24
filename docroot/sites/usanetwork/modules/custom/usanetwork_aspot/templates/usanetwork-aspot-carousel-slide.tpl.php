<?php
/**
 * $show_image_bg_offset
 */
?>
<div class="slide">
  <div class="wrp">
    <div class="node usanetwork-aspot <?php print $show_class; ?>">
      <a href="<?php print $show_url; ?>" target="_self">
        <div class="asset-img">
          <img src="<?php print $show_poster_url; ?>">
        </div>
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
