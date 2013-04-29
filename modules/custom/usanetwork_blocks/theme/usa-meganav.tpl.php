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

<div role="navigation" id="mega-nav" class="draweractive">
  <div data-module-type="NavDrawer" class="mega-menu-items shows-mega-menu-item active">
    <?php print l('Shows', '', array('attributes' => array('class' => array('mega-nav-link', 'shows')))); ?>
    <div class="mega-sub-nav-container">
      <div class="mega-sub-nav">
        <?php print views_embed_view('usa_nav','block'); ?>
      </div>
    </div>
  </div>
  <div class="mega-menu-items">
    <?php print l('Videos', '', array('attributes' => array('class' => array('mega-nav-link', 'videos')))); ?>
  </div>
  <div class="mega-menu-items">
    <?php print l('Social', '', array('attributes' => array('class' => array('mega-nav-link', 'social')))); ?>
  </div>
  <div class="mega-menu-items">
    <?php print l('Schedule', '', array('attributes' => array('class' => array('mega-nav-link', 'schedule')))); ?>
  </div>
  <div class="mega-menu-items">
    <?php print l('More', '', array('attributes' => array('class' => array('mega-nav-link', 'more')))); ?>
  </div>
</div>
