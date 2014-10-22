<article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
  <?php print render($title_prefix); ?>
  <?php if (!$page): ?>
    <h2<?php print $title_attributes; ?>>
      <a href="<?php print $node_url; ?>"><?php print $title; ?></a>
    </h2>
    <?php if (!empty($content['body']['#object']->field_seo_h1[$content['body']['#language']][0]['value'])): ?>
      <h1>
        <?php print $content['body']['#object']->field_seo_h1[$content['body']['#language']][0]['value']; ?>
      </h1>
    <?php endif; ?>
  <?php endif; ?>
  <?php print render($title_suffix); ?>

  <div class="content clearfix"<?php print $content_attributes; ?>>
    <?php print render($content); ?>
  </div>
</article>
