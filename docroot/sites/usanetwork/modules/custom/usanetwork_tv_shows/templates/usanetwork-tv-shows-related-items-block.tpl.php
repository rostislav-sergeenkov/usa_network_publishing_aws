<?php
/**
 * $related_items - array of string (prerendered array of related items that should be placed on to block)
 * $ad - boolean (flag that means that the advert should be included here)
 * $is_even - boolean (flag that marks the block of items as even or odd)
 */
?>
<?php if (!empty($ad)): ?>
  <div class="midbanner"></div>
<?php endif; ?>
<ul class="<?php print $is_even ? 'even' : 'odd'; ?>">
  <?php if (!empty($related_items)): ?>
    <?php $i = 1; ?>
    <?php if ($is_even): ?>
      <?php foreach ($related_items as $related_item): ?>
        <?php if ($i == 1): ?>
          <li class="first">
        <?php endif; ?>
        <?php print $related_item; ?>
        <?php if ($i == 3): ?>
          </li>
          <li class="last">
        <?php endif; ?>
        <?php $i++; ?>
        <?php endforeach; ?>
        </li>
    <?php else: ?>
      <?php foreach ($related_items as $related_item): ?>
        <?php if ($i == 1): ?>
          <li class="first">
        <?php endif; ?>
        <?php print $related_item; ?>
        <?php if ($i == 2): ?>
          </li>
          <li class="last">
        <?php endif; ?>
        <?php $i++; ?>
      <?php endforeach; ?>
      </li>
    <?php endif; ?>
  <?php endif; ?>
</ul>
