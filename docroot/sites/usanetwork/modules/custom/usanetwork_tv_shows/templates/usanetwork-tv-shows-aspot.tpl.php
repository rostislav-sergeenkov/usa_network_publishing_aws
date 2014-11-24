<?php
/**
 *
 */
?>
<div class="aspot-and-episodes">
  <div class="node usanetwork-aspot">
    <?php if (!empty($show['image_url'])): ?>
      <a href="javascript:void(0)" target="_self">
        <div class="asset-img">
          <img src="<?php print $show['image_url']; ?>" alt="">
        </div>
      </a>
    <?php endif; ?>
    <div class="meta-wrap">
      <div class="meta">
        <?php if (!empty($show['title_prefix'])): ?>
          <div class="new-episode"><?php print $show['title_prefix']; ?></div>
        <?php endif; ?>
        <?php if (!empty($show['title'])): ?>
          <div class="show-title"><?php print $show['title']; ?></div>
        <?php endif; ?>
        <?php if (!empty($show['cta'])): ?>
          <div class="cta-link"><a href="javascript:void(0)" class="show-color hover-avail"><?php print $show['cta']['text']; ?></a></div>
        <?php endif; ?>
      </div>
    </div>
  </div>
  <?php if (!empty($episodes)): ?>
    <div class="episodes-list">
      <div class="title show-color"><h2><?php print t('Latest full episodes'); ?></h2></div>
      <ul>
        <?php foreach ($episodes as $episode): ?>
          <li>
            <a href="<?php print !empty($episode['url']) ? $episode['url'] : '#'; ?>">
              <div class="meta">
                <?php if (!empty($episode['title'])): ?>
                  <div class="title"><?php print $episode['title']; ?></div>
                <?php endif; ?>
                <?php if (!empty($episode['series_and_number']) && !empty($episode['duration'])): ?>
                  <div class="additional"><span><?php print $episode['series_and_number']; ?></span> <?php print $episode['duration']; ?></div>
                <?php endif; ?>
                <div class="meta-icon play-icon resize-avail-1024"></div>
              </div>
              <?php if (!empty($episode['image_url'])): ?>
                <div class="episode-image"><img src="<?php print $episode['image_url']; ?>" alt=""></div>
              <?php endif; ?>
            </a>
          </li>
        <?php endforeach; ?>
      </ul>
      <!-- ************ CURRENTLY UNUSED ************ <div class="more-button">
        <a href="javascript:void(0)" class="more"></a>
      </div>
      <div class="advertisement">
        <a href="javascript:void(0)">
          <img src="images/ad_lexus600x500_2.png" alt="">
        </a>
      </div> -->
    </div>
  <?php endif; ?>
</div>
