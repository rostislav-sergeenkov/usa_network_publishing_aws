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
<?php if (!empty($episodes)): ?>
<ul id="episode-background">
  <?php foreach ($episodes as $episode): ?>
  <li id="bg-<?php if (!empty($episode['id'])) print $episode['id']; ?>" class="<?php if (!empty($episode['id'])) print $episode['id']; ?><?php if ($episode['status'] != '') print ' ' . $episode['status']; ?>" data-bg-url="<?php if (isset($episode['background_url'])) print $episode['background_url']; ?>">&nbsp;</li>
  <?php endforeach; ?>
</ul>
<?php endif; ?>
<!-- end backgounds -->

<div id="episode-inner-container" class="clearfix">
  <!-- right pane -->
  <div id="right-pane-bg"></div>

  <!-- 728x90 ad -->
  <div class="ad-leaderboard dart-tag dart-name-728x90_ifr_reload_episodes"></div>

  <!-- episodes title and navigation -->
  <div class="right-pane-content">
    <?php if (!empty($section_title)): ?>
      <h2 class="content"><?php print $section_title; ?></h2>
    <?php endif; ?>
    <div class="underline content"></div>
    <?php if (!empty($episodes) && count($episodes) > 1): ?>
    <div class="episode-nav content">
      <div id="nav-prev" class="prev btns">Previous</div>
      <ul>
        <?php foreach ($episodes as $episode): ?>
        <li id="nav-<?php if(!empty($episode['id'])) print $episode['id']; ?>" class="<?php if(!empty($episode['status'])) print $episode['status']; ?>">
          <div class="episode-nav-link"></div>
          <div class="tooltip">
            <?php if(!empty($episode['preview_image_url'])): ?>
            <img src="<?php if(!empty($episode['preview_image_url'])) print $episode['preview_image_url']; ?>">
            <?php endif; ?>
            <div><?php if(!empty($episode['title'])) print $episode['title']; ?></div>
          </div>
        </li>
        <?php endforeach; ?>
      </ul>
      <div id="nav-next" class="next btns">Next</div>
    </div>
    <?php endif; ?>

    <!-- character info -->
    <?php if (!empty($episodes)): ?>
    <div id="episode-info-container" class="clearfix">
      <ul id="episode-info" class="content">
      <?php foreach ($episodes as $episode_key => $episode): ?>
        <li id ="<?php if (!empty($episode['id'])) print $episode['id']; ?>" class="<?php if (!empty($episode['id'])) print $episode['id']; ?><?php if ($episode['status'] != '') print ' ' . $episode['status']; ?>">
            <?php if ($episode['status'] == 'active' && !empty($h1) && $status == 'active'): ?>
              <h1><?php print $h1; ?></h1>
            <?php else: ?>
              <?php if (!empty($episode['title'])): ?>
                <h3><?php print $episode['title']; ?></h3>
              <?php endif; ?>
            <?php endif; ?>

            <?php if (!empty($episode['optional_h1'])): ?>
              <div class="episode-h1"><?php print $episode['optional_h1']; ?></div>
            <?php endif; ?>
            <?php if (!empty($episode['description'])): ?>
              <div class="episode-description clearfix">
                <div class="text active clearfix">
                  <?php print $episode['description']; ?>
                </div>
              </div>
            <?php endif; ?>
        </li>
      <?php endforeach; ?>
      </ul>
    </div>
    <?php endif; ?>
    <!-- end episode info -->

    <!-- 300x250 ad -->
    <div class="ad300x250 content dart-tag dart-name-300x250_ifr_reload_episodes"></div>
  </div>
</div>
