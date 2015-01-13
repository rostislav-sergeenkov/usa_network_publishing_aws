<?php
/**
 * Games page template
 *
 * Variables:
 * - $pages - array of games pages data:
 * -  - $pages['html'] - pre-rendered HTML of game page
 * - $background_url - the URL of page background
 */
?>
<div class="ad-leaderboard"></div>
<?php if (!empty($background_url)): ?>
<div class="microsite-section-container" data-bg-url="<?php print $background_url; ?>">
<?php endif; ?>
  <?php if (!empty($pages['html'])): ?>
  <div id="viewport">
    <ul>
      <li>
        <?php print $pages['html']; ?>
      </li>
    </ul>
  </div>
  <?php endif; ?>
<?php if (!empty($background_url)): ?>
</div>
<?php endif; ?>
