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
  <div class="aspot-and-episodes">
    <div class="node usanetwork-aspot">
      <a href="javascript:void(0)" target="_self">
        <div class="asset-img">
          <?php print $aspot_image; ?>
        </div>
        <div class="meta-wrapper">
          <div class="meta">
            <div class="meta-icon play-icon"></div>
            <div class="caption"><?php print $aspot_caption; ?></div>
            <div class="title">><?php print $aspot_title; ?></div>
            <div class="additional">><?php print $aspot_cadditional; ?></span> ><?php print $aspot_duration; ?></div>
          </div>
        </div>
      </a>
    </div>
    <div class="episodes-list">
      <ul>
        <?php foreach ($features_full_episodes as $featured_element): ?>

        <li>
          <a href="javascript:void(0)">
              <div class="asset-img"><img src="images/full-episode-1.png" alt=""></div>
              <div class="meta-wrapper">
                <div class="meta">
                  <div class="caption">Suits</div>
                  <div class="title">Two in the knees</div>
                  <div class="additional"><span>S2 episode 3</span> 43:04</div>
                  <div class="meta-icon play-icon resize-avail-1024"></div>
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
  <div class="ad ad-728x90">
  </div>
</div>
