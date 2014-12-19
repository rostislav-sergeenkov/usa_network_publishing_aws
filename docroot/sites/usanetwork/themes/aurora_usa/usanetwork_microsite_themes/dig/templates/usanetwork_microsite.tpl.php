<?php
/**
 * @file  Themes the usanetwork_show_microsite block.
 */
?>
<div id='show-microsite' class="<?php print $theme; ?>">
<!--
  <pre>
  Show: <?php print $show; ?><br>
  Theme: <?php print $theme; ?><br>
  Profile_image: <?php print $profile_image; ?><br>
  Tune_in: <?php print $tune_in; ?><br>
  Section_separator: <?php print $section_separator; ?><br>
  <br>
  Section_enabled: <?php print $section_enabled; ?><br>
  Aspots: <?php print $aspots; ?><br>
  Bspot: <?php print $bspot; ?><br>
  Cspot: <?php print $cspot; ?><br>
  Gallery: <?php print $gallery; ?><br>
  Person: <?php print $person; ?><br>
  </pre>

<br>
  Aspots: <?php print '<img src="/sites/usanetwork/files/public/aspot_desktop/' . $section[0]['aspot'][0]['field_usa_aspot_desktop']['und'][0]['filename'] . '" />'; ?><br>
<br><br>
-->
<?php //dpm($section); ?>


