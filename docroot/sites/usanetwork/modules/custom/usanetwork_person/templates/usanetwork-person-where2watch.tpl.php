<?php
/**
 *
 */
?>
<div class="cast-and-crew-block show-border">
  <div class="usa-section-title show-border">
    <h2 class="title"><?php print !empty($title) ? $title : ''; ?></h2>
  </div>
  <div>
    <?php print $description; ?>
  </div>
  <ul>
  <?php if (!empty($usa_now_path)) : ?>
    <li>
      <a href="<?php print $usa_now_path; ?>">USA Now</a>
    </li>
  <?php endif; ?>
  <?php foreach ($elements as $element) : ?>
    <li>
      <a href="<?php print $element['url']; ?>">
        <img src="<?php print $element['image']; ?>">
      </a>
    </li>
  <?php endforeach; ?>
  </ul>
</div>
