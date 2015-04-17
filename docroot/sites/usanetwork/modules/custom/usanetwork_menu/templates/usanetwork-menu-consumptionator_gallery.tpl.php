<?php
/**
 *  Aviable variables.
 *  $main_url
 *  $show_url
 *  $show_name
 *  $gallery_name
 *  $details['image']
 *  $details['description']
 *  $details['gallery_type']
 */
?>
<div class="header-nav-bar">
  <div class="usa-logo show-color hover-avail"><a href="<?php print $main_url; ?>"></a></div>
  <div class="show-title-wrapper">
    <div class="show-title-block">
      <div class="tab show-color hover-avail show-name">
        <a href="<?php print $show_url; ?>">
          <span><?php print $show_name; ?></span>
        </a>
      </div>
      <div class="tab video-title">
        <h1><?php print $gallery_name; ?></h1>
      </div>
    </div>
  </div>
  <div class="nav-bar-tabs">
    <div class="tab info"><a data-state="active" href="#" class="no-refresh active"></a></div>
    <!--<div class="tab share"><a href="#" class="no-refresh"></a></div>-->
  </div>
</div>
<div style="display: block;" class="tab-item info-tab active">
   Lorem ipsum.
</div>
