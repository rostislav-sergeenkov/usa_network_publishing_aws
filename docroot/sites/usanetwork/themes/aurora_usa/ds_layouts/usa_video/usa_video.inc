<?php
function ds_usa_video() {
  return array(
    'label' => t('usa video'),
    'regions' => array(
      'show' => t('show'),
      'video_title' => t('video title'),
      'season' => t('season'),
      'episode' => t('episode'),
      'airdate' => t('airdate'),
      'guid' => t('guid implements player'),
      'tve_auth' => t('tve video image'),
      'body' => t('body'),
      'ad' => t('ad')
    ),
    'css' => true,
    'image' => false
  );
}