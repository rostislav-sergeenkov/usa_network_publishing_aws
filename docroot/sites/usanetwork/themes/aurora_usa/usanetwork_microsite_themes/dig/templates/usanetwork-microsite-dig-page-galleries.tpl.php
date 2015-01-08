<?php
/**
 * Gallery page template
 *
 * Variables:
 * - $background_url - the URL of page background
 * - $galleries - array of galleries composed of the following for each gallery:
 * - - title - the title of the gallery
 * - - description - the description of the gallery
 * - - rendered - the rendered view of the gallery
 * - $ad300x250 - the code to render the 300 x 250 ad
 */
?>
<div class="ad-leaderboard"></div>
<?php if (!empty($background_url)): ?>
<div class="microsite-section-container" data-bg-url="<?php print $background_url; ?>">
<?php endif; ?>
  <?php if (!empty($galleries) && count($galleries) > 0): ?>
  <div class="left-pane">
    <?php foreach ($galleries as $gallery): ?>
    <div class="microsite-gallery">
      <div class="center-wrapper clearfix">
        <?php print $gallery['rendered']; ?>
      </div>
    </div>
    <div class="microsite-gallery-meta">
      <?php if (!empty($gallery['title'])): ?>
        <h2><?php print $gallery['title']; ?></h2>
      <?php endif; ?>
      <?php if (!empty($gallery['description'])): ?>
        <div class="description">
          <?php print $gallery['description']; ?>
        </div>
      <?php endif; ?>
    </div>
    <?php endforeach; ?>
  </div>
  <?php endif; ?>

  <div class="right-pane">
    <?php if (!empty($episodic_galleries)): ?>
      <div class="episodic-galleries">
        <?php print $episodic_galleries; ?>
      </div>
    <?php endif; ?>
    <?php if (!empty($character_galleries)): ?>
      <div class="character-galleries">
        <?php print $character_galleries; ?>
      </div>
    <?php endif; ?>
    <div class="ad300x250"><?php print render($ad300x250); ?></div>
  </div>
<?php if (!empty($background_url)): ?>
</div>
<?php endif; ?>

