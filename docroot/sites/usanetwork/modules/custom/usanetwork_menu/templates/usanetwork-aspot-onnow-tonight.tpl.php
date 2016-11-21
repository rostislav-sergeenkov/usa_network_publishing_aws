<div class="schedule-on-tonight">
  <div class="schedule-carousel-wrap">
    <div class="schedule-carousel">
      <div class="schedule-block on-tonight">
        <div class="schedule-buttons on-tonight">
          <a class="on-now no-link" data-class="on-now"
             href="#">
            <span><?php print t('On now'); ?></span>
          </a>
        </div>
        <div class="schedule-items-wrapper">
          <?php if (!empty($tonight_block_items)): ?>
            <?php foreach ($tonight_block_items as $tonight_block_item): ?>
              <div class="schedule-item">
                <div class="schedule-item-wrap">
                  <div class="time">
                    <span><?php print $tonight_block_item['time']; ?></span><br><?php print $tonight_block_item['day_part']; ?>
                  </div>
                  <div class="episode-info">
                    <div
                      class="episode-show<?php print !empty($tonight_block_item['episode_class']) ? (' ' . $tonight_block_item['episode_class']) : ''; ?>">
                      <div class="episode-show-wrapper">
                        <?php print $tonight_block_item['show_title']; ?>
                      </div>
                    </div>
                    <div class="icons-block">
                      <?php if (!empty($tonight_block_item['episode_full_url'])): ?>
                        <a class="schedule-icon-font icon"
                           data-name="description"
                           href="<?php print $tonight_block_item['episode_full_url']; ?>"></a>
                      <?php endif; ?>
                    </div>
                  </div>
                </div>
              </div>
            <?php endforeach; ?>
          <?php endif; ?>
        </div>
      </div>
      <div class="schedule-block on-now">
        <div class="schedule-buttons on-now">
          <a class="on-tonight no-link" data-class="on-tonight"
             href="#">
            <span><?php print t('Tonight'); ?></span>
          </a>
        </div>
        <div class="schedule-items-wrapper">
          <div class="schedule-item-wrap">
            <?php if (!empty($on_now_block_item['up_next'])): ?>
              <div class="schedule-item">
                <div class="schedule-item-wrap">
                  <?php if (!empty($on_now_block_item['up_next']['time']) && !empty($on_now_block_item['up_next']['day_part'])): ?>
                    <div class="time">
                      <span><?php if (!empty($on_now_block_item['up_next']['label_link'])): print $on_now_block_item['up_next']['label_link']; endif; ?></span><br>
                      <span
                        class="time-color"><?php print $on_now_block_item['up_next']['time']; ?></span>
                      <?php print $on_now_block_item['up_next']['day_part']; ?>
                    </div>
                  <?php endif; ?>
                  <div class="episode-info">
                    <?php if (!empty($on_now_block_item['up_next']['show_title']) && !empty($on_now_block_item['up_next']['episode_title'])): ?>
                      <div
                        class="episode-show<?php print !empty($on_now_block_item['up_next']['episode_class']) ? (' ' . $on_now_block_item['up_next']['episode_class']) : ''; ?>">
                        <div class="episode-show-wrapper">
                          <?php print !empty($on_now_block_item['up_next']['show_title']) ? $on_now_block_item['up_next']['show_title'] : ''; ?>
                          <br/>
                          <?php print !empty($on_now_block_item['up_next']['episode_title']) ? $on_now_block_item['up_next']['episode_title'] : ''; ?>
                        </div>
                      </div>
                    <?php endif; ?>
                    <div class="icons-block">
                      <?php if (!empty($on_now_block_item['up_next']['episode_full_url'])): ?>
                        <a class="schedule-icon-font icon"
                           data-name="description"
                           href="<?php print $on_now_block_item['up_next']['episode_full_url']; ?>"></a>
                      <?php endif; ?>
                      <?php if (!empty($on_now_block_item['up_next']['syndicated_url'])): ?>
                        <a class="calendar-reminder seeit-reminder icon no-link"
                           data-name="reminder" href="javascript:void(0)"
                           data-url="<?php print $on_now_block_item['up_next']['syndicated_url']; ?>"></a>
                      <?php endif; ?>
                    </div>
                  </div>
                </div>
              </div>
            <?php endif; ?>
            <?php if (!empty($on_now_block_item['on_now'])): ?>
              <div class="schedule-item">
                <div class="schedule-item-wrap">
                  <div class="time">
                    <a href="videos/live" class="on-now-link">
                  <span class="top-line">
                    <?php if (!empty($on_now_block_item['on_now']['label_link'])): print $on_now_block_item['on_now']['label_link']; endif; ?>
                  </span>
                      <div class="watch-now">
                    <span class="live">
                      <?php if (!empty($on_now_block_item['on_now']['on_now_live_button'])): print $on_now_block_item['on_now']['on_now_live_button']; endif; ?>
                    </span>
                        <span>
                      <?php if (!empty($on_now_block_item['on_now']['on_now_caption'])): print $on_now_block_item['on_now']['on_now_caption']; endif; ?>
                     </span>
                      </div>
                    </a>
                  </div>
                  <div class="episode-info">
                    <?php if (!empty($on_now_block_item['on_now']['show_title']) && !empty($on_now_block_item['on_now']['episode_title'])): ?>
                      <div
                        class="episode-show<?php print !empty($on_now_block_item['on_now']['episode_class']) ? (' ' . $on_now_block_item['on_now']['episode_class']) : ''; ?>">
                        <div class="episode-show-wrapper">
                          <?php print $on_now_block_item['on_now']['show_title']; ?>
                          <br><?php print $on_now_block_item['on_now']['episode_title']; ?>
                        </div>
                      </div>
                    <?php endif; ?>
                    <div class="icons-block">
                      <?php if (!empty($on_now_block_item['on_now']['episode_full_url'])): ?>
                        <a class="schedule-icon-font icon"
                           data-name="description"
                           href="<?php print $on_now_block_item['on_now']['episode_full_url']; ?>"></a>
                      <?php endif; ?>
                      <?php if (!empty($on_now_block_item['on_now']['syndicated_url'])): ?>
                        <a class="calendar-reminder seeit-reminder icon no-link"
                           data-name="reminder" href="javascript:void(0)"
                           data-url="<?php print $on_now_block_item['on_now']['syndicated_url']; ?>"></a>
                      <?php endif; ?>
                    </div>
                  </div>
                </div>
              </div>
            <?php endif; ?>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="view-schedule">
    <a href="<?php print url('schedule'); ?>">
      <span><?php print t('View schedule'); ?></span>
    </a>
  </div>
</div>
