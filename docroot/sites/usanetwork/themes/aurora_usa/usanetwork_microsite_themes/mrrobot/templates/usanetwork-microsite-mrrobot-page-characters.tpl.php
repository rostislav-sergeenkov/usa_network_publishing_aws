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
 * -  - $people[n]['description'] - the biography of the person or character
 * -  - $people[n]['role'] - role of the person
 * -  - $people[n]['character_bio_summary'] - Summary of the character bio
 * -  - $people[n]['character_bio'] - microsite character bio
 * -  - $people[n]['actor_bio'] - actor bio
 * -  - $people[n]['status'] - if character active is set. We can use it as class. Just insert this string to html tag.
 * -  - $people[n]['preview_image_url'] - Image preview for a hover action.
 * -  - $people[n]['cover_image_url'] - Cover image.
 * - $is_last - flag of the latest section (appears only on the latest)
 * - $section_separator - pre-rendered section separator
 * - $section_title - Title of section.
 */
?>
<?php
// @TODO: DV -- SET THE FOLLOWING PATH IN THE MODULE FILE AND MAKE IT AVAILABLE
// TO ALL TEMPLATE FILES
$themePath = '/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/mrrobot';
?>

<?php if (!empty($section_title)): ?>
  <!-- section title -->
  <h2 class="content"><?php print $section_title; ?></h2>
<?php endif; ?>

<?php if (!empty($description)): ?>
  <!-- section description -->
  <div class="section-description"><?php print $description; ?></div>
<?php endif; ?>

<div id="characters-container">
  <div id="character-infographic">
    <a><img src="http://www.usanetwork.com/sites/usanetwork/files/styles/borealis_large_respondxl2/public/MrRobot_CharacterMap_preview_1601.jpg" alt="Mr. Robot infographic preview"></a>
  </div>
  <?php if (!empty($people)): ?>
  <div id="character-wrapper">
    <!-- character navigation -->
    <div id="character-nav">
      <ul>
        <?php foreach ($people as $person): ?>
        <li id="nav-<?php if(!empty($person['id'])) print $person['id']; ?>" class="" data-id="<?php if(!empty($person['id'])) print $person['id']; ?>">
          <div class="character-nav-link"></div>
          <div class="tooltip">
            <?php if(!empty($person['cover_image'])): ?>
              <?php print $person['cover_image']; ?>
            <?php endif; ?>
            <div class="caption">
              <div>
                <span class="person-name"><?php if(!empty($person['title'])) print $person['title']; ?></span>
              </div>
              <div class="role"><?php if(!empty($person['role'])): ?><?php if($person['role'] != 'Executive Producer') print 'as '; ?><?php print $person['role']; ?><?php endif; ?></div>
            </div>
          </div>
        </li>
        <?php endforeach; ?>
      </ul>
    </div>
    <?php endif; ?>

    <!-- character info -->
    <?php if (!empty($people)): ?>
    <div id="character-info" class="clearfix">
      <ul>
      <?php foreach ($people as $person_key => $person): ?>
        <li id ="<?php if (!empty($person['id'])) print $person['id']; ?>" class="<?php if (!empty($person['id'])) print $person['id']; ?>">
            <?php if ($person['status'] == 'active' && !empty($h1) && $status == 'active'): ?>
              <h1><?php print $h1; ?></h1>
            <?php else: ?>
              <?php if (!empty($person['title'])): ?>
                <h3><?php print $person['title']; ?></h3>
              <?php endif; ?>
            <?php endif; ?>
            <div class="character-close">X</div>
            <?php if (!empty($person['role'])): ?>
              <div class="character-role"><?php if ($person['role'] != 'Executive Producer') print 'as '; ?><?php print $person['role']; ?></div>
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
            <div class="character-bios-container clearfix">
            <?php if (!empty($person['description'])): ?>
              <div class="text actor active clearfix">
                <?php if (!empty($person['cover_image_url'])): ?>
                <div class="character-image"><img class="photo-<?php if (!empty($person['title'])) print $person['title']; ?> mobile" src="<?php print $person['cover_image_url']; ?>" align="left"></div>
                <?php endif; ?>
                <?php print $person['description']; ?>
                <?php if (!empty($person['actor_bio'])): ?>
                  <h3>Actor Bio</h3>
                  <?php print $person['actor_bio']; ?>
                <?php endif; ?>
              </div>
            <?php endif; ?>
            </div>
            <div class="character-close character-return-link">Return to Cast</div>
        </li>
      <?php endforeach; ?>
      </ul>
    </div>
  </div>
  <?php endif; ?>
  <!-- end character info -->

<? /* ?>
  <div id="character-infographic-overlay">
    <div class="character-close">X</div>
    <img src="<?php print $themePath; ?>/images/MrRobot_Infographic_v1.jpg" alt="Mr. Robot Infographic">
  </div>
<? */ ?>
</div>

<div id="ms-characters-leaderboard-ad" class="midbanner ad-leaderboard"></div>
