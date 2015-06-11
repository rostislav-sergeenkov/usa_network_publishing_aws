(function(ng, window) {
  'use strict';

  //shorthand for old browsers
  Date.now = Date.now || function() {return + new Date;};

  ng.module('tve.services').factory('helper', ['$document', '$rootScope',
    function($document, $rootScope) {
      var TABLET_DESKTOP = 1024;

      var monthNames = [ Drupal.t('January'), Drupal.t('February'), Drupal.t('March'), Drupal.t('April'), Drupal.t('May'), Drupal.t('June'), Drupal.t('July'), Drupal.t('August'), Drupal.t('September'), Drupal.t('October'), Drupal.t('November'), Drupal.t('December') ],
          shortMonthNames = [ Drupal.t('Jan'), Drupal.t('Feb'), Drupal.t('Mar'), Drupal.t('Apr'), Drupal.t('May'), Drupal.t('Jun'), Drupal.t('Jul'), Drupal.t('Aug'), Drupal.t('Sep'), Drupal.t('Oct'), Drupal.t('Nov'), Drupal.t('Dec')],
          dayNames = [ Drupal.t('Sunday'), Drupal.t('Monday'), Drupal.t('Tuesday'), Drupal.t('Wednesday'), Drupal.t('Thursday'), Drupal.t('Friday'), Drupal.t('Saturday')],
          dayShortNames = [ Drupal.t('Sun'), Drupal.t('Mon'), Drupal.t('Tue'), Drupal.t('Wen'), Drupal.t('Thu'), Drupal.t('Fri'), Drupal.t('Sat')],
          location = window.location,
          lastPathArg = location.href.split('#').shift().split('?').shift().split('/').pop();

      var Helper = function() {},
          Storage = function() {
            this.storage = window.localStorage || window.sessionStorage;
          };

      Storage.prototype.get = function(key, value) {
        var data;
        try {
          data = JSON.parse(this.storage.getItem(key))
        }
        catch(e) {
          console.log(e);
        }
        return data;
      };

      Storage.prototype.set = function(key, value) {
        try {
          this.storage.setItem(key, JSON.stringify(value));
        }
        catch(e) {
          console.log(e);
        }

        return this;
      };

      Storage.prototype.remove = function(key) {
        var value = JSON.parse(this.storage.getItem(key));
        this.storage.removeItem(key);
        return value;
      };

      ng.extend(Helper.prototype, {
        lastPathArg : lastPathArg,
        storage     : new Storage(),
        device      : {
          isMobile: MobileEsp.isTierIphone || MobileEsp.isTierTablet,
          isTablet: MobileEsp.isTierTablet,
          isDesktop: !MobileEsp.isTierIphone && !MobileEsp.isTierTablet
        },
        breakpoints : {
          MOBILE: 'mobile',
          TABLET: 'tablet',
          DESKTOP: 'desktop'
        },
        getURLParameter: function(name) {
          return decodeURI(
              (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
          );
        },
        toBoolean: function(value, allowZeroString) {
          if (value && value.length !== 0) {
            var v = ng.lowercase('' + value);
            value = !((!allowZeroString && v == '0') || v == 'false' || v == '[]');
          }
          else {
            value = false;
          }

          return value;
        },
        getMonthName: function(index, useShortFormat) {
          return (useShortFormat ? shortMonthNames : monthNames)[index];
        },
        getRelativePath: function(url) {
          return Drupal.settings.basePath + (url || '');
        },
        getCurrentBreakpoint: function() {
          return $document.width() < TABLET_DESKTOP ? this.breakpoints.MOBILE : this.breakpoints.DESKTOP;
        },
        toArray: function(obj, config) {
          var result = [];

          ng.forEach(obj, function(value, key) {
            var item = {};
            item[config && config.key   ? config.key : 'id'] = key;
            item[config && config.value ? config.value : 'value'] = value;
            result.push(item);
          });

          return result;
        },
        isMobile: function(breakpoint) {
          breakpoint = breakpoint || this.getCurrentBreakpoint();
          return breakpoint === this.breakpoints.MOBILE || breakpoint === this.breakpoints.TABLET;
        },
        throttle: function(delay, callback) {
          var lastInvocation = 0,
              _id;

          return function() {
            var that = this,
                dt = Date.now() - lastInvocation,
                args = arguments;

            function call() {
              lastInvocation = Date.now();
              callback.apply(that, args);
            }

            _id && clearTimeout(_id);

            if (dt > delay) {
              call();
            }
            else {
              _id = setTimeout(call, delay - dt);
            }
          }
        }
      });

      return new Helper();
    }
  ]);
})(angular, this);
