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
 * - $baseUrl - the request protocol (e.g. http://) and domain name
 * - $requestUrl - the url path of the page
 * - $imageBaseUrl - the url path to the timeline icons and structural images
 *
 * Sharing information
 * - $shareTitle - the title or "name" for social sharing
 * - $shareDescription - the social sharing description
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
 *       'type' => file type ('image' or 'video'),
 *       'video' => video src,
 *       'video_link' => video link,
 *     ),
 *     'season_name' => season title,
 *     'episode_name' => episode_title,
 *   )
 *
 * Video player variables:
 * - $player' => player src.
 * - $isset_video' => check existing video content.
 * @see template_preprocess_field()
 * @see theme_field()
 *
 * @ingroup themeable
 */
?>

<?php
$timelineCategories = array();
$numberOfScenesPerEpisode = array();
$firstScene = true;
?>

<section id="timeline-player-slideshow-area">

  <!-- Insert Slide Show -->
  <div class="timelineLoader">
    <img src="<?php print $imageBaseUrl; ?>/timeline_gallery/loadingAnimation.gif" />
  </div>

  <!-- BEGIN TIMELINE -->
  <div class="timelineFlat timelineFlatPortfolio tl3" data-share-title="<?php print $shareTitle; ?>" data-share-description="<?php print $shareDescription; ?>">

    <div id="player-wrapper" data-player-src="<?php print $player; ?>"></div>
    <div id="play-button" class="round-button"></div>

<?php foreach($tg_items as $seasonNum => $season): ?>
  <?php foreach($season as $episodeNum => $episode): ?>
    <?php print '<!-- Season ' . $seasonNum . ' | Episode ' . $episodeNum . ': ' . $episode['episode_name'] . ' -->' . "\n"; ?>
    <?php $timelineCategories[$seasonNum][$episodeNum] = 's' . $seasonNum . ' ep' . $episodeNum; ?>
    <?php foreach($episode['scenes'] as $scene): ?>
      <div class="timeline-item<?php if ($firstScene) print ' active'; ?>" data-id="<?php print ($scene['scene_number'] < 10) ? '0' . $scene['scene_number'] : $scene['scene_number']; ?>/<?php print ($episodeNum < 10) ? '0' . $episodeNum : $episodeNum; ?>/<?php print ($seasonNum < 10) ? '0' . $seasonNum : $seasonNum; ?>" data-season-num="<?php print $seasonNum; ?>" data-episode-num="<?php print $episodeNum; ?>" data-episode-name="<?php print $episode['episode_name']; ?>" data-description="Scene <?php print $scene['scene_number']; ?>" data-fid="<?php print $scene['fid']; ?>" data-imagesrc="<?php print $scene['image_src']; ?>">
        <div class="timeline-item-image">
          <img src="<?php print $scene['image_src']; ?>" alt="" class="slideshowimage"/>
        </div>
        <div class="timeline-item-details">
          <h2><?php print '<span class="timeline-h2-season-num">S' . $seasonNum . '</span> <span class="timeline-h2-episode-num">Ep' . $episodeNum . '</span>'; ?> <span class="divider">|</span> <?php print '<span class="timeline-h2-episode-name">' . $episode['episode_name'] . '</span>'; ?> <span class="divider divider-two">|</span> <span class="timeline-h2-scene-num">Scene <?php print $scene['scene_number']; ?></span></h2>
          <div class="timeline-item-text">
            <?php print $scene['description']; ?>
          </div>
          <div class="timeline-gigya-share-container">
            <div class="timeline-gigya-share-title">Share: </div>
            <div id="timeline-gigya-share-<?php print $scene['scene_number'] . '-' . $episodeNum . '-' . $seasonNum; ?>" class="timeline-gigya-share" data-share-picture="<?php print $scene['image_src']; ?>"></div>
          </div>
        </div>
      </div>
      <?php $firstScene = false; ?>
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
