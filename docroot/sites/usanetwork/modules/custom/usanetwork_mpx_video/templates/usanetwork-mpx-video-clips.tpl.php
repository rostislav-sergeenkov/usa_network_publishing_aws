<?php
/**
 * Template for usanetwork_mpx_video_clips block.
 */
?>
<?php if (!empty($promos) && is_array($promos)): ?>

<ul>

  <?php foreach($promos as $promo):?>
    <li>
      <?php print $promo['filename'];?> <br>
      <img src="<?php print $promo['image_url'];?>" alt=""><br>
      <?php print $promo['url'];?> <br>
      <?php print $promo['caption'];?> <br>
      <?php print $promo['title'];?> <br>
      <?php print $promo['description'];?> <br>
    </li>
  <?php endforeach; ?>

</ul>

<?php endif; ?>
