<?php
/**
 *
 */
?>
<div class="slide">
  <div class="wrp">
    <div class="node usanetwork-aspot <?php print $show_class; ?>" data-show-name="<?php print $show_name; ?>" data-show="<?php print $show_class; ?>">
      <a href="<?php print $show_url; ?>" class="asset-img-link" target="_self">
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
              <noscript><img src="<?php print $show_poster['desktop']; ?>" width="2880" height="1620" alt="" title="" /></noscript>
            <?php endif; ?>

          </div>
        <?php endif; ?>
      </a>
      <div class="slide-content">
        <div class="meta-wrap">
          <div class="meta">
            <div class="title_prefix aspot-draggable-element
              <?php print (!empty($show_title_prefix_style['fonts']['desktop']) ? 'font-show-desktop-' . $show_title_prefix_style['fonts']['desktop'] : ''); ?>
              <?php print (!empty($show_title_prefix_style['fonts']['mobile']) ? 'font-show-mobile-' . $show_title_prefix_style['fonts']['mobile'] : ''); ?>"
              <?php if (!empty($show_title_prefix_style['desktop'])): print ' data-style-desktop="' . $show_title_prefix_style['desktop'] . '" data-style-mobile="' . $show_title_prefix_style['mobile'] . '"'; endif; ?>
              <?php if (!empty($show_title_prefix_style['width'])): print ' data-width="' . $show_title_prefix_style['width'] . '"'; else: print ' data-width="auto"'; endif; ?>>
              <?php print $show_title_prefix; ?>
            </div>
            <div class="title aspot-draggable-element
              <?php print (!empty($show_title_style['fonts']['desktop']) ? 'font-show-desktop-' . $show_title_style['fonts']['desktop'] : ''); ?>
              <?php print (!empty($show_title_style['fonts']['mobile']) ? 'font-show-mobile-' . $show_title_style['fonts']['mobile'] : ''); ?>"
              <?php if (!empty($show_title_style['desktop'])): print ' data-style-desktop="' . $show_title_style['desktop'] . '" data-style-mobile="' . $show_title_style['mobile'] . '"'; endif; ?>
              <?php if (!empty($show_title_style['width'])): print ' data-width="' . $show_title_style['width'] . '"'; else: print ' data-width="auto"'; endif; ?>>
              <?php print $show_title; ?>
            </div>
            <div class="aspot-description aspot-draggable-element
              <?php print (!empty($show_description_style['fonts']['desktop']) ? 'font-show-desktop-' . $show_description_style['fonts']['desktop'] : ''); ?>
              <?php print (!empty($show_description_style['fonts']['mobile']) ? 'font-show-mobile-' . $show_description_style['fonts']['mobile'] : ''); ?>"
              <?php if (!empty($show_description_style['desktop'])): print ' data-style-desktop="' . $show_description_style['desktop'] . '" data-style-mobile="' . $show_description_style['mobile'] . '"'; endif; ?>
              <?php if (!empty($show_description_style['width'])): print ' data-width="' . $show_description_style['width'] . '"'; else: print ' data-width="auto"'; endif; ?>>
              <?php print $show_desc; ?>
            </div>
            <div class="aspot-violator aspot-draggable-element show-color
              <?php print (!empty($show_violator_style['fonts']['desktop']) ? 'font-show-desktop-' . $show_violator_style['fonts']['desktop'] : ''); ?>
              <?php print (!empty($show_violator_style['fonts']['mobile']) ? 'font-show-mobile-' . $show_violator_style['fonts']['mobile'] : ''); ?>"
              <?php if (!empty($show_violator_style['desktop'])): print ' data-style-desktop="' . $show_violator_style['desktop'] . '" data-style-mobile="' . $show_violator_style['mobile'] . '"'; endif; ?>
              <?php if (!empty($show_violator_style['width'])): print ' data-width="' . $show_violator_style['width'] . '"'; else: print ' data-width="auto"'; endif; ?>>
              <?php print $show_violator; ?>
            </div>
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
                <div <?php print 'class="cta_button_' . $counter . ' cta-link aspot-draggable-element"' ?>
                  <?php if (!empty($cta_button['style']['desktop'])): print 'data-style-desktop="' . $cta_button['style']['desktop'] . '" data-style-mobile="' . $cta_button['style']['mobile'] . '"'; endif; ?>
                  <?php if (!empty($cta_button['style']['width'])): print ' data-width="' . $cta_button['style']['width'] . '"'; else: print ' data-width="auto"'; endif; ?>>
                  <a href="<?php print $cta_button['url']; ?>" class="cta-button-link show-color hover-avail<?php (!empty($new_design) && $counter == 0) ? print ' show-font' : ''; ?>" data-cta-link="CTA_LINK_<?php print $counter; ?>"><?php print $cta_button['text']; ?><?php if (!empty($new_design) && $counter != 0) : ?><span class="show-color show-font"></span><?php endif; ?></a>
                </div>
                <?php $counter++; ?>
              <?php endforeach; ?>
            <?php endif; ?>
            <?php if (!empty($social_meter)): ?>
              <div class="social_meter aspot-draggable-element"
                <?php if (!empty($social_meter_style['desktop'])): print 'data-style-desktop="' . $social_meter_style['desktop'] . '" data-style-mobile="' . $social_meter_style['mobile'] . '"'; endif; ?>
                <?php if (!empty($social_meter_style['width'])): print ' data-width="' . $social_meter_style['width'] . '"'; else: print ' data-width="auto"'; endif; ?>>
                <?php print $social_meter; ?>
              </div>
            <?php endif; ?>
          <?php if (!empty($sponsored)) : ?>
              <div class="sponsored" data-mpspath="<?php print $file_path; ?>" data-scalemps="1"></div>
            <?php endif; ?>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
