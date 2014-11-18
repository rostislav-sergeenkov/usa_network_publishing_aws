<?php
/**
 * @var $image - Rendered image
 * @var $title - The title of the show
 * @var $season_and_episode - The season and episode number
 * @var $node_url - The URL to Show page
 */
?>
<?php if (!empty($title)): ?>
  <div class="node node-usanetwork-promo">
    <?php if (!empty($image)): ?>
      <a href="<?php print !empty($node_url) ? $node_url : '#'; ?>">
        <div class="asset-img">
          <?php print $image; ?>
        </div>
      </a>
    <?php endif; ?>
    <div class="meta-wrapper">
      <div class="meta-icon play-icon-half"></div>
      <div class="title-overlay meta">
        <?php if (!empty($title)): ?>
          <div class="title"><?php print $title; ?></div>
        <?php endif; ?>
        <?php if (!empty($season_and_episode)): ?>
          <div class="type-and-time"><span><?php print $season_and_episode; ?></span></div>
        <?php endif; ?>
      </div>
      <?php
        // @TODO: some logic should be implemented for hiding it, am I right?
      ?>
      <div class="sign-in-link">
        <a href="#">Sign in</a>
      </div>
    </div>
  </div>
<?php endif; ?>
