<?php
/**
 *
 */
?>

<?php if (!empty($desktop_url) || !empty($mobile_url)): ?>
  <div id="full-bleed-promo" class="homepage-block">
    <div class="block-advert">
      <?php if (!empty($advert_block)): ?>
        <?php print $advert_block; ?>
      <?php endif; ?>
    </div>
    <div class="block-content">
      <?php if (!empty($url)): ?>
        <a href="<?php print $url; ?>">
      <?php else: ?>
        <a class="empty-link">
      <?php endif; ?>
        <?php if (!empty($desktop_url)): ?>
          <div class="block-content-image hidden desktop-content" data-url="<?php print $desktop_url;?>"></div>
        <?php endif; ?>
        <?php if (!empty($mobile_url)): ?>
          <div class="block-content-image hidden mobile-content" data-url="<?php print $mobile_url; ?>"></div>
        <?php endif; ?>
        <img class="responsive-image" />
      </a>
    </div>
  </div>
<?php endif; ?>
