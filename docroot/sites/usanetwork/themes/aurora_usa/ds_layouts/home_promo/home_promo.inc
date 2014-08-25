<?php
function ds_home_promo() {
  return array(
    'label' => t('Homepage Promo'),
    'regions' => array(
      'media_wide' => t('Wide Image'),
      'media_normal' => t('Regular Image'),
      'text_1' => t('Text line 1'),
      'text_1_wide' => t('Text line 1 Wide'),
      'text_2' => t('Text line 2'),
      'text_2_wide' => t('Text line 2 Wide'),
      'cta' => t('CTA'),
      'link' => t('link'),
      'target' => t('Target'),
    ),
    'css' => false,
    'image' => false
  );
}
