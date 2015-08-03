<?php
/**
 * @file
 * Tve auth k2 window.
 *
 * @ingroup tve_auth
 */
?>
<script type="text/ng-template" id="k2modal.html">
  <header class="modalHeader">
    <button data-ng-click="close()" class="closeButton"></button>
  </header>
  <section class="modalContent clearfix">
    <div class='contentLoader' data-ng-hide='global.isAuthChecked'></div>
    <div data-ng-show="global.isAuthChecked">
      <div class="search" data-ng-show="isSearchStep">
        <h3><?php print t('Tell us where you are for the providers in your area'); ?></h3>
        <p><?php print t('Enter your zip code, then select your provider'); ?></p>
        <form name="k2Form" novalidate>
          <fieldset>
            <p class="errorText" data-ng-show="zipError" data-ng-bind="zipError"></p>
            <input type="text" autofocus="autofocus" class="textInput small" name="zipCode" placeholder="<?php print t('Zip Code'); ?>" maxlength="5"
                   data-ng-class="{'loading': loadingZip, 'error': zipError}"
                   data-ng-model="k2.zipCode"
                   data-ng-pattern="/^(\d{5})?$/"
                   data-ng-disabled="loadingZip"
                   data-ng-change="search(k2Form.$invalid)"
                   data-ui-keypress="{enter: 'search(k2Form.$invalid);'}"/>
            <select name="selectedProvider" class="select"
                    data-ng-model="k2.selectedProvider"
                    data-ng-class="{fit : !providers.length}"
                    data-ng-options="o for o in providers"
                    data-ng-disabled="!providers.length || loadingZip || loading"
                    data-ng-change="chooseProvider()">
              <option value=""><?php print t('Choose your provider'); ?></option>
            </select>
          </fieldset>
        </form>
        <div class="existingProvider" data-ng-show="isProviderAvailable(k2.selectedProvider) && k2Form.$valid">
          <p class="info"><?php print t('Good news! Our service is available through your current provider'); ?></p>
          <button class="button" data-ng-show='!loginWindow.hide_mvpd_picker' data-ng-click="authWithAdobePass()"><?php print t('Connect'); ?></button>
          <div class='processing-icon' data-ng-show='loginWindow.hide_mvpd_picker'>
            <p><?php print t('One moment please...'); ?></p>
          </div>
        </div>
        <div class="notSupportedProvider" data-ng-show="k2.selectedProvider && !isProviderAvailable(k2.selectedProvider) && k2Form.$valid">
          <p class="info"><?php print t('Service is not currently available through'); ?> <b data-ng-bind="k2.selectedProvider"></b>.</p>

          <p class="info"><?php print t('Enter your name and email. We’ll notify you when service is available.'); ?></p>

          <form name="subscriptionForm" data-ng-submit="submitSubscription(subscriptionForm)" novalidate>
            <div class="row">
              <input type="text" name="firstName" class="textInput" placeholder="<?php print t('First name'); ?>"
                     data-ng-model="subscription.firstName"
                     required/>
              <span class="errorText"><?php print t('Enter your first name'); ?></span>
            </div>
            <div class="row">
              <input type="text" name="lastName" class="textInput" placeholder="<?php print t('Last name'); ?>"
                     data-ng-model="subscription.lastName"
                     required/>
              <span class="errorText"><?php print t('Enter your last name'); ?></span>
            </div>
            <div class="row">
              <input type="email" name="email" class="textInput" placeholder="<?php print t('Email address'); ?>"
                     data-ng-model="subscription.email"
                     required/>
              <span class="errorText"><?php print t('Enter valid email address'); ?></span>
            </div>
            <button type="submit" class="button" data-ng-disabled="loading" data-ng-bind="submitStatus"></button>
          </form>
        </div>
      </div>
      <div class="result" data-ng-hide="isSearchStep">
        <div data-ng-hide="subscriptionError">
          <h3><?php print t('Thanks!'); ?></h3>

          <p><?php print t('We’ll let you know when service is available through your cable provider by emailing you at'); ?> <b data-ng-bind="subscription.email"></b></p>
          <button class="button" data-ng-click="checkAnother(subscriptionForm)"><?php print t('Check Another Zip Code'); ?></button>
        </div>
        <div data-ng-show="subscriptionError">
          <h3 class="errorText"><?php print t('Error!'); ?></h3>

          <p data-ng-bind="subscriptionError"></p>
          <button class="button" data-ng-click="tryAgain()"><?php print t('Try one more time'); ?></button>
          <button class="button" data-ng-click="checkAnother()"><?php print t('Check Another Zip Code'); ?></button>
        </div>
      </div>
    </div>
  </section>
  <footer class="modalFooter"><a href="" class="link" data-ng-click="back();"><?php print t('Back'); ?></a></footer>
</script>
