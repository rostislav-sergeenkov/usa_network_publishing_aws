<?php
/**
 *
 */
?>
<div class="where-to-watch">
  <div class="usa-section-title show-border">
    <h2 class="title"><?php print !empty($title) ? $title : ''; ?></h2>
  </div>
  <div class="where-to-watch-inner">
    <a href="/videos/live" class="live-link show-border"><?php print t('watch now on usanetwork.com'); ?><span class="show-color show-font"></span></a>
    <div class="description-block">
      <?php print $description; ?>
    </div>
    <div class="usa-providers">
      <?php $i = 1; ?>
      <?php if (!empty($usa_now_path)) : ?>
        <?php $i = 2; ?>
        <div class="providers-row">
          <div class="providers-row-inner show-border">
            <div class="provider">
              <a href="<?php print $usa_now_path; ?>"><img src="/sites/usanetwork/themes/aurora_usa/images/usanow_new.png"></a>
            </div>
      <?php endif; ?>
      <?php foreach ($elements as $element) : ?>
        <?php if ($i == 1) : ?>
            <div class="providers-row">
              <div class="providers-row-inner show-border">
        <?php endif; ?>
        <?php if ($i != 1 && ($i-1)%4 == 0) : ?>
            <div class="providers-row">
              <div class="providers-row-inner show-border">
        <?php endif; ?>
        <div class="provider">
          <a href="<?php print $element['url']; ?>">
            <img src="<?php print $element['image']; ?>">
          </a>
        </div>
        <?php if ($i%4 == 0) : ?>
            </div>
          </div>
        <?php endif; ?>
        <?php $i++; ?>
      <?php endforeach; ?>
        <?php if (($i-1)%4 != 0) : ?>
            </div>
          </div>
        <?php endif; ?>
    </div>
  </div>
</div>
