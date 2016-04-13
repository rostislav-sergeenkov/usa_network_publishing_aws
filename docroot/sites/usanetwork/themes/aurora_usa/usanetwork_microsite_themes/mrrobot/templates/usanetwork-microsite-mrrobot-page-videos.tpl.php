<?php
/**
 * Videos page template
 *
 * Variables:
 * - $in_player - array of information about the active video
 * - - $in_player['url']
 * - - $in_player['links']
 * - $video_desc - the active video description
 * - $filter_enabled - whether or not to use video filtering
 * - $filter_list_active - The filter that is currently active
 * - $filter_list - The rendered list of filters
 * - $videos - array of video thumbnails
 * - - $videos[n]['url']
 * - - $videos[n]['rendered']
 * - - $videos[n]['url']
 * - $section_title - the title of the section
 * - $background_url - the URL of page background
 */
?>

<?php if (!empty($section_title) || !empty($description)): ?>
  <div class="section-title-block">
    <?php if (!empty($section_title)): ?>
      <!-- section title -->
      <h2 class="content"><?php print $section_title; ?></h2>
    <?php endif; ?>

    <?php if (!empty($description)): ?>
      <div id="video-section-description" class="section-description">
        <?php print $description; ?>
      </div>
    <?php endif; ?>
  </div>
<?php endif; ?>

<?php if (!empty($filter_enabled)): ?>
  <div class="filter-wrapper">
    <div id="video-filter">
      <div class="filter-label">
        <span><?php print $filter_list_active; ?></span>
      </div>
      <?php print $filter_list; ?>
    </div>
  </div>
<?php endif; ?>

<div class="full-pane clearfix">
  <div class="left-pane">
    <div id="video-container" 
         data-usa-tve-player-container 
         data-entitlement 
         data-video-url="<?php print $in_player['url']; ?>"
         data-ng-class="{'start': isPlayerStart,'play': isPlayerPlay, 'pause': isPlayerPause}">
      <div class="video-container-ajaxed">
        <div class="video-auth-player-wrapper file-video-mpx video usa-video featured-asset premium-asset">
          <div class="tve-help">
            <div class="tve-msg">
              By signing in with your TV provider you get access to full<br/>episodes the day after they air!
            </div>
            <div class="tve-download">
              To unlock full episodes you can select an episode to sign in<br/>- or -<br/>DOWNLOAD THE USA NOW APP
            </div>
            <div class="tve-download-link">
              <a class="google-play-icon" href="https://play.google.com/store/apps/details?id=com.usanetwork.watcher"><img
                    src="/sites/usanetwork/themes/aurora_usa/images/googleplay.png" alt=""/></a>
              <a class="usanow-icon" href="http://www.usanetwork.com/usanow"><img
                    src="/sites/usanetwork/themes/aurora_usa/images/usanow.png" alt=""/></a>
              <a class="appstore-icon" href="https://itunes.apple.com/us/app/usa-now/id661695783?mt=8"><img
                    src="/sites/usanetwork/themes/aurora_usa/images/appstore.png" alt=""/></a>
            </div>
            <div class="tve-close"><img src="/sites/usanetwork/themes/aurora_usa/images/close.png" alt=""/>Close</div>
          </div>
          <div class="video-player-wrapper section-auth"
               data-ng-if="!removePlayerThumbnail">
            <div class="player-thumbnail"
                 data-ng-class="{'hide-section': !playerThumbnail}">
              <div class="video-loading"
                   data-ng-class="{'show-spinner': user.isAuthenticated}"></div>
              <div class="video-image"></div>
            </div>
            <div class="auth-msg-wrap" data-ng-if="!user.isAuthenticated">
              <div class="locked-msg">
            <span
              class="first-line"><?php print t('Please sign in with your TV provider to unlock this episode.'); ?></span>
              </div>
              <div id="player">
                <a href="javascript:void(0)" class="loginButton"
                   data-ng-click="openLoginWindow()">
                </a>
              </div>
            </div>
          </div>
          <div class="video-player video-player-wrapper section-player"
               data-ng-class="{'show-section': !playerThumbnail}">
            <div
              class="ds-1col file file-mpx-video-1 file-video-mpx view-mode-inline_content view-mode-inline_content clearfix ">
            </div>
          </div>
          <div class="tve-help-link help-link">
            <div class="tve-help-sign" data-tve-sign-in-button data-ng-show="!user.isAuthenticated">
              <img src="/sites/usanetwork/themes/aurora_usa/images/info_blue.png" alt=""/>
              Why do I have to sign in?
            </div>
          </div>
          <div class="tve-help-link signOut">
            <div class="item-list">
              <ul class="tve-header-links inline">
                <li class="first">
                  <div class="tveLoginButton" data-usa-tve-login-button></div>
                </li>
                <li class="last">
                  <ul class="item-list" data-ng-if="user.isAuthenticated">
                    <li class="item actionLink" >
                      <div class="tveLogoutButton" data-usa-tve-logout-button></div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="video-no-auth-player-wrapper">
          <div class="video-player no-auth">
            <div class="custom-play"></div>
            <div
                class="ds-1col file file-mpx-video-1 file-video-mpx view-mode-inline_content view-mode-inline_content clearfix ">
              <iframe class="base-iframe"></iframe>
            </div>
          </div>
        </div>
        <div class="video-player-desc">
          <?php if (!empty($video_desc)): ?>
            <?php print $video_desc; ?>
          <?php endif; ?>
        </div>
        <div id="video-gigya-share-container">
          <div id="video-gigya-share-title">Share this video</div>
          <div id="video-gigya-share" class="video-gigya-share"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="right-pane clearfix">
    <?php if (!empty($videos)): ?>
    <div id="block-usanetwork-mpx-video-usa-mpx-video-views" class="block block-usanetwork-mpx-video">
      <div class="content">
        <div class="ajax-content">
          <div id="thumbnail-list"
               class="view view-usa-mpx-video view-id-usa_mpx_video view-display-id-category_mpx_videos expandable-container view-dom-id-be381e47058d0c21dac9092cb8220a69 jquery-once-2-processed">
            <div class="view-content">
              <div id="video-item-list-wrapper" class="item-list">
                <ul class="<?php print $active_filter_class; ?>">
                  <?php
                  $video_count = count($videos);
                  foreach ($videos as $v_key => $video): ?>
                    <?php if (!empty($video['url']) && !empty($video['rendered'])): ?>
                      <li class="thumbnail views-row grid-item <?php print $video['state']; ?>"
                          data-video-url="<?php print $video['url']; ?>"
                          data-fid="<?php print $video['fid']; ?>"
                          data-account-id="<?php print $video['account_id']; ?>"
                          data-player-id="<?php print $video['player_id']; ?>"
                          data-video-id="<?php print $video['video_id']; ?>"
                          data-full-episode="<?php print $video['is_full_episode']; ?>">
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
    <div id="ad_300x60_1"></div>
    <div id="ad_300x250_1"></div>
  </div>
</div>

<div id="ms-videos-leaderboard-ad" class="midbanner ad-leaderboard ad_728x90"></div>
