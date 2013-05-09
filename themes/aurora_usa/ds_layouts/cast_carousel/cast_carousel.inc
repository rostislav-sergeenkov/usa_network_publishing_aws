<?php
function ds_cast_carousel() {
  return array(
    'label' => t('Cast Carousel'),
    'regions' => array(
      'media' => t('Media'),
      'cast_content' => t('Content')
    ),
    'css' => 'cast-carousel',
    'image' => false
  );
}

?>