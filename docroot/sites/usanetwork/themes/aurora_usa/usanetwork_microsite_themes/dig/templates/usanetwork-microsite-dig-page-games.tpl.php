<?php
/**
 *
 */
?>
<?php if (!empty($html)): ?>
<div id="viewport">
  <ul>
    <li>
      <?php if (!empty($css)): ?>
        <style><?php print $css; ?></style>
      <?php endif; ?>
      <?php print $html; ?>
      <?php if (!empty($js)): ?>
        <script><?php print $js; ?></script>
      <?php endif; ?>
    </li>
  </ul>
</div>
<?php endif; ?>
