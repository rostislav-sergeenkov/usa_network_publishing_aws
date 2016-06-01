<?php
/**
 *
 */
?>
<div class="cast-and-crew-block show-border">
  <h2 class="section-title">
    <span class="section-title-wrapper show-border secondary"><?php print !empty($title) ? $title : ''; ?></span>
  </h2>
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
