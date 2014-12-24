<div class="main">
  <div class="page-title">
    <h2>Latest full episodes</h2>
    <a href="javascript:void(0)" class="sign-in-link">Sign in <span>All access</span></a>
  </div>
  <div class="tab-item log-in">
    <div class="discription">
      <h3>Please Login with your TV provider:</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim
        tempor nulla in egestas. Aenean nulla tortor, accvumsan vel mauris id, condimentum lacinia mauris.
        Suspendisse eget iaculis purus, sed tempor turpis. Aliquam euismod purus in egestas mattis. Aliquam
        sodales at ipsum in mattis. Vestibulum in ultricies urna. Pellentesque habitant morbi tristique senectus
        et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum
      </p>
      <a href="javascript:void(0)" class="more">show more</a>
    </div>
    <div class="check-sign-in">
      <img src="images/sign-in.png" alt="">
    </div>
  </div>
  <?php if (!empty($featured_aspot)): ?>
    <div class="aspot-and-episodes">
      <div class="node usanetwork-aspot">
        <a href="<?php print $featured_aspot['aspot_link']; ?>" target="_self">
          <div class="asset-img" data-picture data-alt="" data-class="tile-img">
            <?php if (!empty($featured_aspot['aspot_image']['mobile'])): ?>
              <div data-src="<?php print $featured_aspot['aspot_image']['mobile']; ?>"></div>
            <?php endif; ?>
            <?php if (!empty($featured_aspot['aspot_image']['mobile_retina'])): ?>
              <div data-media="(min-device-pixel-ratio: 2.0)" data-src="<?php print $featured_aspot['aspot_image']['mobile_retina']; ?>"></div>
            <?php endif; ?>
            <?php if (!empty($featured_aspot['aspot_image']['tablet'])): ?>
              <div data-media="(min-width: 641px)" data-src="<?php print $featured_aspot['aspot_image']['tablet']; ?>"></div>
            <?php endif; ?>
            <?php if (!empty($featured_aspot['aspot_image']['tablet_retina'])): ?>
              <div data-media="(min-width: 641px) and (min-device-pixel-ratio: 2.0)" data-src="<?php print $featured_aspot['aspot_image']['tablet_retina']; ?>"></div>
            <?php endif; ?>
            <?php if (!empty($featured_aspot['aspot_image']['desktop'])): ?>
              <div data-media="(min-width: 1025px)" data-src="<?php print $featured_aspot['aspot_image']['desktop']; ?>"></div>
            <?php endif; ?>
            <?php if (!empty($featured_aspot['aspot_image']['desktop_retina'])): ?>
              <div data-media="(min-width: 1025px) and (min-device-pixel-ratio: 2.0)" data-src="<?php print $featured_aspot['aspot_image']['desktop_retina']; ?>"></div>
            <?php endif; ?>
            <?php if (!empty($featured_aspot['aspot_image']['desktop'])): ?>
              <noscript><img src="<?php print $featured_aspot['aspot_image']['desktop']; ?>" width="2500" height="1407" alt="" title="" /></noscript>
            <?php endif; ?>
          </div>
          <div class="meta-wrapper">
            <div class="meta">
              <div class="meta-icon play-icon"></div>
              <div class="caption"><?php print $featured_aspot['aspot_caption']; ?></div>
              <div class="title"><?php print $featured_aspot['aspot_title']; ?></div>
              <?php if ($featured_aspot['aspot_additional']) : ?>
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
                <div class="meta-icon play-icon resize-avail-1024"></div>
                <div class="meta">
                  <div class="caption"><?php print $featured_element['video_caption']; ?></div>
                  <div class="title"><?php print $featured_element['video_title']; ?></div>
                  <?php if ($featured_element['video_additional']) : ?>
                    <div class="additional"><span><?php print $featured_element['video_additional']; ?></span> <?php print $featured_element['video_duration']; ?></div>
                  <?php endif; ?>
                </div>
              </div>
            </a>
          </li>
          <?php endforeach; ?>
        </ul>
        <div class="more-button">
          <a href="javascript:void(0)" class="more"></a>
        </div>
      </div>
    </div>
  <?php endif; ?>
  <div class="ad ad-728x90"></div>

  <div class="carousel-wrapper">
    <?php print $shows_carousels; ?>
  </div>
</div>
