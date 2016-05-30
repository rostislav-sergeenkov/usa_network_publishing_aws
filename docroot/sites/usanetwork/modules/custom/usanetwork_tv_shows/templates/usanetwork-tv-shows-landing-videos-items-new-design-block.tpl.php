<?php
/**
 *
 */
?>
<?php if (!empty($ad)): ?>
  <div class="midbanner" id="advert-videos-landing-<?php print $ad_id; ?>"></div>
<?php endif; ?>
<?php if (!empty($items)): ?>
  <ul class="<?php print $is_even ? 'even' : 'odd'; ?>">
    <?php foreach ($items as $item): ?>
      <li class="block-item">
        <?php print $item; ?>
      </li>
    <?php endforeach; ?>
  </ul>
<?php endif; ?>

