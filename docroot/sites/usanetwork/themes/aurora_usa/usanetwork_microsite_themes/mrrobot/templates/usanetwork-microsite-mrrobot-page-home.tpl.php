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
$themePath = '/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/mrrobot';
date_default_timezone_set('America/New_York');
$timestamp = time();
$showCountdown = true;
if ($timestamp > mktime(22, 0, 1, 8, 26, 2015)): // after Aug 26, 2015 10:00:01 PM ET, which is the start of the finale episode
  $showCountdown = false;
endif;
?>

<div id="home-wrapper" class="clearfix">
  <div class="ad-leaderboard dart-tag dart-name-728x90_ifr_reload_home"></div>

  <div id="home-content-container">
    <div id="home-logo"><img src="<?php print $themePath; ?>/images/main_title.png" alt="Mr. Robot logo" /></div>
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
      </div><!-- #countHolder -->
    </div><!-- end countdown timer -->
<?php endif; ?>

    <?php if (!empty($description)): ?>
    <div id="home-description" class="section-description"><?php print $description; ?></div>
    <?php endif; ?>

    <div id="home-nav" class="clearfix">
      <ul>
        <li id="home-nav-binge" class="internal" data-menuanchor="videos"><a href="javascript:void(0)"><div class="home-button"><img src="<?php print $themePath; ?>/images/binge_btn.png" alt="Binge button" /></div></a><div class="home-button-text">watch from the beginning</div></li>
        <li id="home-nav-must-see-moments" class="internal" data-menuanchor="must-see-moments"><a href="javascript:void(0)"><div class="home-button"><img src="<?php print $themePath; ?>/images/msmoments_btn.png" alt="Must See Moments button" /></div></a><div class="home-button-text">watch the best scenes</div></li>
        <li id="home-nav-behind-the-scenes" class="internal" data-menuanchor="timeline"><a href="javascript:void(0)"><div class="home-button"><img src="<?php print $themePath; ?>/images/slideshow_btn.png" alt="Behind the Scenes button" /></div></a><div class="home-button-text">ones and zeros slideshow</div></li>
        <li id="home-nav-infographic" class="internal" data-menuanchor="characters"><a href="javascript:void(0)"><div class="home-button"><img src="<?php print $themePath; ?>/images/infographic_btn.png" alt="Infographic button" /></div></a><div class="home-button-text">season at a glance</div></li>
        <li id="home-nav-do-not-disturb" class="internal" data-menuanchor="galleries"><a href="javascript:void(0)"><div class="home-button"><img src="<?php print $themePath; ?>/images/donotdisturb_btn.png" alt="Do Not Disturb button" /></div></a><div class="home-button-text">social graphics</div></li>
        <li id="home-nav-trivia" class="internal" data-menuanchor="quizzes"><a href="javascript:void(0)"><div class="home-button"><img src="<?php print $themePath; ?>/images/trivia_btn.png" alt="Trivia button" /></div></a><div class="home-button-text">think you know mr. robot?</div></li>
      </ul>
    </div>
  </div>
</div>

<div id="home-usa-logo"><a href="http://<?php print $_SERVER['HTTP_HOST']; ?>" target="_blank"><img src="<?php print $themePath; ?>/images/usa_logo.svg" alt="USA Network logo"></a></div>

<!-- <div class="scroll-to-next scroll clearfix"><div>Next</div><center><img src="/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig/images/scroll_down_arrow.png" /></center></div> -->
