<?php
/**
 * Gallery page template
 *
 * Variables:
 * - $background_url - the URL of page background
 * - $gallery -  the url-specified gallery info:
 * - - gallery_nid - the node_id for the gallery
 * - - title - the title of the gallery
 * - - description - the description of the gallery
 * - - rendered - the rendered view of the gallery
 * - episodic_galleries - array of episodic galleries
 * - - episodic_galleries[n]['url'] - the machine-readable url path
 * - - episodic_galleries[n]['gallery_nid'] - the node id
 * - - episodic_galleries[n]['title'] - the title
 * - - episodic_galleries[n]['cover_img'] - the cover image url
 * - character_galleries - array of non-episodic galleries
 * - - character_galleries[n]['url'] - the machine-readable url path
 * - - character_galleries[n]['gallery_nid'] - the node id
 * - - character_galleries[n]['title'] - the title
 * - - character_galleries[n]['cover_img'] - the cover image url
 * - $ad300x250 - the code to render the 300 x 250 ad
 */
?>
<div class="ad-leaderboard dart-tag dart-name-728x90_ifr_reload_galleries"></div>
<div class="full-pane">
  <?php if (!empty($gallery)): ?>
  <div class="microsite-gallery-meta clearfix">
    <?php if (!empty($gallery['title'])): ?>
    <h2><?php print $gallery['title']; ?></h2>
    <?php endif; ?>
    <div class="field field-name-field-gigya-share-bar field-type-gigya-sharebar field-label-hidden">
      <div id="gigya-share"></div>
    </div>
  </div>
  <div class="left-pane">
    <div class="microsite-gallery" data-node-id="<?php if (!empty($gallery['gallery_nid'])) print $gallery['gallery_nid']; ?>">
      <div class="center-wrapper clearfix">
        <?php print $gallery['rendered']; ?>
        <div class="description-block"></div>
      </div>
    </div>
    <div id="gallery-loader"><img src="/sites/usanetwork/themes/aurora_usa/images/ajax-loader.gif" alt="loading animation"></div>
  </div>
  <?php endif; ?>

  <div class="right-pane">
    <?php if (!empty($episodic_galleries)): ?>
    <div id="ep-galleries" class="galleries-nav narrow">
      <div id="ep-galleries-bxslider-container" class="bxslider-container">
        <h3>Episodic</h3>
        <div id="ep-galleries-page-controls" class="galleries-page-controls">
          <div id="ep-galleries-prev" class="prev btns"><span class="screen-reader-text">Previous</span></div>
          <div id="ep-galleries-pagers" class="gallery-pagers bx-controls bx-has-pager"></div>
          <div id="ep-galleries-next" class="next btns"><span class="screen-reader-text">Next</span></div>
        </div>
        <ul id="ep-galleries-list" class="galleries-bxslider">
        <?php foreach ($episodic_galleries as $ep_gallery): ?>
          <?php if (!empty($ep_gallery['url']) && !empty($ep_gallery['gallery_nid']) && !empty($ep_gallery['title']) && !empty($ep_gallery['cover_img'])): ?>
          <?php /* @TODO: Dynamically create the /dig/galleries part of the following url */ ?>
          <li data-node-id="<?php print $ep_gallery['gallery_nid']; ?>"><a href="/dig/galleries/<?php print $ep_gallery['url']; ?>"><div class="gallery-nav-img"><img src="<?php print $ep_gallery['cover_img']; ?>" alt="<?php print $ep_gallery['title']; ?>"></div><div class="gallery-title"><?php print $ep_gallery['title']; ?></div></a></li>
          <?php endif; ?>
        <?php endforeach; ?>
        </ul>
      </div>
    </div>
    <div class="ad300x250 dart-tag dart-name-300x250_ifr_reload_galleries"></div>
    <?php endif; ?>

    <?php if (!empty($character_galleries)): ?>
    <div id="character-galleries" class="galleries-nav<?php if (empty($episodic_galleries)): ?> narrow<?php endif; ?>">
      <div id="ep-galleries-bxslider-container" class="bxslider-container">
        <h3>Cast, Crew &amp; Set</h3>
        <div id="character-galleries-page-controls" class="galleries-page-controls">
          <div id="character-galleries-prev" class="prev btns"><span class="screen-reader-text">Previous</span></div>
          <div id="character-galleries-pagers" class="gallery-pagers bx-controls bx-has-pager"></div>
          <div id="character-galleries-next" class="next btns"><span class="screen-reader-text">Next</span></div>
        </div>
        <ul id="character-galleries-list" class="galleries-bxslider">
        <?php foreach ($character_galleries as $char_gallery): ?>
          <?php if (!empty($char_gallery['url']) && !empty($char_gallery['gallery_nid']) && !empty($char_gallery['title']) && !empty($char_gallery['cover_img'])): ?>
          <?php /* @TODO: Dynamically create the /dig/galleries part of the following url */ ?>
          <li data-node-id="<?php print $char_gallery['gallery_nid']; ?>"><div data-url="/dig/galleries/<?php print $char_gallery['url']; ?>"><div class="gallery-nav-img"><img src="<?php print $char_gallery['cover_img']; ?>" alt="<?php print $char_gallery['title']; ?>"></div><div class="gallery-title"><?php print $char_gallery['title']; ?></div></div></li>
          <?php endif; ?>
        <?php endforeach; ?>
        </ul>
      </div>
    </div>
    <?php endif; ?>
    <?php if (empty($episodic_galleries)): ?><div class="ad300x250 dart-tag dart-name-300x250_ifr_reload_galleries"></div><?php endif; ?>
  </div>
</div>
