<?php
function ds_home_promo() {
  return array(
    'label' => t('Homepage Promo'),
    'regions' => array(
      'media_wide' => t('Wide Image'),
      'media_normal' => t('Regular Image'),
      'text_1' => t('Text line 1'),
      'text_2' => t('Text line 2'),
      'cta' => t('CTA'),
      'link' => t('link')
    ),
    'css' => false,
    'image' => false
  );
}
