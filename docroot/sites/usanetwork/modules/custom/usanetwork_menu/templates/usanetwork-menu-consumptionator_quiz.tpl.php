<?php
/**
 *  Aviable variables.
 *  $main_url
 *  $show_url
 *  $show_name
 *  $person_name
 *  $details['image']
 *  $details['description']
 *  $details['sharebar']
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
          <div class="table-wrapper">
            <span><?php print t('Quiz');?>: <?php print $quiz_name; ?></span>
          </div>
        </a>
      </h2>
    </div>
  </div>
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
        <div class="meta">
          <?php if (!empty($quiz_name)): ?>
            <div class="title">
             <h1><?php print !empty($h1) ? $h1 : $quiz_name; ?></h1>
            </div>
          <?php endif; ?>
          <?php if (!empty($details['description'])): ?>
            <div class="description">
              <?php print $details['description']; ?>
            </div>
          <?php endif; ?>
        </div>
      </div>
      <?php if (!empty($details['sharebar'])): ?>
        <div class="sharebar">
          <?php print $details['sharebar']; ?>
        </div>
      <?php endif; ?>
    </div>
  </div>
</div>
