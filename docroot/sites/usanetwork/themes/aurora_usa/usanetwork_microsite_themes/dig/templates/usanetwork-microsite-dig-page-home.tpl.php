<?php
/**
 * Home page template
 *
 * Variables:
 * - $aspots - array of pre-rendered A-Spot elements
 * - $bspots - pre-rendered B-Spot element
 * - $cspots - pre-rendered C-Spot element
 * - $characters - characters variables
 * -    $characters[n]['url'] - machine-readable part of url for person
 * -    $characters[n]['title'] - name of person
 * -    $characters[n]['image_url'] - url for profile image
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

      <?php if (!empty($characters)): ?>
      <div class="characters-cast">
        <h2>Meet the Cast &amp; Crew</h2>
        <div id="characters-cast-prev" class="prev btns"><span class="screen-reader-text">Previous</span></div>
        <ul id="characters-cast-list" class="characters-cast-bxslider">
        <?php foreach ($characters as $character): ?>
          <?php if (!empty($character['url']) && !empty($character['title']) && !empty($character['image_url'])): ?>
          <li><a href="<?php print $microsite_url; ?>/characters<?php print $character['url']; ?>"><img src="<?php print $character['image_url']; ?>" alt="<?php print $character['title']; ?>"><div class="person-title"><?php print $character['title']; ?></div></a></li>
          <?php endif; ?>
        <?php endforeach; ?>
        </ul>
        <div id="characters-cast-next" class="next btns"><span class="screen-reader-text">Next</span></div>
      </div>
      <?php endif; ?>

    </div>
  </div>
</div>
