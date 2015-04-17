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
<?php // print '<pre>tg_items: ' . print_r($tg_items, true) . '</pre><br><br>'; ?>

<?php /* $dataId = 1; ?>
<?php foreach($tg_items as $season): ?>
  <?php foreach($season as $ep_key => $episode): ?>
    <?php print 'ep_key: ' . $ep_key . ' | dataId: ' . $dataId . ' | ' . $episode['season_name'] . ' | Episode ' . $episode['episode_name']; ?>
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



<?php /**/ ?>
<style>
.clear {
  clear: both;
}
.timelineLoader {
  display: none;
}
.timelineFlat.timelineFlatPortfolio.tl3 {
  width: 100%; overflow: hidden; margin-left: auto; margin-right: auto; text-align: center; height: auto; display: block;
}
.timeline_line {
  text-align: left; position:relative; margin-left:auto; margin-right:auto;
}
#t_line_left,
#t_line_right {
  position: absolute;
}
.t_line_holder {
  position:relative; overflow: hidden; width:100%;
}
.t_line_wrapper {
  white-space: nowrap; margin-left: 0%;
}
.t_line_m {
  position:absolute; top:0;
}
.t_line_m.right {
  position:absolute; top:0;
}
.t_line_month {
  position:absolute; width:100%; top:0; text-align:center;
}
.t_line_node {
  left: 16.6666666666667%; position: absolute; text-align: center; width: 12px; margin-left: -6px;
}
.t_line_node.active {
  left: 25%; position: absolute; text-align: center; width: 12px; margin-left: -6px;
}
.t_node_desc {
  white-space: nowrap; position: absolute; z-index: 1; display: none;
}
.t_node_desc span {
  display: none;
}
.t_line_view {
  position:relative; display:inline-block;
}
.timeline_items_holder {
  width: 300px; margin-left: auto; margin-right: auto;
}
.timeline_items {
  text-align: left; width: 52440px; margin-left: -10608.5px;
}
.item {
  padding-left: 0px; padding-right: 0px; margin-left: 7.5px; margin-right: 7.5px; float: left; position: relative; -webkit-user-select: none;
}
.item > img {
   -webkit-user-select: none;
}
.item > h2 {
  -webkit-user-select: none;
}
.item > h2 span {
  color: rgb(113, 220, 226); -webkit-user-select: none;
}
.itemtext {
  -webkit-user-select: none;
}
.itemtext > br {
  -webkit-user-select: none;
}
.like-share-view {
  -webkit-user-select: none;
}
.scene-filter-holder {
  -webkit-user-select: none;
}
.scene-filters.share {
  -webkit-user-select: none;
}
.filter {
  -webkit-user-select: none;
}
.filter > span {
  -webkit-user-select: none;
}
.filter-items {
  -webkit-user-select: none;
}
.filter-item.twitter {
  -webkit-user-select: none;
}
.filter-item.twitter a {
  -webkit-user-select: none;
}
.filter-item.twitter img {
  -webkit-user-select: none;
}
.filter-item.facebook {
  -webkit-user-select: none;
}
.filter-item.facebook a {
  -webkit-user-select: none;
}
.filter-item.facebook img {
  -webkit-user-select: none;
}
.filter-item.facebook span {
  display: none;
  -webkit-user-select: none;
}
</style>

<section id="player_slideshow_area">
  <!------------Insert Slide Show------------>
  <div class="timelineLoader">
    <img src="assets/_img/timeline/loadingAnimation.gif">
  </div>

  <!-- BEGIN TIMELINE -->
  <div class="timelineFlat timelineFlatPortfolio tl3">
    <div class="timeline_line">
      <div id="t_line_left"></div>
      <div id="t_line_right"></div>
      <div class="t_line_holder">
        <div class="t_line_wrapper">




        <?php $dataId = 0; ?>
        <?php $numEps = 0; ?>
  <?php foreach($tg_items as $season_key => $season): ?>
  <!-- <?php print 'SEASON ' . $season_key; ?> -->
    <?php $numEps = $numEps + count($season); ?>
        <?php foreach($season as $ep_key => $episode): ?>
          <?php if ($ep_key % 2 == 0): // even number ?>

            <?php print "\n" . '<!-- ' . $episode['season_name'] . ' | Episode ' . $episode['episode_name'] . ' -->' . "\n"; ?>
            <div class="t_line_m right">
              <h4 class="t_line_month">episode 2</h4>
              <?php foreach($episode['scenes'] as $scene): ?>
              <a href="#0<?php print $scene['scene_number']; ?>/0<?php print $ep_key; ?>" class="t_line_node"><span class="t_node_desc"><span>SCENE <?php print $scene['scene_number']; ?></span></span></a>
              <?php endforeach; // scene ?>
            </div><!-- KRAJ DRUGOG -->

            <div class="clear"></div>
            <?php $dataId++; ?>
          </div>

          <?php else: // odd number ?>

          <div class="t_line_view" data-id="<?php print $dataId; ?>">
            <?php print "\n" . '<!-- ' . $episode['season_name'] . ' | Episode ' . $episode['episode_name'] . ' -->' . "\n"; ?>
            <div class="t_line_m">
              <h4 class="t_line_month">episode <?php print $episode['episode_name']; ?></h4>
              <?php foreach($episode['scenes'] as $scene): ?>
              <a href="#0<?php print $scene['scene_number']; ?>/01" class="t_line_node"><span class="t_node_desc"><span>SCENE <?php print $scene['scene_number']; ?></span></span></a>
              <?php endforeach; // scene ?>
            </div><!-- KRAJ PRVOG -->

          <?php endif; ?>

        <?php endforeach; // episode ?>
  <?php endforeach; // season ?>
