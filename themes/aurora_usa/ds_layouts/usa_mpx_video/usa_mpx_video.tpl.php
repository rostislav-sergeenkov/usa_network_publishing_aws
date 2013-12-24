<?php

//$field_mpx_full_episode = field_get_items('file', $file, 'field_mpx_full_episode');
//$full_episode = isset($field_mpx_full_episode[0]['value']) ? $field_mpx_full_episode[0]['value'] : '';

$field_mpx_description = field_get_items('file', $file, 'field_mpx_description');
$body = isset($field_mpx_description[0]['safe_value']) ? $field_mpx_description[0]['safe_value'] : '';

$field_mpx_entitlement = field_get_items('file', $file, 'field_mpx_entitlement');
$lock_video = ($field_mpx_entitlement[0]['safe_value'] === 'auth') ? TRUE : FALSE;

if (isset($_COOKIE['nbcu_user_settings']) && ($_COOKIE['nbcu_user_settings'] != NULL)) {
  $nbcu_auth = FALSE;
  
  $menu_items = _usa_auth_prepare_menu_items();
    
  $links = array(
    '#theme' => 'item_list',
    '#items' => $menu_items,
    '#attributes' => array('class' => array('tve-header-links', 'inline')),
    '#prefix' => '<div class="links-wrapper">',
    '#suffix' => '</div>',
  );
} else {
  if ($lock_video) {
    $nbcu_auth = TRUE;
  } else {
    $nbcu_auth = FALSE;
}
}

//  return drupal_render($links);

//$nbcu_user_settings = $_COOKIE['nbcu_user_settings'];
//
//$nbcu_auth = $nbcu_user_settings ? TRUE : FALSE;
//  
//$nbcu_auth = drupal_json_decode($nbcu_user_settings);

?>

<div class="<?php print $classes;?> video usa-video featured-asset premium-asset clearfix">

  <div class="meta">
    <div class="meta-head">
      <?php if ($show && $show != "&nbsp;"): ?><h1 class="show-name"><?php print $show; ?></h1><?php endif; ?>
      <?php if ($video_title && $video_title != "&nbsp;"): ?><h2 class="episode-title"><?php print $video_title; ?></h2><?php endif; ?>
       <div class="details">
      <?php if ($season && $season != "&nbsp;"): ?><span class="season-info"><?php print $season; ?></span><?php endif; ?>
      <?php if ($episode && $episode != "&nbsp;"): ?><span class="episode-info"><?php print $episode; ?></span><?php endif; ?>
      <?php if ($airdate && $airdate != "&nbsp;"): ?><span class="episode-info"><?php print $airdate; ?></span><?php endif; ?>
    </div>
    </div>
  </div>
  <?php if ($nbcu_auth) : ?>
  <div class="video-player-wrapper">
      <div class="tve-help">
        <!-- <img class ="arrow" src="/sites/usanetwork/themes/aurora_usa/images/arrow2.png" /> -->
        <div class="tve-msg">By signing in with your TV provider you get access to full<br />episodes the day after they air! Otherwise you may have to<br /> wait up to 30 days to watch most full episodes.</div>
        <div class="tve-download">To unlock full episodes you can select an episode to sign in<br />- or -<br />DOWNLOAD THE USA NOW APP</div>
        <div class="tve-download-link">
          <a href="https://play.google.com/store/apps/details?id=com.usanetwork.watcher"><img src="/sites/usanetwork/themes/aurora_usa/images/googleplay.png" /></a>
          <a href="http://www.usanetwork.com/usanow"><img src="/sites/usanetwork/themes/aurora_usa/images/usanow.png" /></a>
          <a href="https://itunes.apple.com/us/app/usa-now/id661695783?mt=8"><img src="/sites/usanetwork/themes/aurora_usa/images/appstore.png" /></a>
        </div>
        <div class="tve-close"><img src="/sites/usanetwork/themes/aurora_usa/images/close.png" />Close</div>
      </div>
      <div class="locked-msg"><?php print t('Please sign in with your TV provider<br />to unlock this episode.'); ?></div>
      <div id="player">
        <a href="javascript:void(0)" class="loginButton clean ng-scope" data-ng-if="!global.isAuthN" data-ng-click="openLoginWindow()">
          <?php $image = media_theplatform_mpx_file_formatter_image_view($file, array('settings'=> array('image_style'=>'video_full')), '');
          print drupal_render($image); ?>
        </a>
      </div>
    </div>
    <div class="tve-help-link"><img src="/sites/usanetwork/themes/aurora_usa/images/info_gray.png" />Why do I have to sign in?</div>
  <?php else : ?>
    <div class="video-player-wrapper">
      <?php 
        $video = theme('pub_mpx_video', array('file' => $file));
        print $video;
      ?>
    </div>
    <div class="tve-help-link"><?php print drupal_render($links); ?></div>
  <?php endif; ?>
  <?php if ($body && $body != "&nbsp;"): ?><div class="description"><?php print $body; ?></div><?php endif; ?>

</div>
