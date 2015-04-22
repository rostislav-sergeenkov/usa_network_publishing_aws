<?php
/**
 * $gallery_url - url of media gallery item
 * $image_url - image url
 * $title - gallery title
 * $season - season number
 * $episode - episode number
 */
?>
<div class="media-gallery-slide">
  <a href="<?php print (!empty($gallery_url))? $gallery_url: '#'; ?>">
    <div class="meta-wrapper">
      <div class="meta-wrapper-inner">
        <div class="meta">
          <div class="title"><?php print (!empty($title))? $title: ''; ?></div>
          <div class="additional"><?php print t('S!season Episode !episode', array('!season' => $season, '!episode' => $episode)); ?></div>
        </div>
      </div>
    </div>
    <?php if (!empty($image_url)): ?>
      <div class="asset-img">
        <img src="<?php print $image_url; ?>" alt="" title="" />
      </div>
    <?php endif; ?>
  </a>
</div>
