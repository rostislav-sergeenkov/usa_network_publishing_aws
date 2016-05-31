<div class="top-menu-block show-border">
  <div class="top-menu-block-inner">
    <div
      class="logo-block<?php print (!empty($service_link) && !empty($service_logo)) ? ' service-enable' : ''; ?>">
      <a href="/" title="Home" rel="home" class="logo"></a>
      <?php if (!empty($service_logo)) : ?>
        <a href="<?php print $service_link; ?>" class="second-logo">
          <img src="<?php print $service_logo; ?>"/>
        </a>
      <?php endif; ?>
    </div>
    <div
      class="title-block<?php print (!empty($show_class)) ? ' ' . $show_class : ''; ?>">
      <?php print $show_title; ?>
      <?php if (!empty($tune_in_date)): ?>
        <div class="tune-in"><?php print $tune_in_date; ?></div>
      <?php endif; ?>
    </div>
    <div class="menu-open-button show-color show-font"></div>
  </div>
</div>
<div class="bottom-menu-block show-border">
  <div class="bottom-menu-block-inner">
    <div class="show-menu-tab">
      <?php if (!empty($show_menu_tab_items)): ?>
        <ul class="show-menu menu">
          <?php foreach ($show_menu_tab_items as $show_menu_tab_item): ?>
            <li><?php print $show_menu_tab_item['main_link']; ?></li>
          <?php endforeach; ?>
        </ul>
      <?php endif; ?>
    </div>
    <div class="social-block">
      <?php if (!empty($hashtag)): ?>
        <div class="hashtag show-color show-font">
          <span><?php print $hashtag; ?></span>
        </div>
      <?php endif; ?>
      <div class="social-icons social-follow show-color show-font">
        <?php foreach ($social_icons as $social_link): ?>
          <?php print $social_link; ?>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
</div>
<?php if (!empty($sign_up_block)) : ?>
  <div id="block-usanetwork-lyris-newsletter-subscription">
    <?php print $sign_up_block; ?>
  </div>
<?php endif; ?>
