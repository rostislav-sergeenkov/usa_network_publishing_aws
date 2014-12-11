<?php
/**
 *
 */
?>
<div class="aspot-and-episodes">
  <div class="show-aspot">
    <?php if (!empty($show)): ?>
      <?php print $show ?>
    <?php endif; ?>
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
      <div class="more-button">
        <a href="javascript:void(0)" class="more"></a>
      </div>
      <!-- ************ CURRENTLY UNUSED ************
      <div class="advertisement">
        <a href="javascript:void(0)">
          <img src="images/ad_lexus600x500_2.png" alt="">
        </a>
      </div> -->
    </div>
  <?php endif; ?>
</div>
