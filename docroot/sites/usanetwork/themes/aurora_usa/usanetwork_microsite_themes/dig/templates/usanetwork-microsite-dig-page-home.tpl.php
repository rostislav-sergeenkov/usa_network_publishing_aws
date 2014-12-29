<?php
/**
 * Home page template
 *
 * Variables:
 * - $aspots - array of pre-rendered A-Spot elements
 * - $bspots - pre-rendered B-Spot element
 * - $cspots - pre-rendered C-Spot element
 * - $promo_carousel - array of pre-rendered promo-carousel items
 * - $background_url - the URL of page background
 */
?>
<?php if (!empty($background_url)): ?>
  <div class="microsite-section-container" data-bg-url="<?php print $background_url; ?>">
<?php endif; ?>
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
<?php if (!empty($bspots) || !empty($cspots)): ?>
  <ul>
  <?php if (!empty($bspots)): ?>
    <li>
      <div class="bspot">
        <?php print $bspots; ?>
      </div>
    </li>
  <?php endif; ?>
  <?php if (!empty($cspots)): ?>
    <li>
      <div class="cspot">
        <?php print $cspots; ?>
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
<?php if (!empty($background_url)): ?>
  </div>
<?php endif; ?>
