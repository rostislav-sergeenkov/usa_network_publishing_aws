<div class="caroufredsel_wrapper">
  <div class="schedule-carousel">
    <div class="schedule-block on-tonight">
      <?php if (!empty($tonight_block_items)): ?>
        <?php foreach ($tonight_block_items as $tonight_block_item): ?>
          <div class="schedule-item">
            <div class="time"><span><?php print $tonight_block_item['time']; ?></span><br><?php print $tonight_block_item['day_part']; ?></div>
            <div class="episode-info">
              <div class="episode-show"><?php print $tonight_block_item['show_title']; ?></div>
              <div class="icons-block">
                <?php if (!empty($tonight_block_item['syndicated_url'])): ?>
                  <a class="episode-description icon" href="<?php print $tonight_block_item['syndicated_url']; ?>" target="_blank"></a>
                <?php endif; ?>
                <a class="calendar-reminder icon" href="#"></a>
              </div>
            </div>
          </div>
        <?php endforeach; ?>
      <?php endif; ?>
    </div>
    <div style="width: 1482px;" class="schedule-block on-now">
      <div class="schedule-item-wrapper">
        <?php if (!empty($on_now_block_item['on_now'])): ?>
          <div class="schedule-item">
            <div class="time"><span><?php print t('On now'); ?></span></div>
            <div class="episode-info">
              <?php if (!empty($on_now_block_item['on_now']['show_title']) && !empty($on_now_block_item['on_now']['episode_title'])): ?>
                <div class="episode-show"><?php print $on_now_block_item['on_now']['show_title']; ?><br><?php print $on_now_block_item['on_now']['episode_title']; ?></div>
              <?php endif; ?>
              <div class="icons-block">
                <?php if (!empty($on_now_block_item['on_now']['syndicated_url'])): ?>
                  <a class="episode-description icon" href="<?php print $on_now_block_item['on_now']['syndicated_url']; ?>" target="_blank"></a>
                <?php endif; ?>
                <a class="calendar-reminder icon" href="#"></a>
              </div>
            </div>
          </div>
        <?php endif; ?>
        <?php if (!empty($on_now_block_item['up_next'])): ?>
          <div class="schedule-item">
            <?php if (!empty($on_now_block_item['up_next']['time']) && !empty($on_now_block_item['up_next']['day_part'])): ?>
              <div class="time"><span><?php print t('Up next'); ?></span><br>
                <span class="time-color"><?php print $on_now_block_item['up_next']['time'];?></span>
                <?php print $on_now_block_item['up_next']['day_part']; ?>
              </div>
            <?php endif; ?>
            <div class="episode-info">
              <?php if (!empty($on_now_block_item['up_next']['show_title']) && !empty($on_now_block_item['up_next']['episode_title'])): ?>
                <div class="episode-show"><?php print $on_now_block_item['up_next']['show_title']; ?><br><?php print $on_now_block_item['up_next']['epidose_title']; ?></div>
              <?php endif; ?>
              <div class="icons-block">
                <?php if (!empty($on_now_block_item['up_next']['syndicated_url'])): ?>
                  <a class="episode-description icon" href="<?php print $on_now_block_item['up_next']['syndicated_url']; ?>" target="_blank"></a>
                <?php endif; ?>
                <a class="calendar-reminder icon" href="#"></a>
              </div>
            </div>
          </div>
        <?php endif; ?>
      </div>
    </div>
  </div>
  <div class="view-schedule">
    <a href="<?php print url('schedule'); ?>">
      <span><?php print t('View schedule'); ?></span>
    </a>
  </div>
  <div class="schedule-buttons on-now">
    <a class="on-now disabled active" data-class="on-now" href="#" style="display: block;"><?php print t('On now'); ?></a>
    <a class="on-tonight" data-class="on-tonight" href="#" style="display: block;"><?php print t('Tonight'); ?></a>
  </div>
</div>
