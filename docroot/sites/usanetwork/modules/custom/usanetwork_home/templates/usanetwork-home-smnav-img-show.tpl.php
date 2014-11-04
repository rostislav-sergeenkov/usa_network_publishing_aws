<?php
/**
 * $title - The title of node.
 * $image - The URL to element image.
 * $cta_text - The call-to-action text of the node (description used).
 */
?>

<div class="container-element">
  <?php if (!empty($title)): ?>
    <h3 class="title"><?php print $title; ?></h3>
  <?php endif; ?>

  <?php if (!empty($image)): ?>
    <div class="image"><img src="<?php print $image; ?>" /></div>
  <?php endif; ?>

  <?php if (!empty($cta_text)): ?>
    <div class="cta-text"><?php print $cta_text; ?></div>
  <?php endif; ?>
</div>
