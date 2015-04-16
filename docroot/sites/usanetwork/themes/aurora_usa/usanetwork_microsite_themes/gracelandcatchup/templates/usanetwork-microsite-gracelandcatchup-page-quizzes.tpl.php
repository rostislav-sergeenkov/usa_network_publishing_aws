<?php
/**
 * Quizzes page template
 *
 * Variables:
 * - $page - array of single quiz data:
 * -  - $page['quiz_html'] - pre-rendered HTML of quiz
 * -  - $page['nid'] - the node id for the displayed quiz
 * - $quizzes_nav - array of quizzes for the navigation
 * -  - $quizzes_nav[n]['nid'] - the quiz node id
 * -  - $quizzes_nav[n]['title'] - the quiz title
 * -  - $quizzes_nav[n]['h1'] - the SEO h1 override for the quiz
 * -  - $quizzes_nav[n]['url'] - the machine-readable title of the quiz
 * -  - $quizzes_nav[n]['cover_img'] - the thumbnail image for the quiz
 * -  - $quizzes_nav[n]['status'] - whether this quiz is being displayed (active) or not
 */
?>
<?php if (!empty($section_title)): ?>
  <!-- section title -->
  <h2 class="content"><?php print $section_title; ?></h2>
<?php endif; ?>

<div id="quiz-section-description" class="section-description">
Test your knowledge of Graceland. Lorem ipsum dolor sit amet, consectutur adipiscing ellt.<br>
WARNING &mdash; CONTAINS SPOILERS!
</div>

<div class="full-pane clearfix">
  <?php if (empty($h1) && !empty($page['title']) && $status == 'active'): ?>
  <h1 class="quiz-title"><?php print $page['title']; ?></h1>
  <?php else: ?>
  <h3 class="quiz-title"><?php print $page['title']; ?></h3>
  <?php endif; ?>

  <?php if (!empty($h1)): ?>
    <?php if ($status == 'active'): ?>
    <h1 class="seo-h1"><?php print $h1; ?></h1>
    <?php else: ?>
    <h3 class="seo-h1"><?php print $h1; ?></h3>
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
        <div id="quizzes-nav-pagers" class="quiz-pagers bx-controls bx-has-pager"></div>
        <div id="quizzes-nav-next" class="next btns"><span class="screen-reader-text">Next</span></div>
      </div>
      <ul id="quizzes-nav-list" class="quizzes-nav-bxslider">
      <?php if (count($quizzes_nav) > 1): ?>
      <?php foreach ($quizzes_nav as $quiz_nav): ?>
        <?php if (!empty($quiz_nav['url']) && !empty($quiz_nav['nid']) && !empty($quiz_nav['title'])): ?>
        <li id="nav-quiz-<?php print $quiz_nav['nid']; ?>" data-node-id="<?php print $quiz_nav['nid']; ?>" class="<?php if (!empty($quiz_nav['status'])) print $quiz_nav['status']; ?>">
          <a href="<?php print $microsite_url; ?>/quizzes/<?php print $quiz_nav['url']; ?>">
            <div class="quiz-nav-img"><img src="<?php if (!empty($quiz_nav['cover_img'])) print $quiz_nav['cover_img']; ?>" alt="<?php print $quiz_nav['title']; ?>"></div>
            <div class="quiz-title">
              <div><?php print $quiz_nav['title']; ?></div>
              <?php if (!empty($quiz_nav['h1'])) print '<div class="quiz-h1">' . $quiz_nav['h1'] . '</div>'; ?>
            </div>
          </a>
        </li>
        <?php endif; ?>
      <?php endforeach; ?>
      <?php endif; ?>
      </ul>
    </div>
  </div>
  <?php endif; ?>
</div>

<div class="ad-leaderboard dart-tag dart-name-728x90_ifr_reload_quizzes"></div>
