<div class="show-title-block-wrapper show-border secondary">
  <div class="show-title-block show-color">
    <?php print $show_title; ?>
    <div class="social-icons social-follow">
      <?php foreach ($social_icons as $social_link): ?>
        <?php print $social_link; ?>
      <?php endforeach; ?>
    </div>
    <div class="schedule">
      <?php if (!empty($tune_in_date)): ?>
        <span><?php print $tune_in_date; ?></span>
      <?php endif; ?>
    </div>
    <div class="show-menu-tab">
      <?php if (!empty($show_menu_tab_items)): ?>
        <ul class="show-menu menu">
          <?php foreach ($show_menu_tab_items as $show_menu_tab_item): ?>
            <li><?php print $show_menu_tab_item['main_link']; ?></li>
          <?php endforeach; ?>
        </ul>
      <?php endif; ?>
    </div>
  </div>
</div>
