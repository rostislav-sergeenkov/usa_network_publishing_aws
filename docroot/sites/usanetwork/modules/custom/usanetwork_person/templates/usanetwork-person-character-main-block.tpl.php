<?php
/**
 *
 */
?>
<div class="consumptionator-characters-main-block">
  <div class="left-block">
    <div class="block-header">
      <div class="block-left">
        <?php if (!empty($character_full_name)): ?>
          <div class="full-name"><?php print $character_full_name; ?></div>
        <?php endif; ?>
        <?php if (!empty($character_description)): ?>
          <div class="description"><?php print $character_description; ?></div>
        <?php endif; ?>
      </div>
      <div class="block-right">
        <div class="share"><?php print t('Share'); ?></div>
        <?php if (!empty($social_icons)): ?>
          <div class="social-icons">
            <?php foreach ($social_icons as $social_icon): ?>
              <a class="social-icon <?php print $social_icon['class']; ?>" href="<?php print $social_icon['href']; ?>"></a>
            <?php endforeach; ?>
          </div>
        <?php endif; ?>
      </div>
    </div>
    <div class="block-content">
      <div class="asset-img" data-picture="" data-alt="" data-class="tile-img">
        <?php if (!empty($image_mobile)): ?>
          <div data-src="<?php print $image_mobile; ?>"></div>
        <?php endif; ?>
        <?php if (!empty($image_desktop)): ?>
          <div data-media="(min-width: 641px)" data-src="<?php print $image_desktop; ?>"></div>
          <!--[if (IE 8) & (!IEMobile)]>
          <div data-src="<?php print $image_desktop; ?>"></div>
          <![endif]-->
          <noscript><img src="<?php print $image_desktop; ?>" alt="" title="" /></noscript>
        <?php endif; ?>
      </div>
      <div class="description">
        <div class="tabs">
          <ul>
            <li class="active" data-src="character-bio"><?php print t('Character bio'); ?></li>
            <li data-src="actor-bio"><?php print t('Actor bio'); ?></li>
          </ul>
        </div>
        <div class="description-items">
          <div class="description-item active" data-src="character-bio">
            <?php if (!empty($description_character)): ?>
              <?php print $description_character; ?>
            <?php endif; ?>
          </div>
          <div class="description-item" data-src="actor-bio">
            <?php if (!empty($description_actor)): ?>
              <?php print $description_actor; ?>
            <?php endif; ?>
          </div>
        </div>
      </div>
    </div>
  </div>
  <?php if (!empty($rendered_carousel)): ?>
    <div class="right-block">
      <?php print $rendered_carousel; ?>
    </div>
  <?php endif; ?>
</div>
