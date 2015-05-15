<div class="aspot-social-meter">
  <div class="row row-1 show-color show-border">
    <div class="block block-quote block-left">
      <?php if (!empty($upper_line)): ?>
        <div class="upper-line block-quote-line"><?php print $upper_line; ?></div>
      <?php endif; ?>
      <?php if (!empty($middle_line)): ?>
        <div class="middle-line block-quote-line"><?php print $middle_line; ?></div>
      <?php endif; ?>
      <?php if (!empty($hashtag)): ?>
        <div class="hashtag block-quote-line"><?php print $hashtag; ?></div>
      <?php endif; ?>
    </div>
    <div class="block block-after-quote block-right"></div>
  </div>
  <div class="row row-2">
    <a href="<?php print !empty($link) ? $link : '#' ?>" class="social-meter-link"><?php print !empty($link_text) ? $link_text : t("See what everyone's saying"); ?></a>
  </div>
</div>
