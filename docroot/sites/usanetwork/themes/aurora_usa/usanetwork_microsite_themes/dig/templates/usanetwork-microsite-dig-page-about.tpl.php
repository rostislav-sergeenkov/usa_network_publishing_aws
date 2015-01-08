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
<div class="ad-leaderboard"></div>
<?php if (!empty($background_url)): ?>
<div class="microsite-section-container" data-bg-url="<?php print $background_url; ?>">
<?php endif; ?>
  <?php if (!empty($about_quotations) && is_array($about_quotations)): ?>
  <div class="left-pane">
    <div class="caption">
      <ul>
        <?php foreach ($about_quotations as $about_quotation_key => $about_quotation): ?>
          <?php if (!empty($about_quotation['quote']) && !empty($about_quotation['source'])): ?>
            <li<?php if ($about_quotation_key == 0): print ' class="active"'; endif; ?>>
              <?php if (!empty($about_quotation['quote'])): ?>
                <div class="quote"><?php print $about_quotation['quote']; ?></div>
              <?php endif; ?>
              <?php if (!empty($about_quotation['source'])): ?>
                <div class="quote-source"><?php $about_quotation['source']; ?></div>
              <?php endif; ?>
            </li>
          <?php endif; ?>
        <?php endforeach; ?>
      </ul>
    </div>
  </div>
  <?php endif; ?>
  <?php if (!empty($title) || !empty($description)): ?>
  <div class="right-pane">
    <?php if (!empty($title)): ?>
      <h2><?php print $title; ?></h2>
    <?php endif; ?>
    <div class="underline"></div>
    <div class="text">
      <?php if (!empty($description)): ?>
        <?php print $description ?>
      <?php endif; ?>
    </div>
    <div class="ad300x250"><?php print render($ad300x250); ?></div>
  </div>
  <?php endif; ?>
<?php if (!empty($background_url)): ?>
</div>
<?php endif; ?>
