<?php
/**
 * Global template of Dig theme
 *
 * Variables:
 * - $classes - a string list of classes that should be added to microsite template
 * - $sections - array of sections items:
 * -  - $sections[n]['content'] - pre-rendered content for displaying
 * -  - $sections[n]['type'] - machine-readable name of a section
 * -  - $sections[n]['name'] - human-readable name of a section
 * -  - $sections[n]['is_last'] - flag of the latest section (appears only on the latest)
 * - $section_separator - pre-rendered sections separator
 * - $tune_in - pre-rendered content of Tune In field
 * - $sections_navlinks - pre-rendered array of navigation items:
 * -  - $sections_navlinks[n][] = '<li><a>Name</a></li>
 * - $quizzes - array of quizzes:
 * -  - $quizzes[n]['nid'] - the quiz node id
 * -  - $quizzes[n]['title'] - the title of the quiz
 * -  - $quizzes[n]['url'] - machine-readable version of the quiz title
 */
?>

<div id="microsite" <?php if (!empty($classes)): print 'class="' . $classes . '"'; endif; ?>>
  <div id="sections">
    <?php if (!empty($sections)): ?>
    <?php foreach ($sections as $section): ?>
      <?php if (!empty($section['content']) && !empty($section['type'])): ?>
      <div id="<?php print $section['type']; ?>" class="section<?php print ($section['type'] == $current_section) ? ' active' : ''; ?>">
        <a name="<?php print $section['type']; ?>"></a>
        <section id="<?php print $section['type']; ?>-content" class="clearfix fadein fadein-1s fadein-delay-1s">
            <?php print $section['content']; ?>
          <?php if (empty($section['is_last'])): ?>
            <?php print $section_separator; ?>
          <?php endif; ?>
        </section>
      </div>
      <?php endif; ?>

      <?php if (!empty($section['is_last'])): // add footer ?>
        <div id="offerpop" class="section">
          <iframe id="offerpop-iframe" src="http://offerpop.com/commerce/gallery/12784" width="100%" frameborder="0" scrolling="yes" seamless="seamless"></iframe>
        </div>

        <footer id="footer-microsite" role="contentinfo" class="clearfix">
          <div class="region region-footer">
            <?php print $footer; ?>
          </div>
        </footer>
      <?php endif; ?>

    <?php endforeach; ?>
    <?php endif; ?>
  </div>

  <?php if (!empty($facebook_tracking_html)): ?>
    <?php print $facebook_tracking_html; ?>
  <?php endif; ?>
</div>


<script>
function resizeResponse() {
  var wwidth = $(window).width();

  if (typeof usa_deviceInfo != 'undefined' && usa_deviceInfo.mobileDevice && wwidth < 748) {
    $('.ad-leaderboard').css({'width': '300px', 'height': '50px'});
  }
  else {
    $('.ad-leaderboard').css({'width': '728px', 'height': '90px'});
  }

  if ($('#videos').length > 0) Drupal.behaviors.ms_videos.setVideoHeight();

  initIframeResize();
}

function initIframeResize(delay) {
  delay = delay || 700;
  setTimeout(function() {
    var ifrm = document.getElementById('offerpop-iframe'),
        hostname = window.location.hostname;
    ifrm.contentWindow.postMessage(hostname, 'http://offerpop.com');
usa_debug('========== initIframeResize(), hostname: ' + hostname);
  }, delay);
}

function setIframeHeight(ifrmHeight) {
usa_debug('============== parent.setIframeHeight(' + ifrmHeight + ')');
  var ifrm = document.getElementById('offerpop-iframe');
  ifrm.style.visibility = 'hidden';
  ifrm.style.height = ifrmHeight;
  ifrm.style.visibility = 'visible';
}

// Create IE + others compatible event handler
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer(messageEvent,function(e) {
	if (e.origin == 'http://offerpop.com') {
    console.log('parent received message!:  ' + e.data);
    setIframeHeight(e.data);
  }
}, false);

// RE-SIZING
$(document).ready(function(){
  $('#offerpop-iframe').on('load', function(){ initIframeResize(4000); });
});

var resizeTimer;
$(window).bind('resize', function(){
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(resizeResponse, 800);
});
window.addEventListener('orientationchange', resizeResponse);
</script>
