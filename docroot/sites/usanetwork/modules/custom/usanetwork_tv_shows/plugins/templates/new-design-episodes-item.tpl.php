<?php
/**
 * Item of episodes.
 * Variables:
 *  - $entity_id
 *  - $image
 *  - $season
 *  - $episode
 *  - $episode_link
 *  - $file_link
 */
/*<?php print (!empty($title) ? $title : ''); ?>
<?php print (!empty($image) ? $image : ''); ?>
<?php print (!empty($season) ? $season : ''); ?>
<?php print (!empty($episode) ? $episode : ''); ?>
<?php print (!empty($episode_link) ? $episode_link : ''); ?>
<?php print (!empty($file_link) ? $file_link : ''); ?>*/
?>
<div class="node node-usanetwork-promo usa-episodes-carousel-promo">
  <a href="<?php print (!empty($episode_link) ? $episode_link : '#'); ?>">
    <div class="image-block">
      <div class="asset-img">
        <img src="<?php print (!empty($image) ? $image : '#'); ?>" alt="">
      </div>
    </div>
    <div class="meta-wrapper">
      <div class="meta-wrapper-inner">
        <div class="meta">
          <?php if (!empty($season) && !empty($episode)): ?>
            <div class="caption"><?php print $season; ?>&nbsp<?php print $episode; ?></div>
          <?php endif; ?>
          <?php if (!empty($title)): ?>
            <div class="title"><?php print $title; ?></div>
          <?php endif; ?>
          <div class="additional show-color show-font"><?php print t('Read the recap');?></div>
        </div>
      </div>
    </div>
  </a>
</div>
