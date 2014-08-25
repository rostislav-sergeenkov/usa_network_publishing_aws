;(function(ng, undefined) {
  'use strict';

  ng.module('tve.services')
      .factory('tveDataProvider', [
        function() {
          var providers, modalsData;

          //safe initialization
          try {
            //parsing providers list from <script type="text/json" id="tve_mvpd" ...
            providers = _processProviders(Drupal.settings['tve_mvpd'].providers);
            modalsData = JSON.parse(Drupal.settings['tve_auth_windows']);
          }
          catch(ex) {
            console.log(ex, 'can\'t parse json');
          }

          function _processProviders(providers) {
            var processedProviders = [];

            if (!providers) return;

            ng.forEach(providers.featured, function(mvpd, j) {
              processedProviders.push(mvpd);
            });

            ng.forEach(providers.not_featured, function(mvpd, j) {
              processedProviders.push(mvpd);
            });

            //sorting providers list by titles to display alphabetically sorted in dropdown of all providers
            //using Array.prototype.sort
            processedProviders.sort(function(a, b) {
              if (a.title > b.title) return 1;
              else if (a.title < b.title) return -1;
              else return 0;
            });

            //returns featured mvpds for grid in login screen and full list of available mvpds
            return {
              all: processedProviders,
              featured: providers.featured
            };
          }

          //referencing data to public variables
          return {
            providers: providers,
            modals: modalsData
          };
        }
      ]);
})(angular);
