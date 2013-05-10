<div class="carousel-item-wrapper">
	<?php $url = drupal_lookup_path('alias',"node/".$variables['node']->nid);?>
	<?php if($url) : ?>
		<a class="overlay" href="/<?php print $url; ?>"></a>
	<?php endif; ?>
	<figure class="<?php print $classes;?> clearfix">
		<?php if ($media): print $media; endif; ?>
	</figure>
	<div class="item-content">
		<div class="arrow-left"></div>
		<?php if($cast_content): print render($cast_content); endif; ?>
	</div>
</div>