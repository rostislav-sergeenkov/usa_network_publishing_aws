<?php
/**
 * @file
 * usa-meganav-syndicate.tpl.php
 *
 * Theme implementation for the usa mega nav
 *
 * Available variables:
 *
 */

$show_title = variable_get('usanetwork_global_nav_show_title');
$more_title = variable_get('usanetwork_global_nav_more_title');
?>



<div data-module-type="NavDrawer" class="mega-menu-items shows-mega-menu-item active">
  <?php print l('Shows', '#', array('absolute' => true, 'attributes' => array('class' => array('mega-nav-link', 'shows'), 'data-drawer-id' => 'main-nav-shows'))); ?>
  <div class="mega-sub-nav-container" data-drawer="main-nav-shows">
    <div class="mega-sub-nav">
      <div class="more-title"><?php print empty($show_title) ? 'Shows' : $show_title; ?></div>
      <span class="mega-nav-close">close</span>
      <?php print usanetwork_home_globalnav_shows_banner(); ?>
      <?php print views_embed_view('usa_nav','block'); ?>
    </div>
  </div>
</div>
<div class="mega-menu-items">
  <?php print l('Full Episodes', 'videos', array('attributes' => array('class' => array('mega-nav-link', 'videos')))); ?>
</div>
<div class="mega-menu-items">
  <?php print l('Live TV', 'videos/live', array('attributes' => array('class' => array('mega-nav-link', 'live')))); ?>
</div>
<div class="mega-menu-items">
  <?php print l('Schedule', 'schedule', array('attributes' => array('class' => array('mega-nav-link', 'schedule')))); ?>
</div>
<div class="mega-menu-items">
  <?php print l('Games', 'http://www.characterarcade.com', array('attributes' => array('class' => array('mega-nav-link', 'games')))); ?>
</div>
<div class="mega-menu-items">
  <?php print l('More', '#', array('absolute' => true, 'attributes' => array('class' => array('mega-nav-link', 'more'), 'data-drawer-id' => 'main-nav-more'))); ?>
  <div class="mega-sub-nav-container" data-drawer="main-nav-more">
    <div class="mega-sub-nav">
      <div class="more-title"><?php print empty($more_title) ? 'More on USA' : $more_title; ?></div>
      <span class="mega-nav-close">close</span>
      <?php print usanetwork_home_globalnav_more_banner(); ?>
      <?php print variable_get('usanetwork_more_menu_links', ''); ?>
    </div>
  </div>
</div>

