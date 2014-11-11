<?php
function ds_video_mpx_teaser() {
  return array(
    'label' => t('video mpx teaser'),
    'regions' => array(
      'media' => t('Media'),
      'title' => t('Title'),
      'caption' => t('Caption'),
      'meta' => t('Meta and Time')
    ),
    'css' => false,
    'image' => false
  );
}