<?php
foreach($section as $key => $array) {
  if ($array['section_enabled']) {
    $type = $array['type'];
    switch($type) {
      case 'home':
        ?>
  <!-- HOME -->
  <a name="<?php print $type; ?>"></a>
  <section id="<?php print $type; ?>" class="clearfix" style="height: 1144px;">
  <!-- BEGIN A-SPOT -->
  <div class="panel-panel panel-one panel-row first-row a-spot-panel tiles">
    <div id="main-slider">
      <div class="panel-pane pane-entity-field pane-node-field-usa-tv-a-spot show-aspot" id="show-aspot">
        <div class="pane-content">
          <div id="show-main-slider" class="flexslider a-spot">
            <div class="flex-viewport" style="overflow: hidden; position: relative;">
              <ul class="field field-name-field-usa-tv-a-spot field-type-entityreference field-label-hidden slides" style="width: 800%; -webkit-transition: 0s; transition: 0s; -webkit-transform: translate3d(-930px, 0px, 0px);">
                <li class="clone" aria-hidden="true" style="width: 930px; float: left; display: block;">
                  <div class="node node-usanetwork-aspot view-mode-full aspot aspot-node-54126" omniture-title="Benched: Aspot: Cont: Tomorrow: Full Eps" omniture-id="/node/54126/revisions/281606/view" role="article">
                    <a href="http://www.usanetwork.com/benched/videos" target="_self" class="aspot-link omniture-tracking-processed">
                      <div class="meta-wrap">
                        <div class="meta"></div>
                      </div>

                      <div data-picture="" data-alt="" data-class="tile-img">
                        <div data-src="http://www.usanetwork.com/sites/usanetwork/files/styles/300x250/public/aspot_mobile/benched_aspot_tomorrow_fulleps_600x500_0.jpg?itok=kURJ_knz"></div>
                        <div data-src="http://www.usanetwork.com/sites/usanetwork/files/styles/600x500/public/aspot_mobile/benched_aspot_tomorrow_fulleps_600x500_0.jpg?itok=c8dWAGzK" data-media="(min-device-pixel-ratio: 2.0)"></div>
                        <div data-src="http://www.usanetwork.com/sites/usanetwork/files/styles/615x350/public/aspot_tablet/benched_aspot_tomorrow_fulleps_1230x700_0.jpg?itok=aJ8P8IFm" data-media="(min-width: 645px)"></div>
                        <div data-src="http://www.usanetwork.com/sites/usanetwork/files/styles/1245x709/public/aspot_tablet/benched_aspot_tomorrow_fulleps_1230x700_0.jpg?itok=J9-_HUpA" data-media="(min-width: 645px) and (min-device-pixel-ratio: 2.0)"></div>
                        <div data-src="http://www.usanetwork.com/sites/usanetwork/files/styles/1245x709/public/aspot_desktop/benched_aspot_tomorrow_fulleps_2490x1418_0.jpg?itok=MGFDr8YR" data-media="(min-width: 960px)"></div>
                        <div data-src="http://www.usanetwork.com/sites/usanetwork/files/styles/2490x1418/public/aspot_desktop/benched_aspot_tomorrow_fulleps_2490x1418_0.jpg?itok=VvodSEo-" data-media="(min-width: 960px) and (min-device-pixel-ratio: 2.0)"></div>
                        <!--[if (IE 8) & (!IEMobile)]><div data-src="http://www.usanetwork.com/sites/usanetwork/files/styles/1245x709/public/aspot_desktop/benched_aspot_tomorrow_fulleps_2490x1418_0.jpg?itok=MGFDr8YR"></div><![endif]-->
                        <noscript>&lt;img src="http://www.usanetwork.com/sites/usanetwork/files/styles/1245x709/public/aspot_desktop/benched_aspot_tomorrow_fulleps_2490x1418_0.jpg?itok=MGFDr8YR" width="1245" height="709" alt="" title="" /&gt;</noscript>
                        <img alt="" class="tile-img" src="http://www.usanetwork.com/sites/usanetwork/files/styles/1245x709/public/aspot_desktop/benched_aspot_tomorrow_fulleps_2490x1418_0.jpg?itok=MGFDr8YR">
                      </div>
                    </a>
                  </div>
                </li>
                <li class="flex-active-slide" style="width: 930px; float: left; display: block;">
                  <div class="node node-usanetwork-aspot view-mode-full aspot aspot-node-54406" omniture-title="Benched: Episodic A Spot: Week 3" omniture-id="/node/54406/revisions/284151/view" role="article">
                    <a href="http://www.usanetwork.com/benched/videos" target="_self" class="aspot-link omniture-tracking-processed">
                      <div class="meta-wrap">
                        <div class="meta"></div>
                      </div>

                      <div data-picture="" data-alt="" data-class="tile-img">
                        <div data-src="/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig/images/aspot_guide.png"></div>
                        <div data-src="/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig/images/aspot_guide.png" data-media="(min-device-pixel-ratio: 2.0)"></div>
                        <div data-src="/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig/images/aspot_guide.png" data-media="(min-width: 645px)"></div>
                        <div data-src="/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig/images/aspot_guide.png" data-media="(min-width: 645px) and (min-device-pixel-ratio: 2.0)"></div>
                        <div data-src="/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig/images/aspot_guide.png" data-media="(min-width: 960px)"></div>
                        <div data-src="/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig/images/aspot_guide.png" data-media="(min-width: 960px) and (min-device-pixel-ratio: 2.0)"></div>
                        <!--[if (IE 8) & (!IEMobile)]><div data-src="/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig/images/aspot_guide.png"></div><![endif]-->
                        <noscript>&lt;img src="/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig/images/aspot_guide.png" width="1245" height="709" alt="" title="" /&gt;</noscript>
                      <img alt="" class="tile-img" src="/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig/images/aspot_guide.png"></div>
                    </a>
                  </div>
                </li>
                <li style="width: 930px; float: left; display: block;">
                  <div class="node node-usanetwork-aspot view-mode-full aspot aspot-node-54126" omniture-title="Benched: Aspot: Cont: Tomorrow: Full Eps" omniture-id="/node/54126/revisions/281606/view" role="article">
                    <a href="http://www.usanetwork.com/benched/videos" target="_self" class="aspot-link omniture-tracking-processed">
                      <div class="meta-wrap">
                        <div class="meta"></div>
                      </div>

                      <div data-picture="" data-alt="" data-class="tile-img">
                        <div data-src="http://www.usanetwork.com/sites/usanetwork/files/styles/300x250/public/aspot_mobile/benched_aspot_tomorrow_fulleps_600x500_0.jpg?itok=kURJ_knz"></div>
                        <div data-src="http://www.usanetwork.com/sites/usanetwork/files/styles/600x500/public/aspot_mobile/benched_aspot_tomorrow_fulleps_600x500_0.jpg?itok=c8dWAGzK" data-media="(min-device-pixel-ratio: 2.0)"></div>
                        <div data-src="http://www.usanetwork.com/sites/usanetwork/files/styles/615x350/public/aspot_tablet/benched_aspot_tomorrow_fulleps_1230x700_0.jpg?itok=aJ8P8IFm" data-media="(min-width: 645px)"></div>
                        <div data-src="http://www.usanetwork.com/sites/usanetwork/files/styles/1245x709/public/aspot_tablet/benched_aspot_tomorrow_fulleps_1230x700_0.jpg?itok=J9-_HUpA" data-media="(min-width: 645px) and (min-device-pixel-ratio: 2.0)"></div>
                        <div data-src="http://www.usanetwork.com/sites/usanetwork/files/styles/1245x709/public/aspot_desktop/benched_aspot_tomorrow_fulleps_2490x1418_0.jpg?itok=MGFDr8YR" data-media="(min-width: 960px)"></div>
                        <div data-src="http://www.usanetwork.com/sites/usanetwork/files/styles/2490x1418/public/aspot_desktop/benched_aspot_tomorrow_fulleps_2490x1418_0.jpg?itok=VvodSEo-" data-media="(min-width: 960px) and (min-device-pixel-ratio: 2.0)"></div>
                        <!--[if (IE 8) & (!IEMobile)]><div data-src="http://www.usanetwork.com/sites/usanetwork/files/styles/1245x709/public/aspot_desktop/benched_aspot_tomorrow_fulleps_2490x1418_0.jpg?itok=MGFDr8YR"></div><![endif]-->
                        <noscript>&lt;img src="http://www.usanetwork.com/sites/usanetwork/files/styles/1245x709/public/aspot_desktop/benched_aspot_tomorrow_fulleps_2490x1418_0.jpg?itok=MGFDr8YR" width="1245" height="709" alt="" title="" /&gt;</noscript>
                      <img alt="" class="tile-img" src="http://www.usanetwork.com/sites/usanetwork/files/styles/1245x709/public/aspot_desktop/benched_aspot_tomorrow_fulleps_2490x1418_0.jpg?itok=MGFDr8YR"></div>
                    </a>
                  </div>
                </li>
                <li class="clone" aria-hidden="true" style="width: 930px; float: left; display: block;">
                  <div class="node node-usanetwork-aspot view-mode-full aspot aspot-node-54406" omniture-title="Benched: Episodic A Spot: Week 3" omniture-id="/node/54406/revisions/284151/view" role="article">
                    <a href="http://www.usanetwork.com/benched/videos" target="_self" class="aspot-link omniture-tracking-processed">
                      <div class="meta-wrap">
                        <div class="meta"></div>
                      </div>

                      <div data-picture="" data-alt="" data-class="tile-img">
                        <div data-src="/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig/images/aspot_guide.png"></div>
                        <div data-src="/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig/images/aspot_guide.png" data-media="(min-device-pixel-ratio: 2.0)"></div>
                        <div data-src="/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig/images/aspot_guide.png" data-media="(min-width: 645px)"></div>
                        <div data-src="/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig/images/aspot_guide.png" data-media="(min-width: 645px) and (min-device-pixel-ratio: 2.0)"></div>
                        <div data-src="/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig/images/aspot_guide.png" data-media="(min-width: 960px)"></div>
                        <div data-src="/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig/images/aspot_guide.png" data-media="(min-width: 960px) and (min-device-pixel-ratio: 2.0)"></div>
                        <!--[if (IE 8) & (!IEMobile)]><div data-src="/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig/images/aspot_guide.png"></div><![endif]-->
                        <noscript>&lt;img src="/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig/images/aspot_guide.png" width="1245" height="709" alt="" title="" /&gt;</noscript>
                      <img alt="" class="tile-img" src="/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig/images/aspot_guide.png"></div>
                    </a>
                  </div>
                </li>
            </ul>
          </div>
          <ol class="flex-control-nav flex-control-paging">
            <li><a class="flex-active">1</a></li>
            <li><a>2</a></li>
          </ol>
          <ul class="flex-direction-nav">
            <li><a class="flex-prev" href="#">Previous</a></li>
            <li><a class="flex-next" href="#">Next</a></li>
          </ul>
        </div>
        </div>
      </div>
    </div>

    <div id="aspot-video-container" style="display: none"></div>
  </div>
  <!-- END A-SPOT -->

  <!-- BEGIN B-C SPOTS -->
  <div class="inner-wrapper panel-row promo-ads-panel expandable-container show-toggle-processed">
    <div class="expandable-content" style="overflow: hidden;">
      <div class="panel-panel panel-two panel-col1">
        <div class="panel-pane pane-entity-field pane-node-field-usa-tv-promo pane-expandable">
          <div class="pane-content">
            <ul class="field field-name-field-usa-tv-promo field-type-entityreference field-label-hidden first-promo-large">
              <!-- BEGIN B-SPOT -->
              <li>
                <div class="node node-usanetwork-promo view-mode-promo_teaser_large" omniture-title="Benched: Promo: E-cards" omniture-id="/node/53956/revisions/282211/view" role="article">
                  <a href="http://www.usanetwork.com/benched/videos/congrats-on-your-promotion" class="promo-link omniture-tracking-processed">
                    <div class="asset-img-large"><img src="http://www.usanetwork.com/sites/usanetwork/files/styles/615x250/public/promo_wide/benched_videocard_1230x500_crop.jpg?itok=-Tv3TM4s" width="615" height="250" alt=""></div>
                    <div class="asset-img"><img src="http://www.usanetwork.com/sites/usanetwork/files/styles/300x250/public/promo_regular/benched_promo_videocard_600x500.jpg?itok=oOfzyUmA" width="300" height="250" alt=""></div>
                    <div class="caption-overlay meta">
                      <div class="caption-fields-wrapper">
                        <div class="promo-cta">
                          <div class="field field-name-field-call-to-action-type field-type-taxonomy-term-reference field-label-hidden">
                            <div class="ds-1col taxonomy-term vocabulary-cta-type view-mode-full clearfix ">
                              <img src="http://www.usanetwork.com/sites/usanetwork/files/aspot_icon_watch.png" width="150" height="150" alt="">
                            </div>
                          </div>
                        </div>
                        <div class="title">
                          <div class="field field-name-field-promo-text-line-1 field-type-text field-label-hidden">
                            <h3>Speechless?</h3>
                          </div>
                        </div>
                        <div class="title-wide">
                          <div class="field field-name-field-promo-text-line-1-wide field-type-text field-label-hidden">
                            <h3>Some Moments Are Hard To Put Into Words</h3>
                          </div>
                        </div>
                        <div class="caption">
                          <div class="field field-name-field-promo-text-line-2 field-type-text field-label-hidden">Try Benched E-Cards</div>
                        </div>
                        <div class="caption-wide">
                          <div class="field field-name-field-promo-text-line-2-wide field-type-text field-label-hidden">Say it with Benched E-Cards</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
              <!-- END B-SPOT -->

              <!-- BEGIN C-SPOT -->
              <li>
              <div class="node node-usanetwork-promo view-mode-promo_teaser" omniture-title="Benched: Promo: GIF recap" omniture-id="/node/53936/revisions/280576/view" role="article">
              <a href="
              http://www.usanetwork.com/benched/episodes/1-1" target="_self" class="promo-link omniture-tracking-processed">
              <div class="asset-img"><img src="http://www.usanetwork.com/sites/usanetwork/files/styles/300x250/public/promo_regular/Promo-600-x-500_0.gif?itok=TGWRCexg" width="300" height="250" alt=""></div>
              <div class="caption-overlay meta">
              <div class="caption-fields-wrapper">
              <div class="title">
              <div class="field field-name-field-promo-text-line-1 field-type-text field-label-hidden">
              <h3>Missed An Episode?</h3>  </div>
              </div>
              <div class="title-wide">
              <div class="field field-name-field-promo-text-line-1-wide field-type-text field-label-hidden">
              <h3>Missed An Episode?</h3>  </div>
              </div>
              <div class="caption">
              <div class="field field-name-field-promo-text-line-2 field-type-text field-label-hidden">
              See the GIF recap  </div>
              </div>
              <div class="caption-wide">
              <div class="field field-name-field-promo-text-line-2-wide field-type-text field-label-hidden">
              See the GIF recap  </div>
              </div>
              </div>
              </div>
              </a>
              </div>
              </li>
              <!-- END C-SPOT -->
            </ul>
          </div>
        </div>
      </div>

      <!-- BEGIN 300 X 250 AD -->
      <div class="panel-panel panel-three panel-col2">
        <div class="panel-pane pane-block pane-dart-dart-tag-300x250-scr">
          <div class="pane-content">
            <div class="dart-tag dart-name-300x250_scr">
              Ad goes here!!
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END B-C SPOTS -->

  <!-- BEGIN MEET THE CAST -->
  <div class="panel-pane pane-views pane-usa-cast carousel" id="cast-carousel">
    <div class="view view-usa-cast view-id-usa_cast view-display-id-block_1 view-dom-id-e45b7c2ed5f79dbb425b8f9ccdfdd5b3">
      <div class="view-content">
        <div class="item-list">
          <div class="cast-carousel carousel" style="display: block; text-align: start; float: none; position: relative; top: auto; right: auto; bottom: auto; left: auto; z-index: auto; width: 944px; height: 184px; margin: 0px; overflow: hidden; cursor: move;">
            <ul class="slides" style="text-align: left; float: none; position: absolute; top: 0px; right: auto; bottom: auto; left: 0px; margin: 0px; width: 4248px; height: 184px;">
              <li class="views-row views-row-1 views-row-odd views-row-first carousel-item active" data-flexindex="0">
                <div class="node node-person view-mode-cast_carousel carousel-item-wrapper">
                  <a class="article-link" href="/benched/cast/benched">
                  <div class="item-content">
                  <div class="field field-name-title field-type-ds field-label-hidden"><div class="field-items"><div class="field-item even"><h4>Benched</h4></div></div></div>
                  <div class="field field-name-field-role field-type-taxonomy-term-reference field-label-hidden">
                  About The Show  </div>
                  </div>
                  <figure class="item-image">
                  <div class="field field-name-field-usa-character-thumb field-type-file field-label-hidden">
                  <div id="file-288511" class="file file-image file-image-jpeg view-mode-block_cover_title">
                  <div class="content">
                  <img src="http://www.usanetwork.com/sites/usanetwork/files/styles/gallery_block_cover/public/profiles_carousel_about.jpg?itok=E7YZCcwr" width="268" height="223" alt="" title="">  </div>
                  </div>
                  </div>
                  </figure>
                  </a>
                </div>
              </li>
              <li class="views-row views-row-2 views-row-even carousel-item" data-flexindex="1">
                <div class="node node-person view-mode-cast_carousel carousel-item-wrapper">
                  <a class="article-link" href="/benched/cast/nina">
                  <div class="item-content">
                  <div class="field field-name-title field-type-ds field-label-hidden"><div class="field-items"><div class="field-item even"><h4>Nina</h4></div></div></div>
                  <div class="field field-name-field-role field-type-taxonomy-term-reference field-label-hidden">
                  played by Eliza Coupe  </div>
                  </div>
                  <figure class="item-image">
                  <div class="field field-name-field-usa-character-thumb field-type-file field-label-hidden">
                  <div id="file-288286" class="file file-image file-image-jpeg view-mode-block_cover_title">
                  <div class="content">
                  <img src="http://www.usanetwork.com/sites/usanetwork/files/styles/gallery_block_cover/public/profiles_carousel_nina.jpg?itok=Qm27KFMc" width="268" height="223" alt="" title="">  </div>
                  </div>
                  </div>
                  </figure>
                  </a>
                </div>
              </li>
              <li class="views-row views-row-3 views-row-odd carousel-item" data-flexindex="2">
                <div class="node node-person view-mode-cast_carousel carousel-item-wrapper">
                  <a class="article-link" href="/benched/cast/phil">
                  <div class="item-content">
                  <div class="field field-name-title field-type-ds field-label-hidden"><div class="field-items"><div class="field-item even"><h4>Phil</h4></div></div></div>
                  <div class="field field-name-field-role field-type-taxonomy-term-reference field-label-hidden">
                  played by Jay Harrington  </div>
                  </div>
                  <figure class="item-image">
                  <div class="field field-name-field-usa-character-thumb field-type-file field-label-hidden">
                  <div id="file-288311" class="file file-image file-image-jpeg view-mode-block_cover_title">
                  <div class="content">
                  <img src="http://www.usanetwork.com/sites/usanetwork/files/styles/gallery_block_cover/public/profiles_carousel_phil_0.jpg?itok=sfplERzM" width="268" height="223" alt="" title="">  </div>
                  </div>
                  </div>
                  </figure>
                  </a>
                </div>
              </li>
              <li class="views-row views-row-4 views-row-even carousel-item" data-flexindex="3">
                <div class="node node-person view-mode-cast_carousel carousel-item-wrapper">
                  <a class="article-link" href="/benched/cast/trent">
                  <div class="item-content">
                  <div class="field field-name-title field-type-ds field-label-hidden"><div class="field-items"><div class="field-item even"><h4>Trent</h4></div></div></div>
                  <div class="field field-name-field-role field-type-taxonomy-term-reference field-label-hidden">
                  played by Carter MacIntyre  </div>
                  </div>
                  <figure class="item-image">
                  <div class="field field-name-field-usa-character-thumb field-type-file field-label-hidden">
                  <div id="file-288266" class="file file-image file-image-jpeg view-mode-block_cover_title">
                  <div class="content">
                  <img src="http://www.usanetwork.com/sites/usanetwork/files/styles/gallery_block_cover/public/profiles_carousel_trent.jpg?itok=1lZcQ-6C" width="268" height="223" alt="" title="">  </div>
                  </div>
                  </div>
                  </figure>
                  </a>
                </div>
              </li>
              <li class="views-row views-row-5 views-row-odd carousel-item" data-flexindex="4">
                <div class="node node-person view-mode-cast_carousel carousel-item-wrapper">
                  <a class="article-link" href="/benched/cast/carlos">
                  <div class="item-content">
                  <div class="field field-name-title field-type-ds field-label-hidden"><div class="field-items"><div class="field-item even"><h4>Carlos</h4></div></div></div>
                  <div class="field field-name-field-role field-type-taxonomy-term-reference field-label-hidden">
                  played by Oscar Nunez  </div>
                  </div>
                  <figure class="item-image">
                  <div class="field field-name-field-usa-character-thumb field-type-file field-label-hidden">
                  <div id="file-288236" class="file file-image file-image-jpeg view-mode-block_cover_title">
                  <div class="content">
                  <img src="http://www.usanetwork.com/sites/usanetwork/files/styles/gallery_block_cover/public/profiles_carousel_carlos.jpg?itok=zxiVT1JB" width="268" height="223" alt="" title="">  </div>
                  </div>
                  </div>
                  </figure>
                  </a>
                </div>
              </li>
              <li class="views-row views-row-6 views-row-even carousel-item" data-flexindex="5">
                <div class="node node-person view-mode-cast_carousel carousel-item-wrapper">
                  <a class="article-link" href="/benched/cast/micah">
                  <div class="item-content">
                  <div class="field field-name-title field-type-ds field-label-hidden"><div class="field-items"><div class="field-item even"><h4>Micah</h4></div></div></div>
                  <div class="field field-name-field-role field-type-taxonomy-term-reference field-label-hidden">
                  played by Jolene Purdy  </div>
                  </div>
                  <figure class="item-image">
                  <div class="field field-name-field-usa-character-thumb field-type-file field-label-hidden">
                  <div id="file-288256" class="file file-image file-image-jpeg view-mode-block_cover_title">
                  <div class="content">
                  <img src="http://www.usanetwork.com/sites/usanetwork/files/styles/gallery_block_cover/public/profiles_carousel_micah.jpg?itok=kKeLpw5W" width="268" height="223" alt="" title="">  </div>
                  </div>
                  </div>
                  </figure>
                  </a>
                </div>
              </li>
              <li class="views-row views-row-7 views-row-odd views-row-last carousel-item" data-flexindex="6">
                <div class="node node-person view-mode-cast_carousel carousel-item-wrapper">
                  <a class="article-link" href="/benched/cast/sheryl">
                    <div class="item-content">
                      <div class="field field-name-title field-type-ds field-label-hidden">
                        <div class="field-items">
                          <div class="field-item even"><h4>Sheryl</h4></div>
                        </div>
                      </div>
                      <div class="field field-name-field-role field-type-taxonomy-term-reference field-label-hidden">
                    played by Maria Bamford  </div>
                    </div>
                    <figure class="item-image">
                      <div class="field field-name-field-usa-character-thumb field-type-file field-label-hidden">
                        <div id="file-288301" class="file file-image file-image-jpeg view-mode-block_cover_title">
                          <div class="content">
                            <img src="http://www.usanetwork.com/sites/usanetwork/files/styles/gallery_block_cover/public/profiles_carousel_sheryl_1.jpg?itok=PKIGt156" width="268" height="223" alt="" title="">
                          </div>
                        </div>
                      </div>
                    </figure>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="carousel-btns">
          <div class="prev btns icon-arrow2-left" style="display: block;">Previous</div>
          <div class="next btns icon-arrow2" style="display: block;">Next</div>
        </div>
      </div>
    </div>
  </div>
  <!-- END MEET THE CAST -->
  </section>
  <!-- /HOME -->
        <?php
        break;
      case 'about':
        ?>
  <?php print str_replace('XXX', 'about', $section_separator); ?>

  <!-- ABOUT -->
  <a name="<?php print $type; ?>"></a>
  <section id="<?php print $type; ?>" class="clearfix loaded" style="height: 1144px;"><div class="left-pane">
    <div class="caption">
      <ul>
        <li class="active" style="display: block;">
          <div class="quote">"...keeps you on the edge of your seat..."</div>
          <div class="quote-source">- Variety</div>
        </li>
        <li class="" style="display: none;">
          <div class="quote">"We're looking forward to this!"</div>
          <div class="quote-source">- USA Network Digital Team</div>
        </li>
      </ul>
    </div>
  </div>

  <div class="right-pane">
    <h2><?php print $array['title']; ?></h2>
    <div class="underline"></div>
    <div class="text">
      <?php print $array['description']; ?>
    </div>
    <div class="ad300x250"><center><iframe id="adIframe_300x250_1" src="ad300x250.html" frameborder="0" width="300" height="250" scrolling="no"></iframe></center></div>
  </div><!-- .right-pane -->
  </section>
  <!-- /ABOUT -->
        <?php
        break;
      case 'characters':
        ?>
  <?php print str_replace('XXX', 'characters', $section_separator); ?>

  <!-- CHARACTERS -->
  <a name="<?php print $type; ?>"></a>
  <section id="<?php print $type; ?>" class="clearfix">
    <ul>
      <li id="jason-isaacs">
        <div class="left-pane">
          <div class="caption">
            <ul>
              <li class="active">
                <div class="quote">"Jason Isaacs is brilliant..."</div>
                <div class="quote-source">- Entertainment Weekly</div>
              </li>
              <li>
                <div class="quote">"What acting!"</div>
                <div class="quote-source">- USA Network Digital Team</div>
              </li>
              <li>
                <div class="quote">"Whoa! Look out world!"</div>
                <div class="quote-source">- USA Network Digital Team</div>
              </li>
            </ul>
          </div>
        </div>

        <div class="right-pane">
          <h2><?php print $array['title']; ?></h2>
          <div class="underline"></div>

          <div id="character-nav">
            <div class="prev"><span><</span></div>
            <ul>
              <li>&nbsp;<div class="tooltip"><img src="images/characters/char_jason_isaacs.jpg" /><div>Jason Isaacs</div></div></li>
              <li>&nbsp;<div class="tooltip"><img src="images/characters/char_emma_wilson.jpg" /><div>Emma Wilson</div></div></li>
              <li>&nbsp;<div class="tooltip"><img src="images/characters/char_donna_vaughan.jpg" /><div>Donna Vaughan</div></div></li>
            </ul>
            <div class="next"><span>></span></div>
          </div>

          <h3>Jason Isaacs</h3>

          <div class="text">
            <p>Jason Isaacs was born in Liverpool, the third of four children of Sheila (Nathan) and Eric Isaacs. His parents were both from Jewish families (from Eastern Europe). He studied Law at Bristol Univesity and graduated in 1985 with a degree in law but decided to study acting. Whilst at Bristol University he directed and/or appeared in over 20 productions. he then attended th eCentral School of Speech and Drama and graduated in 1989.</p>
            <p>Jason's notable roles include Col. William Tavington in the <b>Patriot</b> (2000), Lucius Malfoy in the <b>Harry Potter</b>films, Mr. Darling / Captain Hook in <b>Peter Pan</b> (2003), and Maurice in <b>Good</b> (2008). In 2014, he will appear with Brad Pitt, Shia Labeouf, Logan Lerman, and Jon Bernthal in the World War II-set film <b>Fury</b> (2014).</p>
          </div>
          <div class="ad300x250"><center><iframe id="adIframe_300x250_1" src="ad300x250.html" frameborder="0" width="300" height="250" scrolling="no"></iframe></center></div>
        </div>
      </li>

      <li id="emma-wilson">
        <div class="left-pane">
          <div class="caption">
            <div class="quote">"Emma Wilson is brilliant..."</div>
            <div class="quote-source">- Entertainment Weekly</div>
          </div>
        </div>

        <div class="right-pane">
          <h2>Characters</h2>
          <div class="underline"></div>

          <div id="character-nav">
            <div class="prev"><span><</span></div>
            <ul>
              <li>&nbsp;<div class="tooltip"><img src="images/characters/char_jason_isaacs.jpg" /><div>Jason Isaacs</div></div></li>
              <li>&nbsp;<div class="tooltip"><img src="images/characters/char_emma_wilson.jpg" /><div>Emma Wilson</div></div></li>
              <li>&nbsp;<div class="tooltip"><img src="images/characters/char_donna_vaughan.jpg" /><div>Donna Vaughan</div></div></li>
            </ul>
            <div class="next"><span>></span></div>
          </div>

          <h3>Emma Wilson</h3>

          <div class="text">
            <p>Emma Wilson lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa </p>
            <p>Emma's notable roles include Col. William Tavington in the <b>Patriot</b> (2000), Lucius Malfoy in the <b>Harry Potter</b>films, Mr. Darling / Captain Hook in <b>Peter Pan</b> (2003), and Maurice in <b>Good</b> (2008). In 2014, he will appear with Brad Pitt, Shia Labeouf, Logan Lerman, and Jon Bernthal in the World War II-set film <b>Fury</b> (2014).</p>
          </div>
          <div class="ad300x250"><center><iframe id="adIframe_300x250_1" src="ad300x250.html" frameborder="0" width="300" height="250" scrolling="no"></iframe></center></div>
        </div>
      </li>

      <li id="donna-vaughan">
        <div class="left-pane">
          <div class="caption">
            <div class="quote">"Jason Isaacs is brilliant..."</div>
            <div class="quote-source">- Entertainment Weekly</div>
          </div>
        </div>

        <div class="right-pane">
          <h2>Characters</h2>
          <div class="underline"></div>

          <div id="character-nav">
            <div class="prev"><span><</span></div>
            <ul>
              <li>&nbsp;<div class="tooltip"><img src="images/characters/char_jason_isaacs.jpg" /><div>Jason Isaacs</div></div></li>
              <li>&nbsp;<div class="tooltip"><img src="images/characters/char_emma_wilson.jpg" /><div>Emma Wilson</div></div></li>
              <li>&nbsp;<div class="tooltip"><img src="images/characters/char_donna_vaughan.jpg" /><div>Donna Vaughan</div></div></li>
            </ul>
            <div class="next"><span>></span></div>
          </div>

          <h3>Donna Vaughan</h3>

          <div class="text">
            <p>Wahoo! I made it on the Dig site!</p>
            <p>Donna's notable roles include Col. William Tavington in the <b>Patriot</b> (2000), Lucius Malfoy in the <b>Harry Potter</b>films, Mr. Darling / Captain Hook in <b>Peter Pan</b> (2003), and Maurice in <b>Good</b> (2008). In 2014, he will appear with Brad Pitt, Shia Labeouf, Logan Lerman, and Jon Bernthal in the World War II-set film <b>Fury</b> (2014).</p>
          </div>
          <div class="ad300x250"><center><iframe id="adIframe_300x250_1" src="ad300x250.html" frameborder="0" width="300" height="250" scrolling="no"></iframe></center></div>
        </div>
      </li>
    </ul>
  </section>
  <!-- /CHARACTERS -->
        <?php
        break;
      case 'galleries':
        break;
      case 'games':
        break;

    }
  }
}
?>


  <!-- LEFT NAV -->
  <div id="left-nav">
    <div id="left-nav-inner" class="hide">
      <div id="left-nav-logo"></div>
      <div id="left-nav-tunein"><?php print $tune_in; ?></div>
      <div id="left-nav-social" class="clearfix">
        <a class="facebook" href="https://www.facebook.com/USANetwork"></a>
        <a class="twitter" href="https://twitter.com/usa_network"></a>
        <a class="instagram" href="http://instagram.com/USANetwork"></a>
      </div>
      <div id="left-nav-links">
        <ul>
          <?php
          foreach($section as $key => $array) {
            if ($array['section_enabled']) {
              print '<li id="nav-' . $array['type'] . '">' . $array['title'] . '</li>';
            }
          }
          ?>
<!--          <li id="nav-videos">Videos</li>
          <li id="nav-about">About</li>
          <li id="nav-characters">Characters</li>
          <li id="nav-galleries">Gallery</li>
          <li id="nav-games">Games
            <ul>
              <li>Ancient Artifacts Trivia Quiz 1</li>
              <li>Scavenger Hunt</li>
            </ul>
          </li> -->
          <li>Dig Decoded</li>
          <li>Wattpad</li>
        </ul>
      </div>
    </div>
  </div>
  <!-- /LEFT NAV -->

</div><!-- #show-microsite -->
