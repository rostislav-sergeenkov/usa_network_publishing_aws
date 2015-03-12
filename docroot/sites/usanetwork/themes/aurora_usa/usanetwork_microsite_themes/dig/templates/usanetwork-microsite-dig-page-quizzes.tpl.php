<?php
/**
 * Quizzes page template
 *
 * Variables:
 * - $page - array of single quiz data:
 * -  - $page['quiz_html'] - pre-rendered HTML of quiz
 * -  - $page['nid'] - the node id for the displayed quiz
 * - $quizzes_nav - array of quizzes for the navigation
 * -  - $quzzes_nav[n]['nid'] - the quiz node id
 * -  - $quzzes_nav[n]['title'] - the quiz title
 * -  - $quzzes_nav[n]['url'] - the machine-readable title of the quiz
 * -  - $quzzes_nav[n]['cover_img'] - the thumbnail image for the quiz
 * - // $background_url - the URL of page background
 */
?>
<div class="ad-leaderboard dart-tag dart-name-728x90_ifr_reload_quizzes"></div>

<?php if (!empty($h1) && $status == 'active'): ?>
  <h1><?php print $h1; ?></h1>
<?php elseif (!empty($h1)): ?>
  <h2><?php print $h1; ?></h2>
<?php else: ?>
  <?php if (!empty($title)): ?>
    <h2><?php print $title; ?></h2>
  <?php endif; ?>
<?php endif; ?>

<?php if (!empty($page['quiz_html']) && !empty($page['nid'])): ?>
<div id="viewport">
  <ul>
    <li id="quiz-<?php print $page['nid']; ?>" data-node-id="<?php print $page['nid']; ?>">
      <?php print $page['quiz_html']; ?>
    </li>
  </ul>
  <div id="quiz-loader"><img src="/sites/usanetwork/themes/aurora_usa/images/ajax-loader.gif" alt="loading animation"></div>
</div>
<?php endif; ?>

<?php if (!empty($quizzes_nav)): ?>
<div id="quizzes-nav" class="quizzes-nav">
  <div id="quizzes-nav-bxslider-container" class="bxslider-container">
    <h3>More Quizzes</h3>
    <div id="quizzes-nav-page-controls" class="quizzes-page-controls">
      <div id="quizzes-nav-prev" class="prev btns"><span class="screen-reader-text">Previous</span></div>
      <div id="quizzes-nav-pagers" class="quizzes-nav-pagers bx-controls bx-has-pager"></div>
      <div id="quizzes-nav-next" class="next btns"><span class="screen-reader-text">Next</span></div>
    </div>
    <ul id="quizzes-nav-list" class="quizzes-nav-bxslider">
    <?php foreach ($quizzes_nav as $quiz_nav): ?>
      <?php if (!empty($quiz_nav['url']) && !empty($quiz_nav['nid']) && !empty($quiz_nav['title'])): ?>
      <li id="nav-quiz-<?php print $quiz_nav['nid']; ?>" data-node-id="<?php print $quiz_nav['nid']; ?>"><a href="<?php print url('node/' . arg(1) . '/microsite'); ?>/quizzes/<?php print $quiz_nav['url']; ?>"><div class="quiz-nav-img"><img src="<?php if (!empty($quiz_nav['cover_img'])) print $quiz_nav['cover_img']; ?>" alt="<?php print $quiz_nav['title']; ?>"></div><div class="quiz-title"><?php print $quiz_nav['title']; ?></div></a></li>
      <?php endif; ?>
    <?php endforeach; ?>
    </ul>
  </div>
</div>
<?php endif; ?>
