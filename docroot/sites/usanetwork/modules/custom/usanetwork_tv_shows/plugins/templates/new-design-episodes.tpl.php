<?php
/**
 * Episodes Block.
 */
?>
<?php
  $main = $data['#content']['first_block'];
?>
<div class="usa-section-title show-border">
  <h2 class="title"><?php print $data['#content']['title']; ?></h2>
  <?php print $data['#content']['link']; ?>
</div>
<div class="episodes-wrapper">
  <div class="main-episode">
    <a class="changable-link" href="<?php print $main['file_link']; ?>" data-mobile-href="<?php print $main['episode_link']; ?>">
      <div class="image-block">
        <div class="asset-img">
          <img src="<?php print $main['image']; ?>" alt="">
        </div>
      </div>
      <div class="meta-wrapper">
        <div class="meta-wrapper-inner">
          <div class="meta">
            <div class="caption"><?php print $main['season']; ?>&nbsp<?php print $main['episode']; ?></div>
            <div class="title">
              <?php print $main['title']; ?>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
  <div class="episodes-list">
    <ul>
      <?php foreach ($data['#content']['carousel_items'] as $item): ?>
        <li>
          <?php print $item ?>
        </li>
      <?php endforeach; ?>
    </ul>
  </div>
</div>

