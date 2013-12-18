<?php

$url = drupal_lookup_path('alias',"file/" . $variables['file']->fid);

$image = media_theplatform_mpx_file_formatter_image_view($file, array('settings'=> array('image_style'=>'300x169_video')), '');


$field_mpx_entitlement = field_get_items('file', $file, 'field_mpx_entitlement');
$lock_video = ($field_mpx_entitlement[0]['safe_value'] == 'auth') ? 'tve-video-auth' : '';
?>

<div class="<?php print $classes . ' ' . $lock_video; ?>">
  <a class="item-link" href="/<?php print $url; ?>">
   <?php if ($media): ?>
    <div class="asset-img">
      <?php print drupal_render($image); ?>
     </div>
   <?php endif; ?>
    <div class="caption-overlay meta">
      <div class="caption-fields-wrapper">
       <?php if ($title && $title != "&nbsp;"): ?>
        <div class="title"><?php print $title; ?></div>
       <?php endif; ?>
       <?php if ($caption && $caption != "&nbsp;"): ?>
        <div class="caption"><?php print $caption; ?></div>
       <?php endif; ?>
      </div>
    </div>
  </a>
</div>
