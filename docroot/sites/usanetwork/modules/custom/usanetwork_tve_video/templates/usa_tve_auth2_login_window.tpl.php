<?php
/**
 * @file
 * Tve auth login window.
 *
 * @ingroup tve_auth
 */
?>

<script type="text/ng-template" id="loginModal.html">
  <button ng-click="$dismiss();" class="closeButton"></button>
  <section class="modalContent" bindonce>

    <div class="activateHeader">
      <div class="brandLogo head-title" bo-if="loginWindow.brand_logo.url"><img bo-src="loginWindow.brand_logo.url" /></div>

      <hgroup class="headers">
        <?php if (!empty($settings['text_line_1']['text'])): ?>
          <h2 class="prefixHeader regularHeading"><?php print $settings['text_line_1']['text']; ?></h2>
        <?php endif; ?>
        <?php if (!empty($settings['text_line_2']['text']['value'])): ?>
          <h3 class="mainHeader"><?php print $settings['text_line_2']['text']['value']; ?></h3>
        <?php endif; ?>
      </hgroup>
    </div>

    <div class="mvpdPicker" ng-class="{sectionLoader: loadingMvpds}">
      <span class="loader" tve-animated-png ng-show="loadingMvpds"></span>
      <div class="wrap">
        <div class="mainUl">
          <span class="pickerRibbon show-color" ng-if="!isMobile"><?php print t('Select provider'); ?></span>
          <ul class="clearfix" ng-class="{centered: mvpdListCentered}">
            <li class="mvpd" ng-repeat="mvpd in mvpds.featured | limitTo: loginWindow.FEATURED_MVPD_MAX">
              <a ng-click="login(mvpd.mvpd_id);" title="{{mvpd.title}}">
                <i class="aligner">|</i>
                <span class="mvpdTitle">{{mvpd.title}}</span>
                <img ng-src="{{mvpd.mvpd_logo}}" alt="{{mvpd.title}}" ng-if="!isMobile && !isRetina"/>
                <img ng-src="{{mvpd.mvpd_logo_2x}}" alt="{{mvpd.title}}" ng-if="!isMobile && isRetina"/>
              </a>
            </li>
          </ul>
          <ul class="clearfix fullMvpd" ng-class="{centered: mvpdListCentered}">
            <li class="mvpd" ng-repeat="mvpd in mvpds.all" ng-if="mvpd.title && !$first">
              <a ng-click="login(mvpd.mvpd_id);" title="{{mvpd.title}}">
                <span class="mvpdTitle">{{mvpd.title}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <?php if (!empty($settings['text_line_3']['text'])): ?>
      <div class="divider" ng-if="!isMobile">
        <div>
          <div class="div-line"><div class="div-line-inner show-color"></div></div><h4><?php print $settings['text_line_3']['text']; ?></h4><div class="div-line"><div class="div-line-inner show-color"></div></div>
        </div>
      </div>
    <?php endif; ?>

    <form class="providerForm" ng-submit="login(provider.selected);" ng-if="!isMobile">
      <fieldset>
        <span ng-disabled="loadingMvpds" ng-model="provider.selected" data-tve-mvpd-dropdown="filteredMvpdList" tve-mvpd-dropdown-value="mvpd_id" tve-mvpd-dropdown-label="title" searchMVPDS="searchMVPDS(mvpdSearchKey)" mvpd-search-key="mvpdSearchKey">
          <select class="select" ng-disabled="loadingMvpds" ng-model="provider.selected" ng-options="o.mvpd_id as o.title for o in mvpds.all"></select>
        </span>
        <button type="submit" class="submitButton" ng-class="{active: provider.selected}" ng-disabled="!provider.selected"><?php print t('Login now'); ?></button>
      </fieldset>
    </form>

    <div class="loginBottom">
      <div class="bottomDivider" ng-if="isMobile"></div>
      <?php if (!empty($settings['text_line_4']['text'])): ?>
        <h5 class="helperLink">
          <?php if (!empty($settings['text_line_4']['zendesk_url'])): ?>
            <a class="link" ng-click="clickHelperLink(loginWindow.text_line_4.zendesk_url);"><?php print $settings['text_line_4']['text']; ?></a>
          <?php elseif (!empty($settings['text_line_4']['url'])): ?>
            <a href="<?php print url($settings['text_line_4']['url'], array('absolute' => TRUE)); ?>"
               class="link"
               target="_blank"
               ng-click="$close();"><?php print $settings['text_line_4']['text']; ?></a>
          <?php endif; ?>
        </h5>
      <?php endif; ?>

      <?php if (!empty($settings['text_line_5']['text'])): ?>
        <footer><span><?php print $settings['text_line_5']['text']; ?></span></footer>
      <?php endif; ?>
    </div>

  </section>
</script>
