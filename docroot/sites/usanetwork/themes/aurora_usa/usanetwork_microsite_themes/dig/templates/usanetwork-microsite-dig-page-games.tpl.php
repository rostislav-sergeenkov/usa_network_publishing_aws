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
<div class="ad-leaderboard dart-tag dart-name-728x90_ifr_reload_games"></div>

<?php if (!empty($h1) && $status == 'active'): ?>
  <h1><?php print $h1; ?></h1>
<?php elseif (!empty($h1)): ?>
  <h2><?php print $h1; ?></h2>
<?php else: ?>
  <?php if (!empty($title)): ?>
    <h2><?php print $title; ?></h2>
  <?php endif; ?>
<?php endif; ?>

<?php if (!empty($page['catchall_pagez_html'])): ?>
<div id="viewport">
  <ul>
    <li>
      <?php print $page['catchall_pagez_html']; ?>
    </li>
  </ul>
</div>
<?php endif; ?>
