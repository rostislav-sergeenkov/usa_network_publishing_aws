<?php
/**
 *  Aviable variables.
 *  $main_url
 *  $show_url
 *  $show_name
 *  $gallery_name
 *  $details['image']
 *  $details['description']
 *  $details['gallery_type']
 */
?>
<div class="header-nav-bar">
  <div class="usa-logo show-color hover-avail"><a class="logo" href="<?php print $main_url; ?>"></a></div>
  <div class="nav-bar-tabs">
    <div class="menu-item show-color hover-avail show-name">
      <a href="<?php print $show_url; ?>">
        <span><?php print $show_name; ?></span>
      </a>
    </div>
    <div class="menu-item tab video-title info">
      <h2>
        <a class="no-refresh nolink" data-state>
          <span><?php if (!empty($details['gallery_type'])): ?><?php print $details['gallery_type'] . ': '; ?><?php endif; ?><?php print $gallery_name; ?></span>
        </a>
      </h2>
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
        <?php if (!empty($details['image'])): ?>
          <div class="asset-img">
            <img src="<?php print $details['image']; ?>" alt="">
          </div>
        <?php endif; ?>
        <div class="title-overlay meta">
          <?php if (!empty($details['episode_info'])): ?>
            <div class="meta-info">
              <?php if (!empty($details['episode_info']['episode_title'])): ?>
                <div class="title">
                  <h1><?php print !empty($h1) ? $h1 : $details['episode_info']['episode_title']; ?></h1>
                </div>
              <?php endif; ?>
              <?php if (!empty($details['episode_info']['season_number']) && !empty($details['episode_info']['episode_number'])): ?>
                <div class="additional">
                  <span>S<?php print $details['episode_info']['season_number'] ?> <?php print t('episode') . ' ' . $details['episode_info']['episode_number']; ?></span>
                </div>
              <?php endif; ?>
            </div>
          <?php else: ?>
            <?php if (!empty($gallery_name)): ?>
              <div class="title">
                <h1><?php print !empty($h1) ? $h1 : $gallery_name; ?></h1>
              </div>
            <?php endif; ?>
          <?php endif; ?>
          <?php if (!empty($details['description'])): ?>
            <div class="description">
              <?php print $details['description']; ?>
            </div>
          <?php endif; ?>
          <?php if (!empty($sharebar)): ?>
            <div class="sharebar">
              <?php print $sharebar; ?>
            </div>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </div>
</div>

