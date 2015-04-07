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
$themePath = '/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/gracelandcatchup';
?>

<style>
/* GENERAL */
html {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  font-size: 16px;
  line-height: 18px;
  color: #000;
  background-color: #CCC;
}
li {
  list-style-type: none;
}
img {
  width: 100%;
  height: auto;
}

/* MAIN STRUCTURE */
.page-node-microsite .usa-wrap {
  background-color: #CCC;
}
.page-node-microsite #main {
  padding: 0;
}
#microsite {
  background-size: contain;
  background-position: center;
  background-color: #CCC;
}

/* SITE NAV */
#site-nav {
  width: 100%;
  height: 5em;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000;
  color: #FFF;
}
#site-nav a,
#site-nav a:link,
#site-nav a:visited {
  color: #FFF;
  text-transform: uppercase;
}
#site-nav a:hover,
#site-nav a:active {
  color: yellow;
}
#site-nav-left {
  width: 76px;
  height: 5em;
  position: relative;
  bottom: 0;
  left: 0;
}
#site-nav-left a {
  position: absolute;
  bottom: 0;
  left: 0;
}
#site-nav-center {
  width: 40%;
  position: absolute;
  top: 0;
  left: 100%;
  margin: 0 0 0 -65%;
}
#site-nav-top a {
  float: left;
  margin-top: 2%;
}
#site-nav-top a#gracelandcu-logo {
  width: 72.20%;
}
#site-nav-top a#gracelandcu-sponsor {
  width: 27.02%;
  margin-left: 0.78%;
}
#site-nav ul {
  width: 70%;
  margin: 0 auto;
}
#site-nav li {
  float: left;
  padding: 10px;
}
#site-nav-right {
  width: 130px;
  height: 5em;
  position: absolute;
  bottom: 0;
  right: 0;
}
#site-nav-right #site-nav-social {
  position: absolute;
  right: 0;
  bottom: 1.1em;
}
#site-nav-right #site-nav-social a {
  float: left;
  width: 26px;
  height: 26px;
}
.page-node-microsite #site-nav #site-nav-social a.instagram {
  background-image: url("/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/gracelandcatchup/images/icons/icon_instagram.png");
}
.page-node-microsite #site-nav #site-nav-social a.twitter {
  background-image: url("/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/gracelandcatchup/images/icons/icon_twitter.png");
}
.page-node-microsite #site-nav #site-nav-social a.facebook {
  background-image: url("/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/gracelandcatchup/images/icons/icon_fb.png");
}
.page-node-microsite #site-nav #site-nav-social a.youtube {
  background-image: url("/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/gracelandcatchup/images/icons/icon_youtube.png");
}
.page-node-microsite #site-nav #site-nav-social a:hover {
  opacity: 0.7;
}
#site-nav-right #site-nav-show-site-link {
  position: absolute;
  bottom: 0;
  right: 0;
  line-height: 1em;
}

/* SECTIONS CONTAINERS */
#home.section {
  background-color: #000;
}
.section,
#section:nth-child(odd) {
  background-color: #E3E3E3;
}
.section:nth-child(even) {
  background-color: #AAA;
}




/* FOOTER */
#_bapw-icon {
  width: 14px;
  height: 18px;
}
</style>

<div id="microsite" <?php if (!empty($classes)): print 'class="' . $classes . '"'; endif; ?>>
  <div id="site-nav">
    <div id="site-nav-left"><a href="http://www.usanetwork.com" target="_blank"><img src="<?php print $themePath; ?>/images/gracelandcu_usa_logo.png" alt="USA Network logo"></a></div>
    <div id="site-nav-center">
      <div id="site-nav-top"><a id="gracelandcu-logo" href=""><img src="<?php print $themePath; ?>/images/gracelandcu_nav_logo.png" alt="Graceland Catchup HQ logo"></a><a id="gracelandcu-sponsor" href=""><img src="<?php print $themePath; ?>/images/gracelandcu_nav_sponsor.png" alt="Sponsored by Toyota"></a></div>
      <div id="site-nav-bottom">
        <div id="site-nav-links">
          <ul id="site-nav-links-list">
<!--
            <li id="nav-home" class="internal<?php print ($current_section == 'home') ? ' active' : ''; ?>" data-menuanchor="home">
              <a class="scroll-link" href="#section-home" data-menuitem="1">
                <?php if ($current_section == 'home' && !empty($h1)): ?>
                  <h1 id="site-nav-logo"><span><?php print $h1; ?></span></h1>
                <?php elseif (!empty($h1)): ?>
                  <div id="site-nav-logo"></div>
                <?php else: ?>
                  <div id="site-nav-logo"></div>
                <?php endif; ?>
                <?php /* if (!empty($tune_in)): ?>
                  <div id="site-nav-tunein"><?php print $tune_in; ?></div>
                <?php endif; */ ?>
                <div id="site-nav-tunein"></div>
              </a>
              <div id="site-nav-social" class="clearfix">
                <a class="facebook" href="https://www.facebook.com/DIGonUSA" target="_blank"></a>
                <a class="twitter" href="https://twitter.com/DIGonUSA" target="_blank"></a>
                <a class="instagram" href="http://instagram.com/digonusa" target="_blank"></a>
                <a class="youtube" href="https://www.youtube.com/user/DIGonUSA" target="_blank"></a>
              </div>
            </li>
-->
            <?php if (!empty($sections)): ?>
              <?php foreach ($sections as $section): ?>
                <?php if ($section['type'] != 'home'): ?>
                <li id="nav-<?php print $section['type']; ?>" class="internal<?php print ($section['type'] == $current_section) ? ' active' : '' ?>" data-menuanchor="<?php print $section['type']; ?>">
                  <?php print $section['link']; ?>
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
        <a class="facebook" href="https://www.facebook.com/DIGonUSA" target="_blank"></a>
        <a class="twitter" href="https://twitter.com/DIGonUSA" target="_blank"></a>
      </div>
      <div id="site-nav-show-site-link"><a href="http://www.usanetwork.com/graceland" target="_blank">Visit Show Site</a></div>
    </div>
  </div>

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
        <?php if (!empty($section['is_last'])): ?>
          <!-- FOOTER -->
          <footer id="footer-microsite" role="contentinfo" class="clearfix">
            <div class="region region-footer">
              <?php print $footer; ?>
            </div>
          </footer>
          <!-- /FOOTER -->
        <?php endif; ?>
      </div>
      <?php endif; ?>
    <?php endforeach; ?>
    <?php endif; ?>
  </div>

  <?php if (!empty($facebook_tracking_html)): ?>
    <?php print $facebook_tracking_html; ?>
  <?php endif; ?>
</div>
