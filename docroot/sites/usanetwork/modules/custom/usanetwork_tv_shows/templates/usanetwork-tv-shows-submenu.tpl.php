<div class="show-title-block-wrapper show-border secondary">
  <div class="show-title-block show-color">
    <?php print $show_title; ?>
    <div class="social-icons social-follow">
      <?php foreach ($social_icons as $social_link): ?>
        <?php print $social_link['link']; ?>
        <?php/* if ($social_link['type'] == 'sing-up'): ?>
          <div class="usa-newsletter-subscription-wrap">
            <div id="usa-newsletter-subscription-mobile" class="show-border">
              <?php print $sign_up_block_additional; ?>
            </div>
          </div>
        <?php endif; */?>
      <?php endforeach; ?>
    </div>
    <div class="schedule">
      <?php if (!empty($time)): ?>
      <div class="time">
        <?php if (!empty($weekday)): ?>
          <span><?php print $weekday; ?></span>
        <?php endif; ?>
        <?php print $time; ?>
      </div>
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
<?php if (!empty($sign_up_block)) : ?>
  <div class="usa-newsletter-subscription-wrap">
    <div id="usa-newsletter-subscription-desktop" class="show-border">
      <?php print $sign_up_block; ?>
    </div>
  </div>
<?php endif; ?>
