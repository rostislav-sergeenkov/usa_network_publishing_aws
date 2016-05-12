<div class="panel-display panel-onecol-stacked clearfix">
  <div class="panel-wrapper">
    <?php if ($content['one']) : ?>
      <div class="panel-panel panel-one panel-row first-row usa-show-aspot">
        <?php print $content['one']; ?>
      </div>
    <?php endif; ?>
    <?php if ($content['two']) : ?>
      <div class="panel-panel panel-two panel-row b-c-d-block">
        <?php print $content['two']; ?>
      </div>
    <?php endif; ?>
    <?php if ($content['three']) : ?>
      <div class="panel-panel panel-three panel-row best-of-section">
        <?php print $content['three']; ?>
      </div>
    <?php endif; ?>
    <?php if ($content['four']) : ?>
      <div class="panel-panel panel-four panel-row latest-episodes-block">
        <?php print $content['four']; ?>
      </div>
    <?php endif; ?>
    <?php if ($content['five']) : ?>
      <div class="panel-panel panel-five panel-row articles-block">
        <?php print $content['five']; ?>
      </div>
    <?php endif; ?>
    <?php if($content['six']) : ?>
    <div class="panel-panel panel-six panel-row show-related-content-block">
      <?php print $content['six']; ?>
    </div>
  </div>
  <?php endif; ?>
</div>
