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
  <h2 class="title"><?php print $data['#content']['title']; ?></h2>
  <a href="<?php print $data['#content']['link']['url']; ?>"><?php print $data['#content']['link']['title']; ?></a>
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


