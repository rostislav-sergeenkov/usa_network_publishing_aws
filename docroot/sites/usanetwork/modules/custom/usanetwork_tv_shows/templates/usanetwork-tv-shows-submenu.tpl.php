<div class="show-title-block-wrapper show-border secondary">
  <div class="show-title-block show-color">
    <h1 class="title"><?php print $show_title; ?></h1>
    <div class="social-icons">
      <?php foreach ($social_icons as $social_link): ?>
        <?php print $social_link; ?>
      <?php endforeach; ?>
    </div>
    <div class="schedule">
      <div class="time"><span><?php print $weekday; ?></span><?php print $time; ?></div>
    </div>
    <div class="show-menu-tab">
      <ul class="show-menu menu">
        <?php
        $i = 0;
        foreach ($show_menu_tab_items as $show_menu_tab_item): ?>
          <li class="<?php if (isset($show_menu_tab_item['child']) && count($show_menu_tab_item['child']) > 0): ?>expanded<?php endif; ?>"><?php print $show_menu_tab_item['main_link']; ?>
            <?php if (isset($show_menu_tab_item['child']) && $show_menu_tab_item['child']): ?>
              <ul class="menu<?php if ($i == 0): ?> active<?php endif; ?>">
                <?php foreach ($show_menu_tab_item['child'] as $show_menu_tab_item_child): ?>
                  <li><?php print $show_menu_tab_item_child; ?></li>
                <?php endforeach; ?>
              </ul>
            <?php endif; ?>
          </li>
          <?php $i++; ?>
        <?php endforeach; ?>
      </ul>
    </div>
  </div>
</div>
