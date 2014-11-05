<div class="shows-menu">
  <h2 class="menu-title shows-menu-title">shows</h2>
  <ul class="menu">
    <?php foreach ($links as $link) { ?>
    <li class="menu-item<?php if (isset($link->class)): ?> <?php print $link->class; ?><?php endif; ?>"><?php print l($link->node_title, 'node/' . $link->nid, array('html' => TRUE)); ?></li>
      <?php } ?>
  </ul>
</div>

