<div class="panel-display panel-onecol-stacked clearfix">
  <div class="panel-wrapper">
    <div class="panel-panel panel-one panel-row first-row a-spot-panel">
    <?php print $content['one']; ?>
    </div>
    <div class="inner-wrapper panel-row video-ads-panel">
      <div class="panel-panel panel-two panel-col1">
        <?php print $content['two']; ?>
      </div>
      <div class="panel-panel panel-three panel-col2">
        <?php print $content['three']; ?>
      </div>
    </div>
    <div class="panel-panel panel-four panel-row promo-panel">
      <?php print $content['four']; ?>
    </div>
    <?php ($content['six']) ? $class = 'panel-two-cols' : ''; ?>
    <div class="inner-wrapper panel-row last-row social-panel <?php print $class; ?>">
      <div class="panel-panel panel-five panel-col1">
        <?php print $content['five']; ?>
      </div>
      <div class="panel-panel panel-six panel-col2">
        <?php print $content['six']; ?>
      </div>
    </div>
  </div>
</div>
