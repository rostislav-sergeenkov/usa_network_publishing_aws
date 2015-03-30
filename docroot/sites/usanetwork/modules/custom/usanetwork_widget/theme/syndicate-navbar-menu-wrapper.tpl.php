<?php if ($stules): ?>
  <?php print $stules; ?>
<?php endif; ?>
<header role="banner" id="page-header">
  <div role="navigation" id="mega-nav" class="slide-container" data-module-type="Nav">
    <div class="primary-nav">
      <div id="logo">
        <a href="//www.usanetwork.com" title="Home" rel="home">USA</a>
      </div>
      <div class="region region-header">
        <?php if ($show_menu): ?>
          <div id="block-usanetwork-blocks-usa-tv-show-menu" class="block block-usanetwork-blocks">
            <?php print $show_menu ?>
          </div>
        <?php endif; ?>
        <div id="block-usanetwork-blocks-usa-meganav" class="block block-usanetwork-blocks">
          <?php print $main_menu; ?>
        </div>
      </div>
    </div>
  </div>
</header>