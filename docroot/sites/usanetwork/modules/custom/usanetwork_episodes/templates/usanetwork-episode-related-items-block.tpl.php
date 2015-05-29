<?php
/**
 *
 */
?>

<?php if (!empty($ad)): ?>
  <div class="midbanner" id="advert-related-<?php print $ad_id; ?>"></div>
<?php endif; ?>
<?php if (!empty($related_items)): ?>
  <ul>
    <?php foreach ($related_items as $related_item): ?>
      <li>
        <?php print $related_item; ?>
      </li>
    <?php endforeach; ?>
  </ul>
<?php endif; ?>

