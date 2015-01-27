<?php
/**
 * Videos page template
 *
 * Variables:
 * - $background_url - the URL of page background
 */
?>
<div class="ad-leaderboard dart-tag dart-name-728x90_ifr_reload_videos"></div>
<div class="full-pane" data-tve-player>
  <div id="video-container">
    <div class="video-player-wrapper">
      <?php if (!empty($in_player['rendered']) && !empty($in_player['url'])): ?>
        <div class="video-player" data-video-url="<?php print $in_player['url']; ?>">
          <div class="ds-1col file file-mpx-video-1 file-video-mpx view-mode-inline_content view-mode-inline_content clearfix "></div>
            <?php print $in_player['rendered']; ?>
          </div>
        </div>
      <?php endif; ?>
    </div>
    <div class="video-player-desc">
      <?php if (!empty($video_desc)): ?>
        <?php print $video_desc; ?>
      <?php endif; ?>
    </div>
    <div id="ad_300x60_1"></div>
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
                    <?php if (!empty($video['url']) && !empty($video['rendered'])): ?>
                      <li class="views-row grid-item"
                          data-video-url="<?php print $video['url']; ?>"
                          data-fid="<?php print $video['fid']; ?>"
                          data-account-id="<?php print $video['account_id']; ?>"
                          data-player-id="<?php print $video['player_id']; ?>">
                        <?php print $video['rendered']; ?>
                      </li>
                    <?php endif; ?>
                    <?php if ($v_key == 1): ?><li class="views-row grid-item ad"><div id="ad_300x250_1"></div></li><?php endif; ?>
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
