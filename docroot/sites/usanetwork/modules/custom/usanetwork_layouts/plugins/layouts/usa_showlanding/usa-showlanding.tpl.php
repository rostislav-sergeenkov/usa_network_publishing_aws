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
    <div class="inner-wrapper panel-row latest-panel">
      <div class="panel-panel panel-two panel-col1">
        <?php print $content['four']; ?>
      </div>
      <div class="panel-panel panel-three panel-col2">
        <?php print $content['three']; ?>
      </div>
    </div>
  <?php endif; ?>
    <?php if($content['two']) : ?>
    <div class="panel-panel panel-four panel-row catch-up-explore-panel">
      <?php print $content['two']; ?>
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
