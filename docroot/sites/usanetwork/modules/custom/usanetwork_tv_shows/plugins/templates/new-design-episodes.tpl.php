<?php
/**
 * Episodes Block.
 */
?>
<?php
  $main = $data['#content']['first_block'];
?>
<div class="usa-section-title show-border">
  <h2 class="title"><?php print $data['#content']['title']; ?></h2>
  <?php print $data['#content']['link']; ?>
</div>
<div class="episodes-wrapper">
  <div class="main-episode">
    <a href="<?php print $main['episode_link']; ?>">
      <div class="image-block">
        <div class="asset-img" data-picture="" data-alt="" data-class="tile-img">
          <?php if (!empty($main['image_mobile'])): ?>
            <div data-src="<?php print $main['image_mobile']; ?>"></div>
          <?php endif; ?>
          <?php if (!empty($main['image_desktop'])): ?>
            <div data-media="(min-width: 769px)" data-src="<?php print $main['image_desktop']; ?>"></div>
            <!--[if (IE 8) & (!IEMobile)]>
            <div data-src="<?php print $main['image_desktop']; ?>"></div>
            <![endif]-->
          <?php endif; ?>
          <?php if (!empty($main['image_desktop'])): ?>
            <noscript><img src="<?php print $main['image_desktop']; ?>" alt="" title="" /></noscript>
          <?php endif; ?>
        </div>
      </div>
    </a>
    <div class="meta-wrapper">
      <div class="meta-wrapper-inner">
        <div class="meta">
          <div class="caption"><?php print $main['season']; ?>&nbsp<?php print $main['episode']; ?></div>
          <div class="title">
            <?php if (!empty($data['#content']['links'])): ?>
              <?php print t('Where to Watch'); ?>
            <?php else: ?>
              <?php print $main['title']; ?>
            <?php endif;?>
          </div>
          <?php if (!empty($data['#content']['links'])) : ?>
            <div class="additional">
              <?php foreach ($data['#content']['links'] as $link): ?>
                <a href="<?php print $link['url'] ?>" class="additional-link show-color show-font"><?php print $link['title'] ?> ></a><br>
              <?php endforeach; ?>
            </div>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </div>
  <div class="episodes-list" id="episode-list">
    <ul class="slider-list">
      <?php foreach ($data['#content']['carousel_items'] as $item): ?>
        <li>
          <?php print $item ?>
        </li>
      <?php endforeach; ?>
    </ul>
  </div>
  <div class="view-more">
    <?php print $data['#content']['link']; ?>
  </div>
</div>

