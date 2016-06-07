<?php
/**
 * Articles for new design template.
 */
?>
<div class="panel-pane">
  <div class="pane-content">
    <div class="articles-wrapper">
      <div class="usa-section-title show-border sponsored-enable">
        <h2 class="title">Articles</h2>
        <div class="sponsored show-color"><img src="<?php print $data['#content']['logo'] ?>" alt="" /></div>
      </div>
      <div class="articles-content">
        <ul>
          <?php foreach ($data['#content']['articles']['items'] as $item): ?>
            <li>
              <div class="node node-usanetwork-promo usa-articles-promo">
                <a href="/<?php print $item['link'] ?>">
                  <div class="image-block">
                    <div class="asset-img" data-picture="" data-alt="" data-class="tile-img">
                      <?php if (!empty($item['image_mobile'])): ?>
                        <div data-src="<?php print $item['image_mobile'] ?>"></div>
                      <?php endif; ?>
                      <?php if (!empty($item['image_desktop'])): ?>
                        <div data-media="(min-width: 769px)" data-src="<?php print $item['image_desktop'] ?>"></div>
                        <!--[if (IE 8) & (!IEMobile)]>
                        <div data-src="<?php print $item['image_desktop'] ?>"></div>
                        <![endif]-->
                        <noscript><img src="<?php print $item['image_desktop'] ?>" alt="" title="" /></noscript>
                      <?php endif; ?>
                    </div>
                  </div>
                </a>
                <div class="meta-wrapper show-border">
                  <div class="meta-wrapper-inner">
                    <div class="meta">
                      <div class="title-and-additional">
                        <div class="title"><?php print $item['title'] ?></div>
                        <?php if ($item['author']): ?>
                          <div class="additional">By <?php print $item['author'] ?> <?php print $item['date'] ?></div>
                        <?php else: ?>
                          <div class="additional"><?php print $item['date'] ?></div>
                        <?php endif; ?>
                      </div>
                      <div class="caption"><?php print $item['description'] ?></div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          <?php endforeach; ?>
        </ul>
      </div>
    </div>
    <div class="view-more">
      <a href="<?php print $data['#content']['articles']['view_more']; ?>" class="view-more-link"><?php print t('View more');?></a>
    </div>
  </div>
</div>
