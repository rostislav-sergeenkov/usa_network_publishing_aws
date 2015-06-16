<?php
/**
 * @file
 * Tve auth errors window.
 *
 * @ingroup tve_auth
 */
?>
<script type="text/ng-template" id="errorsModal.html">
  <header class="modalHeader">
    <button data-ng-click="cancel()" class="closeButton"></button>
    <h1 data-ng-bind="errorWindow.header_title"></h1>
  </header>
  <section class="modalContent clearfix">
    <div class="articles clearfix">
      <article>
        <div class="errorBody" data-ng-bind-html-unsafe="errorWindow.body_text.value"></div>
      </article>
    </div>
    <div class="errorBgImage" data-ng-style="errorWindow.errorImage"></div>
  </section>
  <footer class="modalFooter alignCenter">
  </footer>
</script>
