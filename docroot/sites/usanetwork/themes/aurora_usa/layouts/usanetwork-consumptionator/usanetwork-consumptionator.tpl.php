<?php
/**
 *
 */
?>
<header data-rel="header-nav-bar">
  <?php print $content['reg_upper_elements']; ?>
</header>
<div id="main">
  <div class="video-block">
    <div class="player-wrapper">
      <?php print $content['reg_player_wrapper']; ?>
    </div>
    <div class="consum-sidebar">
      <?php print $content['reg_consumer_sidebar']; ?>
    </div>
  </div>
  <div class="consumptionator-full-episodes carousel-block carousel-block-left">
    <?php print $content['reg_full_episodes']; ?>
  </div>
  <div class="consumptionator-content-block">
    <div class="show-content">
      <?php print $content['reg_related_content']; ?>
    </div>
    <div class="see-also-content">
      <?php print $content['reg_ymal_content']; ?>
    </div>
  </div>
  <a class="more-bottom-button">LOAD MORE</a>
</div>
