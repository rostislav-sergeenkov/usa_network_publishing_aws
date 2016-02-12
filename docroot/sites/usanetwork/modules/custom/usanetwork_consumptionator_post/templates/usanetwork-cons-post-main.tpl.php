<?php
/**
 * $sharebar - html placeholder for JS, for sharebar rendering.
 * $episode_title - string
 * $body - html
 * $season_number - integer
 * $episode_number - integer
 * $episode_video_link - link for "Wath the episode" button.
 * $image_mobile - URL for img.
 * $image_desktop - URL for img.
 * $air_date_text - string
 * $ep_carousel - rendered episode carousel block
 * $gallery_rec - rendered gallery recap block
 */
?>
<div class="consumptionator-post-main-block">
  <div class="post-info-main-block right-rail-line">
    <div class="post-info-block show-border">
      <div class="post-info-header">
        <div class="post-title-block">
          <div class="post-title">
            <?php print $title; ?>
          </div>
          <div class="additional">
            <?php print '<span class="episode">' . t('Posted on ') . $creating_date . '</span>';?>
            <?php if (!empty($tags)): print '<span class="tags-title">' . t(' Tags: ') . '</span><span class="tags">' . $tags . '</span>'; endif;?>
          </div>
        </div>
        <div class="share">
          <?php print $sharebar; ?>
        </div>
      </div>
      <?php if (!empty($image_desktop)): ?>
        <div class="post-info-image">
          <div class="asset-img"><img src="<?php print $image_desktop; ?>" alt="" title="<?php print $title; ?>" /></div>
        </div>
      <?php endif; ?>
      <div class="node-wrapper advert">
        <div class="advertisement">
          <div class="topbox"></div>
        </div>
      </div>
      <div class="post-info-description">
        <?php if (!empty($body)): ?>
          <?php print $body; ?>
        <?php endif; ?>
        <?php if (!empty($source)): ?>
          <?php print '<p class="source">' . t('Source: ') . '<span class="source-title">' .  $source . '</span></p>'; ?>
        <?php endif; ?>
      </div>
    </div>
    <?php if (!empty($gallery_rec)): ?>
      <div class="gallery-recap-block show-border">
        <?php print $gallery_rec; ?>
      </div>
    <?php endif; ?>
    <?php if (!empty($navigation_links['previous'])): ?>
      <?php print $navigation_links['previous']; ?>
    <?php endif; ?>
    <?php if (!empty($navigation_links['next'])): ?>
      <?php print $navigation_links['next']; ?>
    <?php endif; ?>
  </div>
  <div class="consum-sidebar">
    <?php if (!empty($rendered_carousel)): ?>
      <?php print $rendered_carousel; ?>
    <?php endif; ?>
  </div>
</div>
