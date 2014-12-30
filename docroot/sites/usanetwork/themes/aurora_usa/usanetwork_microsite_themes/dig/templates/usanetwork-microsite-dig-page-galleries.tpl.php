<?php
/**
 * Gallery page template
 *
 * Variables:
 * - $background_url - the URL of page background
 */
?>
<?php if (!empty($background_url)): ?>
  <div class="microsite-section-container" data-bg-url="<?php print $background_url; ?>">
<?php endif; ?>
<?php if (!empty($gallery['rendered'])): ?>
  <div class="left-sider">
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
  </div>
<?php endif; ?>
<div class="right-sider">
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
</div>
<?php if (!empty($background_url)): ?>
  </div>
<?php endif; ?>