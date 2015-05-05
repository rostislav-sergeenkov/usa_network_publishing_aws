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
      <?php $i = 1; ?>
      <?php if ($is_even): ?>
        <?php foreach ($items as $item): ?>
          <?php if ($i == 1): ?>
            <li class="block-item">
              <?php print $item; ?>
            </li>
          <?php else: ?>
            <?php if ($i%2 == 0): ?>
              <li class="block-item">
              <?php print $item; ?>
            <?php else: ?>
              <?php print $item; ?>
              </li>
            <?php endif; ?>
          <?php endif; ?>
          <?php $i++; ?>
        <?php endforeach; ?>
        <?php if ($i%2 != 0): ?>
        </li>
        <?php endif; ?>
      <?php else: ?>
        <?php foreach ($items as $item): ?>
          <?php if ($i%2 != 0): ?>
            <li class="block-item">
            <?php print $item; ?>
          <?php else: ?>
            <?php print $item; ?>
            </li>
          <?php endif; ?>
          <?php $i++; ?>
        <?php endforeach; ?>
        <?php if ($i%2 == 0): ?>
        </li>
        <?php endif; ?>
      <?php endif; ?>
    </ul>
  <?php endif; ?>
</div>
