<div class="<?php print $classes;?> carousel-item-wrapper">
	<?php $url = drupal_lookup_path('alias',"node/" . $variables['node']->nid);?>
	<?php if($url) : ?>
		<a class="article-link" href="/<?php print $url; ?>">
	<?php endif; ?>
			<div class="item-content">
				<?php if($cast_content): print render($cast_content); endif; ?>
			</div>
			<figure class="item-image">
				<?php if ($media): print $media; endif; ?>
			</figure>
	<?php if($url) : ?>
		</a>
	<?php endif; ?>
</div>
