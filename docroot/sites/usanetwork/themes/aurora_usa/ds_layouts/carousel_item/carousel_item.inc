<?php
function ds_carousel_item() {
  return array(
    'label' => t('Carousel item'),
    'regions' => array(
      'media' => t('Media'),
      'title' => t('Title'),
      'caption' => t('Caption'),
      'cta' => t('CTA'),
      'link' => t('link'),
      'target' => t('Target'),
    ),
    'css' => false,
    'image' => false
  );
}
