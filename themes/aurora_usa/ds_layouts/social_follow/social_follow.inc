<?php
function ds_social_follow() {
  return array(
    'label' => t('Follow Social'),
    'regions' => array(
      'media' => t('Media'),
      'title' => t('Title'),
      'social' => t('Social')
    ),
    'css' => 'social-follow',
    'image' => false
  );
}