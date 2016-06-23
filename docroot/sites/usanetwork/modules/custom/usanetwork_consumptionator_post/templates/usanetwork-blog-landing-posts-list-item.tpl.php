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
<div class="episode-landing-list-item<?php if (!empty($active)): print ' active'; endif; ?><?php print (!empty($new_design))? ' show-border': ''; ?>">
  <div class="episode-landing-list-item-inner">
    <div class="episode-landing-info-block">
      <?php if (empty($news_post)) : ?>
        <div class="open-description"></div>
      <?php endif; ?>
      <?php if (!empty($show_title)) : ?>
        <div class="show-name"><?php print $show_title; ?></div>
      <?php endif; ?>
      <div class="title"><a href="
        <?php print $blog_url; ?>"><?php print $title; ?></a>
      </div>
      <?php if (!empty($post_date)): ?>
        <div class="posted-date">
          <?php print t('Posted on') . ' ' . $post_date; ?>
        </div>
      <?php endif; ?>
      <div class="image-block">
        <div class="asset-img">
          <a href="<?php print $blog_url; ?>">
            <img src="<?php print $desktop_image_url; ?>" alt=""/>
          </a>
        </div>
        <?php if (!empty($violator)): ?>
          <div class="caption show-color">
            <?php print $violator; ?>
          </div>
        <?php endif; ?>
      </div>
      <div class="description"><?php print $description; ?></div>
    </div>
    <div class="buttons-bar">
      <div class="buttons">
        <?php if (!empty($blog_url)): ?>
          <?php if (!empty($new_design)): ?>
            <div class="full-episode-button show-border hover-avail"><a href="<?php print $blog_url; ?>"><?php print t('Read the post'); ?><span class="show-color show-font"></span></a></div>
          <?php else: ?>
            <div class="full-episode-button show-color hover-avail"><a href="<?php print $blog_url; ?>"><?php print t('Read the post'); ?></a></div>
          <?php endif; ?>
        <?php endif; ?>
      </div>
    </div>
  </div>
</div>
