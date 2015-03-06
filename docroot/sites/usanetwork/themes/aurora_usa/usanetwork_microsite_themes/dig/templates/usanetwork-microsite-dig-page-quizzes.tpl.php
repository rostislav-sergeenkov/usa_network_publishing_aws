<?php
/**
 * Quizzes page template
 *
 * Variables:
 * - $page - array of single quiz data:
 * -  - $page['quiz_html'] - pre-rendered HTML of quiz
 * -  - $page['nid'] - the node id for the displayed quiz
 * - // $background_url - the URL of page background
 */
?>
<div class="ad-leaderboard dart-tag dart-name-728x90_ifr_reload_quizzes"></div>

<?php if (!empty($page['quiz_html']) && !empty($page['nid'])): ?>
<div id="viewport">
  <ul>
    <li id="quiz-<?php print $page['nid']; ?>" data-node-id="<?php print $page['nid']; ?>">
      <?php print $page['quiz_html']; ?>
    </li>
  </ul>
</div>
<?php endif; ?>
