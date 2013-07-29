<?php
/**
 * @file
 * usa-meganav.tpl.php
 *
 * Theme implementation for the usa mega nav
 *
 * Available variables:
 *
 */

?>

<div data-module-type="NavDrawer" class="mega-menu-items shows-mega-menu-item active">
  <?php print l('Shows', 'globalnav_shows/nojs', array('attributes' => array('class' => array('mega-nav-link', 'shows', 'use-ajax')))); ?>
  <div class="mega-sub-nav-container">
    <div class="mega-sub-nav">
      <div class="more-title"><?php print variable_get('usanetwork_global_nav_show_title','Shows'); ?></div>
      <span class="mega-nav-close">close</span>
      <span id="globalnav-shows"></span>
      <?php print views_embed_view('usa_nav','block'); ?>
    </div>
  </div>
</div>
<div class="mega-menu-items">
  <?php print l('Full Episodes', 'videos', array('attributes' => array('class' => array('mega-nav-link', 'videos')))); ?>
</div>
<div class="mega-menu-items">
  <?php print l('Social', 'social', array('attributes' => array('class' => array('mega-nav-link', 'social')))); ?>
</div>
<div class="mega-menu-items">
  <?php print l('Schedule', 'schedule', array('attributes' => array('class' => array('mega-nav-link', 'schedule')))); ?>
</div>
<div class="mega-menu-items">
  <?php print l('More', 'globalnav_more/nojs', array('attributes' => array('class' => array('mega-nav-link', 'more', 'use-ajax')))); ?>
  <div class="mega-sub-nav-container">
    <div class="mega-sub-nav">
      <div class="more-title"><?php print variable_get('usanetwork_global_nav_more_title','More on USA'); ?></div>
      <span class="mega-nav-close">close</span>
      <span id="globalnav-more"></span>
      <?php print variable_get('usanetwork_more_menu_links', ''); ?>
    </div>
  </div>
</div>
