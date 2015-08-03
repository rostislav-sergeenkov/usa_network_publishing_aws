<?php
/**
 * @file
 * Main view template.
 * @vars:
 *   $header_title
 *   $body_text
 *   $firefox_link
 *   $safari_link
 *   $chrome_link
 *   $is_ie9
 *   $faq_link
 *   $image_path
 *
 */
?>
<div class="tveModal browserDetect oldBrowser" data-ng-if="global.showBrowserWindow">
  <header class="modalHeader">
    <?php if ($is_ie9): ?>
      <button data-ng-click="global.showBrowserWindow = false;" class="closeButton"></button>
    <?php endif; ?>
    <h1><?php print t(check_plain($header_title)); ?></h1>
  </header>
  <section class="modalContent clearfix">
    <div class="browserDetectMessage">
      <?php print $body_text; ?>
    </div>
    <div class="browserDetectDescr">
      <?php if ($is_ie9): ?>
        <?php print $ie9_error_msg; ?>
      <?php endif; ?>
      <?php if ($faq_link): ?>
        <h3><?php print t('For more on site'); ?> <?php print $faq_link; ?></h3>
      <?php endif; ?>
      <div class="browserLinks">
        <a class="firefox" href="<?php print check_plain($firefox_link); ?>"><img src="<?php print ($image_path); ?>/images/firefox.png" alt="firefox" /></a>
        <a class="safari" href="<?php print check_plain($safari_link); ?>"><img src="<?php print ($image_path); ?>/images/safari.png" alt="safari" /></a>
        <a class="chrome" href="<?php print check_plain($chrome_link); ?>"><img src="<?php print ($image_path); ?>/images/chrome.png" alt="chrome" /></a>
      </div>
    </div>
  </section>
  <footer class="modalFooter"></footer>
</div>
