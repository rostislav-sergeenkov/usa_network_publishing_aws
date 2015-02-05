<?php
/**
 * Template of Characters page
 *
 * Variables:
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
<?php if (!empty($people)): ?>
<ul>
  <?php foreach ($people as $person_key => $person): ?>
    <li id="<?php print !empty($person['id']) ? $person['id'] : 'undefined'; ?>" data-bg-url="<?php isset($person['background_url']) ? print $person['background_url'] : ''; ?>">
      <div class="microsite-characters-section-container">
        <div class="ad-leaderboard dart-tag dart-name-728x90_ifr_reload_characters"></div>
        <?php if (!empty($person['quotes'])): ?>
          <div class="left-pane">
            <div class="caption">
              <ul>
                <?php foreach ($person['quotes'] as $quotation_key => $quotation): ?>
                  <?php if (!empty($quotation['quote']) && !empty($quotation['source'])): ?>
                    <li<?php if ($quotation_key == 0): print ' class="active"'; endif; ?>>
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
          </div>
        <?php endif; ?>
        <div class="right-pane">
          <?php if (!empty($person['title'])): ?>
            <h2><?php print $person['title']; ?></h2>
          <?php endif; ?>
          <?php if (!empty($person['social'])): ?>
            <div class="social"><?php print $person['social']; ?></div>
          <?php endif; ?>
          <div class="underline"></div>
          <?php if (!empty($characters_navigation)): ?>
            <div class="character-nav">
              <div class="prev"><span>&lt;</span></div>
              <ul>
                <?php print $characters_navigation; ?>
              </ul>
              <div class="next"><span>&gt;</span></div>
            </div>
          <?php endif; ?>
          <?php if (!empty($person['title'])): ?>
            <h3><?php print $person['title']; ?></h3>
          <?php endif; ?>
          <?php if (!empty($person['description'])): ?>
            <div class="text">
              <?php print $person['description']; ?>
            </div>
          <?php endif; ?>
          <div class="ad300x250 dart-tag dart-name-300x250_ifr_reload_characters"></div>
        </div>
        <?php if (empty($is_last)): ?>
        <?php print $section_separator; ?>
        <?php endif; ?>
      </div>
    </li>
  <?php endforeach; ?>
</ul>
<?php endif; ?>

