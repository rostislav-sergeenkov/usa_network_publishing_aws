<?php
/**
 *
 */
?>
<div class="see-also-content">
  <div class="see-also-content-wrapper">
    <h2 class="block-title show-content-title"><?php print t('You may also like'); ?></h2>
    <?php if (!empty($items)): ?>
      <div class="see-list-wrapper">
        <ul>
          <?php foreach ($items as $item): ?>
            <li<?php if (!empty($item['li_class'])): print ' class="' . $item['li_class'] . '"'; endif; ?>>
              <?php print $item['content']; ?>
            </li>
          <?php endforeach; ?>
        </ul>
      </div>
    <?php endif; ?>
  </div>
</div>
