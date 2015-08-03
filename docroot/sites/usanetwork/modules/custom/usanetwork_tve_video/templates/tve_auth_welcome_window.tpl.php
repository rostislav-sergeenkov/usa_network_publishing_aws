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
      <div class="features-wrapper">
        <div class="feature-group group">
          <article class="feature user">
            <figure class="feature-img-wrap">
              <?php 
              $image_1 = variable_get('block_1_image');
              if (isset($image_1) && ($image_1['fid'] != 0)){ ?>
              <img src="" data-ng-src="{{welcomeWindow.block_1_image.url}}"/>
              <?php } else { ?>
              <img src="<?php print '/' . drupal_get_path('module', 'usanetwork_tve_video') . '/images/benefits1.png'; ?>" />
              <?php } ?>
            </figure>
            <figcaption data-ng-bind-html-unsafe="welcomeWindow.block_1_text.value"></figcaption>
          </article>
          <article class="feature user">
            <figure class="feature-img-wrap">
              <?php 
              $image_2 = variable_get('block_2_image');
              if (isset($image_2) && ($image_2['fid'] != 0)){ ?>
              <img src="" data-ng-src="{{welcomeWindow.block_2_image.url}}"/>
              <?php } else { ?>
              <img src="<?php print '/' . drupal_get_path('module', 'usanetwork_tve_video') . '/images/benefits3.png'; ?>" />
              <?php } ?>
            </figure>
            <figcaption data-ng-bind-html-unsafe="welcomeWindow.block_2_text.value"></figcaption>
          </article>
          <article class="hidden">
            <figure class="feature-img-wrap">
              <img src="" data-ng-src="{{welcomeWindow.block_3_image.url}}"/>
            </figure>
            <figcaption data-ng-bind-html-unsafe="welcomeWindow.block_3_text.value"></figcaption>
          </article>
        </div>
        <div class="buttonBar">
          <button class="button gettingStarted" data-ng-click="goToLogin();" data-ng-bind="welcomeWindow.start_button_text"></button>
        </div>
      </div>
    </div>
    <?php 
    $image_bg = variable_get('block_bg_image');
    if (isset($image_bg) && ($image_bg['fid'] != 0)){ ?>
    <div class="welcomeBgImage" data-ng-style="welcomeWindow.bgImage"></div>
    <?php } else { ?>
    <div class="welcomeBgImage" style="background: url(<?php print '/' . drupal_get_path('module', 'usanetwork_tve_video') . '/images/psych.png'; ?>); height: 399px;"></div>
    <?php } ?>
  </section>
  <footer class="modalFooter alignCenter">
    <span data-ng-bind="welcomeWindow.footer_text"></span>
    <a class="link" data-ng-click="cancel();" data-ng-bind="welcomeWindow.footer_link_text"></a>
  </footer>
</script>
