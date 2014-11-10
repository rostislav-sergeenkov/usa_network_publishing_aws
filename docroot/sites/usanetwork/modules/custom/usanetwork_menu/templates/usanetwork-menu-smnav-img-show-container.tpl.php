<?php
/**
 * $elements - array of pre rendered usanetwork-home-smnav-img-show elements.
 */
?>

<?php if (!empty($elements)): ?>
  <div class="homepage homepage-show-menu show-menu-container show-menu-featured" id="homepage-showmenu-featured">
    <?php foreach ($elements as $element): ?>
      <?php print $element; ?>
    <?php endforeach; ?>
  </div>
<?php endif; ?>
