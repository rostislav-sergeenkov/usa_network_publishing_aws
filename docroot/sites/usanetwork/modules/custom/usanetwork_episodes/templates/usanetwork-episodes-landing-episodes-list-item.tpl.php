<?php
/**
 * $full_episode_url - URL to full episode video
 * $preview_episode_url - URL to preview episode video,
 * $default_content_url - URL to default video ('full episode' by default but if there is no full episode - it puts 'preview episode')
 * $desktop_image_url' => desktop image URL
 * $season_number' => number of season
 * $episode_number' => number of episode
 * $title' => episode title
 * $description' => episode description
 * $airing_date' => airing date
 * $expiration_date' => expirating date
 * $guide_url' => URL to Guide page
 * $gallery_url' => URL to Gallery page
 */
?>
<div class="episode-landing-list-item">
  <div class="episode-landing-list-item-inner">
    <div class="episode-landing-info-block">
      <div class="open-description"></div>
      <div class="series"><?php print t('S') . $season_number . ' ' . t('EP') . $episode_number; ?></div>
      <div class="title"><?php print $title; ?></div>
      <div class="image-block">
        <div class="asset-img">
          <img src="<?php print $desktop_image_url; ?>" alt=""/>
        </div>
      </div>
      <?php if (!empty($airing_date)): ?>
        <div class="airing-date">
          <?php print t('Aired on') . ' ' . $airing_date; ?>
        </div>
      <?php endif; ?>
      <?php if (!empty($expiration_date)): ?>
        <div class="expiration-date">
          <?php print t('Available untill') . ' ' . $expiration_date; ?>
        </div>
      <?php endif; ?>
      <div class="description"><?php print $description; ?></div>
    </div>
    <div class="buttons-bar">
      <div class="buttons">
        <?php if (!empty($full_episode_url)): ?>
          <div class="full-episode-button show-color hover-avail"><a href="<?php print $full_episode_url; ?>"><div class="font-icon video-font-icon show-color show-font"></div><?php print t('Watch a full episode'); ?></a></div>
        <?php endif; ?>
      </div>
      <div class="links">
        <?php if (!empty($guide_url)): ?>
          <a class="guide-url" href="<?php print $guide_url; ?>"><?php print t('Read the guide'); ?></a>
        <?php endif; ?>
        <?php if (!empty($gallery_url)): ?>
          <a class="gallery-url" href="<?php print $gallery_url; ?>"><?php print t('View the gallery'); ?></a>
        <?php endif; ?>
      </div>
    </div>
  </div>
</div>
