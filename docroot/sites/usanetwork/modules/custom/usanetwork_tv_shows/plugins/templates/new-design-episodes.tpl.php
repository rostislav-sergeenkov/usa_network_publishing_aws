<?php
/**
 * Episodes Block.
 */
?>
<?php
  $main = $data['#content']['first_block'];
?>
<ul>
  <li>
    <?php print $main['title']; ?>
    <?php print $main['image']; ?>
    <?php print $main['season']; ?>
    <?php print $main['episode']; ?>
    <?php print $main['episode_link']; ?>
    <?php print $main['file_link']; ?>
  </li>
  <?php foreach ($data['#content']['carousel_items'] as $item): ?>
    <li>
      <?php print $item ?>
    </li>
  <?php endforeach; ?>
</ul>
