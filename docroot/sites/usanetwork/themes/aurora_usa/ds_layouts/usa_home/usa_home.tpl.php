<?php
  $slideshow = (!empty($node->field_usa_autoscroll) && $field_usa_autoscroll[$language][0]['value'] == 1)? true: null;
  $slideshowSpeed = (isset($field_usa_slide_speed[$language][0]['value']))? $field_usa_slide_speed[$language][0]['value']: null;
  $js_settings = array(
    'slideshow' => $slideshow,
    'slideshowSpeed' => $slideshowSpeed
  );
  drupal_add_js(array('homeSlides' => $js_settings), array('type' => 'setting'));
  $theme_path = drupal_get_path('theme', 'aurora_usa');
  drupal_add_js($theme_path . '/javascripts/home-sliders.js');


/* COMMENTED BY DV ON MAR 3, 2014. ROBIN WANTS TO HOLD ON TO THIS
 * VIDEO OVERLAY CODE IN CASE WE WANT TO ADD INSTRUCTIONS FOR A NEW
 * FEATURE, FOR EXAMPLE.
 * BASICALLY, THIS CODE POPS UP A VIDEO SHORTLY AFTER PAGE LOAD IN A
 * LIGHT BOX AND PLAYS IT. WHEN THE VIDEO IS DONE (AS DETERMINED BY
 * THE INTEGER SET FOR videoDuration), THE LIGHTBOX AUTOMATICALLY
 * CLOSES. ALTERNATIVELY, THE USER CAN CLICK A CLOSE BUTTON TO CLOSE
 * THE LIGHTBOX.
$aspotVideoCSS = <<<EOD
#wall2 {
  display:none;
  opacity: 0;
  background-color: rgba(0,0,0,0.8);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}
#aspot-video-container {
  display: none;
  opacity: 0;
  width: 100%;
}
#aspot-video {
  position: fixed;
  top: 20%;
  left: 50%;
  z-index: 100;
}
EOD;
drupal_add_css($aspotVideoCSS, array('type' => 'inline'));

$aspotVideo = <<<EOD
var usa_debugFlag = true;
function usa_debug(msg) {
  if (usa_debugFlag && typeof console.log != "undefined") {
    console.log(msg);
  }
}

// THE WALL + VIDEO
function video_build() {
  usa_debug('video_build()');
  jQuery('#wall2').remove();
  var aspotVideoWidth = jQuery("#main-slider").width();
  var aspotVideoHeight = jQuery("#main-slider").height();
  //var aspotVideoTag = '<video width="100%" autoplay><source src="http://link.theplatform.com/s/OyMl-B/e2Ld8aaORA5c?mbr=true&feed=Feed%20for%â€¦Psych%20Ultimate%20Fan%20Episode%20v2.1&switch=progressive&format=redirect" type="video/mp4">Your browser does not support the video tag.</video>';
  var aspotVideoTag = '<video width="100%" autoplay><source src="http://a248.g.akamai.net/7/1697/141550/0s/usavideo1.download.akamai.com/141550/video/NBCU_USA_Network/730/714/140224_2748054_Promo__Talk_About_Todd_1696.mp4" type="video/mp4">Your browser does not support the video tag.</video>';
  jQuery('.jPanelMenu-panel')
    .append('<div id="wall2" data-module-type="wall2"></div><div id="aspot-video-container"><div id="aspot-video" style="width: ' + aspotVideoWidth + 'px; height: ' + aspotVideoHeight + 'px; margin: 0 -' + (Math.floor(aspotVideoWidth/2)) + 'px"><span id="aspot-video-close" class="mega-nav-close">close</span>' + aspotVideoTag + '</div></div>');
  jQuery('#wall2, #aspot-video-close').click(function(){
      video_remove();
  });
}

function aspotVideoShow() {
  usa_debug('aspotVideoShow()');
  usa_debug(jQuery('#wall2'));
  jQuery("#wall2").css({"opacity": 0, "display": "block"}).animate({"opacity": 0.9}, 800, "swing", function(){
    usa_debug('animation 2 fade in wall2 complete');
    jQuery("#aspot-video-container").css({"opacity": 0, "display": "block"}).delay(800).animate({"opacity": 1}, 800, "swing", function(){
      usa_debug('animation 3 fade in video complete');
      aspotVideoResumeFlexsliderPlay();
    });
  });
}

function video_remove() {
  usa_debug('video_remove()');
  jQuery("#aspot-video-container").animate({"opacity": 0}, "slow", "swing", function(){
    jQuery(this).remove(); // css({"display": "none"}).html("");
    jQuery("#wall2").fadeOut("slow", function(){
      jQuery("#wall2").remove();
        jQuery("#main-slider").flexslider("play");
    });
  });
}

function aspotVideoResumeFlexsliderPlay() {
  usa_debug("aspotVideoResumeFlexsliderPlay()");
  var videoDuration = 30000;
  usa_debug("videoDuration: " + videoDuration);
  setTimeout(function(){
    usa_debug("running aspotVideoResumeFlexsliderPlay now");
    video_remove();
  }, videoDuration);
}

var loadedAlready = 0;
var videoDuration = 30; // num of seconds
usa_debug("page loaded");
if (!loadedAlready) {
  loadedAlready = 1;
  setTimeout(function() {
    usa_debug("loading video now");
    jQuery("#main-slider").flexslider("pause");
    video_build();
    if (jQuery('#aspot-video').html().length > 0) {
      aspotVideoShow();
    }
    else {
      setTimeout(aspotVideoShow, 500);
    }
  }, 4000);
}
EOD;
drupal_add_js($aspotVideo, array('type' => 'inline'));
*/
?>

<div class="<?php print $classes;?> usa-home">
  <div class="tiles" data-module-type="SliderTiles">
    <div class="tiles-inner">

    <?php if ($aspot): ?>
      <div id="main-slider" class="usa-home-aspot flexslider a-spot"><?php print $aspot; ?></div>
      <div id="aspot-video-container" class="usa-home-aspot a-spot" style="display: none">&nbsp;</div>
    <?php endif; ?>
    <?php if ($ad): ?>
      <div class="usa-home-ad ad"><?php print $ad; ?></div>
    <?php endif; ?>
    <?php if ($bspot): ?>
      <div class="usa-home-bspot flexslider secondary-slider b-spot"><?php print $bspot; ?></div>
    <?php endif; ?>
    <?php if ($cspot): ?>
      <div class="usa-home-cspot flexslider secondary-slider c-spot"><?php print $cspot; ?></div>
    <?php endif; ?>
    </div>
  </div><!-- END tiles -->
</div>
<?php if ($featured): ?>
<div class="usa-home-featured clearfix">
  <div class="view">
    <h2 class="block-title"><?php print isset($featured_title) ? $featured_title : t('Featured'); ?></h2>
    <div class="carousel clearfix">
      <div class="carousel-viewport">
        <?php print $featured; ?>
      </div>
    </div>
  </div>
</div>
<?php endif; ?>
