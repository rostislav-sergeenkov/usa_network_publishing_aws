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
  <?php print l('Shows', '', array('attributes' => array('class' => array('mega-nav-link', 'shows')))); ?>
  <div class="mega-sub-nav-container">
    <div class="mega-sub-nav">
      <span class="mega-nav-close">x</span>
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
  <?php print l('More', '', array('attributes' => array('class' => array('mega-nav-link', 'more')))); ?>
  <div class="mega-sub-nav-container">
    <div class="mega-sub-nav">
      <span class="mega-nav-close">close</span>
      <?php print variable_get('usanetwork_more_menu_links', ''); ?>
    </div>
  </div>
</div>
