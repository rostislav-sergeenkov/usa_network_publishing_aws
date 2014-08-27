<?php
/**
 * @file
 * Tve auth welcomeWindow.
 *
 * @ingroup tve_auth
 */
?>
<script type="text/ng-template" id="welcomeModal.html">
  <header class="modalHeader">
    <button data-ng-click="cancel()" class="closeButton"></button>
    <a href="<?php print base_path() . 'faq'; ?>" class="link moreDetails" data-ng-bind="welcomeWindow.more_details_link_text"></a>
    <h1 data-ng-bind="welcomeWindow.title"></h1>
  </header>
  <section class="modalContent clearfix" data-ng-class="welcomeWindow.contentState">
    <div class="articles clearfix richContent">
      <article>
        <figure>
          <img src="" data-ng-src="{{welcomeWindow.block_1_image.url}}"/>
        </figure>
        <figcaption data-ng-bind-html-unsafe="welcomeWindow.block_1_text.value"></figcaption>
      </article>
      <article>
        <figure>
          <img src="" data-ng-src="{{welcomeWindow.block_2_image.url}}"/>
        </figure>
        <figcaption data-ng-bind-html-unsafe="welcomeWindow.block_2_text.value"></figcaption>
      </article>
      <article>
        <figure>
          <img src="" data-ng-src="{{welcomeWindow.block_3_image.url}}"/>
        </figure>
        <figcaption data-ng-bind-html-unsafe="welcomeWindow.block_3_text.value"></figcaption>
      </article>
    </div>
    <div class="buttonBar">
      <button class="button gettingStarted" data-ng-click="goToLogin();" data-ng-bind="welcomeWindow.start_button_text"></button>
    </div>
    <div class="welcomeBgImage" data-ng-style="welcomeWindow.bgImage"></div>
  </section>
  <footer class="modalFooter alignCenter">
    <span data-ng-bind="welcomeWindow.footer_text"></span>
    <a class="link" data-ng-click="cancel();" data-ng-bind="welcomeWindow.footer_link_text"></a>
  </footer>
</script>
