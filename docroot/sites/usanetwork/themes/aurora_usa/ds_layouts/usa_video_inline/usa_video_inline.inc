<?php
function ds_usa_video_inline() {
  return array(
    'label' => t('usa video inline'),
    'regions' => array(
			'guid' => t('guid implements player'),
			'tve_auth' => t('tve video image'),
      'body' => t('body'),
    ),
    'css' => true,
    'image' => false
  );
}