<?php
/**
 *
 */
?>
<?php if (!empty($ad)): ?>
  <div class="midbanner" id="<?php print $ad_id; ?>"></div>
<?php endif; ?>
<div class="episode-landing-list-items-season">
  <div class="upper-bar">
    <div class="title">
      <h2><?php print $title; ?></h2>
    </div>
    <?php if (!empty($filters)): ?>
      <div class="filters">
        <ul>
          <?php foreach($filters as $filter): ?>
            <li data-id="<?php print $filter['value']; ?>"><?php print $filter['title']; ?></li>
          <?php endforeach; ?>
        </ul>
      </div>
    <?php endif; ?>
  </div>
  <?php if (!empty($items)): ?>
    <?php foreach ($items as $item): ?>
      <?php print $item; ?>
    <?php endforeach; ?>
  <?php endif; ?>
</div>
