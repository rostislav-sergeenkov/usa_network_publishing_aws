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

<?php if (!empty($gallery['title']) || !empty($description)): ?>
  <div class="section-title-block">
    <?php if (!empty($gallery['title'])): ?>
      <!-- section title -->
      <h2 class="content"><span><?php print $gallery['title']; ?></span></h2>
    <?php endif; ?>

    <?php if (!empty($description)): ?>
      <div class="section-description">
        <?php print $description; ?>
      </div>
    <?php endif; ?>
  </div>
<?php endif; ?>

<?php if (!empty($gallery_title)): ?>
  <div id="gallery-title"><?php print $gallery_title; ?></div>
<?php endif; ?>

  <div class="filter-wrapper">
    <div id="galleries-filter">
      <div class="filter-label">
        <span>Hankmed Highlights</span>
      </div>
      <div class="item-list">
        <ul class="filter-menu">
          <li class="filter-item active first" data-filter-name="Hankmed Highlights" data-filter-class="hankmed-highlights">
            <p>Hankmed Highlights</p>
          </li>
          <li class="filter-item" data-filter-name="Fashion" data-filter-class="fashion">
            <p>Fashion</p>
          </li>
          <li class="filter-item" data-filter-name="Guest Stars" data-filter-class="guest-stars">
            <p>Guest Stars</p>
          </li>
          <li class="filter-item" data-filter-name="Hanks Hacks" data-filter-class="hanks-hacks">
            <p>Hanks Hacks</p>
          </li>
          <li class="filter-item last" data-filter-name="Hamptons" data-filter-class="hamptons">
            <p>Hamptons</p>
          </li>
        </ul>
      </div>
    </div>
  </div>

<?php if (!empty($gallery['gallery_nid']) && !empty($gallery['rendered'])): ?>
  <div class="microsite-gallery gallery-block full-pane" data-node-id="<?php if (!empty($gallery['gallery_nid'])) print $gallery['gallery_nid']; ?>">
    <div class="left-pane">
      <?php print $gallery['rendered']; ?>
      <div class="description-block"></div>
    </div>
    <div class="right-pane">
      <ul id="galleries-nav-list">
      <?php if (!empty($episodic_galleries)): ?>
      <?php foreach ($episodic_galleries as $ep_gallery): ?>
        <?php if (!empty($ep_gallery['url']) && !empty($ep_gallery['gallery_nid']) && !empty($ep_gallery['title']) && !empty($ep_gallery['cover_img'])): ?>
        <li data-node-id="<?php print $ep_gallery['gallery_nid']; ?>" class="hide<?php if ($gallery['gallery_nid'] == $ep_gallery['gallery_nid']) print ' active'; ?>">
          <a href="<?php print $microsite_url; ?>/galleries/<?php print $ep_gallery['url']; ?>">
            <div class="gallery-nav-img"><img src="<?php print str_replace(['surf', 'local'], 'www', str_replace('files/public/', 'files/', $ep_gallery['cover_img'])); ?>" alt="<?php print $ep_gallery['title']; ?>">
            </div>
            <div class="gallery-title">
              <div><?php print $ep_gallery['title']; ?></div>
              <?php if (!empty($ep_gallery['h1'])): ?>
              <div class="gallery-h1">
                <?php print $ep_gallery['h1']; ?>
              </div>
              <?php endif; ?>
            </div>
          </a>
        </li>
        <?php endif; ?>
      <?php endforeach; ?>
      <?php endif; ?>

      <?php if (!empty($character_galleries)): ?>
      <?php foreach ($character_galleries as $char_gallery): ?>
        <?php if (!empty($char_gallery['url']) && !empty($char_gallery['gallery_nid']) && !empty($char_gallery['title']) && !empty($char_gallery['cover_img'])): ?>
        <li data-node-id="<?php print $char_gallery['gallery_nid']; ?>" class="<?php if ($gallery['gallery_nid'] == $char_gallery['gallery_nid']) print 'active'; ?>">
          <a href="<?php print $microsite_url; ?>/galleries/<?php print $char_gallery['url']; ?>">
            <div class="gallery-nav-img">
              <img src="<?php print str_replace(['surf', 'local'], 'www', str_replace('files/public/', 'files/', $char_gallery['cover_img'])); ?>" alt="<?php print $char_gallery['title']; ?>">
            </div>
            <div class="gallery-title">
              <div><?php print $char_gallery['title']; ?></div>
              <?php if (!empty($char_gallery['h1'])): ?>
              <div class="gallery-h1">
                <?php print $char_gallery['h1']; ?>
              </div>
              <?php endif; ?>
            </div>
          </a>
        </li>
        <?php endif; ?>
      <?php endforeach; ?>
      <?php endif; ?>
      </ul>
    </div>
  </div>
  <div id="gallery-loader"><img src="/sites/usanetwork/themes/aurora_usa/images/ajax-loader.gif" alt="loading animation"></div>
<?php endif; ?>

<div id="ms-galleries-leaderboard-ad" class="midbanner ad-leaderboard ad_728x90"></div>
