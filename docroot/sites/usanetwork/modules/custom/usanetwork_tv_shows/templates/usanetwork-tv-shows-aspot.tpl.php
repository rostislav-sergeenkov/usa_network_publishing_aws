<?php
/**
 *
 */
?>
<div class="aspot-and-episodes <?php print !empty($episodes)? 'episodes-'.count($episodes): 'episodes-empty'; ?>">
  <div class="show-aspot">
    <?php if (!empty($show)): ?>
      <?php print $show ?>
    <?php endif; ?>
  </div>
  <?php if (!empty($episodes)): ?>
    <div class="episodes-list">
      <?php if (!empty($episodes_block_title)): ?>
        <div class="title show-color">
          <h2><?php print $episodes_block_title; ?></h2>
        </div>
      <?php endif; ?>
      <ul class="slider-vertical">
        <?php foreach ($episodes as $episode): ?>
          <li>
            <a href="<?php print !empty($episode['url']) ? $episode['url'] : '#'; ?>">
              <div class="meta">
                <?php if (!empty($episode['violator'])): ?>
                  <div class="title"><?php print $episode['violator']; ?></div>
                <?php endif; ?>
                <?php if (!empty($episode['title'])): ?>
                  <div class="title"><?php print $episode['title']; ?></div>
                <?php endif; ?>
                <?php if (!empty($episode['description'])): ?>
                  <div class="title"><?php print $episode['description']; ?></div>
                <?php endif; ?>
                <div class="meta-icon play-icon resize-avail-1024"></div>
              </div>
              <?php if (!empty($episode['image_url'])): ?>
                <div class="asset-img"><img src="<?php print $episode['image_url']; ?>" alt=""></div>
              <?php endif; ?>
            </a>
          </li>
        <?php endforeach; ?>
      </ul>
      <div class="more-button">
        <a href="javascript:void(0)" class="more link-color-reset"></a>
      </div>
      <!--
      <div class="advertisement">
        <a href="javascript:void(0)">
          <img src="images/ad_lexus600x500_2.png" alt="">
        </a>
      </div> -->
    </div>
  <?php endif; ?>
</div>

<div class="episodes-list-slider" data-mode="vertical">
    <div class="slider-vertical">
        <div class="slide"><img src="http://placehold.it/300x40&text=FooBar1"></div>
        <div class="slide"><img src="http://placehold.it/300x40&text=FooBar2"></div>
        <div class="slide"><img src="http://placehold.it/300x40&text=FooBar3"></div>
        <div class="slide"><img src="http://placehold.it/300x40&text=FooBar4"></div>
        <div class="slide"><img src="http://placehold.it/300x40&text=FooBar5"></div>
        <div class="slide"><img src="http://placehold.it/300x40&text=FooBar6"></div>
        <div class="slide"><img src="http://placehold.it/300x40&text=FooBar7"></div>
        <div class="slide"><img src="http://placehold.it/300x40&text=FooBar8"></div>
        <div class="slide"><img src="http://placehold.it/300x40&text=FooBar9"></div>
        <div class="slide"><img src="http://placehold.it/300x40&text=FooBar10"></div>
    </div>
</div>
<div class="episodes-list-slider" data-mode="horizontal">
    <div class="slider-horizontal">
        <div class="slide"><img src="http://placehold.it/300x100&text=FooBar1"></div>
        <div class="slide"><img src="http://placehold.it/300x100&text=FooBar2"></div>
        <div class="slide"><img src="http://placehold.it/300x100&text=FooBar3"></div>
        <div class="slide"><img src="http://placehold.it/300x100&text=FooBar4"></div>
        <div class="slide"><img src="http://placehold.it/300x100&text=FooBar5"></div>
        <div class="slide"><img src="http://placehold.it/300x100&text=FooBar6"></div>
        <div class="slide"><img src="http://placehold.it/300x100&text=FooBar7"></div>
        <div class="slide"><img src="http://placehold.it/300x100&text=FooBar8"></div>
        <div class="slide"><img src="http://placehold.it/300x100&text=FooBar9"></div>
        <div class="slide"><img src="http://placehold.it/300x100&text=FooBar10"></div>
    </div>
</div>

