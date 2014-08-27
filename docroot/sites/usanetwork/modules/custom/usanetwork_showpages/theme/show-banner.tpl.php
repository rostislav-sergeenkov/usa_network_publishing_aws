<?php
/**
 * @file
 * show-banner.tpl.php
 *
 * Theme implementation for the show banner nav
 *
 * Available variables:
 * -  $show_name
 * -  $show_section
 * -  $show_tunein
 */
?>
<div class="show-banner">
  <nav role="navigation" class="show-name breadcrumb">
    <?php if ($show_name): ?>
      <?php print $show_name; ?>
    <?php endif; ?>
    <?php if ($show_section): ?>
      <span class="separator"></span><span class="show-section"><?php print $show_section; ?></span>
    <?php endif; ?>
  </nav>

  <?php if ($show_tunein): ?>
  <aside class="show-time">
    <?php print $show_tunein; ?>
  </aside>
  <?php endif; ?>
</div>
