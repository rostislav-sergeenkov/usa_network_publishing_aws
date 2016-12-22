<?php
/**
 *
 */
?>
<div class="show-description">
  <div class="node node-usanetwork-promo show-color-border<?php if (!empty($show_class)): print ' ' . $show_class; endif; ?>">
    <?php if (!empty($about_show)): ?>
      <div class="meta-wrapper">
        <div class="heading"><?php print t('About'); ?></div>
        <div class="subheading"><?php print t('The show'); ?></div>
        <div class="about-content multiline-ellipsis" data-text="<?php print $about_show; ?>"><?php print $about_show; ?></div>
        <div class="show-link"><a href="<?php print $show_url; ?>" class="show-color<?php if (!empty($show_class)): print ' ' . $show_class; endif; ?>"><?php print t('Read more'); ?></a></div>
      </div>
    <?php endif; ?>
  </div>
</div>
