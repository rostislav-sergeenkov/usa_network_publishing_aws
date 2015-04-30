<?php
/**
 *
 */
?>
<div class="videos-landing-page-block">
  <?php if (!empty($ad)): ?>
    <div class="latest-ad"><?php print $ad; ?></div>
  <?php endif; ?>
  <?php if (!empty($items)): ?>
    <ul class="<?php print $is_even ? 'even' : 'odd'; ?>">
      <?php foreach ($items as $item): ?>
        <li class="block-item"><?php print $item; ?></li>
      <?php endforeach; ?>
    </ul>
  <?php endif; ?>
</div>
