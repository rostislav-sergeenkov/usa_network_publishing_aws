<?php
/**
 *
 */
?>
<div class="character-landing-page-container">
  <div class="header-titles">
    <div class="block-title left"><?php print !empty($block_title) ? $block_title : ''; ?></div>
    <div class="block-title right">
      <div class="caption"><?php !empty($block_social_title) ? $block_social_title : ''; ?></div>
      <div class="social-icons">...</div>
    </div>
  </div>
  <div class="upper-menu">
    <div class="filter-items">
      <?php if (!empty($character_filters)): ?>
        <ul>
          <?php foreach ($character_filters as $character_filter): ?>
            <li class="filter-item<?php if ($character_filter['active'] == TRUE): print ' active'; endif; ?>">
              <a href="<?php print $character_filter['url']; ?>" data-type="<?php print $character_filter['tid']; ?>">
                <?php print $character_filter['name']; ?>
              </a>
            </li>
          <?php endforeach; ?>
        </ul>
      <?php endif; ?>
    </div>
  </div>
  <div class="character-items-block">
    <?php if (!empty($characters_block)): ?>
      <?php print $characters_block; ?>
    <?php endif; ?>
  </div>
</div>
