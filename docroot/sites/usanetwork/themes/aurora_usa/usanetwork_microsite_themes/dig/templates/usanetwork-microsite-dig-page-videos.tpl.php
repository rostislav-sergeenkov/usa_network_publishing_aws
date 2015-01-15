<?php
/**
 * Videos page template
 *
 * Variables:
 * - $background_url - the URL of page background
 */
?>
<div class="ad-leaderboard dart-tag dart-name-728x90_ifr_reload_videos"></div>
<?php if (!empty($background_url)): ?>
<div class="microsite-section-container" data-bg-url="<?php print $background_url; ?>">
<?php endif; ?>
  <div class="full-pane">
    <div class="video-container">
      <?php if (!empty($in_player)): ?>
        <?php print $in_player; ?>
      <?php endif; ?>
    </div>
    <?php if (!empty($videos)): ?>
    <div id="block-usanetwork-mpx-video-usa-mpx-video-views" class="block block-usanetwork-mpx-video">
      <div class="content">
        <div class="ajax-content">
          <div class="view view-usa-mpx-video view-id-usa_mpx_video view-display-id-category_mpx_videos expandable-container view-dom-id-be381e47058d0c21dac9092cb8220a69 jquery-once-2-processed">
            <div class="view-content">
              <div class="item-list">
                <ul>
                <?php foreach ($videos as $v_key => $video): ?>
                  <?php if ($v_key == 2): ?><li class="ad300x250 views-row grid-item"></li><?php endif; ?>
                  <?php if (!empty($video['url']) && !empty($video['rendered'])): ?>
                  <li class="views-row grid-item" data-video-url="<?php print $video['url']; ?>"fid="<?php print $video['fid']; ?>">
                    <?php print $video['rendered']; ?>
                  </li>
                  <?php endif; ?>
                <?php endforeach; ?>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <?php endif; ?>
  </div>
<?php if (!empty($background_url)): ?>
</div>
<?php endif; ?>
