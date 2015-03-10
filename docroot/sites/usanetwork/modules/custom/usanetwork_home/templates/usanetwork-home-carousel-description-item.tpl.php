<?php
/*
 *  $caption
 *  $title
 *  $additional_text
 */
?>
<?php if (!empty($background)): ?>
  <div class="hidden background-image" data-url="<?php print $background; ?>"></div>
<?php endif; ?>
<div class="carousel-description-item start">
  <a href="javascript:void(0)" class="description-button"></a>
  <div class="description-wrapper">
    <div class="description-block">
      <div class="caption"><?php print $caption; ?></div>
      <div class="title"><?php print $title; ?></div>
      <div class="additional-text"><?php print $additional_text; ?></div>
      <?php if (!empty($logo)): ?>
        <div class="logo"><img src="<?php print $logo; ?>" /></div>
      <?php endif; ?>
    </div>
  </div>
</div>
