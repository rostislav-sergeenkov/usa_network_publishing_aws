<?php
/**
 *
 */
?>
<div class="consumptionator-quiz-main-block">
  <?php if (!empty($rendered_quiz)): ?>
      <?php print $rendered_quiz; ?>
  <?php endif; ?>
  <div class="consum-sidebar">
  <?php if (!empty($rendered_carousel)): ?>
    <?php print $rendered_carousel; ?>
  <?php endif; ?>
    <?php if (!empty($cast_landing_link)): ?>
      <div class="more-items more-quizes show-color">
        <?php print $cast_landing_link; ?>
      </div>
    <?php endif; ?>
  </div>
</div>
