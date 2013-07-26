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
    </div>
  <?php endif; ?>
    <?php if($content['four'] || $content['three']) : ?>
    <div class="inner-wrapper panel-row promo-ads-panel expandable-container">
      <?php print '<h2 class="pane-title">' . t('Featured') . '</h2>'; ?>
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
      <?php print '<h2 class="pane-title">' . t('Videos') . '</h2>'; ?>
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
      <?php print '<h2 class="pane-title">' . t('Social') . '</h2>'; ?>
      <div class="panel-panel panel-five panel-col1">
        <?php print $content['five']; ?>
      </div>
      <div class="panel-panel panel-six panel-col2">
        <?php print $content['six']; ?>
      </div>
    </div>
  <?php endif; ?>
  </div>
</div>
