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
  <div class="main-episode<?php print (!empty($main['video_link'])) ? ' full-episode' : '' ; ?>">

    <div class="image-block">
      <?php if (!empty($main['video_link'])) : ?>
        <div class="meta-icon full-video-icon-default"></div>
      <?php endif; ?>
      <div class="asset-img" data-picture="" data-alt="" data-class="tile-img">
        <?php if (!empty($main['image_mobile'])): ?>
          <div data-src="<?php print $main['image_mobile']; ?>"></div>
        <?php endif; ?>
        <?php if (!empty($main['image_desktop'])): ?>
          <div data-media="(min-width: 769px)"
               data-src="<?php print $main['image_desktop']; ?>"></div>
          <!--[if (IE 8) & (!IEMobile)]>
          <div data-src="<?php print $main['image_desktop']; ?>"></div>
          <![endif]-->
        <?php endif; ?>
        <?php if (!empty($main['image_desktop'])): ?>
          <noscript><img src="<?php print $main['image_desktop']; ?>" alt=""
                         title=""/></noscript>
        <?php endif; ?>
      </div>
    </div>

    <div class="meta-wrapper">
      <div class="meta-wrapper-inner">
        <div class="meta">
          <div class="caption"><?php print $main['season']; ?>
            &nbsp<?php print $main['episode']; ?></div>
          <?php if (!empty($main['video_link'])): ?>
            <div class="title">
              <?php print $main['title']; ?>
            </div>
            <div class="additional">
              <a href="<?php print $main['video_link']; ?>" class="additional-link show-color show-font">
                <?php print t('Watch'); ?>
                >
              </a><br>
              <a href="<?php print $main['episode_link']; ?>" class="additional-link show-color show-font">
                <?php print t('Read the Recap'); ?>
                >
              </a><br>
            </div>
          <?php else: ?>
            <div class="title">
              <?php print t('Where to Watch'); ?>
            </div>
            <?php if (!empty($main['where2watch_links'])) : ?>
              <div class="additional">
                <?php foreach ($main['where2watch_links'] as $link): ?>
                  <a href="<?php print $link['url'] ?>"
                     class="additional-link show-color show-font"><?php print $link['title'] ?>
                    ></a><br>
                <?php endforeach; ?>
              </div>
            <?php endif; ?>
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
    <?php print $data['#content']['link_mobile']; ?>
  </div>
</div>

