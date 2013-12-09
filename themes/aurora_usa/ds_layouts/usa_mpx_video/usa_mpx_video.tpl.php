<?php

//$field_mpx_full_episode = field_get_items('file', $file, 'field_mpx_full_episode');
//$full_episode = isset($field_mpx_full_episode[0]['value']) ? $field_mpx_full_episode[0]['value'] : '';

$field_mpx_description = field_get_items('file', $file, 'field_mpx_description');
$body = isset($field_mpx_description[0]['safe_value']) ? $field_mpx_description[0]['safe_value'] : '';
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
  <div class="video-player-wrapper">
    <?php 
      $video = theme('pub_mpx_video', array('file' => $file));
      print $video;
    ?>
  </div>
  <?php if ($body && $body != "&nbsp;"): ?><div class="description"><?php print $body; ?></div><?php endif; ?>

</div>
