<?php
/**
 *
 */
?>
<?php if (!empty($aspots)): ?>
  <div class="aspot">
    <ul>
      <?php foreach ($aspots as $aspot): ?>
        <li>
          <?php print $aspot; ?>
        </li>
      <?php endforeach; ?>
    </ul>
  </div>
<?php endif; ?>
<?php if (!empty($bspot) || !empty($cspot)): ?>
  <ul>
  <?php if (!empty($bspot)): ?>
    <li>
      <div class="bspot">
        <?php print $bspot; ?>
      </div>
    </li>
  <?php endif; ?>
  <?php if (!empty($cspot)): ?>
    <li>
      <div class="cspot">
        <?php print $cspot; ?>
      </div>
    </li>
  <?php endif; ?>
  </ul>
<?php endif; ?>
<?php if (!empty($promo_carousel)): ?>
  <ul>
    <?php foreach ($promo_carousel as $carousel_item): ?>
      <li>
        <?php print $carousel_item; ?>
      </li>
    <?php endforeach; ?>
  </ul>
<?php endif; ?>