<?php
/**
 * BCD-Spot Item.
 *
 * Item of relevant content.
 * Variables:
 *  - $entity_id
 *  - $entity_type
 *  - $url
 *  - $title
 *  - $description
 *  - $violator
 *  - $type
 *  - $image_desktop
 *  - $image_mobile
 */
?>

<div><?php print (!empty($entity_id) ? $entity_id : ''); ?></div>
<div><?php print (!empty($entity_type) ? $entity_type : ''); ?></div>
<div><?php print (!empty($url) ? $url : ''); ?></div>
<div><?php print (!empty($title) ? $title : ''); ?></div>
<div><?php print (!empty($description) ? $description : ''); ?></div>
<div><?php print (!empty($violator) ? $violator : ''); ?></div>
<div><?php print (!empty($type) ? $type : ''); ?></div>
<div><?php print (!empty($image_desktop) ? $image_desktop : ''); ?></div>
<div><?php print (!empty($image_mobile) ? $image_mobile : ''); ?></div>
