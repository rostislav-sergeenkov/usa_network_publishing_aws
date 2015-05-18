<div class="show-title-block-wrapper show-border secondary">
  <div class="show-title-block show-color">
    <h1 class="title"><?php print $show_title; ?></h1>
    <div class="social-icons social-follow">
      <?php foreach ($social_icons as $social_link): ?>
        <?php print $social_link; ?>
      <?php endforeach; ?>
    </div>
    <div class="schedule">
      <div class="time"><span><?php print $weekday; ?></span><?php print $time; ?></div>
    </div>
    <div class="show-menu-tab">
      <ul class="show-menu menu">
        <?php foreach ($show_menu_tab_items as $show_menu_tab_item): ?>
          <li><?php print $show_menu_tab_item['main_link']; ?></li>
        <?php endforeach; ?>
      </ul>
    </div>
  </div>
</div>
