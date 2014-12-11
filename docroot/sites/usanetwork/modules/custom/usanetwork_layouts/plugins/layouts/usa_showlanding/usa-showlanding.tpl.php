<?php
  $class = '';
  if ($content['six'] && $content['five']) {
    $class = 'panel-two-cols';
  }
?>
<div class="panel-display panel-onecol-stacked clearfix">
  <div class="panel-wrapper">
    <?php if($content['one']) : ?>
    <div class="panel-panel panel-one panel-row first-row a-spot-panel tiles">
      <div id="main-slider">
        <?php print $content['one']; ?>
      </div>
      <div id="aspot-video-container" style="display: none"></div>
    </div>
  <?php endif; ?>
    <?php if($content['four'] || $content['three']) : ?>
    <div class="inner-wrapper panel-row promo-ads-panel">
      <div class="expandable-content">
        <div class="panel-panel panel-two panel-col1">
          <?php print $content['four']; ?>
        </div>
        <div class="panel-panel panel-three panel-col2">
          <?php print $content['three']; ?>
        </div>
       </div>
       <?php if($content['four']): ?>
       <div class="expandable-toggle-wrap">
        <div class="expandable-toggle">
              <div class="more">more</div>
              <div class="less">close</div>
          </div>
        </div>
       <?php endif; ?>
    </div>
    <?php endif; ?>
    <?php if($content['two']) : ?>
    <div class="panel-panel panel-four panel-row video-promo-panel expandable-container">
      <div class="expandable-content">
          <?php print $content['two']; ?>
      </div>
      <div class="expandable-toggle-wrap">
        <div class="expandable-toggle">
              <div class="more">more</div>
              <div class="less">close</div>
          </div>
        </div>
    </div>
    <?php endif; ?>
     <?php if($content['five'] || $content['six']) : ?>
    <div class="inner-wrapper panel-row last-row social-panel <?php print $class; ?>">
      <?php if ($content['five']): ?>
        <div class="panel-panel panel-five panel-col1">
          <?php print $content['five']; ?>
        </div>
      <?php endif; ?>
      <?php if ($content['six']): ?>
        <div class="panel-panel panel-six panel-col2">
          <?php print $content['six']; ?>
        </div>
      <?php endif; ?>
    </div>
  <?php endif; ?>
  </div>
</div>
