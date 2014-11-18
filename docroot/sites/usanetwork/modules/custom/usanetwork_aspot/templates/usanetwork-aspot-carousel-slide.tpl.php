<?php
/**
 *
 */
?>
<div class="slide">
  <div class="wrp">
    <div class="node usanetwork-aspot <?php print $show_class; ?>">
      <a href="show.html" target="_self">
        <img src="<?php print $show_poster_url; ?>">
      </a>
      <div class="slide-content">
        <div class="meta-wrap">
          <div class="meta">
            <div class="new-episode"><?php print $show_title_prefix; ?></div>
            <div class="show-title"><?php print $show_title; ?></div>
            <!--div class="show-timer">
                <div class="start"><?php print $show_timer_prefix; ?></div>
                <div class="timer" data-timer="<?php print $show_timer_value; ?>"></div>
            </div-->
            <?php if (!empty($cta_buttons)): ?>
              <?php foreach ($cta_buttons as $cta_button): ?>
                <div class="cta-link"><a href="<?php print $cta_button['url']; ?>" class="show-color hover-avail"><?php print $cta_button['text']; ?></a></div>
              <?php endforeach; ?>
            <?php endif; ?>
          </div>
        </div>
        <?php if (!empty($social_meter)): ?>
          <div class="social-meter">
            <div class="subscribe-and-hot">
              <div class="subscribe show-color show-border">
                <div class="quantity">
                  <span><?php print $social_meter['value'];?></span><?php print $social_meter['multiplier']; ?>
                </div>
                <div class="hashtag"><?php print $social_meter['tag']; ?></div>
              </div>
              <!--div class="hot-block">
                  <meter low="20" high="50" max="100" optimum="100" value="70"><?php print $social_meter['hot']; ?></meter>
              </div-->
            </div>
            <?php if (!empty($social_meter['link'])): ?>
              <a href="<?php print $social_meter['link']['url']; ?>" class="<?php $social_meter['link']['class']; ?>"><?php print $social_meter['link']['text']; ?></a>
            <?php endif; ?>
          </div>
        <?php endif; ?>
      </div>
    </div>
  </div>
</div>
