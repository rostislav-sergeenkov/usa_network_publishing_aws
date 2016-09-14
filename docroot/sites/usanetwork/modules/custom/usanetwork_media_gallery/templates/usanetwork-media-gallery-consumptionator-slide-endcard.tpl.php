<?php
/**
 ***
 */
?>
<div class="node node-gallery end-card">
  <div class="asset-img">
    <?php if (!empty($image)): ?>
      <?php print $image; ?>
    <?php endif; ?>
  </div>
  <div class="slide-info">
    <div class="end-card-description">
      <div class="end-card-description-wrapper">
        <?php if (!empty($info['description'])): ?>
          <div class="description"><?php print $info['description']; ?></div>
        <?php endif; ?>
      </div>
    </div>
    <div class="slider-counter">
      <span class="gallery-name">
        <?php if (!empty($info['gallery_name'])): ?><?php print $info['gallery_name']; ?><?php endif; ?>
      </span>
      <span class="slide-index"></span>
    </div>
  </div>
  <div class="end-card-block">
    <div class="end-card-block-back"></div>
    <div class="end-card-block-wrapper">
      <div class="end-card-block-meta">
        <div class="up-next"><?php print t('Up next:'); ?></div>
        <?php if (!empty($endcard['title'])): ?>
          <div class="other-gallery-name">
            <a href="#">
              <?php print $endcard['title']; ?>
            </a>
          </div>
        <?php endif; ?>
        <?php if (!empty($endcard['caption'])): ?>
          <div class="other-gallery-episode">
            <?php print $endcard['caption']; ?>
          </div>
        <?php endif; ?>
        <?php if (!empty($endcard['image'])): ?>
          <div class="other-gallery-image">
            <a href="#">
              <img src="<?php print $endcard['image']; ?>" alt="">
            </a>
          </div>
        <?php endif; ?>
      </div>
    </div>
  </div>
</div>
