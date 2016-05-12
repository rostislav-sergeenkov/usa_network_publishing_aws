<?php
/**
 * TOP Elements Block.
 */
?>
<?php
  $content = $data['#content'];
?>
<div id="top-five-videos" class="line-block line-half-block">
  <div class="line-block-inner">
    <div class="title-block show-border">
      <h2><?php print $content['title']; ?></h2>
    </div>
    <div class="slider-wrap">
      <ul class="slider-list">
      <?php foreach ($content['elements'] as $element) : ?>
        <li class="slide slide-item" style="">
          <div class="node node-usanetwork-promo usa-show-related-top-promo">
            <a href="<?php print $content['link']; ?>" class="omniture-tracking-processed">
              <div class="image-block">
                <div class="asset-img" data-picture="" data-alt="" data-class="tile-img">
                  <div
                    data-src="http://local.usanetwork.com/sites/usanetwork/files/public/styles/284x187/public/usa_video_image/160415_3020871_Knock_Knock.jpg?itok=TmTtkFmQ"></div>
                  <div data-media="(min-width: 769px)"
                       data-src="http://local.usanetwork.com/sites/usanetwork/files/public/styles/99x84/public/usa_video_image/160415_3020871_Knock_Knock.jpg?itok=ZdjqkFsJ"></div>
                  <!--[if (IE 8) & (!IEMobile)]>
                  <div
                    data-src="http://local.usanetwork.com/sites/usanetwork/files/public/styles/99x84/public/usa_video_image/160415_3020871_Knock_Knock.jpg?itok=ZdjqkFsJ"></div>
                  <![endif]-->
                  <noscript>&lt;img
                    src="http://local.usanetwork.com/sites/usanetwork/files/public/styles/99x84/public/usa_video_image/160415_3020871_Knock_Knock.jpg?itok=ZdjqkFsJ"
                    alt="" title="" /&gt;</noscript>
                  <img alt="" class="tile-img mCS_img_loaded"
                       src="http://local.usanetwork.com/sites/usanetwork/files/public/styles/99x84/public/usa_video_image/160415_3020871_Knock_Knock.jpg?itok=ZdjqkFsJ">
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
