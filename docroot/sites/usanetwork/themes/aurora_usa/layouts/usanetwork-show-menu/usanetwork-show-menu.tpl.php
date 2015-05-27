<div class="panel-display usanetwork-show-menu-panel clearfix" <?php if (!empty($css_id)): print "id=\"$css_id\""; endif; ?>>
  <div class="header-nav-bar">
    <div class="usa-logo show-color hover-avail secondary <?php if ($is_front): print "home-logo"; endif; ?>">
      <a href="/" title="<?php print t('Home'); ?>" rel="home" class="logo"></a>
    </div>
    <div class="show-title-wrapper show-border tertiary"></div>
    <div class="nav-bar-tabs">
      <?php print $content['reg_menu']; ?>
    </div>
    <div class="main-menu-open"><a href="#" class="link-color-reset"></a></div>
  </div>
  <div class="header-small-menu menu">
    <?php print $content['reg_mobile_menu']; ?>
  </div>
  <div class="tab-content">
    <div class="tab-item shows-tab">
      <div class="show-tab-wrapper tab-item-wrapper">
        <?php print $content['reg_tab_shows']; ?>
      </div>
    </div>
    <div class="tab-item full-episode-tab">
      <div class="full-episode-tab-wrapper tab-item-wrapper">
        <?php print $content['reg_tab_full_episodes']; ?>
      </div>
    </div>
    <div class="tab-item schedule-tab">
      <div class="schedule-tab-wrapper tab-item-wrapper">
        <div class="see-all-link">
          <a href="/schedule">view full schedule</a>
        </div>
        <?php print $content['reg_tab_schedule']; ?>
      </div>
    </div>
    <div class="tab-item user-profile-tab">
      <?php print $content['reg_tab_user_profile']; ?>
    </div>
  </div>
  <?php print $content['reg_show_menu']; ?>
</div>
