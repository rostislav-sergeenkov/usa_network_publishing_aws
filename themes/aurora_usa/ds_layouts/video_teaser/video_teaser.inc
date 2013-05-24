<?php
function ds_video_teaser() {
  return array(
    'label' => t('Video teaser'),
    'regions' => array(
      'media' => t('Media'),
      'title' => t('Title'),
      'caption' => t('Caption'),
      'link' => t('link')
    ),
    'css' => false,
    'image' => false
  );
}
