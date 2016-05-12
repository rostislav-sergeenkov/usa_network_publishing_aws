<?php
/**
 * BCD-Spot.
 * $data
 *  - #content
 *    - items
 *    - layout_scheme
 */
?>
<div class="usa-section-title show-border">
  <h2 class="title">Curated title</h2>
  <a href="#">View more</a>
</div>
<div class="best-of-content <?php print !empty($data['#content']['layout_scheme']['class'])? $data['#content']['layout_scheme']['class']: 'three-items-default'; ?>">
  <ul>
    <?php foreach ($data['#content']['items'] as $item): ?>
      <li>
        <?php print $item ?>
      </li>
    <?php endforeach; ?>
  </ul>
</div>


