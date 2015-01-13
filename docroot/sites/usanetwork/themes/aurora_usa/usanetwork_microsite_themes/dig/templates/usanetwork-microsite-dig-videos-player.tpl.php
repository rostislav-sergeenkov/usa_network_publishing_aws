<?php
/**
 * Videos player template
 */
?>
<?php if (!empty($in_player['rendered']) && !empty($in_player['url'])): ?>
  <div class="video-player" data-video-url="<?php print $in_player['url']; ?>">
    <?php print $in_player['rendered']; ?>
  </div>
<?php endif; ?>

<?php if (!empty($in_player['title'])): ?>
  <div class="video-title"><?php print $in_player['title']; ?></div>
<?php endif; ?>

<?php if (!empty($in_player['description'])): ?>
  <div class="video-description"><?php print $in_player['description']; ?></div>
<?php endif; ?>

<?php if (!empty($in_player['season_number']) || !empty($in_player['episode_number']) || !empty($in_player['airdate'])): ?>
  <div class="video-info">
    <?php if (!empty($in_player['season_number'])): ?>
      <span class="video-season">S<?php print $in_player['season_number']; ?></span>
    <?php endif; ?>
    <?php if (!empty($in_player['episode_number'])): ?>
      <span class="video-episode">E<?php print $in_player['episode_number']; ?></span>
    <?php endif; ?>
    <?php if (!empty($in_player['airdate'])): ?>
      <span class="video-airdate">Air Date: <?php print $in_player['airdate']; ?></span>
    <?php endif; ?>
  </div>
<?php endif; ?>
