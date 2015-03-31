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
          <div class="asset-img">
            <?php print (!empty($promo['image']))? $promo['image']: ''; ?>
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
              <div class="asset-img">
                <?php print (!empty($promo['image']))? $promo['image']: ''; ?>
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