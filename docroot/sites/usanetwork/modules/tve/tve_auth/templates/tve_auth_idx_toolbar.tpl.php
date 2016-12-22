<?php
/**
 * @file
 * Tve auth idx toolbar.
 *
 * @ingroup tve_auth
 */
?>
<script type="text/ng-template" id="idxToolbar.html">
  <div id="idxToolbar" class="idxToolbar">
    <div class="content" data-ng-class="{opened: selectedTab}">
      <div class="centricWrap" data-ng-repeat="(key, tab) in tabset" data-ng-show="key === selectedTab">
        <div data-ng-switch data-on="key">
          <div class="favoriteShows" data-ng-switch-when="favorites">
            <div data-tve-slider>
              <p data-ng-hide="this[key].length"><?php print t("When you add Favorites, we'll let you know when new episodes are available."); ?><br/><?php print t('You can do this from any show page found in the top menu.'); ?></p>
              <ul class="showSlider slider">
                <li class="show" data-ng-repeat="show in this[key]">
                  <a href="" title="{{show.title}}" class="capture" data-ng-href="{{show.link}}" data-ng-bind-html="show.show_thumbnail"></a>
                  <a href="" class="counter" data-ng-bind="show.videos_count" data-ng-class="{loading: show.counterIsLoading}" data-ng-click="updateCounter(show);"></a>
                  <a href="" class="link remove" data-ng-click="removeFromFavorites(show, $index);"><?php print t('Remove'); ?></a>
                </li>
              </ul>
            </div>
          </div>
          <div data-ng-switch-when="recentlyWatched">
            <p data-ng-hide="this[key].length"><?php print t('No recent history to show'); ?></p>
            <div class="clearHistory" data-ng-class="{loading: clearInProgress}" data-ng-show="this[key].length">
              <a href="" data-ng-click="clearHistory();"><?php print t('Clear history'); ?></a>
            </div>
            <div data-ng-show="this[key].length" data-tve-slider>
              <ul class="clearfix slider">
                <li class="tveAsset basic clearfix" data-ng-repeat="asset in this[key]" data-tve-asset="asset"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="tabset">
      <a href="" class="tab dropRight reversed"
         data-ng-repeat="(key, tab) in tabset"
         data-ng-class="{opened: key === selectedTab}"
         data-ng-click="togglePanel(key);"><span data-number="{{this[key].length}}">{{tab.name}}</span></a>
    </nav>
  </div>
</script>
