<?php
function ds_global_nav_img() {
  return array(
    'label' => t('Global Nav Image'),
    'regions' => array(
      'media' => t('Media'),
      'link' => t('link')
    ),
    'css' => false,
    'image' => false
  );
}
