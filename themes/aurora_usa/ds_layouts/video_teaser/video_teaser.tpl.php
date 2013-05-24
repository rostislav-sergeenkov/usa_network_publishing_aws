<?php 
  $url = drupal_lookup_path('alias',"node/" . $variables['node']->nid);
?>
<div class="<?php print $classes;?>">
	<?php if($url) : ?>
		<a class="item-link" href="/<?php print $url; ?>">
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
