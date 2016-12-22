<div class="main">
  <?php if (!empty($featured_aspot)): ?>
    <div class="aspot-and-episodes">
      <div class="node usanetwork-aspot">
        <a href="<?php print $featured_aspot['aspot_link']; ?>" target="_self">
          <div class="asset-img" data-picture data-alt="" data-class="tile-img">
            <?php if (!empty($featured_aspot['aspot_image']['mobile'])): ?>
              <div data-src="<?php print $featured_aspot['aspot_image']['mobile']; ?>"></div>
            <?php endif; ?>
            <?php if (!empty($featured_aspot['aspot_image']['desktop'])): ?>
              <div data-media="(min-width: 641px)" data-src="<?php print $featured_aspot['aspot_image']['desktop']; ?>"></div>
              <!--[if (IE 8) & (!IEMobile)]>
              <div data-src="<?php print $featured_aspot['aspot_image']['desktop']; ?>"></div>
              <![endif]-->
              <noscript><img src="<?php print $featured_aspot['aspot_image']['desktop']; ?>" width="2880" height="1620" alt="" title="" /></noscript>
            <?php endif; ?>
          </div>
          <div class="meta-wrapper">
            <div class="meta-icon video-icon"></div>
            <div class="meta">
              <?php if (!empty($featured_aspot['aspot_caption'])): ?>
                <div class="caption"><?php print $featured_aspot['aspot_caption']; ?></div>
              <?php endif; ?>
              <?php if (!empty($featured_aspot['aspot_title'])): ?>
                <div class="title"><?php print $featured_aspot['aspot_title']; ?></div>
              <?php endif; ?>
              <?php if (!empty($featured_aspot['aspot_additional'])): ?>
                <div class="additional"><span><?php print $featured_aspot['aspot_additional']; ?></span> <?php print $featured_aspot['aspot_duration']; ?></div>
              <?php endif; ?>
            </div>
          </div>
        </a>
      </div>
      <div class="episodes-list">
        <ul>
          <?php foreach ($features_full_episodes as $featured_element): ?>
          <li>
            <a href="<?php print $featured_element['video_link']; ?>">
              <div class="asset-img"><?php print $featured_element['video_image']; ?></div>
              <div class="meta-wrapper">
                <div class="meta-wrapper-inner">
                  <div class="meta-icon video-icon"></div>
                  <div class="meta">
                    <?php if (!empty($featured_element['video_caption'])): ?>
                      <div class="caption"><?php print $featured_element['video_caption']; ?></div>
                    <?php endif; ?>
                    <?php if (!empty($featured_element['video_title'])): ?>
                      <div class="title"><?php print $featured_element['video_title']; ?></div>
                    <?php endif; ?>
                    <?php if (!empty($featured_element['video_additional'])): ?>
                      <div class="additional"><span><?php print $featured_element['video_additional']; ?></span> <?php print $featured_element['video_duration']; ?></div>
                    <?php endif; ?>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <?php endforeach; ?>
        </ul>
      </div>
    </div>
  <?php endif; ?>
  <div class="carousel-wrapper">
    <?php print $shows_carousels; ?>
  </div>
</div>
