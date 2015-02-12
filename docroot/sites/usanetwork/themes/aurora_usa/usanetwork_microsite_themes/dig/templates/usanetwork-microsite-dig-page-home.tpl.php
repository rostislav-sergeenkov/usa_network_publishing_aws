<?php
/**
 * Home page template
 *
 * Variables:
 * - $aspots - array of pre-rendered A-Spot elements
 * - $bspots - pre-rendered B-Spot element
 * - $cspots - pre-rendered C-Spot element
 * - $characters - characters variables
 * - $promo_carousel - array of pre-rendered promo-carousel items
 * - $background_url - the URL of page background
 */
?>

<div class="ad-leaderboard dart-tag dart-name-728x90_ifr_reload_home"></div>
<div class="region region-content">
  <div class="panel-display panel-onecol-stacked clearfix">
    <div class="panel-wrapper">
      <?php if (!empty($aspots)): ?>
      <div class="panel-panel panel-one panel-row first-row a-spot-panel tiles">
        <div id="main-slider">
          <div id="show-aspot-microsite" class="microsite-carousel panel-pane pane-entity-field pane-node-field-usa-tv-a-spot">
            <div class="pane-content">
              <ul>
                <?php foreach ($aspots as $aspot): ?>
                  <li
                    <?php if($aspot['a_spot_with_intro']): ?>
                      class="aspot-trailer"
                    <?php endif; ?>
                    data-fid="<?php print $aspot['fid']; ?>"
                    data-video-url="<?php print $aspot['video_param']; ?>"
                    data-account-id="<?php print $aspot['account_id']; ?>"
                    data-player-id="<?php print $aspot['player_id']; ?>">
                    <?php print $aspot['rendered_item']; ?>
                  </li>
                <?php endforeach; ?>
              </ul>
            </div>
          </div>
          <div id="aspot-video-container"></div>
        </div>
      </div>
      <?php endif; ?>

      <?php if (!empty($featured)): ?>
      <div class="usa-microsite-featured clearfix">
        <div class="carousel clearfix">
          <div class="carousel-viewport">
            <div class="microsite-carousel">
              <ul class="slides">
                <?php foreach ($featured as $f_key => $feature): ?>
                  <?php /* if ($f_key == 1): ?>
                    <li class="ad ad300x250 dart-tag dart-name-300x250_ifr_reload_home carousel-item"></li>
                  <?php endif; */ ?>
                  <li class="carousel-item">
                    <?php print $feature; ?>
                  </li>
                <?php endforeach; ?>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <?php endif; ?>

      <?php if (!empty($characters_cast)): ?>
      <div class="characters-cast">
        <?php print $characters_cast; ?>
      </div>
      <?php endif; ?>

      <?php if (!empty($promo_carousel)): ?>
      <ul>
        <?php foreach ($promo_carousel as $carousel_item): ?>
        <li>
          <?php print $carousel_item; ?>
        </li>
        <?php endforeach; ?>
      </ul>
      <?php endif; ?>
    </div>
  </div>
</div>
