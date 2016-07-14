<?php
/**
 * @file
 * Tve auth welcomeWindow.
 *
 * @ingroup tve_auth
 */
?>
<script type="text/ng-template" id="welcomeModal.html">
  <button data-ng-click="$close();" class="closeButton"></button>
  <section class="modalContent" bindonce>
    <?php if (!empty($settings['brand_logo']['url'])): ?>
      <div class="brandLogo head-title"><img src="<?php print $settings['brand_logo']['url']; ?>" /></div>
    <?php endif; ?>

    <hgroup class="headers">
      <?php if (!empty($settings['text_top']['text'])): ?>
        <h2 class="prefixHeader" bo-class="welcomeWindow.text_top.style"><?php print $settings['text_top']['text']; ?></h2>
      <?php endif; ?>

      <?php if (!empty($settings['text_center']['text'])): ?>
        <h3 class="mainHeader" bo-class="welcomeWindow.text_center.style"><?php print $settings['text_center']['text']; ?></h3>
      <?php endif; ?>

      <?php if (!empty($settings['text_bottom']['text'])): ?>
        <h4 class="suffixHeader" bo-class="welcomeWindow.text_bottom.style"><?php print $settings['text_bottom']['text']; ?></h4>
      <?php endif; ?>
    </hgroup>

    <hr class="divider"/>

    <div class="buttonBar clearfix">
      <?php if (!empty($settings['buttons']['yes_title']) || !empty($settings['buttons']['yes_description'])): ?>
        <a class="modalButton primaryModalButton" ng-click="goToLogin();">
          <b><?php print $settings['buttons']['yes_title']; ?></b>
          <span><?php print $settings['buttons']['yes_description']; ?></span>
        </a>
      <?php endif; ?>
      <?php if (!empty($settings['buttons']['no_title']) || !empty($settings['buttons']['no_description'])): ?>
        <a class="modalButton rejectButton" <?php print !empty($settings['buttons']['no_url_target']) ? 'target="_blank"' : ''; ?> ng-click="$dismiss();" bo-href="welcomeWindow.buttons.no_url">
          <b><?php print $settings['buttons']['no_title']; ?></b>
          <span><?php print $settings['buttons']['no_description']; ?></span>
        </a>
      <?php endif; ?>
    </div>
  </section>
</script>
