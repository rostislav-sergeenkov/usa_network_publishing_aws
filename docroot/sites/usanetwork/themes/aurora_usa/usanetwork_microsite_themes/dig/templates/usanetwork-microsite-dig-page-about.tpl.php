<?php
/**
 * Template of About page
 *
 * Variables:
 * - $about_quotations - array of quotations:
 * -  - $about_quotations[n]['quote'] - string value of quote
 * -  - $about_quotations[n]['source'] - string value of source
 * - $title - string value of page title
 * - $description - string value of page description
 * - $background_url - the URL of page background
 * - $ad300x250 - the code to render the 300 x 250 ad
 */
?>

<div id="about-inner-container">
  <div id="right-pane-bg"></div>

  <div class="ad-leaderboard dart-tag dart-name-728x90_ifr_reload_about"></div>

  <?php if (!empty($about_quotations) && is_array($about_quotations)): ?>
  <div class="left-pane">
    <div id="about-quotes" class="quotes">
      <ul>
        <?php foreach ($about_quotations as $about_quotation_key => $about_quotation): ?>
          <?php if (!empty($about_quotation['quote']) && !empty($about_quotation['source'])): ?>
            <li id="quote<?php print $about_quotation_key; ?>">
              <?php if (!empty($about_quotation['quote'])): ?>
                <div class="quote"><?php print $about_quotation['quote']; ?></div>
              <?php endif; ?>
              <?php if (!empty($about_quotation['source'])): ?>
                <div class="quote-source"><?php print '-' . $about_quotation['source']; ?></div>
              <?php endif; ?>
            </li>
          <?php endif; ?>
        <?php endforeach; ?>
      </ul>
    </div>
  </div>
  <?php endif; ?>

  <div class="right-pane clearfix">
    <?php if (!empty($title) || !empty($description)): ?>
      <?php if (!empty($h1) && $status == 'active'): ?>
      <h1><?php print $h1; ?></h1>
      <?php elseif (!empty($h1)): ?>
      <h2><?php print $h1; ?></h2>
      <?php else: ?>
        <?php if (!empty($title)): ?>
        <h2><?php print $title; ?></h2>
        <?php endif; ?>
      <div class="underline"></div>
      <?php endif; ?>
      <?php if (!empty($description)): ?>
      <div class="text">
        <?php print $description ?>
      </div>
      <?php endif; ?>
    <?php endif; ?>
    <div class="ad300x250 dart-tag dart-name-300x250_ifr_reload_about"></div>
  </div>
</div>

