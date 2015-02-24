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
 */
?>
<div id="microsite" <?php if (!empty($classes)): print 'class="' . $classes . '"'; endif; ?>>
  <div id="sections">
    <?php if (!empty($sections)): ?>
    <?php foreach ($sections as $section): ?>
    <?php if (!empty($section['content'])): ?>
    <?php if ($section['type'] == $current_section): ?>
    <div id="<?php print !empty($section['type']) ? $section['type'] : 'undefined'; ?>" class="section section-info active">
    <?php else: ?>
    <div id="<?php print !empty($section['type']) ? $section['type'] : 'undefined'; ?>" class="section section-info">
    <?php endif; ?>
      <div class="mcs-scroll">
        <section id="<?php print !empty($section['type']) ? $section['type'] : 'undefined'; ?>-content" class="clearfix">
          <div class="microsite-section-container" data-bg-url="<?php isset($section['background_url']) ? print $section['background_url'] : ''; ?>">
            <?php print $section['content']; ?>
          <?php if (empty($section['is_last'])): ?>
            <?php print $section_separator; ?>
          <?php endif; ?>
          </div>
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
    </div>
    <?php endif; ?>
    <?php endforeach; ?>
    <?php endif; ?>
  </div>
  <div id="left-nav">
    <div id="left-nav-inner" class="hide">
      <div id="left-nav-links">
        <ul id="left-nav-links-list">
          <?php if ($current_section == 'home'): ?>
          <li id="nav-home" class="internal active" data-menuanchor="home">
          <?php else: ?>
          <li id="nav-home" class="internal" data-menuanchor="home">
          <?php endif; ?>
            <a class="scroll-link" href="#section-home" data-menuitem="1">
              <div id="left-nav-logo"></div>
              <?php /* if (!empty($tune_in)): ?>
                <div id="left-nav-tunein"><?php print $tune_in; ?></div>
              <?php endif; */ ?>
              <div id="left-nav-tunein"></div>
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
                <?php if ($section['type'] == $current_section): ?>
                  <li id="nav-<?php print $section['type']; ?>" class="internal active" data-menuanchor="<?php print $section['type']; ?>">
                    <?php print $section['link']; ?>
                  </li>
                <?php else: ?>
                  <li id="nav-<?php print $section['type']; ?>" class="internal" data-menuanchor="<?php print $section['type']; ?>">
                    <?php print $section['link']; ?>
                  </li>
                <?php endif; ?>
              <?php endif; ?>
            <?php endforeach; ?>
          <?php endif; ?>
          <li class="separator"></li>
          <li class="external"><a href="http://digdecoded.usanetwork.com" target="_blank">Dig Decoded</a></li>
          <li class="external"><a href="http://digescapetheroom.com/" target="_blank">Escape the Room</a></li>
          <li class="external"><a href="http://www.usanetwork.com/dig/wattpad" target="_blank">Wattpad</a></li>
          <li class="external"><a href="/dig/videos/the-making-of-dig">Making of DIG</a></li>
          <li class="external"><a href="https://twitter.com/search?q=%23digdeeper" target="_blank">#DIGDEEPER</a></li>
          <li class="external">Tour Israel
            <ul>
              <li><a href="http://www.goisrael.com" target="_blank">Go Israel</a></li>
              <li><a href="http://www.itraveljerusalem.com" target="_blank">Official Tourism</a></li>
              <li><a href="http://www.jerusalemfilmfund.com/EnglishPage.aspx" target="_blank">Jerusalem Film<br>& TV Fund</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
