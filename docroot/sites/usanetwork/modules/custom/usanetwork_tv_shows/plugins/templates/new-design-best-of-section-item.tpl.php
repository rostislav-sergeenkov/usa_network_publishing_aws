<?php
/**
 * BCD-Spot Item.
 *
 * Item of relevant content.
 * Variables:
 *  - $item
 *    - entity_id
 *    - entity_type
 *    - url
 *    - title
 *    - description
 *    - violator
 *    - type
 *    - image_desktop
 *    - image_mobile
 *  - $layout_scheme
 *    - desktop_type
 *    - mobile_type
 *   
 */
?>
<div><?php print (!empty($item['entity_id']) ? $item['entity_id'] : ''); ?></div>
<div><?php print (!empty($item['entity_type']) ? $item['entity_type'] : ''); ?></div>
<div><?php print (!empty($item['description']) ? $item['description']: ''); ?></div>
<div><?php print (!empty($item['type']) ? $item['type']: ''); ?></div>
<div><?php print (!empty($item['image_desktop']) ? $item['image_desktop'] : ''); ?></div>
<div><?php print (!empty($item['image_mobile']) ? $item['image_mobile'] : ''); ?></div>
<div><?php print (!empty($item['url']) ? $item['url'] : ''); ?></div>
<div><?php print (!empty($item['title']) ? $item['title'] : ''); ?></div>
<div><?php print (!empty($item['violator']) ? $item['violator'] : ''); ?></div>
<div><?php print_r(!empty($item['links']) ? $item['links'] : ''); ?></div>
<div><?php print_r(!empty($item['bottom_link']) ? $item['bottom_link'] : ''); ?></div>
<div><?php print (!empty($layout_scheme['desktop_type']) ? $layout_scheme['desktop_type'] : ''); ?></div>
<div><?php print (!empty($layout_scheme['mobile_type']) ? $layout_scheme['mobile_type'] : ''); ?></div>
