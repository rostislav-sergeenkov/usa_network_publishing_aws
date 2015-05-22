<?php
/**
 *  Aviable variables.
 *  $main_url
 *  $show_url
 *  $show_name
 *  $episode_name
 *  $details['image']
 *  $details['description']
 *  $details['episode_type']
 */
?>
<div class="header-nav-bar">
  <div class="usa-logo show-color hover-avail"><a href="<?php print $main_url; ?>"></a></div>
  <div class="nav-bar-tabs">
    <div class="menu-item show-color hover-avail show-name">
      <a href="<?php print $show_url; ?>">
        <span><?php print $show_name; ?></span>
      </a>
    </div>
    <div class="menu-item tab video-title info">
      <h2>
        <a class="no-refresh nolink" data-state>
          <?php if (!empty($details['episode_type'])): ?><?php print $details['episode_type'] . ': '; ?><?php endif; ?><?php print $episode_name; ?>
        </a>
      </h2>
    </div>
  </div>
</div>
<div class="tab-content">
  <div class="tab-item info-tab">
    <div class="tab-item-content">
      <div class="node node-usanetwork-promo">
        <?php if (!empty($details['image'])): ?>
          <div class="asset-img">
            <img src="<?php print $details['image']; ?>" alt="">
          </div>
        <?php endif; ?>
        <div class="title-overlay meta">
          <?php if (!empty($details['episode_info'])): ?>
            <div class="meta-info">
              <?php if (!empty($episode_name)): ?>
                <div class="title">
                  <h1><?php print !empty($h1) ? $h1 : $episode_name; ?></h1>
                </div>
              <?php endif; ?>
              <?php if (!empty($details['episode_info']['season_number']) && !empty($details['episode_info']['episode_number'])): ?>
                <div class="additional">
                  <span>S<?php print $details['episode_info']['season_number'] ?> <?php print t('episode') . ' ' . $details['episode_info']['episode_number']; ?></span>
                <?php if (!empty($details['episode_info']['duration'])): ?>
                  <?php print $details['episode_info']['duration']; ?>
                <?php endif; ?>
                </div>
              <?php endif; ?>
            </div>
          <?php else: ?>
            <?php if (!empty($gallery_name)): ?>
              <div class="title">
                <?php print $gallery_name; ?>
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

