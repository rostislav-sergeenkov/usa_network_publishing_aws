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
$themePath = '/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/mrrobot';
date_default_timezone_set('America/New_York');
$timestamp = time();
if ($timestamp > mktime(22, 0, 0, 8, 26, 2015)): // after finale premiere starts Aug 26, 2015 22:00:00 AM ET
endif;
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

      <?php if ($section['type'] == 'home'): // add site nav ?>
      <div id="site-nav" class="section">
        <a name="site-nav"></a>
        <section id="site-nav-content" class="clearfix">
          <div id="site-nav-left"><a href="http://<?php print $_SERVER['HTTP_HOST']; ?>" target="_blank"><img src="<?php print $themePath; ?>/images/usa_logo.svg" alt="USA Network logo"></a></div>
          <div id="site-nav-center">
            <div id="site-nav-top">
              <a id="site-nav-logo" class="internal" href="javascript:void(0)"><img src="<?php print $themePath; ?>/images/mr_robot_logo.png" alt="Mr. Robot logo"></a>
            </div>
            <div id="site-nav-bottom">
              <div id="site-nav-links">
                <ul id="site-nav-links-list">
                  <?php if (!empty($sections)): ?>
                    <?php foreach ($sections as $sectionNav): ?>
                      <?php if ($sectionNav['type'] != 'home'): ?>
                      <li id="nav-<?php print $sectionNav['type']; ?>" class="internal <?php print $sectionNav['type']; ?><?php print ($sectionNav['type'] == $current_section) ? ' active' : '' ?>" data-menuanchor="<?php print $sectionNav['type']; ?>">
                        <?php print html_entity_decode($sectionNav['link']); ?>
                      </li>
                      <?php endif; ?>

                      <?php if ($sectionNav['type'] == 'videos'): // add must see moments nav ?>
                      <li id="nav-must-see-moments" class="internal must-see-moments<?php print ('must-see-moments' == $current_section) ? ' active' : '' ?>" data-menuanchor="must-see-moments">
                        <a href="#" data-menuitem="2" class="scroll-link">must see moments</a>
                      </li>
                      <?php endif; ?>
                    <?php endforeach; ?>
                  <?php endif; ?>
                </ul>
              </div>
            </div>
          </div>
          <div id="site-nav-right">
            <div id="site-nav-social">
              <a class="facebook" href="http://www.facebook.com/WhoIsMrRobot" target="_blank"></a>
              <a class="twitter" href="http://twitter.com/whoismrrobot" target="_blank"></a>
            </div>
            <div id="site-nav-show-site-link"><a href="http://<?php print $_SERVER['HTTP_HOST']; ?>/mrrobot" target="_blank">Visit Show Site</a></div>
          </div>

          <div id="site-nav-mobile">
            <div id="site-nav-links-mobile" class="mobi-menu-icon border-icon">
              <ul id="site-nav-links-list-mobile">
                <?php if (!empty($sections)): ?>
                  <?php foreach ($sections as $sectionNav): ?>
                    <?php if ($sectionNav['type'] != 'home'): ?>
                    <li id="mobile-nav-<?php print $sectionNav['type']; ?>" class="internal mobile <?php print $sectionNav['type']; ?><?php print ($sectionNav['type'] == $current_section) ? ' active' : '' ?>" data-menuanchor="<?php print $sectionNav['type']; ?>">
                      <?php print $sectionNav['link']; ?>
                    </li>
                    <?php endif; ?>

                    <?php if ($sectionNav['type'] == 'videos'): // add must see moments nav ?>
                    <li id="mobile-nav-must-see-moments" class="internal mobile must-see-moments<?php print ('must-see-moments' == $current_section) ? ' active' : '' ?>" data-menuanchor="must-see-moments">
                      <a href="#" data-menuitem="2" class="scroll-link">must see moments</a>
                    </li>
                    <?php endif; ?>
                  <?php endforeach; ?>
                <?php endif; ?>
                <li id="site-nav-show-site-link"><a href="http://www.usanetwork.com/mrrobot" target="_blank">Visit Show Site</a></li>
                <li id="site-nav-social">
                  <a class="facebook" href="http://www.facebook.com/WhoIsMrRobot" target="_blank"></a>
                  <a class="twitter" href="http://twitter.com/whoismrrobot" target="_blank"></a>
                </li>
              </ul>
            </div>
          </div>

        </section>
      </div>
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
