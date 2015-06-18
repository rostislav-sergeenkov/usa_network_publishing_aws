<?php
/**
 *
 */
?>
<div class="consumptionator-characters-main-block">
  <?php if (!empty($rendered_quiz)): ?>
      <?php print $rendered_quiz; ?>
  <?php endif; ?>
  <div class="consum-sidebar">
  <?php if (!empty($rendered_carousel)): ?>
    <div class="items-block persons-block">
      <?php print $rendered_carousel; ?>
    </div>
  <?php endif; ?>
    <div class="more-items more-characters show-color">
      <?php if (!empty($cast_landing_link)): ?>
        <?php print $cast_landing_link; ?>
      <?php endif; ?>
    </div>
  </div>
</div>
