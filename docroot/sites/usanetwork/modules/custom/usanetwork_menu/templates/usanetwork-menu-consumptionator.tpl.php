<?php
/**
 *  $show_url
 *  $show_name
 *  $episode['caption']
 *  $episode['image_url']
 *  $episode['title']
 *  $episode['season_and_number']
 *  $episode['running_time']
 *  $episode['description']
 */
?>
<div class="header-nav-bar">
  <div class="usa-logo show-color hover-avail"><a href="<?php print url('<front>'); ?>"></a></div>
  <div class="show-title-wrapper">
    <div class="show-title-block">
      <div class="tab show-color hover-avail show-name">
        <a href="<?php print $show_url; ?>">
          <span><?php print $show_name; ?></span>
        </a>
      </div>
      <div class="tab video-title">
        <h1><?php print $episode['title']; ?></h1>
      </div>
    </div>
  </div>
  <div class="nav-bar-tabs">
    <div class="tab info"><a data-state="active" href="#" class="no-refresh active"></a></div>
    <!--<div class="tab share"><a href="#" class="no-refresh"></a></div>-->
    <div class="tab close back-to-show"><a href="<?php print $show_url; ?>"></a></div>
  </div>
</div>
<div style="display: block;" class="tab-item info-tab active">
  <div class="show-info">
    <div class="node node-usanetwork-promo">
      <a href="#">
        <div class="asset-img">
          <img src="<?php print $episode['image_url']; ?>" alt="">
        </div>
      </a>
      <div class="title-overlay meta">
        <div class="meta-left">
          <div class="caption"><?php print $episode['caption']; ?></div>
          <div class="title"><?php print $episode['title']; ?></div>
          <?php if (!empty($episode['season_number']) && !empty($episode['episode_number'])): ?>
            <div class="type-and-time">
              <span>S<?php print $episode['season_number'] ?> <?php print t('episode') . ' ' . $episode['episode_number']; ?></span>
              <?php print $episode['running_time']; ?>
            </div>
          <?php endif; ?>
          <div class="episode-rate">
            <div class="title-rate"><?php print t('click stars to rate:'); ?></div>
            <div class="stars-rate">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="description">
          <?php print $episode['description']; ?>
        </div>
      </div>
    </div>
    <div class="show-info-social">
      <div class="social-title">
        <?php print t('Share this video'); ?>
      </div>
      <div class="social-icons icons-block">
        <a href="#" class="facebook"></a>
        <a href="#" class="twitter"></a>
        <a href="#" class="tumblr"></a>
        <a href="#" class="pinterest"></a>
        <a href="#" class="plus-icon"></a>
      </div>
    </div>
  </div>
</div>
