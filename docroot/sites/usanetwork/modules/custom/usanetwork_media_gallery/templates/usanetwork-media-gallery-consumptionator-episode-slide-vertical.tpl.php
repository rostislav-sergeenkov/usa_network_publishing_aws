<?php
/**
 * $gallery_url - url of media gallery item
 * $image_url - image url
 * $title - gallery title
 * $season - season number
 * $episode - episode number
 */
?>
<div class="node node-usanetwork-promo">
  <a href="<?php print (!empty($gallery_url))? $gallery_url: '#'; ?>">
    <?php if (!empty($image_url)): ?>
      <div class="asset-img"><img src="<?php print $image_url;?>" alt="" title="<?php print $title; ?>"></div>
    <?php endif; ?>
    <div class="meta-wrapper">
      <div class="meta-wrapper-inner">
        <div class="meta">
          <div class="title"><?php print (!empty($title))? $title: ''; ?></div>
          <?php if (!empty($season) && !empty($episode)): ?>
            <div class="additional"><?php print t('S!season Episode !episode', array('!season' => $season, '!episode' => $episode)); ?></div>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </a>
</div>

