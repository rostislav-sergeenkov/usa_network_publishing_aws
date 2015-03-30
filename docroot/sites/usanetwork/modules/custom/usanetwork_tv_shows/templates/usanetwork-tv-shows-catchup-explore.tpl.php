<?php
/**
 *
 */
?>
<div class="catch-up-explore show-color catch-up">
  <?php if ($is_explore) : ?>
    <h2 class="explore-title"><?php print t('Explore'); ?></h2>
  <?php endif; ?>
  <?php if ($is_catch_up) : ?>
    <h2 class="catch-up-title"><?php print t('Catch up'); ?></h2>
  <?php  endif; ?>
  <?php if ($is_explore && $is_catch_up): ?>
    <div class="catch-up-explore-buttons catch-up">
      <a class="catch-up show-color disabled active" data-class="catch-up" href="javascript:void(0)"><?php print t('Catch up'); ?></a>
      <a class="explore show-color secondary" data-class="explore" href="javascript:void(0)"><?php print t('Explore'); ?></a>
    </div>
  <?php  endif; ?>
</div>
<div class="caroufredsel_wrapper">
  <div class="catch-up-explore-carousel">
    <?php if ($is_catch_up): ?><!-- Catch Up block start -->
      <div class="catch-up-block">
        <?php foreach ($catch_up as $block_id => $catch_up_item): ?>
          <div class="carousel-block carousel-block-left">
            <div class="carousel-description-item start">
              <a class="description-button" href="javascript:void(0)"></a>
              <div class="description-wrapper">
                <div class="description-block">
                  <?php if (!empty($catch_up_item['caption'])): ?>
                    <div class="caption"><?php print $catch_up_item['caption']; ?></div>
                  <?php endif; ?>
                  <?php if (!empty($catch_up_item['title'])): ?>
                    <div class="title"><?php print $catch_up_item['title']; ?></div>
                  <?php endif; ?>
                  <?php if (!empty($catch_up_item['additional_text'])): ?>
                    <div class="additional-text"><?php print $catch_up_item['additional_text']; ?></div>
                  <?php endif; ?>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel carousel-<?php print $catch_up_item['carousel_position']; ?> start" data-carousel-id="<?php print $block_id; ?>">
            <?php if (!empty($catch_up_item['elements'])): ?>
              <ul>
                <?php foreach ($catch_up_item['elements'] as $catch_up_item_element): ?>
                  <?php if (!empty($catch_up_item_element)): ?>
                    <?php print $catch_up_item_element; ?>
                  <?php endif; ?>
                <?php endforeach; ?>
              </ul>
            <?php endif; ?>
            <a class="jcarousel-controls jcarousel-control-prev inactive" href="javascript:void(0)"></a>
            <a class="jcarousel-controls jcarousel-control-next inactive" href="javascript:void(0)"></a>
          </div>
        <?php endforeach; ?>
      </div>
    <?php endif; ?> <!-- Catch Up block end -->
    <?php if ($is_explore): ?> <!-- Explore block start -->
      <div class="explore-block">
        <?php foreach ($explore as $block_id => $explore_item): ?>
          <div class="carousel-block carousel-block-left">
            <div class="carousel-description-item start">
              <a class="description-button" href="javascript:void(0)"></a>
              <div class="description-wrapper">
                <div class="description-block">
                  <?php if (!empty($explore_item['caption'])): ?>
                    <div class="caption"><?php print $explore_item['caption']; ?></div>
                  <?php endif; ?>
                  <?php if (!empty($explore_item['title'])): ?>
                    <div class="title"><?php print $explore_item['title']; ?></div>
                  <?php endif; ?>
                  <?php if (!empty($explore_item['additional_text'])): ?>
                    <div class="additional-text"><?php print $explore_item['additional_text']; ?></div>
                  <?php endif; ?>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel carousel-<?php print $explore_item['carousel_position']; ?> start" data-carousel-id="<?php print $block_id; ?>">
            <?php if (!empty($explore_item['elements'])): ?>
              <ul>
                <?php foreach ($explore_item['elements'] as $explore_item_element): ?>
                  <?php if (!empty($explore_item_element)): ?>
                    <?php print $explore_item_element; ?>
                  <?php endif; ?>
                <?php endforeach; ?>
              </ul>
            <?php endif; ?>
            <a class="jcarousel-controls jcarousel-control-prev inactive" href="javascript:void(0)"></a>
            <a class="jcarousel-controls jcarousel-control-next inactive" href="javascript:void(0)"></a>
          </div>
        <?php endforeach; ?>
      </div>
    <?php endif; ?> <!-- Explore block end -->
  </div>
</div>
