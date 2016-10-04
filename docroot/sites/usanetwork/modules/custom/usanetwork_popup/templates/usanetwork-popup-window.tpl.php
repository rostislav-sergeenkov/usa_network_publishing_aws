<?php
/**
 * Template for Pop-up Window
 */
?>
<div class="usa-home-popup-overlay">
  <div class="usa-home-popup">
    <a href="<?php print $link['url']; ?>"<?php (!empty($link['target'])) ? print ' target="' . $link['target'] . '"' : '';  ?>>
      <?php if (!empty($popup_image)): ?>
      <div class="asset-img" data-picture data-alt="" data-class="tile-img">
        <?php if (!empty($popup_image['mobile'])): ?>
          <div data-src="<?php print $popup_image['mobile']; ?>"></div>
        <?php endif; ?>
        <?php if (!empty($popup_image['mobile_retina'])): ?>
          <div data-media="(min-width: 481px)" data-src="<?php print $popup_image['mobile_retina']; ?>"></div>
        <?php endif; ?>
        <?php if (!empty($popup_image['desktop'])): ?>
          <div data-media="(min-width: 769px)" data-src="<?php print $popup_image['desktop']; ?>"></div>
          <!--[if (IE 8) & (!IEMobile)]>
            <div data-src="<?php print $popup_image['desktop']; ?>"></div>
          <![endif]-->
        <?php endif; ?>
        <?php if (!empty($popup_image['desktop'])): ?>
          <noscript><img src="<?php print $popup_image['desktop']; ?>" width="1280" height="800" alt="" title="" /></noscript>
        <?php endif; ?>
      </div>
      <?php endif; ?>
    </a>
    <div class="usa-home-popup-close-icon"></div>
  </div>
</div>
