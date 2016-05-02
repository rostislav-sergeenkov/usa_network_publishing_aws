<?php
/**
 * BCD-Spot.
 */
dpm($data['#content']['items']);
?>

<?php foreach ($data['#content']['items'] as $item): ?>
  <div>
    <?php print $item ?>
  </div>
<?php endforeach; ?>
