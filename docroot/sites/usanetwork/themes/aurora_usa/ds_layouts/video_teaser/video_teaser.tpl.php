<?php
$url = '';
if ($node->type == 'usa_video') {
  $url = drupal_lookup_path('alias',"node/" . $variables['node']->nid);
}
if ($node->type == 'usa_tve_video') {
  //Sample URL to USA TVE asset detail
  // page: http://www.usanetwork.com/anywhere/show/{Showname}/{MPX ID}/1/{asset title}.
  // parse the media id for the tve path
  $pl_id = field_get_items('node', $node, 'field_video_pid');
  $pl_id = $pl_id[0]['value'];
  $pl_id = explode('/', $pl_id);  // Get the parts of the url.
  $pl_id = array_pop($pl_id); // And just last part of the URL's path.
  // strip tags and rawurlencode to convert spaces to %20 for tve paths
  $vid_title = strip_tags($node->title);
  $vid_title = rawurlencode($vid_title);
  $vid_showname = '';
  // load the showname
  if (!empty($node->field_show)) {
    $show_nid = field_get_items('node', $node, 'field_show');
    $show = $show_nid[0]['target_id'];
    $show = node_load($show);
    $showtitle = $show->title;
    $vid_showname = strip_tags($showtitle);
    $vid_showname = trim($showtitle);
    $vid_showname = rawurlencode($vid_showname);
  }
  // full path to tve
  $url = 'http://www.usanetwork.com/now/show/' . $vid_showname . '/' . $pl_id .'/1/' . $vid_title;
}

?>
<div class="<?php print $classes;?>"<?php print $attributes; ?>>
	<?php if ($url && $node->type == 'usa_video') : ?>
		<a class="item-link" href="/<?php print $url; ?>">
	<?php endif; ?>
	<?php if ($url && $node->type == 'usa_tve_video') : ?>
		<a class="item-link" href="<?php print $url; ?>">
	<?php endif; ?>
  <?php if ($media): ?>
  <div class="asset-img"><?php print $media; ?></div>
  <?php endif; ?>
  <div class="caption-overlay meta">
    <div class="caption-fields-wrapper">
    <?php if ($title && $title != "&nbsp;"): ?>
      <div class="title"><?php print $title; ?></div>
    <?php endif; ?>
    <?php if ($caption && $caption != "&nbsp;"): ?>
      <div class="caption"><?php print ($caption); ?></div>
    <?php endif; ?>
    </div>
  </div>
  <?php if ($url): ?>
    </a>
  <?php endif; ?>
</div>
