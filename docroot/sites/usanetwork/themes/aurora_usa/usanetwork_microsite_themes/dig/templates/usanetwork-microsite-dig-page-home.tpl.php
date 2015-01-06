<?php
/**
 * Home page template
 *
 * Variables:
 * - $aspots - array of pre-rendered A-Spot elements
 * - $bspots - pre-rendered B-Spot element
 * - $cspots - pre-rendered C-Spot element
 * - $promo_carousel - array of pre-rendered promo-carousel items
 * - $background_url - the URL of page background
 */
?>
<?php if (!empty($background_url)): ?>
  <div class="microsite-section-container" data-bg-url="<?php print $background_url; ?>">
<?php else: ?>
  <div class="microsite-section-container" data-bg-url="">
<?php endif; ?>

  <div class="region region-content">
    <div class="panel-display panel-onecol-stacked clearfix">
      <div class="panel-wrapper">
        <?php if (!empty($aspots)): ?>
        <div class="panel-panel panel-one panel-row first-row a-spot-panel tiles">
          <div id="main-slider">
            <div id="show-aspot" class="panel-pane pane-entity-field pane-node-field-usa-tv-a-spot show-aspot">
              <div class="pane-content">
                <ul>
                  <?php foreach ($aspots as $aspot): ?>
                    <li>
                      <?php print $aspot; ?>
                    </li>
                  <?php endforeach; ?>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <?php endif; ?>

        <?php if (!empty($featured)): ?>
        <div class="inner-wrapper panel-row promo-ads-panel expandable-container show-toggle-processed">
          <div class="expandable-content" style="overflow: hidden;">
            <div class="panel-panel panel-two panel-col1">
              <div class="panel-pane pane-entity-field pane-node-field-usa-tv-promo pane-expandable">
                <div class="pane-content">
                  <ul class="field field-name-field-usa-tv-promo field-type-entityreference field-label-hidden first-promo-large">
                  <?php foreach ($featured as $feature): ?>
                    <li>
                      <?php print $feature; ?>
                    </li>
                  <?php endforeach; ?>
                  </ul>
                </div>
              </div>
            </div>
            <div class="panel-panel panel-three panel-col2">
              <div class="panel-pane pane-block pane-dart-dart-tag-300x250-scr">
                <div class="pane-content">
                  <div class="dart-tag dart-name-300x250_scr">




<script>
Drupal.DART.tag('{"machinename":"300x250_scr","name":"300x250 script","pos":"7","sz":"300x250","block":"1","settings":{"overrides":{"site":"","zone":"","slug":""},"options":{"scriptless":0,"method":"adj"},"key_vals":[]},"table":"dart_tags","type":"Overridden","export_type":3,"disabled":false,"export_module":"usanetwork_ads","key_vals":{"pos":[{"val":"7","eval":false}],"sz":[{"val":"300x250","eval":false}],"site":[{"val":"usa","eval":0}],"sect":[{"val":"Drupal.settings.USA.DART.values.sect || \u0027\u0027","eval":1}],"sub":[{"val":"Drupal.settings.USA.DART.values.sub || \u0027\u0027","eval":1}],"sub2":[{"val":"Drupal.settings.USA.DART.values.sub2 || \u0027\u0027","eval":1}],"genre":[{"val":"Drupal.settings.USA.DART.values.genre || \u0027\u0027","eval":1}],"daypart":[{"val":"Drupal.settings.USA.DART.values.genre || \u0027\u0027","eval":1}],"!c":[{"val":"usa","eval":0},{"val":"Drupal.settings.USA.DART.values.sect || \u0027\u0027","eval":1},{"val":"Drupal.settings.USA.DART.values.sub || \u0027\u0027","eval":1}],"tandomad":[{"val":"eTandomAd","eval":1}],"\u003Cnone\u003E":[{"val":"top.__nbcudigitaladops_dtparams || \u0027\u0027","eval":1}],"tile":[{"val":"tile++","eval":true}],"ord":[{"val":"ord","eval":true}]},"prefix":"nbcu","site":"usa","zone":"default","slug":"","network_id":"","noscript":{"src":"http:\/\/ad.doubleclick.net\/ad\/nbcu.usa\/default;pos=7;sz=300x250;site=usa;!c=usa;tile=3;ord=9082554752?","href":"http:\/\/ad.doubleclick.net\/jump\/nbcu.usa\/default;pos=7;sz=300x250;site=usa;!c=usa;tile=3;ord=9082554752?"},"mode":"test"}');
</script>









                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="expandable-toggle-wrap omniture-tracking-processed" style="display: none;">
            <div class="expandable-toggle">
              <div class="more">more</div>
              <div class="less">close</div>
            </div>
          </div>
        </div>
        <?php endif; ?>

        <?php if (!empty($characters_cast)): ?>
        <div class="characters-cast">
          <?php print $characters_cast; ?>
        </div>
        <?php endif; ?>

        <?php if (!empty($promo_carousel)): ?>
        <ul>
          <?php foreach ($promo_carousel as $carousel_item): ?>
          <li>
            <?php print $carousel_item; ?>
          </li>
          <?php endforeach; ?>
        </ul>
        <?php endif; ?>
      </div>
    </div>
  </div>
</div>
