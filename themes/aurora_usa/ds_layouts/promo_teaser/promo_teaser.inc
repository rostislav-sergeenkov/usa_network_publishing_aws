<?php
function ds_promo_teaser() {
  return array(
    'label' => t('Promo teaser'),
    'regions' => array(
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
