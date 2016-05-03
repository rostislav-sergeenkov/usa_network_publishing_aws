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

<?php
// @TODO: DV -- SET THE FOLLOWING PATH IN THE MODULE FILE AND MAKE IT AVAILABLE
// TO ALL TEMPLATE FILES
$themePath = '/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/royalpainsfarewell';
date_default_timezone_set('America/New_York');
/*
$timestamp = time();
if ($timestamp > mktime(22, 0, 0, 8, 26, 2015)): // after finale premiere starts Aug 26, 2015 22:00:00 AM ET
endif;
*/
?>

<div id="microsite" <?php if (!empty($classes)): print 'class="' . $classes . '"'; endif; ?>>
  <div id="site-nav" class="section">
    <a name="site-nav"></a>
    <section id="site-nav-content" class="clearfix">
      <div id="site-nav-left"><a id="site-nav-logo" class="internal" href="javascript:void(0)"><img src="/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/royalpainsfarewell/images/rp_farewell_logo_small.png" alt="Royal Pains Farewell logo"></a></div>
      <div id="site-nav-center">
        <div id="site-nav-top">
        </div>
        <div id="site-nav-bottom">
          <div id="site-nav-links">
            <ul id="site-nav-links-list">
              <?php if (!empty($sections)): ?>
                <?php foreach ($sections as $sectionNav): ?>
                  <?php if ($sectionNav['type'] != 'home' && $sectionNav['type'] != 'games'): ?>
                  <li id="nav-<?php print $sectionNav['type']; ?>" class="internal <?php print $sectionNav['type']; ?><?php print ($sectionNav['type'] == $current_section) ? ' active' : '' ?>" data-menuanchor="<?php print $sectionNav['type']; ?>">
                    <?php print html_entity_decode($sectionNav['link']); ?>
                  </li>
                  <?php endif; ?>

                  <?php if ($sectionNav['type'] == 'timeline' && array_key_exists('games', $sections)): // add social nav ?>
                  <li id="nav-social" class="internal social<?php print ('social' == $current_section) ? ' active' : '' ?>" data-menuanchor="social">
                    <a href="#" data-menuitem="4" class="scroll-link">Social</a>
                  </li>
                  <?php endif; ?>
                <?php endforeach; ?>
              <?php endif; ?>
            </ul>
          </div>
        </div>
      </div>
      <div id="site-nav-right">
        <a href="http://<?php print $_SERVER['HTTP_HOST']; ?>" target="_blank"><img src="<?php print $themePath; ?>/images/usa_logo.svg" alt="USA Network logo"></a>
      </div>

      <div id="site-nav-mobile">
        <div id="site-nav-links-mobile" class="mobi-menu-icon border-icon">
          <ul id="site-nav-links-list-mobile">
            <?php if (!empty($sections)): ?>
              <?php foreach ($sections as $sectionNav): ?>
                <?php if ($sectionNav['type'] != 'home' && $sectionNav['type'] != 'games'): ?>
                <li id="mobile-nav-<?php print $sectionNav['type']; ?>" class="internal mobile <?php print $sectionNav['type']; ?><?php print ($sectionNav['type'] == $current_section) ? ' active' : '' ?>" data-menuanchor="<?php print $sectionNav['type']; ?>">
                  <?php print $sectionNav['link']; ?>
                </li>
                <?php endif; ?>

                <?php if ($sectionNav['type'] == 'timeline' && array_key_exists('games', $sections)): // add social nav ?>
                <li id="mobile-nav-social" class="internal mobile social<?php print ('social' == $current_section) ? ' active' : '' ?>" data-menuanchor="social">
                  <a href="#" data-menuitem="4" class="scroll-link">Social</a>
                </li>
                <?php endif; ?>
              <?php endforeach; ?>
            <?php endif; ?>
            <li id="site-nav-show-site-link"><a href="http://www.usanetwork.com/royalpains" target="_blank">Visit Show Site</a></li>
            <li id="site-nav-social">
              <a class="facebook" href="http://www.facebook.com/royalpains" target="_blank"></a>
              <a class="twitter" href="http://twitter.com/RoyalPains_USA" target="_blank"></a>
            </li>
          </ul>
        </div>
      </div>

    </section>
  </div>

  <div id="sections">
    <?php if (!empty($sections)): ?>
    <?php foreach ($sections as $section): ?>
      <?php if ((!empty($section['content']) || $section['type'] == 'about') && !empty($section['type'])): ?>
        <div id="<?php print $section['type']; ?>" class="section<?php print ($section['type'] == $current_section) ? ' active' : ''; ?>">
          <a name="<?php print $section['type']; ?>"></a>
          <section id="<?php print $section['type']; ?>-content" class="clearfix fadein fadein-1s fadein-delay-1s">
              <?php print $section['content']; ?>
            <?php if (empty($section['is_last'])): ?>
              <?php print $section_separator; ?>
            <?php endif; ?>
          </section>
        </div>
        <?php if ($section['type'] == 'timeline' && array_key_exists('games', $sections)): ?>
          <div id="social" class="section">
            <a name="social"></a>
            <section id="social-content" class="clearfix fadein fadein-1s fadein-delay-1s">

              <div class="section-title-block">
                <!-- section title -->
                <h2 class="content"><span>Social</span></h2>

                <div class="section-description">
                  <p>Say goodbye to Royal Pains and share your favorite moments using <strong>#RoyalFarewell</strong></p>
                </div>
              </div>

              <div id="spredfast-social-content">
                <div class="mr-space" id="mr-space_royalpains-farewell-social-space" data-space-id="usa-network/royalpains-farewell-social-space" style="height: 100%; min-height: 500px;"></div>
                <script>!function(a,b,c,d,e,f,g,h,i,j,k){h=a[d]=a[d]||{},h.ui=h.ui||[],i=a[e]=a[e]||{},i[f]||(j=b.getElementsByTagName(c)[0],k=b.createElement(c),k.src="//platform.massrelevance.com/js/massrel.js",j.parentNode.insertBefore(k,j),i[f]=function(){h.ui.push([].slice.call(arguments))}),i[f]("load",{el:b.getElementById(g)})}(window,document,"script","massrel","spredfast","exp","mr-space_royalpains-farewell-social-space");</script>
              </div>

              <div id="ms-social-leaderboard-ad" class="midbanner ad-leaderboard"></div>
            </section>
          </div>
        <?php endif; ?>
      <?php endif; ?>

      <?php if (!empty($section['is_last'])): // add footer ?>
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
