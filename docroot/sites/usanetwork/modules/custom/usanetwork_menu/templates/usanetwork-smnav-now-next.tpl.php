<?php
/**
 * @var $on_now = array(
 *   'image',         // Rendered image
 *   'title',         // Show title
 *   'caption',       // Show caption
 *   'description',   // Show description
 * );
 *
 * @var $up_next = array(
 *   'image',         // Rendered image
 *   'time',          // Show time
 *   'time_daypart',  // Show time day part (AM, PM)
 *   'title',         // Show title
 *   'caption',       // Show caption
 *   'description',   // Show description
 * );
 */
?>
<?php if (!empty($on_now) && !empty($up_next)): ?>
  <div class="on-now-panel">
    <?php if (!empty($on_now)): ?>
      <div class="node node-usanetwork-promo on-now show-law-and-order">
        <div class="on-now-panel-title">
          <h2><?php print t('On now'); ?></h2>
        </div>
        <?php if (!empty($on_now['image'])): ?>
          <a href="<?php print !empty($on_now['node_url']) ? $on_now['node_url'] : '#'; ?>">
            <div class="asset-img show-color-border">
              <?php print $on_now['image']; ?>
            </div>
          </a>
        <?php endif; ?>
        <div class="title-overlay meta">
          <?php if (!empty($on_now['title'])): ?>
            <div class="title"><?php print $on_now['title']; ?></div>
          <?php endif; ?>
          <?php if (!empty($on_now['caption'])): ?>
            <div class="caption"><?php print $on_now['caption']; ?></div>
          <?php endif; ?>
          <?php if (!empty($on_now['description'])): ?>
            <div class="description"><?php print $on_now['description']; ?></div>
          <?php endif; ?>
        </div>
        <div class="icons-block">
          <?php if (!empty($on_now['syndicated_url'])): ?>
            <a class="episode-description icon" href="<?php print $on_now['syndicated_url']; ?>" target="_blank"></a>
          <?php endif; ?>
          <a class="calendar-reminder icon" href="#"></a>
        </div>
      </div>
    <?php endif; ?>
    <?php if (!empty($up_next)): ?>
      <div class="node node-usanetwork-promo up-next show-law-and-order">
        <div class="on-now-panel-title">
          <h2><?php print t('Up next'); ?></h2>
          <?php if (!empty($up_next['time']) && !empty($up_next['time_daypart'])): ?>
            <div class="episode-airtime"><span><?php print $up_next['time']; ?></span> <?php print $up_next['time_daypart']; ?></div>
          <?php endif; ?>
        </div>
        <?php if (!empty($up_next['image'])): ?>
          <a href="<?php print !empty($up_next['node_url']) ? $up_next['node_url'] : '#'; ?>">
            <div class="asset-img show-color-border">
              <?php print $up_next['image']; ?>
            </div>
          </a>
        <?php endif; ?>
        <div class="title-overlay meta">
          <?php if (!empty($up_next['title'])): ?>
            <div class="title"><?php print $up_next['title']; ?></div>
          <?php endif; ?>
          <?php if (!empty($up_next['caption'])): ?>
            <div class="caption"><?php print $up_next['caption']; ?></div>
          <?php endif; ?>
          <?php if (!empty($up_next['description'])): ?>
            <div class="description"><?php print $up_next['description']; ?></div>
          <?php endif; ?>
        </div>
        <div class="icons-block">
          <?php if (!empty($up_next['syndicated_url'])): ?>
            <a class="episode-description icon" href="<?php print $up_next['syndicated_url']; ?>" target="_blank"></a>
          <?php endif; ?>
          <a class="calendar-reminder icon" href="#"></a>
        </div>
      </div>
    <?php endif; ?>
  </div>
<?php endif; ?>
