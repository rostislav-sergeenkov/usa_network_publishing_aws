<?php
function ds_promo_teaser_large() {
  return array(
    'label' => t('Promo teaser large'),
    'regions' => array(
      'media_large' => t('Large Media'),
      'media' => t('Media'),
      'title' => t('Title'),
      'caption' => t('Caption'),
      'title_wide' => t('Title Wide'),
      'caption_wide' => t('Caption Wide'),
      'cta' => t('CTA'),
      'link' => t('link'),
      'target' => t('Target'),
    ),
    'css' => false,
    'image' => false
  );
}
