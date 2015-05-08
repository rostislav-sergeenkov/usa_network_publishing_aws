<?php
/**
 * Template for usanetwork-mpx-video-full-video-advert.
 */
?>
<div class="companionContainer">
  <?php if ($ad): ?>
    <div class="ad_dart" <?php ($full_episode) ? print "data-ng-show=\"isDartReq\"" : ''; ?>><?php print $ad; ?></div>
    <?php if ($full_episode) : ?>
      <div class="ad_lead" data-ng-show="isFreeWheelReq"><div id="ad_728x90_1"></div></div>
    <?php endif;?>
  <?php endif; ?>
</div>
