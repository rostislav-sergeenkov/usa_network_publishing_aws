<?php
/**
 *
 */
?>
<div class="consumptionator-characters-main-block">
  <div class="character-info-block">
    <div class="block-character-info-header">
      <div class="block-character-info-header-left">
        <?php if (!empty($character_full_name)): ?>
          <div class="full-name"><?php print $character_full_name; ?></div>
        <?php endif; ?>
        <?php if (!empty($character_description)): ?>
          <div class="description"><?php print $character_description; ?></div>
        <?php endif; ?>
      </div>
      <div class="block-character-info-header-right">
        <div class="share"><?php print $sharebar ?></div>
      </div>
    </div>
    <div class="block-character-info-content">
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
        <?php if (!empty($show_tabs)) : ?>
          <div class="tabs">
            <ul>
              <li class="show-color show-border show-font active" data-tab="character-bio"><?php print t('Character bio'); ?></li>
              <li class="show-color show-border show-font" data-tab="actor-bio"><?php print t('Actor bio'); ?></li>
            </ul>
          </div>
        <?php endif; ?>
        <div class="description-items">
          <div class="description-item active" data-tab="character-bio">
            <?php if (!empty($description_character)): ?>
              <?php print $description_character; ?>
            <?php endif; ?>
          </div>
          <div class="description-item" data-tab="actor-bio">
            <?php if (!empty($description_actor)): ?>
              <?php print $description_actor; ?>
            <?php endif; ?>
          </div>
        </div>
      </div>
      <div class="node-wrapper advert">
        <div class="advertisement">
          <div class="topbox"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="consum-sidebar">
    <div class="node-wrapper advert">
      <div class="advertisement">
        <div class="topbox"></div>
      </div>
    </div>
  <?php if (!empty($rendered_carousel)): ?>
    <div class="items-block persons-block">
      <?php print $rendered_carousel; ?>
    </div>
  <?php endif; ?>
    <div class="more-items more-characters show-color">
      <a href="#"><?php print t('Go to cast & info');?></a>
    </div>
  </div>
</div>
