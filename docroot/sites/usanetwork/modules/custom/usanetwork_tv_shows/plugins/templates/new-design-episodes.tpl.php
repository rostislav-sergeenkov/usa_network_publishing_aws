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
            <?php print $main['title']; ?>
          </div>
          <div class="additional">
            <a href="#" class="additional-link show-color show-font">Amazon ></a><br>
            <a href="#" class="additional-link show-color show-font">Itunes ></a><br>
            <a href="#" class="additional-link show-color show-font">Hulu ></a>
          </div>
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

