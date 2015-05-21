<?php
/**
* $gallery_html - rendered gallery
* $block_title - string
*/
?>
<div class="gallery-recap-block">
  <h2 class="section-title">
    <span class="section-title-wrapper show-border secondary"><?php print !empty($block_title) ? $block_title : ''; ?></span>
  </h2>
  <?php print $gallery_html; ?>
</div>


