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

<?php
// @TODO: DV -- SET THE FOLLOWING PATH IN THE MODULE FILE AND MAKE IT AVAILABLE
// TO ALL TEMPLATE FILES
$themePath = '/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/royalpainsfarewell';
date_default_timezone_set('America/New_York');
$timestamp = time();
$showCountdown = true;
if ($timestamp > mktime(22, 0, 1, 5, 18, 2016)): // after May 18, 2016 10:00:01 PM ET, which is the start of the finale episode
  $showCountdown = false;
endif;
?>

<div id="home-wrapper" class="clearfix">
  <div id="head-leaderboard" class="topbanner ad-leaderboard"></div>

  <div id="home-content-container">
    <div id="home-logo"><img src="<?php print $themePath; ?>/images/rp_farewell_logo_main.png" alt="Royal Pains Farewell logo" />
      <?php // @TODO: DV -- DYNAMICALLY PULL IN THE h1 TAG AND SECTION STATUS ?>
      <?php if ($_SERVER['REQUEST_URI'] == '/royalpainsfarewell/catchup'): ?>
      <h1 class="seo-h1">Royal Pains Farewell</h1>
      <?php else: ?>
      <h2 class="seo-h1">Royal Pains Farewell</h2>
      <?php endif; ?>
    </div>
    <div id="home-sponsored"></div>
    <div id="home-tunein"><?php if (!empty($tune_in)) print $tune_in; ?></div>

    <!-- start countdown timer -->
<?php if ($showCountdown): ?>
    <div id="home-countdown">
      <div id="countHolder">
        <div id="counter">
          <div id="count2" class="numbers" style="padding: 0; "></div>
          <ul class="group">
            <li>
              <span class="circle">
                <div class="counter-container">
                  <div class="numbers" id="dday"></div>
                  <div class="line"></div>
                  <div class="title" id="days">Days</div>
                </div>
              </span>
            </li>

            <li>
              <span class="circle">
                <div class="counter-container">
                  <div class="numbers" id="dhour"></div>
                  <div class="line"></div>
                  <div class="title" id="hours">Hours*</div>
              </span>
            </li>

            <li>
              <span class="circle">
                <div class="counter-container">
                  <div class="numbers" id="dmin"></div>
                  <div class="line"></div>
                  <div class="title" id="minutes">Minutes</div>
                </div>
              </span>
            </li>
          </ul>
        </div><!-- #counter -->
        <div id="caption">*Time is EST and CST</div>
        <div id="until">UNTIL THE PREMIERE<br>WEDNESDAY, MAY 18 10/9C</div>
      </div><!-- #countHolder -->
    </div><!-- end countdown timer -->
<?php endif; ?>

    <?php if (!empty($description)): ?>
    <?php print $description; ?>
    <?php endif; ?>

    <?php // Insert the navigation HTML in the description field ?>

  </div>
</div>

<div id="home-usa-logo"><a href="http://<?php print $_SERVER['HTTP_HOST']; ?>" target="_blank"><img src="<?php print $themePath; ?>/images/usa_logo.svg" alt="USA Network logo"></a></div>

<!-- <div class="scroll-to-next scroll clearfix"><div>Next</div><center><img src="/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig/images/scroll_down_arrow.png" /></center></div> -->
