<?php
/**
 *
 */
?>
<div class="shows-block">
  <div class="carousel-description-item start">
    <a href="#" class="description-button"></a>

    <div class="description-wrapper">
      <div class="description-block">
        <?php if (!empty($description['caption'])): ?>
          <div class="caption"><?php print $description['caption']; ?></div>
        <?php endif; ?>
        <?php if (!empty($description['title'])): ?>
          <div class="title"><?php print $description['title']; ?></div>
        <?php endif; ?>
        <?php if (!empty($description['additional_text'])): ?>
          <div class="additional-text"><?php print $description['additional_text']; ?></div>
        <?php endif; ?>
      </div>
    </div>
  </div>
  <?php if (!empty($slides)): ?>
    <div data-jcarousel="true" class="show-carousel carousel carousel-left start" data-carousel-id="1">
      <ul class="slides">
        <?php foreach ($slides as $slide): ?>
          <li<?php if (!empty($slide['class'])): print ' class="' . $slide['class'] . '"'; endif;?>>
            <?php if (!empty($slide['content'])): ?>
              <?php print $slide['content']; ?>
            <?php endif; ?>
          </li>
        <?php endforeach; ?>
      </ul>
    </div>
  <?php endif; ?>
</div>