<?php // print 'numEps: ' . $numEps . '<br>'; ?>
    <?php if ($numEps % 2 != 0): // odd number ?>
      <div class="clear"></div>
      <?php $dataId++; ?>
    </div>
    <?php endif; ?>
          <div class="clear"></div>
        </div>

      </div>
    </div>


    <div class="timeline_items_wrapper">
      <div class="timeline_items_holder">
        <div class="timeline_items">



    <?php foreach($tg_items as $season_key => $season): ?>
      <?php foreach($season as $ep_key => $episode): ?>
        <?php print "\n" . '<!-- ' . $episode['season_name'] . ' | Episode ' . $episode['episode_name'] . ' -->' . "\n"; ?>
          <?php foreach($episode['scenes'] as $scene): ?>
            <?php /* print 'scene_number: ' . $scene['scene_number']; ?>
            <?php print 'fid: ' . $scene['fid']; ?>
            <?php print 'image_src: ' . $scene['image_src']; ?>
            <?php print 'description: ' . $scene['description']; */ ?>
          <div class="item" data-id="0<?php print $scene['scene_number']; ?>/0<?php print $ep_key; ?>" data-description="SCENE <?php print $scene['scene_number']; ?>" data-count="0">
            <img src="<?php print $scene['image_src']; ?>" alt="" class="slideshowimage">

            <div class="itemtext">
              <h2>101: <?php print $episode['episode_name']; ?> <span>|</span> SCENE <?php print $scene['scene_number']; ?></h2>
              <br>
              <?php print $scene['description']; ?>

              <br>
              <br>

              <div class="like-share-view">
                <div class="scene-filter-holder">
                  <div class="scene-filters share">
                    <div class="filter">
                      <span> </span>
                      <ul class="filter-items">
                        <li class="filter-item twitter"><a onclick="var twShareWindow = window.open('https://twitter.com/share?url=http://gracelandcatchuphq.usanetwork.com&amp;text=Get+caught+up+on+Season+1+before+the+Graceland+premiere+on+June+11+10%2F9c', 'twShareWindow', 'width=600,height=450,menubar=0,resizable=0,scrollbars=0', '_self'); twitterShare()"><img src="assets/_img/timeline/twitter.png" class="socialshare"></a></li>
                        <li class="filter-item facebook"><a class="facebook" onclick="var fbShareWindow = window.open('http://www.facebook.com/dialog/feed?app_id=241079750077&amp;link=http://gracelandcatchuphq.usanetwork.com&amp;picture=http://gracelandcatchuphq.usanetwork.com/assets/_img/timeline/gl_slides_e1_s1.jpg&amp;name=Experience+the+Graceland+Catchup+HQ&amp;description=Get+caught+up+on+Season+1+before+the+Graceland+premiere+on+June+11+10%2F9c&amp;redirect_uri=http://gracelandcatchuphq.usanetwork.com', 'fbShareWindow', 'width=800,height=500,menubar=0,resizable=0,scrollbars=0', '_self'); facebookShare()"><img src="assets/_img/timeline/facebook.png" class="socialshare"><span>Share on Facebook</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <?php endforeach; // scene ?>
      <?php endforeach; // episode ?>
    <?php endforeach; // season ?>





          <div class="clear"></div>
        </div>
      </div>

      <div class="t_controles">
        <div class="t_left"></div>
        <div class="t_right"></div>
      </div>
    </div>
  </div>
  <!-- /END TIMELINE -->
<?php // ?>




  <script type="text/javascript">
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
    // light
    jQuery('.tl3').timeline({
      openTriggerClass : '.read_more',
      startItem : '01/01',
      closeText : ''
    });
    jQuery('.tl3').on('ajaxLoaded.timeline', function(e){
    usa_debug('TIMELINE: loaded');
      console.log(e.element.find('.timeline_open_content span'));

      var height = e.element.height()-60-e.element.find('h2').height();
      e.element.find('.timeline_open_content span').css('max-height', height).mCustomScrollbar({
        autoHideScrollbar:true,
        theme:"light-thin"
      });
    });
    jQuery('.tl3').on('scrollStart.Timeline', function(e){
      //usa_debug('TIMELINE: start');
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
  </script>
</section>
