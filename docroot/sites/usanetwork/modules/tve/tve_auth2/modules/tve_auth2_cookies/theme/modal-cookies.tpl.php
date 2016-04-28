<?php
/**
 * @file
 * Third party cookie setting notifications page template.
 */
?>
<script type="text/ng-template" id="cookie-notification.html">
  <button data-ng-click="$close();" class="closeButton"></button>
  <div class="cookie-top-gradient"></div>
  <section class="modalContent clearfix">
    <div class="cookie-notification__header">
      <div class="cookie-notification__header__alert_icon"></div>
      <div class="cookie-notification__header__title"><?php print $header; ?></div>
    </div>
    <div class="cookie-notification__header__divider"></div>
    <div class="cookie-notification">
      <div class="cookie-notification__message" ng-class="browserName" ng-if="isChrome">
        <?php print isset($body['desktop_chrome']) ? $body['desktop_chrome'] : ''; ?>
      </div>
      <div class="cookie-notification__message" ng-class="isFirefox" ng-if="isFirefox">
        <?php print isset($body['desktop_ff']) ? $body['desktop_ff'] : ''; ?>
      </div>
      <div class="cookie-notification__message" ng-class="browserName" ng-if="isSafari">
        <?php print isset($body['desktop_safari']) ? $body['desktop_safari'] : ''; ?>
      </div>
      <div class="cookie-notification__message" ng-class="browserName" ng-if="isIE">
        <?php print isset($body['desktop_ie']) ? $body['desktop_ie'] : ''; ?>
      </div>
      <div class="cookie-notification__message" ng-class="browserName" ng-if="unknown">
        <?php print isset($body['desktop_other']) ? $body['desktop_other'] : ''; ?>
      </div>
      <div class="cookie-notification__message" ng-class="browserName" ng-if="isMobSafari">
        <?php print isset($body['mobile_safari']) ? $body['mobile_safari'] : ''; ?>
      </div>
      <div class="cookie-notification__message" ng-class="browserName" ng-if="isMobChrome">
        <?php print isset($body['mobile_chrome']) ? $body['mobile_chrome'] : ''; ?>
      </div>
      <div class="cookie-notification__message" ng-class="browserName" ng-if="isMobOther">
        <?php print isset($body['mobile_other']) ? $body['mobile_other'] : ''; ?>
      </div>
    </div>
  </section>
</script>
