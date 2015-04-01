<?php
/**
 *
 */
?>
<div class="best-of-block show-border">
  <h2 class="section-title">
    <span class="section-title-wrapper show-border secondary">Best of chrisley</span>
  </h2>
  <?php if (!empty($promos) && is_array($promos)):?>
  <ul>
    <?php $second_item = true;?>
    <?php foreach ($promos as $promo): ?>
    <?php if ($promo['is_first']): ?>
    <li class="first">
      <div class="node node-usanetwork-promo <?php print (!empty($promo['class']))? $promo['class']: ''; ?>">
        <a href="<?php print (!empty($promo['url']))? $promo['url']: '#'; ?>">
          <div class="meta-wrapper">
            <div class="meta-wrapper-inner">
              <div class="meta-icon <?php print (!empty($promo['icon_type']))? $promo['icon_type']: ''; ?>"></div>
              <div class="meta">
                <div class="caption"><?php print (!empty($promo['caption']))? $promo['caption']: ''; ?></div>
                <div class="title"><?php print (!empty($promo['title']))? $promo['title']: ''; ?></div>
                <div class="additional"><?php print (!empty($promo['description']))? $promo['description']: ''; ?></div>
              </div>
            </div>
          </div>
          <div class="asset-img" data-picture data-alt="" data-class="tile-img">
            <?php if (!empty($promo['image']['mobile'])): ?>
              <div data-src="<?php print $promo['image']['mobile']; ?>"></div>
            <?php endif; ?>
            <?php if (!empty($promo['image']['desktop'])): ?>
              <div data-media="(min-width: 481px)" data-src="<?php print $promo['image']['desktop']; ?>"></div>
              <!--[if (IE 8) & (!IEMobile)]>
              <div data-src="<?php print $promo['image']['desktop']; ?>"></div>
              <![endif]-->
            <?php endif; ?>
            <?php if (!empty($promo['image']['desktop'])): ?>
              <noscript><img src="<?php print $promo['image']['desktop']; ?>" alt="" title="" /></noscript>
            <?php endif; ?>
          </div>
        </a>
      </div>
    </li>
      <?php else: ?>
        <?php if ($second_item == true): ?>
          <li class="last">
          <?php $second_item = false; ?>
        <?php endif; ?>
          <div class="node node-usanetwork-promo <?php print (!empty($promo['class']))? $promo['class']: ''; ?>">
            <a href="<?php print (!empty($promo['url']))? $promo['url']: '#'; ?>">
              <div class="meta-wrapper">
                <div class="meta-wrapper-inner">
                  <div class="meta-icon <?php print (!empty($promo['icon_type']))? $promo['icon_type']: ''; ?>"></div>
                  <div class="meta">
                    <div class="caption"><?php print (!empty($promo['caption']))? $promo['caption']: ''; ?></div>
                    <div class="title"><?php print (!empty($promo['title']))? $promo['title']: ''; ?></div>
                    <div class="additional"><?php print (!empty($promo['description']))? $promo['description']: ''; ?></div>
                  </div>
                </div>
              </div>
              <div class="asset-img" data-picture data-alt="" data-class="tile-img">
                <?php if (!empty($promo['image']['mobile'])): ?>
                  <div data-src="<?php print $promo['image']['mobile']; ?>"></div>
                <?php endif; ?>
                <?php if (!empty($promo['image']['desktop'])): ?>
                  <div data-media="(min-width: 481px)" data-src="<?php print $promo['image']['desktop']; ?>"></div>
                  <!--[if (IE 8) & (!IEMobile)]>
                  <div data-src="<?php print $promo['image']['desktop']; ?>"></div>
                  <![endif]-->
                <?php endif; ?>
                <?php if (!empty($promo['image']['desktop'])): ?>
                  <noscript><img src="<?php print $promo['image']['desktop']; ?>" alt="" title="" /></noscript>
                <?php endif; ?>
              </div>
            </a>
          </div>
      <?php endif; ?>
      <?php endforeach; ?>
      <?php if ($second_item == false): ?>
        </li>
      <?php endif; ?>
      <?php endif; ?>
</div>

