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
  <div class="usa-logo show-color hover-avail"><a href="<?php print $main_url; ?>"></a></div>
  <div class="nav-bar-tabs">
    <div class="menu-item show-color hover-avail show-name">
      <a href="<?php print $show_url; ?>">
        <span><?php print $show_name; ?></span>
      </a>
    </div>
    <div class="menu-item tab video-title info">
      <h1>
        <a class="no-refresh nolink" data-state>
          <?php print $h1; ?>
        </a>
      </h1>
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
          <?php if (!empty($person_name)): ?>
            <div class="title">
              <?php print $person_name; ?>
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
