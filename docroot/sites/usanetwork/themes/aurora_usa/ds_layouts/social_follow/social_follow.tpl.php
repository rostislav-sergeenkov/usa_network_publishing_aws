<figure class="<?php print $classes;?> clearfix">
  <?php if ($media): print $media; endif; ?>
</figure>
<div class="item-content">
	<div class="title">
	<?php if ($title && $title != "&nbsp;"): ?>
	    <?php print $title; ?>
	<?php endif; ?>
  </div>
  <?php if ($social && $social != "&nbsp;"): ?>
  <div class="icons-social icons-inline"><?php print ($social); ?></div>
  <?php endif; ?>
</div>