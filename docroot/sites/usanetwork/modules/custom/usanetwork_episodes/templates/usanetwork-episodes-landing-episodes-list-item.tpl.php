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
<div class="episode-landing-list-item<?php if (!empty($active)): print ' active'; endif; ?><?php print (!empty($new_design)) ? ' show-border' : ''; ?>">
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
          <?php print t('Available until') . ' ' . $expiration_date; ?>
        </div>
      <?php endif; ?>
      <div class="description"><?php print $description; ?></div>
    </div>
    <div class="buttons-bar">
      <div class="buttons">
        <?php if (!empty($full_episode_url)): ?>
          <?php if (!empty($new_design)): ?>
            <div class="full-episode-button hover-avail"><div class="button-inner show-border"><a href="<?php print $full_episode_url; ?>"><div class="font-icon video-font-icon show-color show-font"></div><?php print t('Watch the full episode'); ?><span class="show-color show-font"></span></a></div></div>
          <?php else: ?>
            <div class="full-episode-button hover-avail show-color"><a href="<?php print $full_episode_url; ?>"><div class="font-icon video-font-icon show-color show-font"></div><?php print t('Watch a full episode'); ?></a></div>
          <?php endif; ?>
        <?php else: ?>
          <?php if (!empty($new_design)): ?>
            <?php if (!empty($featured_provider)) : ?>
              <div class="full-episode-button hover-avail"><div class="button-inner show-border"><a href="<?php print $featured_provider['url']; ?>" target="_blank"><div class="font-icon video-font-icon show-color show-font"></div><?php print t('Watch on @provider', array('@provider' => $featured_provider['title'])); ?><span class="show-color show-font"></span></a></div></div>
            <?php endif; ?>
            <?php if (!empty($where2watch_link)) : ?>
              <div class="full-episode-button hover-avail"><div class="button-inner show-border"><a href="<?php print $where2watch_link; ?>" target="_blank"><div class="font-icon video-font-icon show-color show-font"></div><?php print t('More Ways to watch'); ?><span class="show-color show-font"></span></a></div></div>
            <?php endif; ?>
          <?php else: ?>
            <?php if (!empty($featured_provider)) : ?>
              <div class="full-episode-button hover-avail show-color"><a href="<?php print $featured_provider['url']; ?>" target="_blank"><div class="font-icon video-font-icon show-color show-font"></div><?php print t('Watch on @provider', array('@provider' => $featured_provider['title'])); ?><span class="show-color show-font"></span></a></div>
            <?php endif; ?>
            <?php if (!empty($where2watch_link)) : ?>
              <div class="full-episode-button hover-avail show-color"><a href="<?php print $where2watch_link; ?>" target="_blank"><div class="font-icon video-font-icon show-color show-font"></div><?php print t('Other Ways to watch'); ?><span class="show-color show-font"></span></a></div>
            <?php endif; ?>
          <?php endif; ?>
        <?php endif; ?>
        <?php if (!empty($second_full_episode_url)): ?>
          <div class="full-episode-button hover-avail <?php print (!empty($new_design)) ?  'show-border' : 'show-color'; ?>"><a href="<?php print $second_full_episode_url; ?>"><div class="font-icon video-font-icon show-color show-font"></div><?php print t('Con-Subtitulos'); ?><?php if (!empty($new_design)) : ?><span class="show-color show-font"></span><?php endif; ?></a></div>
        <?php endif; ?>
        <?php if (!empty($preview_episode_url)): ?>
          <?php if (!empty($new_design)): ?>
            <div class="preview_episode_button"><div class="button-inner show-border"><a href="<?php print $preview_episode_url; ?>"><div class="font-icon video-font-icon"></div><?php print t('Watch a preview'); ?><span class="show-color show-font"></span></a></div></div>
          <?php else : ?>
            <div class="preview_episode_button"><a href="<?php print $preview_episode_url; ?>"><div class="font-icon video-font-icon"></div><?php print t('Watch a preview'); ?></a></div>
          <?php endif; ?>
        <?php endif; ?>
      </div>
      <div class="links">
        <?php if (!empty($guide_url)): ?>
          <a class="guide-url" href="<?php print $guide_url; ?>"><?php print (!empty($new_design)) ? t('Read the recap') : t('Read the guide'); ?><?php if (!empty($new_design)) : ?><span class="show-color show-font"></span><?php endif; ?></a>
        <?php endif; ?>
        <?php if (!empty($gallery_url)): ?>
          <a class="gallery-url" href="<?php print $gallery_url; ?>"><?php print t('View the gallery'); ?><?php if (!empty($new_design)) : ?><span class="show-color show-font"></span><?php endif; ?></a>
        <?php endif; ?>
      </div>
    </div>
  </div>
</div>
