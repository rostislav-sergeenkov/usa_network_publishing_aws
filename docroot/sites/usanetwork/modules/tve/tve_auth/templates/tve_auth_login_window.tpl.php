<?php
/**
 * @file
 * Tve auth login window.
 *
 * @ingroup tve_auth
 */
?>
<script type="text/ng-template" id="loginModal.html">
  <header class="modalHeader">
    <button data-ng-click="close()" class="closeButton" title="<?php print t('Close'); ?>"></button>
    <nav class="modalSteps" data-ng-if="isIdxEnabled">
      <ol>
        <li class="step1"
            data-ng-class="{current: loginWindow.currentStep === 1, completed: global.isAuthN}"
            data-ng-style="loginWindow.firstStepImg">
          <span data-ng-show="!global.isAuthN"><?php print t('Verify TV account'); ?></span>
          <span data-ng-show="global.isAuthN"><?php print t('Verified'); ?></span>
        </li>
        <li class="step2"
            data-ng-class="{current: loginWindow.currentStep === 2, completed: global.isLoggedInIdx, active: loginWindow.currentStep === 3}"
            data-ng-style="loginWindow.secondStepImg">
          <span data-ng-show="!global.isLoggedInIdx"><?php print t('Get premium features'); ?></span>
          <span data-ng-show="global.isLoggedInIdx"><?php print t('Premium activated'); ?></span>
        </li>
        <li class="step3"
            data-ng-class="{current: loginWindow.currentStep === 3}"
            data-ng-style="loginWindow.thirdStepImg">
          <span><?php print t('Start Watching'); ?></span>
        </li>
      </ol>
    </nav>
  </header>

  <section class="modalContent clearfix" data-ng-switch data-on="loginWindow.currentStep">
    <div data-ng-switch-when="1">
      <div class="description richContent contentColumn" data-tve-reflow data-ng-bind-html-unsafe="loginWindow.login_window_1.left_block_text.value"></div>
      <div class="highlighted interactionColumn">
        <hgroup class="richContent" data-ng-bind-html-unsafe="loginWindow.login_window_1.right_block_header_text.value" data-ng-show="!loginWindow.hide_mvpd_picker"></hgroup>
        <div class="contentLoader" data-ng-hide="global.isAuthChecked"></div>
        <div data-ng-show="global.isAuthChecked">
          <div class="switchContent clearfix">
            <ul data-ng-show="loginWindow.filteredMvpdsView">
              <li class="mvpd"
                  data-ng-repeat="mvpd in loginWindow.featuredMvpds">
                <a data-ng-click="authWithAdobePass(mvpd.mvpd_id)">
                  <i class="aligner"></i>
                  <img data-ng-src="{{mvpd.mvpd_logo}}" alt="{{mvpd.title}}"/>
                </a>
              </li>
            </ul>
            <div class="allProviders" data-tve-reflow data-ng-show="!loginWindow.filteredMvpdsView">
              <select class="select" ng-model="selectedProvider" data-ng-options="o.mvpd_id as o.title for o in loginWindow.mvpds">
                <option value=""><?php print t('Choose your provider'); ?></option>
              </select>
              <div>
                <button class="button" data-ng-disabled="!selectedProvider" data-ng-click="authWithAdobePass(selectedProvider)"><?php print t('Continue'); ?></button>
              </div>
            </div>
          </div>
          <div class="buttonBar" data-ng-show="!loginWindow.hide_mvpd_picker">
            <button data-ng-click="triggerContent()" data-ng-bind="loginWindow.buttonText"></button>
          </div>
        </div>
      </div>
    </div>

    <div data-ng-switch-when="2" class="premiumFeatures">
      <div class="richContent contentColumn">
        <article data-ng-bind-html-unsafe="loginWindow.login_window_2.left_block_text.value"></article>
      </div>
      <div class="highlighted interactionColumn">
        <div class="separator">
          <button class="button primaryButton large"
                  data-ng-click="idxSignIn();"><?php print t('Sign In'); ?></button>
        </div>
        <button class="button large"
                data-ng-click="idxCreateAccount()"><?php print t('Register'); ?></button>
      </div>
    </div>

    <div class="getStartedStep" data-ng-switch-when="3">
      <div class="description richContent contentColumn">
        <img src="" data-ng-src="{{loginWindow.login_window_3.image_left.url}}"/>
      </div>
      <div class="highlighted interactionColumn">
        <h2 data-ng-bind="loginWindow.login_window_3.title"></h2>
        <button class="button" type="button" data-ng-click="close()"
                data-ng-bind="loginWindow.login_window_3.start_button_text"></button>
        <h3 data-ng-bind="loginWindow.login_window_3.mobile_apps_text"></h3>
        <ul class="mobileApps">
          <li>
            <a href="">
              <img src="" data-ng-src="{{loginWindow.login_window_3.image_store_1.url}}"/>
            </a>
          </li>
          <li>
            <a href="">
              <img src="" data-ng-src="{{loginWindow.login_window_3.image_store_2.url}}"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <footer class="modalFooter">
    <div class="alignCenter" data-ng-show="loginWindow.currentStep === 1">
      <span data-ng-bind="loginWindow.login_window_1.footer_text"></span>
      <a href="" class="link" data-ng-if="isK2Enabled" data-ng-click="openK2Search()" data-ng-bind="loginWindow.login_window_1.footer_link_text"></a>
    </div>
    <div data-ng-show="loginWindow.currentStep === 2" data-ng-class="{'alignCenter': global.gettingStarted}">
      <label ng-if="!global.gettingStarted" data-ng-cloak>
        <input type="checkbox"
               data-ng-model="showIdxLogin"
               data-ng-change="saveState(showIdxLogin);"/>
        <?php print t("Don't show again"); ?>
      </label>
      <a href="" class="link"
         ng-if="global.gettingStarted"
         data-ng-click="showLastStep()"
         data-ng-bind="loginWindow.login_window_2.footer_link_text"></a>
    </div>
  </footer>
</script>
