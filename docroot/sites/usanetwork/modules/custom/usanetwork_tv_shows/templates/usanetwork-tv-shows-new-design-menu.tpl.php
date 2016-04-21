<div class="top-menu-block show-border">
  <div class="logo-block">
    <a href="/" title="Home" rel="home" class="logo"></a>
    <a href="#" class="second-logo"></a>
  </div>
  <div class="title-block">
    <?php print $show_title; ?>
    <?php if (!empty($tune_in_date)): ?>
      <span><?php print $tune_in_date; ?></span>
    <?php endif; ?>
  </div>
  <?php if (!empty($sponsored_path)) : ?>
    <div class="sponsored" data-mpspath="<?php print $sponsored_path; ?>" data-scalemps="1"></div>
  <?php endif; ?>
  <div class="menu-open-button"></div>
</div>
<div class="bottom-menu-block show-border">
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
    <div class="hashtag"></div>
    <div class="social-icons social-follow">
      <?php foreach ($social_icons as $social_link): ?>
        <?php print $social_link; ?>
      <?php endforeach; ?>
    </div>
  </div>
</div>

