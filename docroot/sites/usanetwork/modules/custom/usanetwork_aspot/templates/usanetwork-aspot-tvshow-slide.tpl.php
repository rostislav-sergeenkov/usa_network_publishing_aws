<?php
/**
 *
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
            <?php if (!empty($show_poster['desktop'])): ?>
              <div data-media="(min-width: 641px)" data-src="<?php print $show_poster['desktop']; ?>"></div>
              <!--[if (IE 8) & (!IEMobile)]>
              <div data-src="<?php print $show_poster['desktop']; ?>"></div>
              <![endif]-->
            <?php endif; ?>
            <?php if (!empty($show_poster['desktop'])): ?>
              <noscript><img src="<?php print $show_poster['desktop']; ?>" width="2490" height="1418" alt="" title="" /></noscript>
            <?php endif; ?>

          </div>
        <?php endif; ?>
      </a>
      <div class="slide-content">
        <div class="meta-wrap">
          <div class="meta">
            <div class="title_prefix aspot-draggable-element"<?php if (!empty($show_title_prefix_style['desktop'])): print ' data-style-desktop="' . $show_title_prefix_style['desktop'] . '" data-style-mobile="' . $show_title_prefix_style['mobile'] . '"'; endif; ?>><?php print $show_title_prefix; ?></div>
            <div class="title aspot-draggable-element"<?php if (!empty($show_title_style['desktop'])): print ' data-style-desktop="' . $show_title_style['desktop'] . '" data-style-mobile="' . $show_title_style['mobile'] . '"'; endif; ?>><?php print $show_title; ?></div>
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
              <?php $counter = 0; ?>
              <?php foreach ($cta_buttons as $cta_button): ?>
                <div <?php print 'class="cta_button_' . $counter . ' cta-link aspot-draggable-element"' ?><?php if (!empty($cta_button['style']['desktop'])): print 'data-style-desktop="' . $cta_button['style']['desktop'] . '" data-style-mobile="' . $cta_button['style']['mobile'] . '"'; endif; ?>>
                  <a href="<?php print $cta_button['url']; ?>" class="show-color hover-avail"><?php print $cta_button['text']; ?></a>
                </div>
                <?php $counter++; ?>
              <?php endforeach; ?>
            <?php endif; ?>
            <?php if (!empty($social_meter)): ?>
              <div class="social_meter aspot-draggable-element" <?php if (!empty($social_meter_style['desktop'])): print 'data-style-desktop="' . $social_meter_style['desktop'] . '" data-style-mobile="' . $social_meter_style['mobile'] . '"'; endif; ?>>
                <?php print $social_meter; ?>
              </div>
            <?php endif; ?>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
