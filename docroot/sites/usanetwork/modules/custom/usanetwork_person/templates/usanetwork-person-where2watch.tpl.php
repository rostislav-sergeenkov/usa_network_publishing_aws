<?php
/**
 *
 */
?>
<div id="where-to-watch" class="where-to-watch">
  <div class="usa-section-title show-border">
    <h2 class="title"><?php print !empty($title) ? $title : ''; ?></h2>
  </div>
  <div class="where-to-watch-inner">
    <div class="first-line">
      <?php if (!empty($is_full_exists)) : ?>
        <div class="description-block">
          <?php print t('Watch now on:'); ?>
        </div>
        <div class="link-buttons-wrap">
          <div class="link-button show-color">
            <?php print $usa_live_link; ?>
          </div>
          <div class="link-button show-color">
            <?php print $usa_now_path; ?>
          </div>
        </div>
      <?php endif; ?>
      <?php if (!empty($featured_elements)) : ?>

        <div class="description-block">
          <?php print t('Watch the entire first season on:'); ?>
        </div>
        <div class="usa-providers">
            <div class="providers-row">
              <div class="providers-row-inner">
                <?php foreach ($featured_elements as $featured_element) : ?>
                <div class="provider">
                  <a href="<?php print $featured_element['url']; ?>">
                    <img src="<?php print $featured_element['image']; ?>">
                  </a>
                </div>
                <?php endforeach; ?>
              </div>
            </div>
        </div>
      <?php endif; ?>
    </div>
    <div class="last-line">
      <div class="description-block">
        <?php print $description; ?>
      </div>
      <div class="usa-providers">
        <?php $i = 1; ?>
        <?php foreach ($elements as $element) : ?>
      <?php if ($i == 1) : ?>
        <div class="providers-row">
          <div class="providers-row-inner show-border">
            <?php endif; ?>
            <?php if ($i != 1 && ($i - 1) % 4 == 0) : ?>
            <div class="providers-row">
              <div class="providers-row-inner show-border">
                <?php endif; ?>
                <div class="provider">
                  <a href="<?php print $element['url']; ?>">
                    <img src="<?php print $element['image']; ?>">
                  </a>
                </div>
                <?php if ($i % 4 == 0) : ?>
              </div>
            </div>
          <?php endif; ?>
            <?php $i++; ?>
            <?php endforeach; ?>
            <?php if (($i - 1) % 4 != 0) : ?>
          </div>
        </div>
      <?php endif; ?>
      </div>
    </div>
  </div>
</div>
