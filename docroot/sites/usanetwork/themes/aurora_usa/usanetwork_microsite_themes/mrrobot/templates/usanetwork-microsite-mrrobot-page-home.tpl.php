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
$themePath = '/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/gracelandcatchuppost';
date_default_timezone_set('America/New_York');
$timestamp = time();
$showCountdown = true;
$sponsorClass = 'camry2015';
$sponsorImg = 'graceland-s2catchup-camry.svg';
$sponsorPresentedBy = 'Presented by the Bold 2015 Camry';
if ($timestamp > mktime(22, 0, 1, 8, 26, 2015)): // after Aug 26, 2015 10:00:01 PM ET, which is the start of the finale episode
  $showCountdown = false;
  $sponsorClass = 'corolla';
  $sponsorImg = 'graceland-s2catchup-toyotacorrolla.svg';
  $sponsorPresentedBy = 'Presented by Toyota Corolla';
/*
elseif ($timestamp > mktime(0, 0, 1, 7, 14, 2015)): // after Jul 14, 2015 00:00:01 AM ET
  $sponsorClass = 'camry';
  $sponsorImg = 'graceland-s2catchup-toyotacamry.svg';
  $sponsorPresentedBy = 'Presented by Toyota Camry';
*/
endif;
?>

<div id="gracelandcatchup-home" class="clearfix">
  <div id="home-content-container">
    <div id="home-logo"><img src="<?php print $themePath; ?>/images/graceland-s2catchup-logo.png" alt="Graceland Catchup HQ" /></div>
    <div id="home-sponsored" class="<?php print $sponsorClass; ?>">
      <a href="http://ad.doubleclick.net/ddm/jump/N2724.117456.USANETWORK.COM/B8757919.119883868;sz=1x1;ord=<?php print $timestamp; ?>?" target="_blank">
        <img class="tracking" src="http://ad.doubleclick.net/ddm/ad/N2724.117456.USANETWORK.COM/B8757919.119883868;sz=1x1;ord=<?php print $timestamp; ?>?" border="0" width="1" height="1" alt="Advertisement">
        <img src="<?php print $themePath; ?>/images/<?php print $sponsorImg; ?>" alt="<?php print $sponsorPresentedBy; ?>">
      </a>
    </div>
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
        <li id="confidential" class="external"><a href="http://gracelandconfidential.usanetwork.com" target="_blank"><div class="home-button"><img src="<?php print $themePath; ?>/images/graceland-s2catchup-nav-confidential.png" alt="Confidential button" /></div></a><div class="spoiler-alert spoiler-low"></div></li>
        <li id="watch" class="internal" data-menuanchor="videos"><a href="javascript:void(0)"><div class="home-button"><img src="<?php print $themePath; ?>/images/graceland-s2catchup-nav-watch.png" alt="Watch button" /></div></a><div class="spoiler-alert spoiler-moderate"></div></li>
        <li id="slideshow" class="internal" data-menuanchor="timeline"><a href="javascript:void(0)"><div class="home-button"><img src="<?php print $themePath; ?>/images/graceland-s2catchup-nav-slideshow.png" alt="Slideshow button" /></div></a><div class="spoiler-alert spoiler-medium"></div></li>
        <li id="trivia" class="internal" data-menuanchor="quizzes"><a href="javascript:void(0)"><div class="home-button"><img src="<?php print $themePath; ?>/images/graceland-s2catchup-nav-trivia.png" alt="Trivia button" /></div></a><div class="spoiler-alert spoiler-high"></div></li>
      </ul>
    </div>
  </div>
</div>

<div id="home-usa-logo"><a href="http://<?php print $_SERVER['HTTP_HOST']; ?>" target="_blank"><img src="<?php print $themePath; ?>/images/graceland-s2catchup-usa.svg" alt="USA Network logo"></a></div>

<div class="ad-leaderboard dart-tag dart-name-728x90_ifr_reload_home"></div>

<div class="scroll-to-next scroll clearfix"><div>Next</div><center><img src="/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig/images/scroll_down_arrow.png" /></center></div>