<div class="show-latest-block show-border">
  <h2 class="section-title">
    <span class="section-title-wrapper show-border secondary">The latest</span>
  </h2>
  <ul class="odd">
    <li class="first">
      <div class="node node-usanetwork-promo three-line-video">
        <a href="/benched/cast/carlos">
          <div class="meta-wrapper">
            <div class="meta-wrapper-inner">
              <div class="meta-icon play-icon"></div>
              <div class="meta">
                <div class="caption">Show Name or Violator</div>
                <div class="title">Title</div>
                <div class="additional">Description</div>
              </div>
            </div>
          </div>
          <div class="asset-img" data-picture="" data-alt="" data-class="tile-img">
            <div data-src="http://usanetwork.local.usanetwork.com/sites/usanetwork/files/public/styles/431x350/public/profiles_hero_760x879_carlos.jpg?itok=qxVneIsg"></div>
            <div data-media="(min-width: 481px)" data-src="http://usanetwork.local.usanetwork.com/sites/usanetwork/files/public/styles/928x714/public/profiles_hero_760x879_carlos.jpg?itok=r0UgOGdK"></div>
            <!--[if (IE 8) & (!IEMobile)]>
            <div data-src="http://usanetwork.local.usanetwork.com/sites/usanetwork/files/public/styles/928x714/public/profiles_hero_760x879_carlos.jpg?itok=r0UgOGdK"></div>
            <![endif]-->
            <noscript>&lt;img src="http://usanetwork.local.usanetwork.com/sites/usanetwork/files/public/styles/928x714/public/profiles_hero_760x879_carlos.jpg?itok=r0UgOGdK" alt="" title="" /&gt;</noscript>
            <img alt="" class="tile-img" src="http://usanetwork.local.usanetwork.com/sites/usanetwork/files/public/styles/928x714/public/profiles_hero_760x879_carlos.jpg?itok=r0UgOGdK"></div>
        </a>
      </div>
      <div class="node node-usanetwork-promo three-line-video">
        <a href="/benched/cast/carlos">
          <div class="meta-wrapper">
            <div class="meta-wrapper-inner">
              <div class="meta-icon play-icon"></div>
              <div class="meta">
                <div class="caption">Show Name or Violator</div>
                <div class="title">Title</div>
                <div class="additional">Description</div>
              </div>
            </div>
          </div>
          <div class="asset-img" data-picture="" data-alt="" data-class="tile-img">
            <div data-src="http://usanetwork.local.usanetwork.com/sites/usanetwork/files/public/styles/212x172/public/profiles_hero_760x879_carlos.jpg?itok=gV8L9kB2"></div>
            <div data-media="(min-width: 481px)" data-src="http://usanetwork.local.usanetwork.com/sites/usanetwork/files/public/styles/457x351/public/profiles_hero_760x879_carlos.jpg?itok=gT-9V7GA"></div>
            <!--[if (IE 8) & (!IEMobile)]>
            <div data-src="http://usanetwork.local.usanetwork.com/sites/usanetwork/files/public/styles/457x351/public/profiles_hero_760x879_carlos.jpg?itok=gT-9V7GA"></div>
            <![endif]-->
            <noscript>&lt;img src="http://usanetwork.local.usanetwork.com/sites/usanetwork/files/public/styles/457x351/public/profiles_hero_760x879_carlos.jpg?itok=gT-9V7GA" alt="" title="" /&gt;</noscript>
            <img alt="" class="tile-img" src="http://usanetwork.local.usanetwork.com/sites/usanetwork/files/public/styles/457x351/public/profiles_hero_760x879_carlos.jpg?itok=gT-9V7GA"></div>
        </a>
      </div>
      <div class="node node-usanetwork-promo three-line-video">
        <a href="/benched/cast/carlos">
          <div class="meta-wrapper">
            <div class="meta-wrapper-inner">
              <div class="meta-icon play-icon"></div>
              <div class="meta">
                <div class="caption">Show Name or Violator</div>
                <div class="title">Title</div>
                <div class="additional">Description</div>
              </div>
            </div>
          </div>
          <div class="asset-img" data-picture="" data-alt="" data-class="tile-img">
            <div data-src="http://usanetwork.local.usanetwork.com/sites/usanetwork/files/public/styles/212x172/public/profiles_hero_760x879_carlos.jpg?itok=gV8L9kB2"></div>
            <div data-media="(min-width: 481px)" data-src="http://usanetwork.local.usanetwork.com/sites/usanetwork/files/public/styles/457x351/public/profiles_hero_760x879_carlos.jpg?itok=gT-9V7GA"></div>
            <!--[if (IE 8) & (!IEMobile)]>
            <div data-src="http://usanetwork.local.usanetwork.com/sites/usanetwork/files/public/styles/457x351/public/profiles_hero_760x879_carlos.jpg?itok=gT-9V7GA"></div>
            <![endif]-->
            <noscript>&lt;img src="http://usanetwork.local.usanetwork.com/sites/usanetwork/files/public/styles/457x351/public/profiles_hero_760x879_carlos.jpg?itok=gT-9V7GA" alt="" title="" /&gt;</noscript>
            <img alt="" class="tile-img" src="http://usanetwork.local.usanetwork.com/sites/usanetwork/files/public/styles/457x351/public/profiles_hero_760x879_carlos.jpg?itok=gT-9V7GA"></div>
        </a>
      </div>
    </li>
    <li class="last">
      <div class="node node-usanetwork-promo three-line-video">
        <a href="/benched/cast/carlos">
          <div class="meta-wrapper">
            <div class="meta-wrapper-inner">
              <div class="meta-icon play-icon"></div>
              <div class="meta">
                <div class="caption">Show Name or Violator</div>
                <div class="title">Title</div>
                <div class="additional">Description</div>
              </div>
            </div>
          </div>
          <div class="asset-img" data-picture="" data-alt="" data-class="tile-img">
            <div data-src="http://usanetwork.local.usanetwork.com/sites/usanetwork/files/public/styles/212x172/public/profiles_hero_760x879_carlos.jpg?itok=gV8L9kB2"></div>
            <div data-media="(min-width: 481px)" data-src="http://usanetwork.local.usanetwork.com/sites/usanetwork/files/public/styles/457x351/public/profiles_hero_760x879_carlos.jpg?itok=gT-9V7GA"></div>
            <!--[if (IE 8) & (!IEMobile)]>
            <div data-src="http://usanetwork.local.usanetwork.com/sites/usanetwork/files/public/styles/457x351/public/profiles_hero_760x879_carlos.jpg?itok=gT-9V7GA"></div>
            <![endif]-->
            <noscript>&lt;img src="http://usanetwork.local.usanetwork.com/sites/usanetwork/files/public/styles/457x351/public/profiles_hero_760x879_carlos.jpg?itok=gT-9V7GA" alt="" title="" /&gt;</noscript>
            <img alt="" class="tile-img" src="http://usanetwork.local.usanetwork.com/sites/usanetwork/files/public/styles/457x351/public/profiles_hero_760x879_carlos.jpg?itok=gT-9V7GA"></div>
        </a>
      </div>
      <div class="node node-usanetwork-promo three-line-video-large">
        <a href="/benched/cast/carlos">
          <div class="meta-wrapper">
            <div class="meta-wrapper-inner">
              <div class="meta-icon play-icon"></div>
              <div class="meta">
                <div class="caption">Show Name or Violator</div>
                <div class="title">Title</div>
                <div class="additional">Description</div>
              </div>
            </div>
          </div>
          <div class="asset-img" data-picture="" data-alt="" data-class="tile-img">
            <div data-src="http://usanetwork.local.usanetwork.com/sites/usanetwork/files/public/styles/212x172/public/profiles_hero_760x879_carlos.jpg?itok=gV8L9kB2"></div>
            <div data-media="(min-width: 481px)" data-src="http://usanetwork.local.usanetwork.com/sites/usanetwork/files/public/styles/457x351/public/profiles_hero_760x879_carlos.jpg?itok=gT-9V7GA"></div>
            <!--[if (IE 8) & (!IEMobile)]>
            <div data-src="http://usanetwork.local.usanetwork.com/sites/usanetwork/files/public/styles/457x351/public/profiles_hero_760x879_carlos.jpg?itok=gT-9V7GA"></div>
            <![endif]-->
            <noscript>&lt;img src="http://usanetwork.local.usanetwork.com/sites/usanetwork/files/public/styles/457x351/public/profiles_hero_760x879_carlos.jpg?itok=gT-9V7GA" alt="" title="" /&gt;</noscript>
            <img alt="" class="tile-img" src="http://usanetwork.local.usanetwork.com/sites/usanetwork/files/public/styles/457x351/public/profiles_hero_760x879_carlos.jpg?itok=gT-9V7GA"></div>
        </a>
      </div>
    </li>
  </ul></div>