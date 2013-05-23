<div class="panel-display panel-onecol-stacked clearfix">
  <div class="panel-wrapper">
    <div class="panel-panel panel-row first-row a-spot-panel">
    <?php print $content['one']; ?>
    </div>
    <div class="inner-wrapper panel-row video-ads-panel">
      <div class="panel-panel panel-two">
        <?php print $content['two']; ?>
      </div>
      <div class="panel-panel">
        <?php print $content['three']; ?>
      </div>
    </div>
    <div class="panel-panel panel-row promo-panel">
      <?php print $content['four']; ?>
    </div>
    <?php ($content['six']) ? $class = 'one-sidebar' : ''; ?>
    <div class="inner-wrapper panel-row last-row social-panel <?php print $class; ?>">
      <div class="panel-panel chatter-content">
        <?php print $content['five']; ?>
      </div>
      <div class="panel-panel sidebar">
        <?php print $content['six']; ?>
      </div>
    </div>
  </div>
</div>
