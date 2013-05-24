<?php
  $class = '';
  if ($content['six']) {
    $class = 'panel-two-cols';
  }
?>
<div class="panel-display panel-onecol-stacked clearfix">
  <div class="panel-wrapper">
    <div class="panel-panel panel-one panel-row first-row a-spot-panel">
    <?php print $content['one']; ?>
    </div>
    <div class="inner-wrapper panel-row video-promo-ads-panel expandable-container">
      <?php print '<h2 class="pane-title">' . t('Videos') . '</h2>'; ?>
      <div class="expandable-content">
        <div class="panel-panel panel-two panel-col1">
          <?php print $content['two']; ?>
        </div>
        <div class="panel-panel panel-three panel-col2">
          <?php print $content['three']; ?>
        </div>
       </div>
       <div class="expandable-toggle-wrap">
        <div class="expandable-toggle">
              <div class="more">more</div>
              <div class="less">close</div>
          </div>
        </div>
    </div>
    <div class="panel-panel panel-four panel-row promo-panel expandable-container">
      <?php print '<h2 class="pane-title">' . t('The Latest') . '</h2>'; ?>
      <div class="expandable-content">
          <?php print $content['four']; ?>
      </div>
      <div class="expandable-toggle-wrap">
        <div class="expandable-toggle">
              <div class="more">more</div>
              <div class="less">close</div>
          </div>
        </div>
    </div>
    <div class="inner-wrapper panel-row last-row social-panel <?php print $class; ?>">
      <?php print '<h2 class="pane-title">' . t('Social') . '</h2>'; ?>
      <div class="panel-panel panel-five panel-col1">
        <?php print $content['five']; ?>
      </div>
      <div class="panel-panel panel-six panel-col2">
        <?php print $content['six']; ?>
      </div>
    </div>
  </div>
</div>
