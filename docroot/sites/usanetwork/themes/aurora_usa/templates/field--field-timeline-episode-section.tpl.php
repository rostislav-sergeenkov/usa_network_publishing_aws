<?php
/**
 * @file field.tpl.php
 * Default template implementation to display the value of a field.
 *
 * This file is not used and is here as a starting point for customization only.
 * @see theme_field()
 *
 * This implementation is for the display of the TIMELINE GALLERY CONTENT TYPE.
 *
 *
 * Available variables:
 * - $items: An array of field values. Use render() to output them.
 * - $label: The item label.
 * - $label_hidden: Whether the label display is set to 'hidden'.
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. The default values can be one or more of the
 *   following:
 *   - field: The current template type, i.e., "theming hook".
 *   - field-name-[field_name]: The current field name. For example, if the
 *     field name is "field_description" it would result in
 *     "field-name-field-description".
 *   - field-type-[field_type]: The current field type. For example, if the
 *     field type is "text" it would result in "field-type-text".
 *   - field-label-[label_display]: The current label position. For example, if
 *     the label position is "above" it would result in "field-label-above".
 *
 * Other variables:
 * - $element['#object']: The entity to which the field is attached.
 * - $element['#view_mode']: View mode, e.g. 'full', 'teaser'...
 * - $element['#field_name']: The field name.
 * - $element['#field_type']: The field type.
 * - $element['#field_language']: The field language.
 * - $element['#field_translatable']: Whether the field is translatable or not.
 * - $element['#label_display']: Position of label display, inline, above, or
 *   hidden.
 * - $field_name_css: The css-compatible field name.
 * - $field_type_css: The css-compatible field type.
 * - $classes_array: Array of html class attribute values. It is flattened
 *   into a string within the variable $classes.
 *
 * Time gallery variables:
 * - $tg_items[season number][episode number] = array(
 *     'scenes' => array(
 *       'fid' => file id,
 *       'scene_number' => scene number,
 *       'image_src' => image src,
 *       'description' => description,
 *     ),
 *     'season_name' => season title,
 *     'episode_name' => episode_title,
 *   )
 *
 * @see template_preprocess_field()
 * @see theme_field()
 *
 * @ingroup themeable
 */
?>

<?php //print '<pre>tg_items: ' . print_r($tg_items, true) . '</pre><br><br>'; ?>

<?php
$baseUrl = 'http://' . $_SERVER['HTTP_HOST'];
$imageBaseUrl = '/sites/usanetwork/themes/aurora_usa/images';
$shareTitle = 'Experience+the+Graceland+Catchup+HQ';
$shareDescription = 'Get+caught+up+on+Season+1+before+the+Graceland+premiere+on+June+11+10%2F9c';
$timelineCategories = array();
$numberOfScenesPerEpisode = array();
?>

<section id="timeline-player-slideshow-area">

  <!-- Insert Slide Show -->
  <div class="timelineLoader">
    <img src="<?php print $imageBaseUrl; ?>/timeline_gallery/loadingAnimation.gif" />
  </div>

  <!-- BEGIN TIMELINE -->
  <div class="timelineFlat timelineFlatPortfolio tl3">

<?php foreach($tg_items as $seasonNum => $season): ?>
  <?php foreach($season as $episodeNum => $episode): ?>
    <?php print '<!-- Season ' . $seasonNum . ' | Episode ' . $episodeNum . ': ' . $episode['episode_name'] . ' -->' . "\n"; ?>
    <?php $timelineCategories[$seasonNum][$episodeNum] = 's' . $seasonNum . ' ep' . $episodeNum; ?>
    <?php foreach($episode['scenes'] as $scene): ?>
      <div class="timeline-item<?php if ($seasonNum == 1 && $episodeNum == 1) print ' active'; ?>" data-id="<?php print ($scene['scene_number'] < 10) ? '0' . $scene['scene_number'] : $scene['scene_number']; ?>/<?php print ($episodeNum < 10) ? '0' . $episodeNum : $episodeNum; ?>/<?php print ($seasonNum < 10) ? '0' . $seasonNum : $seasonNum; ?>" data-description="Scene <?php print $scene['scene_number']; ?>" data-fid="<?php print $scene['fid']; ?>" data-imagesrc="<?php print $scene['image_src']; ?>">
        <img src="<?php print $scene['image_src']; ?>" alt="" class="slideshowimage"/>

        <div class="timeline-item-text">
          <h2><?php print 'S' . $seasonNum . ' Episode ' . $episodeNum; ?> <span class="divider">|</span> <?php print $episode['episode_name']; ?> <span class="divider">|</span> Scene <?php print $scene['scene_number']; ?></h2>
          <?php print $scene['description']; ?>
          <div class="like-share-view">
            <div class="scene-filter-holder">
              <div class="scene-filters share">
                <div class="filter">
                  <span> </span>
                  <ul class="filter-items">
                    <li class="filter-item twitter"><a onclick="var twShareWindow = window.open('https://twitter.com/share?url=<?php print $baseUrl; ?>&amp;text=<?php print $shareDescription; ?>', 'twShareWindow', 'width=600,height=450,menubar=0,resizable=0,scrollbars=0', '_self'); twitterShare()"><img src="/sites/usanetwork/themes/aurora_usa/images/timeline_gallery/twitter.png" class="socialshare"></a></li>
                    <li class="filter-item facebook"><a class="facebook" onclick="var fbShareWindow = window.open('http://www.facebook.com/dialog/feed?app_id=241079750077&amp;link=<?php print $baseUrl; ?>&amp;picture=<?php print $baseUrl . $scene['image_src']; ?>&amp;name=<?php print $shareTitle; ?>&amp;description=<?php print $shareDescription; ?>&amp;redirect_uri=<?php print $baseUrl; ?>', 'fbShareWindow', 'width=800,height=500,menubar=0,resizable=0,scrollbars=0', '_self'); facebookShare()"><img src="/sites/usanetwork/themes/aurora_usa/images/timeline_gallery/facebook.png" class="socialshare"><span>Share on Facebook</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <?php endforeach; // scene ?>
    <?php $numberOfScenesPerEpisode[$seasonNum][$episodeNum] = count($episode['scenes']); ?>
  <?php endforeach; // episode ?>
<?php endforeach; // season ?>

  </div>
  <!-- END TIMELINE -->

  <script>
  var categories = <?php print json_encode($timelineCategories); ?>,
      segments = <?php print json_encode($numberOfScenesPerEpisode); ?>;
  </script>
</section>
