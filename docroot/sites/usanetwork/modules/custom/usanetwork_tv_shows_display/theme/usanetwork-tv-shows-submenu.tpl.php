<div class="show-title-block-wrapper">
  <div class="show-title-block show-color">
    <div class="menu-open show-border secondary"><a href="javascript:void(0)"></a></div>
    <div class="schedule">
      <h1 class="title"><?php print $show_title; ?></h1>

      <div class="time"><span><?php print $weekday; ?></span><?php print $time; ?></div>
    </div>
    <div class="social-icons">
      <?php foreach ($social_icons as $social_link): ?>
        <?php print $social_link; ?>
      <?php endforeach; ?>
    </div>
  </div>
</div>
<div class="show-menu-tab" style="display: none;">
  <?php if ($show_menu_video_url): ?>
  <div class="show-menu-video">
    <div class="node node-usanetwork-promo">
      <a href="<?php print $show_menu_video_url; ?>" class="play-icon">
        <div class="asset-img">
          <?php print $show_menu_video_img; ?>
        </div>
      </a>

      <div class="title-overlay meta">
        <div class="title"><?php print $show_menu_video_title; ?></div>
        <div class="caption"><?php print $show_menu_video_caption; ?></div>
      </div>
    </div>
  </div>
  <?php endif; ?>
  <ul class="show-menu menu">
    <?php $i = 0; 
    foreach ($show_menu_tab_items as $show_menu_tab_item): ?>
    <li class="<?php if (count($show_menu_tab_item['child']) > 0): ?>expanded<?php endif; ?> <?php if ($i == 0): ?> active<?php endif; ?>"><?php print $show_menu_tab_item['main_link']; ?>
      <ul class="menu<?php if ($i == 0): ?> active<?php endif; ?>">
        <?php foreach ($show_menu_tab_item['child'] as $show_menu_tab_item_child):?>
        <li><?php print $show_menu_tab_item_child; ?></li>
        <?php endforeach; ?>
      </ul>
    </li>
    <?php  $i++; ?>
    <?php 
    endforeach; ?>
  </ul>
</div>
