<?php
/**
 *
 */
?>
<div class="node-wrapper social">
  <div class="node node-usanetwork-promo show-color-border<?php if (!empty($show_class)): print ' ' . $show_class; endif; ?> social-twitter">
    <?php if (!empty($about_show)): ?>
      <div class="heading"><?php print t('About'); ?></div>
      <div class="subheading"><?php print t('The show'); ?></div>
      <div class="about-content"><?php print $about_show; ?></div>
      <div class="show-link"><a href="<?php print $show_url; ?>"><?php print t('Read more'); ?></a></div>
    <?php endif; ?>
  </div>
</div>
