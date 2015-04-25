<?php
/*add class "first" for first li and class "last" for last li */
?>
<?php if (!empty($ad)): ?>
  <div class="related-ad"><?php //print $ad; ?></div>
<?php endif; ?>
<ul>
  <?php if (!empty($related_items)): ?>
      <?php foreach ($related_items as $related_item): ?>
        <li>
          <?php print $related_item; ?>
        </li>
      <?php endforeach; ?>
  <?php endif; ?>
</ul>
