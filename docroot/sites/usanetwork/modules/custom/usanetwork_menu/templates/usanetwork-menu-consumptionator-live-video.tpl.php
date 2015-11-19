<?php
/**
 *  $main_url
 *  $show_url
 *  $show_name
 *  $episode['video_type']
 *  $episode['image_url']
 *  $episode['title']
 *  $episode['full_title']
 *  $episode['season_and_number']
 *  $episode['running_time']
 *  $episode['description']
 */
?>
<div class="header-nav-bar live-video-nav-bar">
  <div class="usa-logo show-color hover-avail"><a class="logo" href="<?php print $main_url; ?>"></a></div>
  <div class="nav-bar-tabs">
    <div class="menu-item show-color hover-avail show-name">
      <a href="#">
        <span></span>
      </a>
    </div>
    <div class="menu-item tab video-title info">
      <h1 class="no-refresh nolink" data-state>
        <span><?php print t('Live: USA Live TV'); ?></span>
      </h1>
    </div>
  </div>
  <?php if (!empty($authbar)) : ?>
    <?php print $authbar; ?>
  <?php endif; ?>
</div>
<div class="tab-content">
  <div class="tab-item info-tab">
    <div class="tab-item-content tab-item-wrapper">
      <div class="node node-usanetwork-promo">
        <div class="asset-img">
          <img src="" alt="">
        </div>
        <div class="meta">
          <div class="meta-info">
            <div class="caption"></div>
            <div class="title"></div>
            <div class="additional"></div>
          </div>
          <div class="description"></div>
        </div>
      </div>
      <div class="social-bar">
        <h3 class="field-label"><?php print t('Share this video');?></h3>
        <div class="field-type-gigya-sharebar field-name-field-gigya-share-bar field-label-above" id="gigya-share-live-video"></div>
        <div>
      </div>
    </div>
  </div>
</div>

