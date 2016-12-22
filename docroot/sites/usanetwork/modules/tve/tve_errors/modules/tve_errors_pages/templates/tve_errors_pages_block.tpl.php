<?php
/**
 * @file
 * Main view template.
 * @vars:
 *   $header_title
 *   $body_text
 */
?>
<div class="centricWrap tveApacheErrors">
  <header class="header">
    <h3 class='blockHeader'><?php print t(check_plain($header_title)); ?></h3>
  </header>
  <section class="body clearfix">
    <div class="browserDetectMessage">
      <?php print t($body_text['value']); ?>
    </div>
  </section>
  <footer class="footer"></footer>
</div>
