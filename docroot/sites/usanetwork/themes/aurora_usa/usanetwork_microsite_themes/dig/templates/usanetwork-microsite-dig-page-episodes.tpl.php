<?php
/**
 * Template of Episodes page
 *
 * Variables:
 * - $episodes - array of people:
 * -  - $episodes[n]['id'] - machine-readable id of episode
 * -  - $episodes[n]['title'] - the title of the episode
 * -  - $episodes[n]['optional_h1'] - the optional SEO H1 text
 * -  - $episodes[n]['description'] - the description of the person
 * -  - $episodes[n]['background_url'] - url for the person's background image
 * -  - $episodes[n]['preview_image_url'] - Image preview for a hover action.
 * -  - $episodes[n]['status'] - if character active is set. We can use it as class. Just insert this string to html tag.
 * - $section_title - title of section.
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

  <!-- episodes section title and navigation -->
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

    <!-- episode info -->
    <?php if (!empty($episodes)): ?>
    <div id="episode-info-container" class="clearfix">
      <ul id="episode-info" class="content">
      <?php foreach ($episodes as $episode_key => $episode): ?>
        <li id ="<?php if (!empty($episode['id'])) print $episode['id']; ?>" class="<?php if (!empty($episode['id'])) print $episode['id']; ?><?php if ($episode['status'] != '') print ' ' . $episode['status']; ?>">
          <?php if (empty($episode['optional_h1']) && !empty($episode['title']) && $episode['status'] == 'active'): ?>
          <h1><?php print $episode['title']; ?></h1>
          <?php else: ?>
          <h3><?php print $episode['title']; ?></h3>
          <?php endif; ?>

          <?php if (!empty($episode['optional_h1'])): ?>
            <?php if ($episode['status'] == 'active'): ?>
            <h1 class="seo-h1"><?php print $episode['optional_h1']; ?></h1>
            <?php else: ?>
            <h3 class="seo-h1"><?php print $episode['optional_h1']; ?></h3>
            <?php endif; ?>
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
