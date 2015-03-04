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
 * -  - $people[n]['preview_image_url'] - Image preview for a hover action.
 * - $is_last - flag of the latest section (appears only on the latest)
 * - $section_separator - pre-rendered section separator
 * - $section_title - Title of section.
 */
?>

<!-- backgrounds -->
<?php if (!empty($people)): ?>
<ul id="character-background">
  <?php foreach ($people as $person): ?>
  <li id="bg-<?php if (!empty($person['id'])) print $person['id']; ?>" class="<?php if (!empty($person['id'])) print $person['id']; ?><?php if ($person['status'] != '') print ' ' . $person['status']; ?>" data-bg-url="<?php if (isset($person['background_url'])) print $person['background_url']; ?>">&nbsp;</li>
  <?php endforeach; ?>
</ul>
<?php endif; ?>
<!-- end backgounds -->

<div id="character-inner-container">
  <!-- right pane -->
  <div id="right-pane-bg"></div>

  <!-- 728x90 ad -->
  <div class="ad-leaderboard dart-tag dart-name-728x90_ifr_reload_characters"></div>

  <!-- quotes -->
  <?php if (!empty($people)): ?>
    <div id="character-quotes">
      <ul>
      <?php foreach ($people as $person_key => $person): ?>
      <?php if (!empty($person['quotes'])): ?>
        <li class="<?php if (!empty($person['id'])) print $person['id'] . ' '; ?><?php if(!empty($person['status'])) print $person['status'] . ' '; ?>quotes">
          <ul>
          <?php foreach ($person['quotes'] as $quotation_key => $quotation): ?>
          <?php if (!empty($quotation['quote']) && !empty($quotation['source'])): ?>
            <li class="<?php if ($quotation_key == 0) print ' active'; ?>">
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
        </li>
      <?php endif; ?>
      <?php endforeach; ?>
      </ul>
    </div>
  <?php endif; ?>
  <!-- end quotes -->

  <!-- characters title and navigation -->
  <div class="right-pane-content">
    <?php if (!empty($section_title)): ?>
      <h2 class="content"><?php print $section_title; ?></h2>
    <?php endif; ?>
    <div class="underline content"></div>
    <?php if (!empty($people)): ?>
    <div class="character-nav content">
      <div id="nav-prev" class="prev btns">Previous</div>
      <ul>
        <?php foreach ($people as $person): ?>
        <li id="nav-<?php if(!empty($person['id'])) print $person['id']; ?>" class="<?php if(!empty($person['status'])) print $person['status']; ?>">
          <div class="character-nav-link"></div>
          <div class="tooltip">
            <?php if(!empty($person['preview_image_url'])): ?>
            <img src="<?php if(!empty($person['preview_image_url'])) print $person['preview_image_url']; ?>">
            <?php endif; ?>
            <div><?php if(!empty($person['title'])) print $person['title']; ?></div>
          </div>
        </li>
        <?php endforeach; ?>
      </ul>
      <div id="nav-next" class="next btns">Next</div>
    </div>
    <?php endif; ?>

    <!-- character info -->
    <?php if (!empty($people)): ?>
    <div id="character-info-container" class="clearfix">
      <ul id="character-info" class="content">
      <?php foreach ($people as $person_key => $person): ?>
        <li id ="<?php if (!empty($person['id'])) print $person['id']; ?>" class="<?php if (!empty($person['id'])) print $person['id']; ?><?php if ($person['status'] != '') print ' ' . $person['status']; ?>">
            <?php if (!empty($person['preview_image_url'])): ?>
            <img class="photo-<?php if (!empty($person['title'])) print $person['title']; ?> mobile" src="<?php print $person['preview_image_url']; ?>">
            <?php endif; ?>
            <?php if ($person['status'] == 'active' && !empty($h1) && $status == 'active'): ?>
              <h1><?php print $h1; ?></h1>
            <?php else: ?>
              <?php if (!empty($person['title'])): ?>
                <h3><?php print $person['title']; ?></h3>
              <?php endif; ?>
            <?php endif; ?>
            <?php if (!empty($person['social'])): ?>
              <div class="character-social">
                <div class="view view-usa-people view-id-usa_people view-display-id-panel_pane_2 icons-social icons-inline view-dom-id-7189625a5498dc298003c3cbd958797d">
                  <div class="view-content">
                    <div>
                      <?php foreach ($person['social'] as $provider => $link): ?>
                      <?php if (!empty($link['url'])): ?>
                      <a href="<?php print $link['url']; ?>" class="person-<?php print $provider; ?> usasocial-<?php print $provider; ?>" target="_blank"><?php print $provider; ?></a>
                      <?php endif; ?>
                      <?php endforeach; ?>
                    </div>
                  </div>
                </div>
              </div>
            <?php endif; ?>
            <?php if (!empty($person['role'])): ?>
              <div class="character-role"><?php print $person['role']; ?></div>
            <?php endif; ?>
            <?php if (!empty($person['description']) && !empty($person['character_bio'])): ?>
              <div class="character-bio-tabs clearfix">
                <div class="actor active">Actor Bio</div>
                <div class="character">Character Bio</div>
              </div>
            <?php endif; ?>
            <div class="character-bios-container clearfix">
            <?php if (!empty($person['description'])): ?>
              <div class="text actor active clearfix">
                <?php print $person['description']; ?>
              </div>
            <?php endif; ?>
            <?php if (!empty($person['character_bio'])): ?>
              <div class="text character clearfix">
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
    <div class="ad300x250 content dart-tag dart-name-300x250_ifr_reload_characters"></div>
  </div>
</div>
