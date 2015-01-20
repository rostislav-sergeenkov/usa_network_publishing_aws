<?php
/**
 * $description - array of description data
 * $description['caption'] - the upper line of description (Caption)
 * $description['title'] - the middle line of description (Title)
 * $description['additional_text'] - the bottom line of description (Additional text)
 * $slides - array of carousel slides
 * $slides[]['content_type'] - the type of slide content
 * $slides[]['show_class'] - the class of TV show that connected with the content ('undefined' if there are no connected shows)
 * $slides[]['caption'] - the show name
 * $slides[]['title'] - the title of the content
 * $slides[]['additional_text'] - the short description of content
 * $slides[]['image_url'] - external URL of content image
 */
?>
<div class="homepage-carousel-item shows-block">
  <?php if (!empty($description)): ?>
    <div class="carousel-description-item start">
      <a class="description-button" href="javascript:void(0)"></a>
      <div class="description-wrapper">
        <div class="description-block">
          <?php if (!empty($description['caption'])): ?>
            <div class="caption"><?php print $description['caption']; ?></div>
          <?php endif; ?>
          <?php if (!empty($description['title'])): ?>
            <div class="title"><?php print $description['title']; ?></div>
          <?php endif; ?>
          <?php if (!empty($description['additional_text'])): ?>
            <div class="additional-text"><?php print $description['additional_text']; ?></div>
          <?php endif; ?>
        </div>
      </div>
    </div>
  <?php endif; ?>
  <?php if (!empty($slides)): ?>
    <div class="show-carousel carousel carousel-left start">
      <ul class="slides">
        <?php foreach ($slides as $slide): ?>
          <li class="slide-type slide-type-<?php print $slide['content_type']; ?>">
            <div class="node node-usanetwork-promo show-color-border <?php print $slide['show_class']; ?>">
              <a href="<?php print $slide['content_url']; ?>">
                <div class="meta-wrapper">
                  <div class="meta-back"></div>
                  <div class="meta-wrapper-inner">
                    <div class="meta">
                      <?php if (!empty($slide['caption'])): ?>
                        <div class="caption"><?php print $slide['caption']; ?></div>
                      <?php endif; ?>
                      <?php if (!empty($slide['title'])): ?>
                        <div class="title"><?php print $slide['title']; ?></div>
                      <?php endif; ?>
                      <?php if (!empty($slide['additional_text'])): ?>
                        <div class="additional-text"><?php print $slide['additional_text']; ?></div>
                      <?php endif; ?>
                    </div>
                  </div>
                </div>
                <?php if (!empty($slide['image_url'])): ?>
                  <div class="asset-img">
                    <img src="<?php print $slide['image_url']; ?>" />
                  </div>
                <?php endif; ?>
              </a>
            </div>
          </li>
        <?php endforeach; ?>
      </ul>
      <a class="jcarousel-controls jcarousel-control-prev inactive" href="javascript:void(0)" data-jcarouselcontrol="true"></a>
      <a class="jcarousel-controls jcarousel-control-next inactive" href="javascript:void(0)" data-jcarouselcontrol="true"></a>
    </div>
  <?php endif; ?>
</div>
