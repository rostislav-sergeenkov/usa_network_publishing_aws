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
$themePath = '/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/gracelandcatchup';
?>

<div id="gracelandcatchup-home">
  <div id="home-logo"><img src="<?php print $themePath; ?>/images/gracelandcu_home_logo.png" alt="Graceland Catchup HQ" /></div>
  <div id="home-sponsored"></div>
  <div id="home-tunein"><?php if (!empty($tune_in)) print $tune_in; ?></div>

  <!-- start #countdown timer -->
  <div id="home-countdown">
    <div id="countHolder">
      <div id="counter">
        <div id="count2" class="numbers" style="padding: 0; "></div>
        <ul class="group">
          <li>
            <span class="circle">
              <div class="numbers" id="dday"></div>
              <div class="line"></div>
              <div class="title" id="days">Days</div>
            </span>
          </li>

          <li>
            <span class="circle">
              <div class="numbers" id="dhour"></div>
              <div class="line"></div>
              <div class="title" id="hours">Hours*</div>
            </span>
          </li>

          <li>
            <span class="circle">
              <div class="numbers" id="dmin"></div>
              <div class="line"></div>
              <div class="title" id="minutes">Minutes</div>
            </span>
          </li>
<!--
          <li>
            <span class="circle">
              <div class="numbers" id="dsec"></div>
              <div class="line"></div>
              <div class="title" id="seconds">Seconds</div>
            </span>
          </li>
-->
        </ul>
      </div><!-- #counter -->
      <div id="caption">*Time is EST and CST.</div>
    </div><!-- #countHolder -->
  </div><!-- end countdown timer -->





  <div id="home-nav">
    <ul>
      <li id="binge" class="internal" data-menuanchor="videos"><a href="javascript:void(0)"><div class="home-button"><img src="<?php print $themePath; ?>/images/gracelandcu_home_binge.png" alt="Binge button" /></div></a><div class="spoiler-alert spoiler-high"></div></li>
      <li id="slideshow" class="internal" data-menuanchor="slideshow"><a href="javascript:void(0)"><div class="home-button"><img src="<?php print $themePath; ?>/images/gracelandcu_home_slideshow.png" alt="Slideshow button" /></div></a><div class="spoiler-alert spoiler-medium"></div></li>
      <li id="trivia" class="internal" data-menuanchor="quizzes"><a href="javascript:void(0)"><div class="home-button"><img src="<?php print $themePath; ?>/images/gracelandcu_home_trivia.png" alt="Trivia button" /></div></a><div class="spoiler-alert spoiler-low"></div></li>
    </ul>
  </div>
</div>

<div id="home-usa-logo"><a href="http://www.usanetwork.com" target="_blank"><img src="<?php print $themePath; ?>/images/gracelandcu_usa_logo.png" alt="USA Network logo"></a></div>

<div class="ad-leaderboard dart-tag dart-name-728x90_ifr_reload_home"></div>
