<?php
/**
 *
 */
?>
<div id='microsite' class="<?php if (!empty($classes)): print 'class="' . $classes . '"'; endif; ?>">
  <div id="activeContent">
    <div id="hidden-prev" class="hidden-section"></div>
    <div id="visible"></div>
    <div id="hidden-next" class="hidden-section"></div>
  </div>
  <?php if (!empty($sections)): ?>
    <?php foreach ($sections as $section): ?>
      <?php if (!empty($section['content'])): ?>
        <div id="section-<?php print !empty($section['type']) ? $section['type'] : 'undefined'; ?>" class="section-info">
          <a name="<?php print $section['name']; ?>"></a>
          <section id="<?php print !empty($section['type']) ? $section['type'] : 'undefined'; ?>" class="clearfix">
            <?php print $section['content']; ?>
          </section>
        </div>
      <?php endif; ?>
    <?php endforeach; ?>
  <?php endif; ?>
  <div id="left-nav">
    <div id="left-nav-inner" class="hide">
      <div id="left-nav-logo"></div>
      <?php if (!empty($tune_in)): ?>
        <div id="left-nav-tunein"><?php print $tune_in; ?></div>
      <?php endif; ?>
      <div id="left-nav-social" class="clearfix">
        <a class="facebook" href="https://www.facebook.com/USANetwork"></a>
        <a class="twitter" href="https://twitter.com/usa_network"></a>
        <a class="instagram" href="http://instagram.com/USANetwork"></a>
      </div>
      <?php if (!empty($sections_navlinks)): ?>
        <div id="left-nav-links">
          <ul>
            <?php foreach ($sections_navlinks as $sections_navlink): ?>
              <?php print $sections_navlink; ?>
            <?php endforeach; ?>
            <li>Sample link 1</li>
            <li>Sample link 2</li>
            <li>Sample link 3</li>
          </ul>
        </div>
      <?php endif; ?>
    </div>
  </div>
</div>
