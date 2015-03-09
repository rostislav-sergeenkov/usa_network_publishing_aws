<div id="footer-promo-links" class="footer-promo-link-items columns <?php print !empty($columns) ? ('columns-' . $columns) : 'columns-0'; ?>">
  <?php if (!empty($links)): ?>
    <?php foreach ($links as $link): ?>
      <?php if (!empty($link['image_url']) || !empty($link['title'])): ?>
        <div class="footer-promo-link-item column column-<?php print $link['column']; ?>">
          <a class="promo-link<?php print !empty($link['class']) ? (' ' . $link['class']) : ''; ?>" href="<?php print !empty($link['target_url']) ? $link['target_url'] : '#'; ?>" target="<?php print !empty($link['target']) ? $link['target'] : '_tab'; ?>">
            <?php if (!empty($link['image_url'])): ?>
              <span class="image"><img src="<?php print $link['image_url']; ?>" /></span>
            <?php endif; ?>
            <?php if (!empty($link['title'])): ?>
              <span class="title"><?php print $link['title']; ?></span>
            <?php endif; ?>
          </a>
        </div>
      <?php endif; ?>
    <?php endforeach; ?>
  <?php endif; ?>
</div>
