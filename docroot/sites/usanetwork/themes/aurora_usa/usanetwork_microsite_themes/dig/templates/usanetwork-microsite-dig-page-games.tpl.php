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
<?php if (!empty($pages['html'])): ?>
<div id="viewport">
  <ul>
    <li>
      <?php print $pages['html']; ?>
    </li>
  </ul>
</div>
<?php endif; ?>
