<div class="<?php print $classes;?>"<?php print $attributes; ?>>
  <?php if ($link): ?>
    <?php if ((!$target) || ($target && $target == '&nbsp;')): ?>
      <a href="<?php print $link; ?>" class="promo-link">
    <?php else: ?>
      <a href="<?php print $link; ?>" target="<?php print $target; ?>" class="promo-link">
    <?php endif; ?>
  <?php endif; ?>
  <?php if ($media): ?>
  <div class="asset-img-large"><?php print $media_large; ?></div>
  <div class="asset-img"><?php print $media; ?></div>
  <?php endif; ?>
  <?php if(($title && $title != "&nbsp;") || ($caption && $caption != "&nbsp;") ) : ?>
  <div class="caption-overlay meta">
    <div class="caption-fields-wrapper">
    <?php if ($cta && $cta != '&nbsp;' && $action_type == 'video'): ?>
      <div class="promo-cta"><?php print $cta; ?></div>
    <?php endif; ?>
    <?php if ($title && $title != "&nbsp;"): ?>
      <div class="title"><?php print $title; ?></div>
    <?php endif; ?>
    <?php if ($title_wide && $title_wide != "&nbsp;"): ?>
      <div class="title-wide"><?php print $title_wide; ?></div>
    <?php elseif ($title && $title != "&nbsp;"): ?>
      <div class="title-wide"><?php print $title; ?></div>
    <?php endif; ?>
    <?php if ($caption && $caption != "&nbsp;"): ?>
      <div class="caption"><?php print ($caption); ?></div>
    <?php endif; ?>
    <?php if ($caption_wide && $caption_wide != "&nbsp;"): ?>
      <div class="caption-wide"><?php print ($caption_wide); ?></div>
    <?php elseif ($caption && $caption != "&nbsp;"): ?>
      <div class="caption-wide"><?php print ($caption); ?></div>
    <?php endif; ?>
    </div>
  </div>
<?php endif; ?>
  <?php if ($link): ?>
    </a>
  <?php endif; ?>
</div>
