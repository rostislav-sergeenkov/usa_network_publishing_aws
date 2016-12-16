<li class="carousel-item swiper-slide">
  <div class="node node-usanetwork-promo">
    <a href="<?php print $video_url; ?>">
      <div class="meta-wrap">
        <div class="meta-wrapper-inner multiline-ellipsis-meta-wrapper">
          <div class="meta-icon <?php print !empty($icon_type) ? $icon_type : 'video-icon'; ?>"></div>
          <div class="meta multiline-ellipsis-meta">
            <?php if (!empty($video_title)): ?>
              <div class="title" data-text="<?php print $video_title; ?>"><?php print $video_title; ?></div>
            <?php endif; ?>
            <?php if (!empty($video_additional)): ?>
              <div class="additional" data-text="<?php print $video_additional; ?>"><?php print $video_additional; ?></div>
            <?php endif; ?>
          </div>
        </div>
      </div>
      <?php print $video_image; ?>
    </a>
  </div>
</li>
