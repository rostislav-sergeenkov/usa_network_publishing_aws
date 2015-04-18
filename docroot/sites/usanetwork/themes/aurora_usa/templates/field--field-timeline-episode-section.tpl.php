<?php
/**
 * @file field.tpl.php
 * Default template implementation to display the value of a field.
 *
 * This file is not used and is here as a starting point for customization only.
 * @see theme_field()
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

<?php /* $dataId = 1; ?>
<?php foreach($tg_items as $season): ?>
  <?php foreach($season as $episodeNum => $episode): ?>
    <?php print 'episodeNum: ' . $episodeNum . ' | dataId: ' . $dataId . ' | ' . $episode['season_name'] . ' | Episode ' . $episode['episode_name']; ?>
    <?php print '<br>'; ?>
    <?php foreach($episode['scenes'] as $scene): ?>
      <?php print 'scene_number: ' . $scene['scene_number']; ?>
      <?php print '<br>'; ?>
      <?php print 'fid: ' . $scene['fid']; ?>
      <?php print '<br>'; ?>
      <?php print 'image_src: ' . $scene['image_src']; ?>
      <?php print '<br>'; ?>
      <?php print 'description: ' . $scene['description']; ?>
      <?php print '<br>'; ?>
      <?php print '<br>'; ?>
    <?php endforeach; // scene ?>
    <?php $dataId++; ?>
  <?php endforeach; // episode ?>
  <?php print '<br>'; ?>
  <?php print '<br>'; ?>
<?php endforeach; // season */ ?>



<?php
//$totalNumEps = 0;
$baseUrl = 'http://' . $_SERVER['HTTP_HOST'];
$imageBaseUrl = '/sites/usanetwork/themes/aurora_usa/images';
$shareTitle = 'Experience+the+Graceland+Catchup+HQ';
$shareDescription = 'Get+caught+up+on+Season+1+before+the+Graceland+premiere+on+June+11+10%2F9c';
$timelineCategories = array();
$numberOfScenesPerEpisode = array();
?>

<section id="player_slideshow_area">

  <!------------Insert Slide Show------------>
  <div class="timelineLoader">
    <img src="<?php print $imageBaseUrl; ?>/timeline_gallery/loadingAnimation.gif" />
  </div>

  <!-- BEGIN TIMELINE -->
  <div class="timelineFlat timelineFlatPortfolio tl3">


<?php foreach($tg_items as $seasonNum => $season): ?>
  <?php foreach($season as $episodeNum => $episode): ?>
    <?php print '<!-- Season ' . $seasonNum . ' | Episode ' . $episodeNum . ': ' . $episode['episode_name'] . ' -->' . "\n"; ?>
    <?php $timelineCategories[] = 's' . $seasonNum . ' ep' . $episodeNum; ?>
    <?php foreach($episode['scenes'] as $scene): ?>
      <div class="timeline-item" data-id="<?php print ($scene['scene_number'] < 10) ? '0' . $scene['scene_number'] : $scene['scene_number']; ?>/<?php print ($episodeNum < 10) ? '0' . $episodeNum : $episodeNum; ?>/<?php print ($seasonNum < 10) ? '0' . $seasonNum : $seasonNum; ?>" data-description="SCENE <?php print $scene['scene_number']; ?>" data-fid="<?php print $scene['fid']; ?>" data-imagesrc="<?php print $scene['image_src']; ?>">
        <img src="<?php print $scene['image_src']; ?>" alt="" class="slideshowimage"/>

        <div class="itemtext">
          <h2><?php print $seasonNum . ($episodeNum < 10) ? '0' . $episodeNum : $episodeNum; ?>: <?php print $episode['episode_name']; ?> <font style="color: #71dce2">|</font> SCENE <?php print $scene['scene_number']; ?></h2>
          <br>
          <?php print $scene['description']; ?>
          <br><br>
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
    <?php $numberOfScenesPerEpisode[] = count($episode['scenes']); ?>
  <?php endforeach; // episode ?>
<?php endforeach; // season ?>



  </div>
  <!-- END TIMELINE -->

  <script>
  var categoryArray = <?php print json_encode($timelineCategories); ?>,
      segmentArray = <?php print json_encode($numberOfScenesPerEpisode); ?>;

/*
  function facebookShare() {
    usa_debug('USA: facebookShare()');
    s.linkTrackVars='events,eVar74';
    s.linkTrackEvents='event41';
    s.events='event41';
    s.eVar74='Facebook'
    s.tl(this,'o','Social Share'); s.manageVars('clearVars',s.linkTrackVars,1);
  }

  function twitterShare() {
    usa_debug('USA: twitterShare()');
    s.linkTrackVars='events,eVar74';
    s.linkTrackEvents='event41';
    s.events='event41';
    s.eVar74='Twitter'
    s.tl(this,'o','Social Share'); s.manageVars('clearVars',s.linkTrackVars,1);

  }

  function tumblrShare() {
    usa_debug('USA: tumblrShare()');
    s.linkTrackVars='events,eVar74';
    s.linkTrackEvents='event41';
    s.events='event41';
    s.eVar74='Tumblr'
    s.tl(this,'o','Social Share'); s.manageVars('clearVars',s.linkTrackVars,1);

  }

  function otherShare() {
    usa_debug('USA: otherShare()');
    s.linkTrackVars='events,eVar74';
    s.linkTrackEvents='event41';
    s.events='event41';
    s.eVar74='Othershare'
    s.tl(this,'o','Social Share'); s.manageVars('clearVars',s.linkTrackVars,1);

  }

  jQuery(window).load(function() {
    jQuery('.tl3').timeline({
      openTriggerClass : '.read_more',
      startItem : '01/01/01', // '01/01',
      closeText : ''
    });
    jQuery('.tl3').on('ajaxLoaded.timeline', function(e){
      usa_debug('TIMELINE: loaded');
      usa_debug(e.element.find('.timeline_open_content span'));

      var height = e.element.height() - 60 - e.element.find('h2').height();
      e.element.find('.timeline_open_content span').css('max-height', height).mCustomScrollbar({
        autoHideScrollbar:true,
        theme:"light-thin"
      });
    });
    jQuery('.tl3').on('scrollStart.Timeline', function(e){
      usa_debug('TIMELINE: start');
    });
    jQuery('.tl3').on('scrollStop.Timeline', function(e){
      usa_debug('TIMELINE: end');
    });

    jQuery('#social-hqpage-reaction0-icon div').on('click', function() {
      facebookShare();
    });
    jQuery('#social-hqpage-reaction1-icon div').on('click', function() {
      tumblrShare();
    });
    jQuery('#social-hqpage-reaction2-icon div').on('click', function() {
      twitterShare();
    });
    jQuery('#social-hqpage-reaction3-icon div').on('click', function() {
      otherShare();
    });
  });
*/
  </script>
</section>
