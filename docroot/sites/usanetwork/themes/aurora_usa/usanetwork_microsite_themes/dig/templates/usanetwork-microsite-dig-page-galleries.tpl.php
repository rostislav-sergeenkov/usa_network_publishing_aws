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
<div class="ad-leaderboard dart-tag dart-name-728x90_ifr_reload_galleries"></div>
<div class="full-pane">
  <?php if (!empty($galleries) && count($galleries) > 0): ?>
    <?php foreach ($galleries as $gallery): ?>
    <div class="microsite-gallery-meta clearfix">
      <?php if (!empty($gallery['title'])): ?>
        <h2><?php print $gallery['title']; ?></h2>
      <?php endif; ?>
      <div class="field field-name-field-gigya-share-bar field-type-gigya-sharebar field-label-hidden">
        <div id="gigya-share"></div>
      </div>
    </div>
    <div class="left-pane">
      <div class="microsite-gallery">
        <div class="center-wrapper clearfix">
          <?php print $gallery['rendered']; ?>
        </div>
      </div>
    </div>
    <?php endforeach; ?>
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
    <div class="ad300x250 dart-tag dart-name-300x250_ifr_reload_galleries"></div>
  </div>
</div>
