<?php
/**
 * Timeline gallery page template
 *
 * Variables:
 * - $section_title - the title of the section
 * - $description - the description for this section
 * - $gallery_title - the title of the timeline gallery
 * - $content - the URL of page background
 */
?>

<?php if (!empty($section_title) || !empty($description)): ?>
  <div class="section-title-block">
    <?php if (!empty($section_title)): ?>
      <!-- section title -->
      <h2 class="content"><span><?php print $section_title; ?></span></h2>
    <?php endif; ?>

    <?php if (!empty($description)): ?>
      <div class="section-description">
        <?php print $description; ?>
      </div>
    <?php endif; ?>
  </div>
<?php endif; ?>

<?php if (!empty($gallery_title)): ?>
  <div id="timeline-title"><?php print $gallery_title; ?></div>
<?php endif; ?>

<?php if (!empty($content)):
  print $content;
endif; ?>

<div id="ms-timeline-leaderboard-ad" class="midbanner ad-leaderboard"></div>
