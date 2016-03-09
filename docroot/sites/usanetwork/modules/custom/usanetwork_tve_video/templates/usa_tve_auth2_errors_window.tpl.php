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
    <button data-ng-click="$close();" class="closeButton"></button>
  </header>
  <section class="modalContent clearfix">
    <div class="altModal notification__header">
      <div class="notification__header__alert_icon"></div>
      <div class="notification__header__title"><div class="head-title" data-ng-bind="errorWindow.title"></div></div>
    </div>
    <div class="notification__header__divider"></div>
    <div class="articles clearfix">
      <article>
        <div class="errorBody" data-ng-bind-html="errorWindow.description.value"></div>
      </article>
    </div>
    <div class="errorBgImage" data-ng-style="errorWindow.errorImage"></div>
  </section>
  <footer class="modalFooter alignCenter"></footer>
</script>
