<div class="<?php print $classes;?>">
  <?php if ($iframe): ?>
  <div>
    <iframe class="promo-iframe-small" src="<?php print $iframe; ?>" width="300" height="250" frameborder="0" scrolling="no"></iframe>
  </div>
  <div>
    <iframe class="promo-iframe-large" src="<?php print $iframe; ?>" width="615" height="250" frameborder="0" scrolling="no"></iframe>
  </div>
  <?php endif; ?>
</div>