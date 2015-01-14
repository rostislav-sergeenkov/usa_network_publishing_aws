<?php
/**
 * Global tempalte of Dig theme
 *
 * Variables:
 * - $classes - a string list of classes that should be added to microsite template
 * - $sections - array of sections items:
 * -  - $sections[n]['content'] - pre-rendered content for displaying
 * -  - $sections[n]['type'] - machine-readable name of a section
 * -  - $sections[n]['name'] - human-readable name of a section
 * -  - $sections[n]['is_last'] - flag of the latest section (appears only on the latest)
 * - $sections_separator - pre-rendered sections separator
 * - $tune_in - pre-rendered content of Tune In field
 * - $sections_navlinks - pre-rendered array of navigation items:
 * -  - $sections_navlinks[n][] = '<li><a>Name</a></li>
 */
?>
<div id="microsite" <?php if (!empty($classes)): print 'class="' . $classes . '"'; endif; ?>>
<!--  <div id="activeContent">-->
<!--    <div id="hidden-prev" class="hidden-section"></div>-->
<!--    <div id="visible"></div>-->
<!--    <div id="hidden-next" class="hidden-section"></div>-->
<!--  </div>-->
  <div id="left-nav">
    <div id="left-nav-inner" class="hide">
      <div id="left-nav-links">
        <ul id="left-nav-links-list">
          <li id="nav-home" class="internal" data-menuanchor="home">
            <a href="#section-home" data-menuitem="1">
              <div id="left-nav-logo"></div>
              <?php if (!empty($tune_in)): ?>
                <div id="left-nav-tunein"><?php print $tune_in; ?></div>
              <?php endif; ?>
            </a>
            <div id="left-nav-social" class="clearfix">
              <a class="facebook" href="https://www.facebook.com/DIGonUSA" target="_blank"></a>
              <a class="twitter" href="https://twitter.com/DIGonUSA" target="_blank"></a>
              <a class="instagram" href="http://instagram.com/digonusa" target="_blank"></a>
            </div>
          </li>
          <?php if (!empty($sections)): ?>
            <?php foreach ($sections as $section): ?>
              <?php if ($section['type'] != 'home'): ?>
                <li id="nav-<?php print $section['type']; ?>" class="internal" data-menuanchor="<?php print $section['type']; ?>">
                  <?php print $section['link']; ?>
                </li>
              <?php endif; ?>
            <?php endforeach; ?>
          <?php endif; ?>
          <li class="separator first">....</li>
          <li class="external"><a href="http://digdecoded.usanetwork.com" target="_blank">Dig Decoded</a></li>
          <li class="external"><a href="http://www.usanetwork.com/dig/wattpad" target="_blank">Wattpad</a></li>
          <li class="external">Tour Israel
            <ul>
              <li><a href="http://testlink1.com" target="_blank">Link 1</a></li>
              <li><a href="http://testlink2.com" target="_blank">Link 2</a></li>
              <li><a href="http://testlink3.com" target="_blank">Link 3</a></li>
            </ul>
          </li>
          <li class="separator last">....</li>
        </ul>
      </div>
    </div>
  </div>
  <div id="sections">
<!--    <div id="ad-leaderboard">--><?php //print dart_tag('728x90_970x66_ifr_rel'); ?><!--</div>-->
<!--    <div id="ad300x250">--><?php //print dart_tag('300x250_scr'); ?><!--</div>-->
  <?php if (!empty($sections)): ?>
    <?php foreach ($sections as $section): ?>
      <?php if (!empty($section['content'])): ?>
        <div id="section<?php print !empty($section['type']) ? $section['type'] : 'undefined'; ?>" class="section section-info">
<!--          <a name="/--><?php //print $section['type']; ?><!--"></a>-->
          <section id="<?php print !empty($section['type']) ? $section['type'] : 'undefined'; ?>-content" class="clearfix">
            <?php print $section['content']; ?>
          <?php if (empty($section['is_last'])): ?>
            <?php print $section_separator; ?>
          <?php endif; ?>
          </section>
          <?php if (!empty($section['is_last'])): ?>
          <!-- FOOTER -->
          <footer id="footer" role="contentinfo" class="clearfix">
            <div class="region region-footer usa-showmenu-loaded">
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
</div>
