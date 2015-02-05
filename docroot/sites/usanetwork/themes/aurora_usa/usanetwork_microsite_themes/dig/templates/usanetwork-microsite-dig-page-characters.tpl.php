<?php
/**
 * Template of Characters page
 *
 * Variables:
 * - $section_title - title of section
 * - $people - array of people:
 * -  - $people[n]['id'] - machine-readable id of person
 * -  - $people[n]['url'] - machine-readable title for part of url.
 * -  - $people[n]['background_url'] - url for the person's background image
 * -  - $people[n]['quotes'] - array of person quotes:
 * -  -  - $people[n]['quotes'][m]['quote'] - string value of quote field
 * -  -  - $people[n]['quotes'][m]['source'] - string value of source field
 * -  - $people[n]['title'] - the title of the person
 * -  - $people[n]['social'] - pre-rendered list of social follow icons
 * -  - $people[n]['description'] - the description of the person
 * -  - $people[n]['role'] - role of the person
 * -  - $people[n]['character_bio_summary'] - Summary of the character bio
 * -  - $people[n]['character_bio'] - character bio
 * -  - $people[n]['status'] - if character active is set. We can use it as class. Just insert this string to html tag.
 * -  - $people[n]['person_preview_image_url'] - Image preview for a hover action.
 * -  - $people[n]['person_preview_image_url'] - Image preview for a hover action.
 * - $characters_navigation - pre-rendered list of navigation links
 * - $is_last - flag of the latest section (appears only on the latest)
 * - $section_separator - pre-rendered section separator
 * - $section_title - Title of section.
 */
?>

<!-- backgrounds -->
<?php if (!empty($people)): ?>
<ul id="character-background">
  <?php foreach ($people as $person): ?>
  <li id="bg-<?php if (!empty($person['id'])) print $person['id']; ?>" class="<?php if (!empty($person['id'])) print $person['id']; ?><?php if ($person['status'] != '') print ' ' . $person['status']; ?>" data-bg-url="<?php if (isset($person['background_url'])) print $person['background_url']; ?>"></li>
  <?php endforeach; ?>
</ul>
<!-- end backgounds -->

<div id="character-inner-container">
<?php /* @TODO: COMMENTING QUOTES FOR NOW ?>
  <!-- quotes -->
  <ul id="quotes">
    <?php foreach ($people as $person_key => $person): ?>
    <?php if (!empty($person['quotes'])): ?>
    <div class="caption">
      <ul>
        <?php foreach ($person['quotes'] as $quotation_key => $quotation): ?>
          <?php if (!empty($quotation['quote']) && !empty($quotation['source'])): ?>
            <li class="<?php if (!empty($person['id'])) print $person['id']; ?><?php if ($quotation_key == 0) print ' active'; ?>">
              <?php if (!empty($quotation['quote'])): ?>
                <div class="quote">
                  <?php print $quotation['quote']; ?>
                </div>
              <?php endif; ?>
              <?php if (!empty($quotation['source'])): ?>
                <div class="quote-source">
                  <?php print $quotation['source']; ?>
                </div>
              <?php endif; ?>
            </li>
          <?php endif; ?>
        <?php endforeach; ?>
      </ul>
    </div>
    <?php endif; ?>
    <?php endforeach; ?>
  </ul>
<?php */ ?>
  <?php endif; ?>
  <!-- end quotes -->

  <!-- right pane -->
  <div id="right-pane-bg"></div>

  <!-- 728x90 ad -->
  <div class="ad-leaderboard dart-tag dart-name-728x90_ifr_reload_characters"></div>

  <!-- characters title and navigation -->
  <div class="right-pane-content">
    <?php if (!empty($section_title)): ?>
      <h2 class="right-pane content"><?php print $section_title; ?></h2>
    <?php endif; ?>
    <div class="underline right-pane content"></div>
    <?php if (!empty($characters_navigation)): ?>
      <div class="character-nav right-pane content">
        <div id="nav-prev"><span>&lt;</span></div>
        <ul>
          <?php print $characters_navigation; ?>
        </ul>
        <div id="nav-next"><span>&gt;</span></div>
      </div>
    <?php endif; ?>

    <!-- character info -->
    <?php if (!empty($people)): ?>
    <div id="character-info-container" class="clearfix">
      <ul id="character-info" class="right-pane content">
      <?php foreach ($people as $person_key => $person): ?>
        <li id ="<?php if (!empty($person['id'])) print $person['id']; ?>" class="<?php if (!empty($person['id'])) print $person['id']; ?><?php if ($person['status'] != '') print ' ' . $person['status']; ?>">
            <?php if (!empty($person['title'])): ?>
              <h3><?php print $person['title']; ?></h3>
            <?php endif; ?>
            <?php if (!empty($person['social'])): ?>
              <div class="character-social"><?php print $person['social']; ?></div>
            <?php endif; ?>
            <?php if (!empty($person['role'])): ?>
              <div class="character-role"><?php print $person['role']; ?></div>
            <?php endif; ?>
            <?php if (!empty($person['description']) && !empty($person['character_bio'])): ?>
              <div class="character-bio-tabs" class="clearfix">
                <div class="actor active">Actor Bio</div>
                <div class="character">Character Bio</div>
              </div>
            <?php endif; ?>
            <div class="character-bios-container clearfix">
            <?php if (!empty($person['description'])): ?>
              <div class="text actor active">
                <?php print $person['description']; ?>
              </div>
            <?php endif; ?>
            <?php if (!empty($person['character_bio'])): ?>
              <div class="text character">
                <?php print $person['character_bio']; ?>
              </div>
            <?php endif; ?>
            </div>
        </li>
      <?php endforeach; ?>
      </ul>
    </div>
    <?php endif; ?>
    <!-- end character info -->

    <!-- 300x250 ad -->
    <div class="ad300x250 right-pane content dart-tag dart-name-300x250_ifr_reload_characters"></div>
  </div>
</div>
