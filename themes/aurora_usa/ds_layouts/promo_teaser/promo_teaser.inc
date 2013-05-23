<?php
function ds_promo_teaser() {
  return array(
    'label' => t('Promo teaser'),
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
