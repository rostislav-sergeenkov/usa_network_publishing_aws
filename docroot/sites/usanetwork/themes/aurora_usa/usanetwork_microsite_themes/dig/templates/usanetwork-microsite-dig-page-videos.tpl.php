<?php
/**
 * Videos page template
 *
 * Variables:
 * - $background_url - the URL of page background
 */
?>
<?php if (!empty($background_url)): ?>
<div class="microsite-section-container" data-bg-url="<?php print $background_url; ?>">
<?php endif; ?>
  <div class="full-pane">
    <div class="video-container">
      <?php if (!empty($in_player['rendered'])): ?>
      <div class="video-player">
        <?php print $in_player['rendered']; ?>
      </div>
      <?php endif; ?>

      <?php if (!empty($in_player['title'])): ?>
      <div id="video-title"><?php print $in_player['title']; ?></div>
      <?php endif; ?>

      <?php if (!empty($in_player['description'])): ?>
      <div id="video-description"><?php print $in_player['description']; ?></div>
      <?php endif; ?>

      <?php if (!empty($in_player['season_number']) || !empty($in_player['episode_number']) || !empty($in_player['airdate'])): ?>
      <div id="video-info">
        <?php if (!empty($in_player['season_number'])): ?>
        <span id="video-season">S<?php print $in_player['season_number']; ?></span>
        <?php endif; ?>
        <?php if (!empty($in_player['episode_number'])): ?>
        <span id="video-episode">E<?php print $in_player['episode_number']; ?></span>
        <?php endif; ?>
        <?php if (!empty($in_player['airdate'])): ?>
        <span id="video-airdate">Air Date: <?php print $in_player['airdate']; ?></span>
        <?php endif; ?>
      </div>
      <?php endif; ?>
    </div>

    <ul>
    <?php foreach ($videos as $video): ?>
      <?php if (!empty($video['url']) && !empty($video['rendered'])): ?>
      <li data-video-url="<?php print $video['url']; ?>">
        <?php print $video['rendered']; ?>
      </li>
      <?php endif; ?>
    <?php endforeach; ?>
    </ul>
  </div>
<?php if (!empty($background_url)): ?>
</div>
<?php endif; ?>
