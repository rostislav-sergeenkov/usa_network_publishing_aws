<?php
/**
 * TOP Elements Block.
 */
?>
<?php
  $content = $data['#content'];
?>
<div id="top-five-<?php print $content['type']; ?>" class="line-block line-half-block">
  <div class="line-block-inner">
    <div class="title-block show-border">
      <h2><?php print $content['title']; ?></h2>
    </div>
    <div class="slider-wrap">
      <ul class="slider-list">
      <?php foreach ($content['elements'] as $element) : ?>
        <li class="slide slide-item" style="">
          <div class="node node-usanetwork-promo usa-show-related-top-promo">
            <a href="<?php print $element['link']; ?>" class="omniture-tracking-processed">
              <div class="image-block">
                <div class="meta-icon full-video-icon-default"></div>
                <div class="asset-img" data-picture="" data-alt="" data-class="tile-img">
                  <div data-src="<?php print $element['image_mobile']; ?>"></div>
                  <div data-media="(min-width: 769px)" data-src="<?php print $element['image']; ?>"></div>
                  <!--[if (IE 8) & (!IEMobile)]>
                    <div data-src="<?php print $element['image']; ?>"></div>
                  <![endif]-->
                  <noscript><img src="<?php print $element['image']; ?>" alt="" title="" /></noscript>
                </div>
              </div>
              <div class="meta-wrapper">
                <div class="meta-wrapper-inner">
                  <div class="meta">
                    <div class="title"><?php print $element['title']; ?></div>
                    <div class="additional"><?php print $element['caption']; ?></div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </li>
      <?php endforeach; ?>
      </ul>
    </div>
    <div class="view-more">
      <?php print $content['more_link']; ?>
    </div>
  </div>
</div>
