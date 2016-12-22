

//Source: ./bower-components/enquire/dist/enquire.min.js
/*!
 * enquire.js v2.1.2 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

!function(a,b,c){var d=window.matchMedia;"undefined"!=typeof module&&module.exports?module.exports=c(d):"function"==typeof define&&define.amd?define(function(){return b[a]=c(d)}):b[a]=c(d)}("enquire",this,function(a){"use strict";function b(a,b){var c,d=0,e=a.length;for(d;e>d&&(c=b(a[d],d),c!==!1);d++);}function c(a){return"[object Array]"===Object.prototype.toString.apply(a)}function d(a){return"function"==typeof a}function e(a){this.options=a,!a.deferSetup&&this.setup()}function f(b,c){this.query=b,this.isUnconditional=c,this.handlers=[],this.mql=a(b);var d=this;this.listener=function(a){d.mql=a,d.assess()},this.mql.addListener(this.listener)}function g(){if(!a)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!a("only all").matches}return e.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(a){return this.options===a||this.options.match===a}},f.prototype={addHandler:function(a){var b=new e(a);this.handlers.push(b),this.matches()&&b.on()},removeHandler:function(a){var c=this.handlers;b(c,function(b,d){return b.equals(a)?(b.destroy(),!c.splice(d,1)):void 0})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){b(this.handlers,function(a){a.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var a=this.matches()?"on":"off";b(this.handlers,function(b){b[a]()})}},g.prototype={register:function(a,e,g){var h=this.queries,i=g&&this.browserIsIncapable;return h[a]||(h[a]=new f(a,i)),d(e)&&(e={match:e}),c(e)||(e=[e]),b(e,function(b){d(b)&&(b={match:b}),h[a].addHandler(b)}),this},unregister:function(a,b){var c=this.queries[a];return c&&(b?c.removeHandler(b):(c.clear(),delete this.queries[a])),this}},new g});;

//Source: ../../libraries/tve/lib/angular-bootstrap/collapse.js
;
(function() {
  angular.module('ui.bootstrap.collapse', ['ui.bootstrap.transition'])

    // The collapsible directive indicates a block of html that will expand and collapse
      .directive('collapse', ['$transition', function($transition) {
        // CSS transitions don't work with height: auto, so we have to manually change the height to a
        // specific value and then once the animation completes, we can reset the height to auto.
        // Unfortunately if you do this while the CSS transitions are specified (i.e. in the CSS class
        // "collapse") then you trigger a change to height 0 in between.
        // The fix is to remove the "collapse" CSS class while changing the height back to auto - phew!
        var fixUpHeight = function(scope, element, height) {
          // We remove the collapse CSS class to prevent a transition when we change to height: auto
          element.removeClass('collapse');
          element.css({ height: height });
          // It appears that  reading offsetWidth makes the browser realise that we have changed the
          // height already :-/
          var x = element[0].offsetWidth;
          element.addClass('collapse');
        };

        return {
          link: function(scope, element, attrs) {

            var isCollapsed;
            var initialAnimSkip = true;

            scope.$watch(attrs.collapse, function(value) {
              if (value) {
                collapse();
              } else {
                expand();
              }
            });

            var currentTransition;
            var doTransition = function(change) {
              if (currentTransition) {
                currentTransition.cancel();
              }
              currentTransition = $transition(element, change);
              currentTransition.then(
                  function() {
                    currentTransition = undefined;
                  },
                  function() {
                    currentTransition = undefined;
                  }
              );
              return currentTransition;
            };

            var expand = function() {
              if (initialAnimSkip) {
                initialAnimSkip = false;
                if (!isCollapsed) {
                  fixUpHeight(scope, element, 'auto');
                  element.addClass('in');
                }
              } else {
                doTransition({ height: element[0].scrollHeight + 'px' })
                    .then(function() {
                      // This check ensures that we don't accidentally update the height if the user has closed
                      // the group while the animation was still running
                      if (!isCollapsed) {
                        fixUpHeight(scope, element, 'auto');
                        element.addClass('in');
                      }
                    });
              }
              isCollapsed = false;
            };

            var collapse = function() {
              isCollapsed = true;
              element.removeClass('in');
              if (initialAnimSkip) {
                initialAnimSkip = false;
                fixUpHeight(scope, element, 0);
              } else {
                fixUpHeight(scope, element, element[0].scrollHeight + 'px');
                doTransition({'height': '0'});
              }
            };
          }
        };
      }]);
})();;

//Source: ../../libraries/tve/lib/angular-bootstrap/accordion.js
;
(function() {
  angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse'])

      .constant('accordionConfig', {
        closeOthers: true
      })

      .controller('AccordionController', ['$scope', '$attrs', 'accordionConfig', function($scope, $attrs, accordionConfig) {

        // This array keeps track of the accordion groups
        this.groups = [];

        // Ensure that all the groups in this accordion are closed, unless close-others explicitly says not to
        this.closeOthers = function(openGroup) {
          var closeOthers = angular.isDefined($attrs.closeOthers) ? $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
          if (closeOthers) {
            angular.forEach(this.groups, function(group) {
              if (group !== openGroup) {
                group.isOpen = false;
              }
            });
          }
        };

        // This is called from the accordion-group directive to add itself to the accordion
        this.addGroup = function(groupScope) {
          var that = this;
          this.groups.push(groupScope);

          groupScope.$on('$destroy', function(event) {
            that.removeGroup(groupScope);
          });
        };

        // This is called from the accordion-group directive when to remove itself
        this.removeGroup = function(group) {
          var index = this.groups.indexOf(group);
          if (index !== -1) {
            this.groups.splice(this.groups.indexOf(group), 1);
          }
        };

      }])

    // The accordion directive simply sets up the directive controller
    // and adds an accordion CSS class to itself element.
      .directive('accordion', function() {
        return {
          restrict: 'EA',
          controller: 'AccordionController',
          transclude: true,
          replace: false,
          template: '<div class="accordion" data-ng-transclude></div>'
        };
      })

    // The accordion-group directive indicates a block of html that will expand and collapse in an accordion
      .directive('accordionGroup', ['$parse', function($parse) {
        return {
          require: '^accordion',         // We need this directive to be inside an accordion
          restrict: 'EA',
          transclude: true,              // It transcludes the contents of the directive into the template
          replace: true,                // The element containing the directive will be replaced with the template
          template: '<div class="accordionGroup">' +
              '<div class="accordionHeading" data-ng-class="{opened: isOpen, collapsible: collapsible}">' +
              '<a class="accordionToggle" ng-click="isOpen = !isOpen" accordion-transclude="heading">{{heading}}</a>' +
              '</div>' +
              '<div class="accordionBody" collapse="!isOpen">' +
              '<div class="accordionInner" data-ng-transclude></div>' +
              '</div>' +
              '</div>',
          scope: { heading: '@' },        // Create an isolated scope and interpolate the heading attribute onto this scope
          controller: function() {
            this.setHeading = function(element) {
              this.heading = element;
            };
          },
          link: function(scope, element, attrs, accordionCtrl) {
            var getIsOpen, setIsOpen;

            accordionCtrl.addGroup(scope);

            scope.isOpen = false;

            if (attrs.isOpen) {
              getIsOpen = $parse(attrs.isOpen);
              setIsOpen = getIsOpen.assign;

              scope.$parent.$watch(getIsOpen, function(value) {
                scope.isOpen = !!value;
              });
            }

            scope.$watch('isOpen', function(value) {
              if (value) {
                accordionCtrl.closeOthers(scope);
              }
              if (setIsOpen) {
                setIsOpen(scope.$parent, value);
              }
            });
          }
        };
      }])

    // Use accordion-heading below an accordion-group to provide a heading containing HTML
    // <accordion-group>
    //   <accordion-heading>Heading containing HTML - <img src="..."></accordion-heading>
    // </accordion-group>
      .directive('accordionHeading', function() {
        return {
          restrict: 'EA',
          transclude: true,   // Grab the contents to be used as the heading
          template: '',       // In effect remove this element!
          replace: true,
          require: '^accordionGroup',
          compile: function(element, attr, transclude) {
            return function link(scope, element, attr, accordionGroupCtrl) {
              // Pass the heading to the accordion-group controller
              // so that it can be transcluded into the right place in the template
              // [The second parameter to transclude causes the elements to be cloned so that they work in ng-repeat]
              accordionGroupCtrl.setHeading(transclude(scope, function() {
              }));
            };
          }
        };
      })

    // Use in the accordion-group template to indicate where you want the heading to be transcluded
    // You must provide the property on the accordion-group controller that will hold the transcluded element
    // <div class="accordion-group">
    //   <div class="accordion-heading" ><a ... accordion-transclude="heading">...</a></div>
    //   ...
    // </div>
      .directive('accordionTransclude', function() {
        return {
          require: '^accordionGroup',
          link: function(scope, element, attr, controller) {
            scope.$watch(function() {
              return controller[attr.accordionTransclude];
            }, function(heading) {
              if (heading) {
                element.html('');
                element.append(heading);
              }
            });
          }
        };
      });
})();;

//Source: ../../libraries/tve/lib/ui-event.js
/**
 * General-purpose Event binding. Bind any event not natively supported by Angular
 * Pass an object with keynames for events to ui-event
 * Allows $event object and $params object to be passed
 *
 * @example <input ui-event="{ focus : 'counter++', blur : 'someCallback()' }">
 * @example <input ui-event="{ myCustomEvent : 'myEventHandler($event, $params)'}">
 *
 * @param ui-event {string|object literal} The event to bind to as a string or a hash of events with their callbacks
 */
angular.module('ui.event', []).directive('uiEvent', ['$parse',
  function($parse) {
    return function($scope, elm, attrs) {
      var events = $scope.$eval(attrs.uiEvent);
      angular.forEach(events, function(uiEvent, eventName) {
        var fn = $parse(uiEvent);
        elm.bind(eventName, function(evt) {
          var params = Array.prototype.slice.call(arguments);
          //Take out first paramater (event object);
          params = params.splice(1);
          fn($scope, {$event: evt, $params: params});
          if (!$scope.$$phase) {
            $scope.$apply();
          }
        });
      });
    };
  }]);;

//Source: ../../libraries/tve/lib/ui-keypress.js
angular.module('ui.keypress', []).
    factory('keypressHelper', ['$parse', function keypress($parse) {
      var keysByCode = {
        8: 'backspace',
        9: 'tab',
        13: 'enter',
        27: 'esc',
        32: 'space',
        33: 'pageup',
        34: 'pagedown',
        35: 'end',
        36: 'home',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        45: 'insert',
        46: 'delete'
      };

      var capitaliseFirstLetter = function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      };

      return function(mode, scope, elm, attrs) {
        var params, combinations = [];
        params = scope.$eval(attrs['ui' + capitaliseFirstLetter(mode)]);

        // Prepare combinations for simple checking
        angular.forEach(params, function(v, k) {
          var combination, expression;
          expression = $parse(v);

          angular.forEach(k.split(' '), function(variation) {
            combination = {
              expression: expression,
              keys: {}
            };
            angular.forEach(variation.split('-'), function(value) {
              combination.keys[value] = true;
            });
            combinations.push(combination);
          });
        });

        // Check only matching of pressed keys one of the conditions
        elm.bind(mode, function(event) {
          // No need to do that inside the cycle
          var metaPressed = !!(event.metaKey && !event.ctrlKey);
          var altPressed = !!event.altKey;
          var ctrlPressed = !!event.ctrlKey;
          var shiftPressed = !!event.shiftKey;
          var keyCode = event.keyCode;

          // normalize keycodes
          if (mode === 'keypress' && !shiftPressed && keyCode >= 97 && keyCode <= 122) {
            keyCode = keyCode - 32;
          }

          // Iterate over prepared combinations
          angular.forEach(combinations, function(combination) {

            var mainKeyPressed = combination.keys[keysByCode[keyCode]] || combination.keys[keyCode.toString()];

            var metaRequired = !!combination.keys.meta;
            var altRequired = !!combination.keys.alt;
            var ctrlRequired = !!combination.keys.ctrl;
            var shiftRequired = !!combination.keys.shift;

            if (
                mainKeyPressed &&
                    ( metaRequired === metaPressed ) &&
                    ( altRequired === altPressed ) &&
                    ( ctrlRequired === ctrlPressed ) &&
                    ( shiftRequired === shiftPressed )
                ) {
              // Run the function
              scope.$apply(function() {
                combination.expression(scope, { '$event': event });
              });
            }
          });
        });
      };
    }]);

/**
 * Bind one or more handlers to particular keys or their combination
 * @param hash {mixed} keyBindings Can be an object or string where keybinding expression of keys or keys combinations and AngularJS Exspressions are set. Object syntax: "{ keys1: expression1 [, keys2: expression2 [ , ... ]]}". String syntax: ""expression1 on keys1 [ and expression2 on keys2 [ and ... ]]"". Expression is an AngularJS Expression, and key(s) are dash-separated combinations of keys and modifiers (one or many, if any. Order does not matter). Supported modifiers are 'ctrl', 'shift', 'alt' and key can be used either via its keyCode (13 for Return) or name. Named keys are 'backspace', 'tab', 'enter', 'esc', 'space', 'pageup', 'pagedown', 'end', 'home', 'left', 'up', 'right', 'down', 'insert', 'delete'.
 * @example <input ui-keypress="{enter:'x = 1', 'ctrl-shift-space':'foo()', 'shift-13':'bar()'}" /> <input ui-keypress="foo = 2 on ctrl-13 and bar('hello') on shift-esc" />
 **/
angular.module('ui.keypress').directive('uiKeydown', ['keypressHelper', function(keypressHelper) {
  return {
    link: function(scope, elm, attrs) {
      keypressHelper('keydown', scope, elm, attrs);
    }
  };
}]);

angular.module('ui.keypress').directive('uiKeypress', ['keypressHelper', function(keypressHelper) {
  return {
    link: function(scope, elm, attrs) {
      keypressHelper('keypress', scope, elm, attrs);
    }
  };
}]);

angular.module('ui.keypress').directive('uiKeyup', ['keypressHelper', function(keypressHelper) {
  return {
    link: function(scope, elm, attrs) {
      keypressHelper('keyup', scope, elm, attrs);
    }
  };
}]);;

//Source: ../../libraries/tve/lib/jquery.ba-throttle-debounce.min.js
/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);;

//Source: ../../libraries/tve/lib/jquery.waitforimages.min.js
/*! waitForImages jQuery Plugin 2013-07-20 */
!function(a){var b="waitForImages";a.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage","cursor"]},a.expr[":"].uncached=function(b){if(!a(b).is('img[src!=""]'))return!1;var c=new Image;return c.src=b.src,!c.complete},a.fn.waitForImages=function(c,d,e){var f=0,g=0;if(a.isPlainObject(arguments[0])&&(e=arguments[0].waitForAll,d=arguments[0].each,c=arguments[0].finished),c=c||a.noop,d=d||a.noop,e=!!e,!a.isFunction(c)||!a.isFunction(d))throw new TypeError("An invalid callback was supplied.");return this.each(function(){var h=a(this),i=[],j=a.waitForImages.hasImageProperties||[],k=/url\(\s*(['"]?)(.*?)\1\s*\)/g;e?h.find("*").addBack().each(function(){var b=a(this);b.is("img:uncached")&&i.push({src:b.attr("src"),element:b[0]}),a.each(j,function(a,c){var d,e=b.css(c);if(!e)return!0;for(;d=k.exec(e);)i.push({src:d[2],element:b[0]})})}):h.find("img:uncached").each(function(){i.push({src:this.src,element:this})}),f=i.length,g=0,0===f&&c.call(h[0]),a.each(i,function(e,i){var j=new Image;a(j).on("load."+b+" error."+b,function(a){return g++,d.call(i.element,g,f,"load"==a.type),g==f?(c.call(h[0]),!1):void 0}),j.src=i.src})})}}(jQuery);;

//Source: ../../libraries/tve/lib/angular-timer.js
/**
 * angular-timer - v1.1.6 - 2014-07-01 7:37 AM
 * https://github.com/siddii/angular-timer
 *
 * Copyright (c) 2014 Siddique Hameed
 * Licensed MIT <https://github.com/siddii/angular-timer/blob/master/LICENSE.txt>
 */
var timerModule = angular.module('timer', [])
  .directive('timer', ['$compile', function ($compile) {
    return  {
      restrict: 'EAC',
      replace: false,
      scope: {
        interval: '=interval',
        startTimeAttr: '=startTime',
        endTimeAttr: '=endTime',
        countdownattr: '=countdown',
        finishCallback: '&finishCallback',
        autoStart: '&autoStart',
        maxTimeUnit: '='
      },
      controller: ['$scope', '$element', '$attrs', '$timeout', function ($scope, $element, $attrs, $timeout) {

        // Checking for trim function since IE8 doesn't have it
        // If not a function, create tirm with RegEx to mimic native trim
        if (typeof String.prototype.trim !== 'function') {
          String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/g, '');
          };
        }

        //angular 1.2 doesn't support attributes ending in "-start", so we're
        //supporting both "autostart" and "auto-start" as a solution for
        //backward and forward compatibility.
        $scope.autoStart = $attrs.autoStart || $attrs.autostart;

        if ($element.html().trim().length === 0) {
          $element.append($compile('<span>{{millis}}</span>')($scope));
        } else {
          $element.append($compile($element.contents())($scope));
        }

        $scope.$watch('countdownattr', function(newVal){
          if (newVal) $scope.start();
        });

        $scope.startTime = null;
        $scope.endTime = null;
        $scope.timeoutId = null;
        $scope.countdown = $scope.countdownattr && parseInt($scope.countdownattr, 10) >= 0 ? parseInt($scope.countdownattr, 10) : undefined;
        $scope.isRunning = false;

        $scope.$on('timer-start', function () {
          $scope.start();
        });

        $scope.$on('timer-resume', function () {
          $scope.resume();
        });

        $scope.$on('timer-stop', function () {
          $scope.stop();
        });

        $scope.$on('timer-clear', function () {
          $scope.clear();
        });

        $scope.$on('timer-set-countdown', function (e, countdown) {
          $scope.countdown = countdown;
        });

        function resetTimeout() {
          if ($scope.timeoutId) {
            clearTimeout($scope.timeoutId);
          }
        }

        $scope.start = $element[0].start = function () {
          $scope.startTime = $scope.startTimeAttr ? new Date($scope.startTimeAttr) : new Date();
          $scope.endTime = $scope.endTimeAttr ? new Date($scope.endTimeAttr) : null;
          if (!$scope.countdown) {
            $scope.countdown = $scope.countdownattr && parseInt($scope.countdownattr, 10) > 0 ? parseInt($scope.countdownattr, 10) : undefined;
          }
          resetTimeout();
          tick();
          $scope.isRunning = true;
        };

        $scope.resume = $element[0].resume = function () {
          resetTimeout();
          if ($scope.countdownattr) {
            $scope.countdown += 1;
          }
          $scope.startTime = new Date() - ($scope.stoppedTime - $scope.startTime);
          tick();
          $scope.isRunning = true;
        };

        $scope.stop = $scope.pause = $element[0].stop = $element[0].pause = function () {
          var timeoutId = $scope.timeoutId;
          $scope.clear();
          $scope.$emit('timer-stopped', {timeoutId: timeoutId, millis: $scope.millis, seconds: $scope.seconds, minutes: $scope.minutes, hours: $scope.hours, days: $scope.days});
        };

        $scope.clear = $element[0].clear = function () {
          // same as stop but without the event being triggered
          $scope.stoppedTime = new Date();
          resetTimeout();
          $scope.timeoutId = null;
          $scope.isRunning = false;
        };

        $element.bind('$destroy', function () {
          resetTimeout();
          $scope.isRunning = false;
        });

        function calculateTimeUnits() {

          // compute time values based on maxTimeUnit specification
          if (!$scope.maxTimeUnit || $scope.maxTimeUnit === 'day') {
            $scope.seconds = Math.floor(($scope.millis / 1000) % 60);
            $scope.minutes = Math.floor((($scope.millis / (60000)) % 60));
            $scope.hours = Math.floor((($scope.millis / (3600000)) % 24));
            $scope.days = Math.floor((($scope.millis / (3600000)) / 24));
            $scope.months = 0;
            $scope.years = 0;
          } else if ($scope.maxTimeUnit === 'second') {
            $scope.seconds = Math.floor($scope.millis / 1000);
            $scope.minutes = 0;
            $scope.hours = 0;
            $scope.days = 0;
            $scope.months = 0;
            $scope.years = 0;
          } else if ($scope.maxTimeUnit === 'minute') {
            $scope.seconds = Math.floor(($scope.millis / 1000) % 60);
            $scope.minutes = Math.floor($scope.millis / 60000);
            $scope.hours = 0;
            $scope.days = 0;
            $scope.months = 0;
            $scope.years = 0;
          } else if ($scope.maxTimeUnit === 'hour') {
            $scope.seconds = Math.floor(($scope.millis / 1000) % 60);
            $scope.minutes = Math.floor((($scope.millis / (60000)) % 60));
            $scope.hours = Math.floor($scope.millis / 3600000);
            $scope.days = 0;
            $scope.months = 0;
            $scope.years = 0;
          } else if ($scope.maxTimeUnit === 'month') {
            $scope.seconds = Math.floor(($scope.millis / 1000) % 60);
            $scope.minutes = Math.floor((($scope.millis / (60000)) % 60));
            $scope.hours = Math.floor((($scope.millis / (3600000)) % 24));
            $scope.days = Math.floor((($scope.millis / (3600000)) / 24) % 30);
            $scope.months = Math.floor((($scope.millis / (3600000)) / 24) / 30);
            $scope.years = 0;
          } else if ($scope.maxTimeUnit === 'year') {
            $scope.seconds = Math.floor(($scope.millis / 1000) % 60);
            $scope.minutes = Math.floor((($scope.millis / (60000)) % 60));
            $scope.hours = Math.floor((($scope.millis / (3600000)) % 24));
            $scope.days = Math.floor((($scope.millis / (3600000)) / 24) % 30);
            $scope.months = Math.floor((($scope.millis / (3600000)) / 24 / 30) % 12);
            $scope.years = Math.floor(($scope.millis / (3600000)) / 24 / 365);
          }

          // plural - singular unit decision
          $scope.secondsS = $scope.seconds == 1 ? '' : 's';
          $scope.minutesS = $scope.minutes == 1 ? '' : 's';
          $scope.hoursS = $scope.hours == 1 ? '' : 's';
          $scope.daysS = $scope.days == 1 ? '' : 's';
          $scope.monthsS = $scope.months == 1 ? '' : 's';
          $scope.yearsS = $scope.years == 1 ? '' : 's';
          //add leading zero if number is smaller than 10
          $scope.sseconds = $scope.seconds < 10 ? '0' + $scope.seconds : $scope.seconds;
          $scope.mminutes = $scope.minutes < 10 ? '0' + $scope.minutes : $scope.minutes;
          $scope.hhours = $scope.hours < 10 ? '0' + $scope.hours : $scope.hours;
          $scope.ddays = $scope.days < 10 ? '0' + $scope.days : $scope.days;
          $scope.mmonths = $scope.months < 10 ? '0' + $scope.months : $scope.months;
          $scope.yyears = $scope.years < 10 ? '0' + $scope.years : $scope.years;

        }

        //determine initial values of time units and add AddSeconds functionality
        if ($scope.countdownattr) {
          $scope.millis = $scope.countdownattr * 1000;

          $scope.addCDSeconds = $element[0].addCDSeconds = function (extraSeconds) {
            $scope.countdown += extraSeconds;
            $scope.$digest();
            if (!$scope.isRunning) {
              $scope.start();
            }
          };

          $scope.$on('timer-add-cd-seconds', function (e, extraSeconds) {
            $timeout(function () {
              $scope.addCDSeconds(extraSeconds);
            });
          });

          $scope.$on('timer-set-countdown-seconds', function (e, countdownSeconds) {
            if (!$scope.isRunning) {
              $scope.clear();
            }

            $scope.countdown = countdownSeconds;
            $scope.millis = countdownSeconds * 1000;
            calculateTimeUnits();
          });
        } else {
          $scope.millis = 0;
        }
        calculateTimeUnits();

        var tick = function () {

          $scope.millis = new Date() - $scope.startTime;
          var delta = $scope.millis % 1000,
            adjustment = (delta < 100) ? delta : 0;

          if ($scope.endTimeAttr) {
            $scope.millis = $scope.endTime - new Date();
            adjustment = $scope.interval - $scope.millis % 1000;
          }


          if ($scope.countdownattr) {
            $scope.millis = $scope.countdown * 1000;
          }

          if ($scope.millis < 0) {
            $scope.stop();
            $scope.millis = 0;
            calculateTimeUnits();
            if($scope.finishCallback) {
              $scope.$eval($scope.finishCallback);
            }
            return;
          }
          calculateTimeUnits();

          //We are not using $timeout for a reason. Please read here - https://github.com/siddii/angular-timer/pull/5
          $scope.timeoutId = setTimeout(function () {
            tick();
            $scope.$digest();
          }, $scope.interval - adjustment);

          $scope.$emit('timer-tick', {timeoutId: $scope.timeoutId, millis: $scope.millis});

          if ($scope.countdown > 0) {
            $scope.countdown--;
          }
          else if ($scope.countdown <= 0) {
            $scope.stop();
            if($scope.finishCallback) {
              $scope.$eval($scope.finishCallback);
            }
          }
        };

        if ($scope.autoStart === undefined || $scope.autoStart === true) {
          $scope.start();
        }
      }]
    };
  }]);

/* commonjs package manager support (eg componentjs) */
if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
  module.exports = timerModule;
}
;

//Source: ../../libraries/tve/scripts/tve-init.js
(function(ng, window) {
  'use strict';

  // polyfills
  Date.now = Date.now || function() {
    return + new Date;
  };

  window.requestAnimationFrame = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };

  window.cancelAnimationFrame = window.cancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.clearTimeout;

  // tve module initialization
  window.tve = window.tve || {};

  ng.module('tve.filters', []);
  ng.module('tve.controllers', []);
  ng.module('tve.services', []);
  ng.module('tve.directives', []);

})(angular, this);
;

//Source: ../../libraries/tve/scripts/filters/omniture-link-tracking.js
/**
 * Cookie based link tracking for s_code H25.4
 *
 * @usage:  Add following structure to DOM element which you would like to track
 *          ng-click="$event | trackLink:'arg1':'arg2':...:'argN'"
 */

;(function(ng) {
  'use strict';

  ng.module('tve.filters')
    .filter('trackLink', [function() {
      return function() {
        var separator     = ':',
            linkTrkString = Array.prototype.slice.call(arguments, 1).join(separator);

        try {
          if (window['linkTrkCookie']) {
            linkTrkCookie(linkTrkString);
          } else if (window['s'] && s.c_w) {
            s.c_w('linktrk', linkTrkString, 0);
          }
        } catch (e) {
          console.error(e.stack ? e.stack : e.message);
        }
      }
    }]);
})(angular);
;

//Source: ../../libraries/tve/scripts/directives/ng-html-unsafe-directive.js
;(function(ng) {
  'use strict';

  ng.module('tve.directives')
    .directive('ngBindHtmlUnsafe', [function() {
      return function(scope, element, attr) {
        element.addClass('ng-binding').data('$binding', attr.ngBindHtmlUnsafe);
        scope.$watch(attr.ngBindHtmlUnsafe, function ngBindHtmlUnsafeWatchAction(value) {
          element.html(value || '');
        });
      }
    }]);
})(angular);
;

//Source: ../../libraries/tve/scripts/directives/reflow-directive.js
(function(ng, $) {
	ng.module('tve.directives')
	/*
	 * Triggers reflow for the element to fix possible defect on dynamic elements in IE
	 */
	.directive('tveReflow', [function() {
		return {
        link : function($scope, $elem, $attrs) {
          var browser = $.browser;

          if (!browser || browser.msie) {
            setTimeout(function() {
              $elem.css('opacity', $elem.css('opacity'));
            }, 0);
          }
        }
		};
	}]);
})(angular, jQuery);
;

//Source: ../../libraries/tve/scripts/directives/screen-size.js
(function(ng) {

	ng.module('tve.directives')
	.directive('tveScreenSize', [
    '$window', 'helper',
    function($window, helper) {
      return {
        link : function(scope, elem, attr) {
          var resizeHandler = function() {
            scope.$apply(function() {
              scope.mobileResolutionFlag = !helper.isMobile();
            });
          };

          scope.mobileResolutionFlag = !helper.isMobile();
          ng.element($window).bind('resize.breakpoint', helper.throttle(100, resizeHandler));
        }
      };
    }
  ]);

})(angular);
;

//Source: ../../libraries/tve/scripts/directives/tve-player-directive.js
(function(ng, $, tve, window) {
  'use strict';

  ng.module('tve.directives')
    .directive('tvePlayer', [
      '$sce', 'authService',
      function($sce, authService) {
        return {
          replace: false,
          // apply client side iframe rendering to reduce cache problem for dynamic url
          template: '<iframe data-ng-src="{{src}}" src="about:blank" id="{{id}}" allowfullscreen="" frameborder="0"></iframe>',
          // directive describe below
          require: '^tvePlayerContainer',
          scope: true,
          compile: function(tElement, tAttr) {
            var config = tAttr;

            return function(scope, element, attr, controller) {
              var SRC_PARAMS = [{
                  attrName: 'mbr',
                  key: 'mbr'
                },
                  {
                    attrName: 'fwSiteSection',
                    key: 'FWsiteSection'
                  }],
                MVPD_ID_KEY = 'MVPDid';

              scope.id = config.id;
              authService.promise.then(init);

              function init(status) {
                // passing iframe url as trusted to the template
                scope.src = $sce.trustAsResourceUrl(config.src + '?' + getQueryParams(status.isAuthenticated && status.mvpdId));
              }

              /**
               * Returns url params string for player source
               *
               * @param {boolean|string} mvpdId MVPD id string for the authenticated users and false for non.
               * @returns {string} query params string
               */
              function getQueryParams(mvpdId) {
                var params = {
                  autoPlay: true
                };

                ng.forEach(SRC_PARAMS, function(param, i) {
                  if (param.attrName in config) {
                    params[param.key] = config[param.attrName];
                  }
                });

                if (mvpdId) {
                  params[MVPD_ID_KEY] = mvpdId;
                }

                return $.param(params);
              }
            };
          }
        };
      }
    ])
    .directive('tvePlayerContainer', [
      '$rootScope',
      'authService', 'tveAuthConfig', 'tveConfig', 'helper', 'tveModal',

      function($rootScope,
               authService, tveAuthConfig, tveConfig, helper, tveModal) {

        return {
          scope: true,
          controller: ['$scope', function($scope) {
            this.isEntitled = function() {
              return $scope.isEntitled;
            };
          }],
          link: function(scope, element, attr) {
            var AUTH_STATUS, LONG_ADD_ID, LONGEST_ADD_ID, SMALL_ADD_ID, TIME_INTERVAL_FOR_SLATE, REGEXP_FOR_AD_SIZES,
              $pdk, tveAnalytics, isLargePlayer, isLive, rowId, mpxId, userStatus, currentAsset, isLeaderBoardEnabled,
              isLeaderBoardAddsApplied, $leaderBoardBlock, $dartBlock, $leaderBoardAdsArea, $leaderBoardAdsBlock;

            if (!($pdk = window.$pdk)) {
              return;
            }

            AUTH_STATUS = 'auth';
            LONG_ADD_ID = '728';
            LONGEST_ADD_ID = '970';
            SMALL_ADD_ID = '300';
            TIME_INTERVAL_FOR_SLATE = 30000;
            REGEXP_FOR_AD_SIZES = new RegExp(['ad_(', LONG_ADD_ID, '|', LONGEST_ADD_ID, ')x\\d{2,3}_\\d{1}'].join(''), 'gi');

            tveAnalytics = tve.analytics ? tve.analytics : { authzTrack: ng.noop },
            isLargePlayer = helper.toBoolean(attr.largePlayer);
            isLive = helper.toBoolean(attr.live);
            rowId = attr['mpxId'];
            mpxId = !isLive && rowId && rowId.split('/').pop();
            isLeaderBoardEnabled = helper.toBoolean(attr['leaderboardAdsEnabled']);
            $dartBlock = $('#dart-tag-wrapper');
            $leaderBoardBlock = $('.tve-leaderboard-ads');
            $leaderBoardAdsBlock = $('#leaderboard-ads-area-wrapper'),
              $leaderBoardAdsArea = $('#leaderboard-ads-area');
            isLeaderBoardAddsApplied = false;

            scope.isEntitled = attr['entitlement'] === AUTH_STATUS;
            scope.isMobile = helper.device.isMobile;
            scope.showPlayer = showPlayer();
            scope.showLeaderboard = true;
            scope.showDartAdd = true;
            scope.showLeaderboardAdd = false;
            scope.showCompanionAdd = false;
            scope.showAssetDetails = true;
            scope.withHiddenAsset = false;
            scope.showWatchwithSideCar = false;
            scope.hideSideCarErrorMessage = false;
            scope.isLivePlayerRefreshSlate = false;
            scope.showLivePlayerSlateTimer = null;

            scope.user = {
              isAuthenticated: authService.isAuthenticated()
            };

            authService.promise.then(function(status) {
              userStatus = status;
              scope.user.isAuthenticated = status.isAuthenticated;

              if (Drupal.settings.enableRefreshSlate && scope.showPlayer && !status.isAuthenticated) {
                // Live player display slate
                livePlayerRefreshSlate();
              }

              if (scope.showPlayer = showPlayer()) {
                setTimeout(function() {
                  if (typeof tve.watchwith != 'undefined') {
                    tve.watchwith.loadSideCar();
                  }
                  _bindPlayerEvents();
                }, 0);
              }
            });

            //referencing openLoginModal function to the current scope
            scope.openLoginWindow = authService.openLoginModal;

            /*scope.resume = function() {
             scope.previouslyWatched = null;
             $pdk.controller.clickPlayButton(true);
             resuming = true;
             };*/

            scope.play = function() {
              scope.previouslyWatched = null;
              $pdk.controller.clickPlayButton(true);
            };

            scope.showWatchwithSidecar = function() {
              scope.showWatchwithSideCar = true;
            };

            scope.showAboutSection = function() {
              scope.showWatchwithSideCar = false;
            };

            if (tve.watchwith) {
              tve.watchwith.showSideCarTabs = function() {
                authService.promise.then(function() {
                  if (showPlayer()) {
                    scope.showSideCarTabs = true;
                    scope.hideSideCarErrorMessage = true;
                    scope.showWatchwithSideCar = true;
                  }
                });
              };
            }

            function showAds() {
              scope.showAssetDetails = false;
              scope.showCompanionAdd = true;
            }

            function showAssetDetails() {
              scope.showAssetDetails = true;
              scope.showCompanionAdd = false;
            }

            function showLeaderboardAdds() {
              isLeaderBoardAddsApplied = true;
              $leaderBoardBlock.show();
              $leaderBoardAdsBlock.show();
              $dartBlock.hide();
            }

            function hideLeaderboardAdds() {
              if (!isLeaderBoardAddsApplied) {
                $leaderBoardBlock.hide();
                $dartBlock.hide();
              }
            }

            if (Drupal.settings.tve_cookie_detection != undefined) {
              if (Drupal.settings.tve_cookie_detection.status == false && attr['entitlement'] == 'auth' && authService.isAuthenticated()) {
                tveModal.open({
                  controller: 'CookieCtrl',
                  windowClass: 'cookieNotify tveModal tveModalBx',
                  templateUrl: 'third-party-cookie-notification.html',
                  keyboard: true,
                  backdrop : 'static'
                });
              }
            }

            function showPlayer() {
              if (attr['entitlement'] == 'auth') {
                if (Drupal.settings.tve_cookie_detection != undefined) {
                  return !scope.isMobile && authService.isAuthenticated() && Drupal.settings.tve_cookie_detection.status;
                }
                else {
                  return !scope.isMobile && authService.isAuthenticated();
                }
              }
              else {
                return !scope.isMobile;
              }
            }

            /**
             * Live player display slate function
             */
            function livePlayerRefreshSlate() {
              scope.showLivePlayerSlateTimer = setInterval(function() {
                showLivePlayerSlate();
              }, TIME_INTERVAL_FOR_SLATE);
            }

            /**
             * Live player show slate when time elapse timer function
             */
            function showLivePlayerSlate() {
              var MS_IN_SECOND = 1000,

              // EST Unix Timestamp configured to show Live player slate
                refreshSlateDisplayTimestamp = Drupal.settings.refreshSlateDisplayTime,
                currentTime = Date.now(),

              // current unix timestamp of the user timezone.
                currentTimestamp = Math.round(currentTime / MS_IN_SECOND);

              if (currentTimestamp >= refreshSlateDisplayTimestamp) {
                $('#' + tveConfig.PLAYER_ID).remove();
                scope.$apply(function() {
                  scope.isLivePlayerRefreshSlate = true;
                });

                clearInterval(scope.showLivePlayerSlateTimer);
              }
            }

            /**
             * Bind Player Events
             * @private
             */
            function _bindPlayerEvents() {
              //rebind $pdk each time directive is loaded
              if (typeof $pdk.controller.iframe == 'undefined') {
                $pdk.bind(tveConfig.PLAYER_ID);
              }

              passKruxParams();

              $pdk.controller.addEventListener('auth_token_failed', authzFailure);
              $pdk.controller.addEventListener('auth_success', authSuccess);
              $pdk.controller.addEventListener('companion_ad', companionAd);

              $pdk.controller.addEventListener('OnMediaStart', onMediaStart);
              $pdk.controller.addEventListener('OnShowProviderPicker', showMvpdPicker);
              $pdk.controller.addEventListener('OnMediaPlaying', _onMediaPlaying);
            }

            function passKruxParams() {
              $pdk.controller.setVariable({
                kuid:  helper.storage.get('kxuser'),
                ksg: helper.storage.get('kxsegs')
              });
            }

            function showMvpdPicker() {
              scope.$apply(function() {
                $.cookie(tveAuthConfig.cookies.NBCU_USER, '', {
                  expires: -1,
                  path: Drupal.settings.basePath
                });

                authService.openLoginModal();
              });
            }

            /**
             * Media Start event callback so that we can show the metadata section
             */
            function onMediaStart(pdkEvent) {
              var baseClip = pdkEvent && pdkEvent.data && pdkEvent.data.baseClip;

              if (baseClip && baseClip.isAd) {
                // Functionality for ad playing event
                if ((!isLive && Drupal.settings.tve_player.vod.lb_ad_status) || (isLive && Drupal.settings.tve_player.live.lb_ad_status)) {
                  hideLeaderboardAdds();
                }
              }
              else {
                scope.$apply(function() {
                  if (!isLargePlayer) {
                    showAssetDetails();
                  }
                });
              }

              if (!isLive && baseClip) {
                var videoData = pdkEvent.data;

                currentAsset = {
                  contentId: baseClip.contentID,
                  duration: videoData.mediaLength
                };
              }
            }

            function _onMediaPlaying(e) {
              var eventInfo = e.data;

              // resume functionality
              /*if (!isLive && $rootScope.global.isLoggedInIdx) {
               //global closure in the link function
               lastSave = lastSave || (previouslyWatched && previouslyWatched.percentComplete);

               if (!lastSave || (Math.abs(lastSave - eventInfo.percentCompleteAggregate) > MIN_PERCANTAGE)) {
               lastSave = currentAsset.percentComplete = eventInfo.percentCompleteAggregate;
               currentAsset.timeElapsed = eventInfo.currentTimeAggregate;

               if (currentAsset.contentId) {
               idx.addToRecentlyWatched(currentAsset);
               }
               }
               }*/
            }

            /**
             * Callback for authz Failure
             * @private
             */
            function authzFailure(pdkEvent) {
              var errorCode = pdkEvent.data.message;

              authService.getSelectedProvider()
                .then(function(providerInfo) {
                  showError(providerInfo);
                }, function() {
                  showError(null)
                });

              tveAnalytics.authzTrack(false, {
                mvpd_id: userStatus.mvpdId
              });

              function showError(providerInfo) {
                $('#' + tveConfig.PLAYER_ID).remove();

                scope.isAuthZError = true;

                scope.message =
                  (providerInfo && _getAuthzErrorMessage(errorCode, providerInfo)) ||
                    $.trim(pdkEvent.data.reasonid) ||
                    _getAuthzErrorMessage(errorCode, Drupal.settings.adobePass.errorMessages);

                scope.$apply();
              }
            }

            /**
             * Callback for Companion Ad
             * @private
             */
            function companionAd(pdkEvent) {
              var targetId = pdkEvent.data.holderId,
                targetElem = document.getElementById(targetId);

              if (isLeaderBoardEnabled && helper.toBoolean(targetId.match(REGEXP_FOR_AD_SIZES))) {
                $leaderBoardAdsArea.html(pdkEvent.data.message);
                showLeaderboardAdds();
              }

              if (targetElem && ~targetId.indexOf(SMALL_ADD_ID)) {
                $(targetElem).html(pdkEvent.data.message);
                //hide video description and show companion advertisment
                if (!isLargePlayer) {
                  showAds();
                }
                else {
                  scope.showCompanionAdd = true;
                }

                scope.$digest();
              }
            }

            /**
             * Callback for authz Success
             * @private
             */
            function authSuccess(pdkEvent) {
              tveAnalytics.authzTrack(true, {
                mvpd_id: userStatus.mvpdId
              });
            }

            /**
             * Gets Error Message for the mvpd/error code
             * @private
             */
            function _getAuthzErrorMessage(errorCode, messages) {
              var errorMessage = '';

              if (messages) {
                switch (errorCode) {
                  case 'User not Authorized Error' :
                    errorMessage = messages.authorized_err;
                    break;
                  case 'Generic Authorization Error' :
                    errorMessage = messages.generic_err;
                    break;
                  case 'Internal Authorization Error' :
                    errorMessage = messages.internal_err;
                    break;
                }
              }

              return errorMessage;
            }
          }
        };
      }
    ]);

})(angular, jQuery, tve, this);
;

//Source: ../../libraries/tve/scripts/directives/tve-page-authz-player-directive.js
(function(ng, $, tve, window) {
  'use strict';

  ng.module('tve.directives')
    .directive('tvePageAuthzPlayer', [
      '$rootScope', '$sce', '$timeout', 'authService', '$cookies', 'tveAuthConfig',
      function($rootScope, $sce, $timeout, authService, $cookies, tveAuthConfig) {
        return {
          replace: false,
          // apply client side iframe rendering to reduce cache problem for dynamic url
          template: '<iframe data-ng-src="{{src}}" src="about:blank" id="{{id}}" allowfullscreen="" frameborder="0"></iframe>',
          // directive describe below
          require: '^tvePageAuthzPlayerContainer',
          scope: true,
          compile: function(tElement, tAttr) {
            var config = tAttr;

            return function(scope, element, attr, controller) {
              var SRC_PARAMS = [
                  {
                    attrName: 'mbr',
                    key: 'mbr'
                  },
                  {
                    attrName: 'fwSiteSection',
                    key: 'FWsiteSection'
                  }
                ],
                MVPD_ID_KEY = 'MVPDid',
                tveCookiesKeys = tveAuthConfig.cookies,
                imagesTimeOut = 5000;

              scope.id = config.id;
              // Making sure that the function is called after the required directive is loaded.
              $timeout(function(){
                init();
              });
              controller.setReleaseURL(config.releaseUrl);

              function init(status) {
                // Passing iframe url as trusted to the template.
                var mvpd = typeof $cookies[tveCookiesKeys.USERSELECTEDMVPD] != 'undefined' ? $cookies[tveCookiesKeys.USERSELECTEDMVPD] : '';
                scope.src = $sce.trustAsResourceUrl(config.src + '?' + getQueryParams(mvpd) + '#playerurl=' + location.href);

                // Fallback for images loading if video playback failed to start
                $timeout(function(){
                  $rootScope.$broadcast('forceImagesLoading');
                }, imagesTimeOut);
              }

              /**
               * Returns url params string for player source
               *
               * @param {boolean|string} mvpdId MVPD id string for the authenticated users and false for non.
               * @returns {string} query params string
               */
              function getQueryParams(mvpdId) {
                var params = {
                  autoPlay: !scope.isEntitled
                };

                ng.forEach(SRC_PARAMS, function(param, i) {
                  if (param.attrName in config) {
                    params[param.key] = config[param.attrName];
                  }
                });

                if (mvpdId) {
                  params[MVPD_ID_KEY] = mvpdId;
                }

                return $.param(params);
              }
            };
          }
        };
      }
    ])
    .directive('tvePageAuthzPlayerContainer', [
      '$rootScope', 'authService', 'tveAuthConfig', 'tveConfig', 'helper', 'tveModal', '$timeout', '$interval', 'schedule',

      function($rootScope, authService, tveAuthConfig, tveConfig, helper, tveModal, $timeout, $interval, scheduleService) {
        return {
          scope: true,
          controller: ['$scope', '$q', '$http', function($scope, $q, $http) {
            $scope.embargoedContentUseCases = {
              off: '',
              inband: 'inband',
              schedule: 'schedule'
            };
            $scope.isShowingProposedContent = false;
            $scope.incr = 1000;
            $scope.updateLivePlayerSlateTimer = null;

            $q.all([authService.promise, scheduleService.promise]).then(function (response) {
              $scope.user = response[0];
              $scope.live = response[1].live;
              $scope.timezone = response[1].timezone;

              if (Drupal.settings.tve_widgets.live && Drupal.settings.tve_widgets.live.embargoed_content){
                _initiateEmbargoedWidget();
              }
            });

            if (Drupal.settings.enableRefreshSlate && Drupal.settings.refreshSlateDisplayInterval > 0) {
              // Live player display slate update
              livePlayerUpdateRefreshSlateTime();
            }

            function getProposals() {
              return $http.get(helper.getRelativePath(tveConfig.path.WIDGET_JSON + Drupal.settings.tve_widgets.live.embargoed_content.widget), {
                params: {
                  no_render: 1,
                  timezone: $scope.timezone
                }
              });
            }

            /**
             * Gets live widget data in json format.
             *
             * @return json
             */
            function getLiveWidgetSettings() {
              return $http.get(helper.getRelativePath(tveConfig.path.WIDGET_JSON + 'live'), {
                params: {
                  no_render: 1
                }
              });
            }

            /**
             * Updates refresh slate config variables.
             */
            function updateRefreshSlateTime() {
              getLiveWidgetSettings().then(function (response) {
                if (response && response.data) {
                  Drupal.settings.refreshSlateDisplayTime = response.data.data.refresh_slate_display_time;
                  Drupal.settings.refreshSlateTitle = response.data.data.refresh_slate_title;
                  Drupal.settings.refreshSlateSignInText = response.data.data.refresh_slate_sign_in_text;
                }
              });
            }

            /**
             * Calls updateRefreshSlateTime function in regular interval.
             */
            function livePlayerUpdateRefreshSlateTime() {
              var interval = Drupal.settings.refreshSlateDisplayInterval * 60 * 1000;
              $scope.updateLivePlayerSlateTimer = $interval(function () {
                updateRefreshSlateTime();
              }, interval);
            }

            function initiateEmbWidgetByEPG(){
              var liveShow = $scope.live.items[0];
              startListeningLiveSchedule();

              if (liveShow.embargoed) {
                showProposedContent();
              } else {
                $scope.isShowingProposedContent = false;
              }
            }

            /**
             * Initiate Player
             * based on availability of current program for digital streaming
             */
            function _initiateEmbargoedWidget() {
              switch (Drupal.settings.tve_widgets.live.embargoed_content.source) {
                // disabled
                case $scope.embargoedContentUseCases.off:
                  $scope.isShowingProposedContent = false;
                break;

                // based on in-band metadata
                case $scope.embargoedContentUseCases.inband:
                  if(!$scope.user.isAuthenticated) {
                    // fall back to EPG Schedule
                    initiateEmbWidgetByEPG();
                  }
                break;

                // based on EPG Schedule
                case $scope.embargoedContentUseCases.schedule:
                  initiateEmbWidgetByEPG();
                break;
              }
            }

            function showProposedContent() {
              getProposals().then(function (response) {
                if (response && response.data) {
                  $scope.isShowingProposedContent = true;
                  $scope.live = response.data.data.live.items[0];
                  $scope.live.thumbnail = response.data.data.live.live_program_thumbnail_url;
                  $scope.assets_title = response.data.data.assets_title;
                  $scope.proposedShows = response.data.data.assets;
                  $scope.timeLeft = Math.round((new Date($scope.live.start_time * $scope.incr) - Date.now())/$scope.incr);
                }
              });
            }

            function startListeningLiveSchedule(){
              $scope.$on(tveConfig.LIVE_SCHEDULE_UPDATE, function(e, data) {
                var currentLive = scheduleService.getLive();
                if (currentLive.now.embargoed) {
                  showProposedContent();
                } else {
                  $scope.isShowingProposedContent = false;
                }
              });
            }

            this.hideProposedContent = function () {
              $scope.isShowingProposedContent = false;
            };

            this.isEntitled = function() {
              return $scope.isEntitled;
            };
            this.setReleaseURL = function(releaseUrl) {
              $scope.releaseUrl = releaseUrl;
            };
          }],

          link: function(scope, element, attr) {
            var AUTH_STATUS, LONG_ADD_ID, LONGEST_ADD_ID, SMALL_ADD_ID, TIME_INTERVAL_FOR_SLATE, REGEXP_FOR_AD_SIZES,
              $pdk, tveAnalytics, isLargePlayer, isLive, rowId, mpxId, userStatus, currentAsset, isLeaderBoardEnabled,
              isLeaderBoardAddsApplied, $leaderBoardBlock, $dartBlock, $leaderBoardAdsArea, $leaderBoardAdsBlock, checkThirdPartyCookies,
              episodeRating, episodeTitle, mpxGuid, encodedToken;

            if (!($pdk = window.$pdk)) {
              return;
            }

            AUTH_STATUS = 'auth';
            LONG_ADD_ID = '728';
            LONGEST_ADD_ID = '970';
            SMALL_ADD_ID = '300';
            TIME_INTERVAL_FOR_SLATE = 30000;
            REGEXP_FOR_AD_SIZES = new RegExp(['ad_(', LONG_ADD_ID, '|', LONGEST_ADD_ID, ')x\\d{2,3}_\\d{1}'].join(''), 'gi');

            tveAnalytics = tve.analytics ? tve.analytics : { authzTrack: ng.noop },
            isLargePlayer = helper.toBoolean(attr.largePlayer);
            isLive = helper.toBoolean(attr.live);
            rowId = attr['mpxId'];
            mpxId = !isLive && rowId && rowId.split('/').pop();
            episodeRating = attr['episodeRating'];
            episodeTitle = attr['episodeTitle'];
            mpxGuid = attr['mpxGuid'];
            isLeaderBoardEnabled = helper.toBoolean(attr['leaderboardAdsEnabled']);
            $dartBlock = $('#dart-tag-wrapper');
            $leaderBoardBlock = $('.tve-leaderboard-ads');
            $leaderBoardAdsBlock = $('#leaderboard-ads-area-wrapper');
            $leaderBoardAdsArea = $('#leaderboard-ads-area');
            isLeaderBoardAddsApplied = false;
            encodedToken = null;

            scope.isEntitled = attr['entitlement'] === AUTH_STATUS;
            scope.isMobile = helper.device.isMobile;
            scope.showPlayer = showPlayer();
            scope.showLeaderboard = true;
            scope.showDartAdd = true;
            scope.showLeaderboardAdd = false;
            scope.showCompanionAdd = false;
            scope.showAssetDetails = true;
            scope.showWatchwithSideCar = false;
            scope.hideSideCarErrorMessage = false;
            scope.isLivePlayerRefreshSlate = false;
            scope.showLivePlayerSlateTimer = null;
            scope.user = {
              isAuthenticated: authService.isAuthenticated()
            };
            scope.isLive = isLive;
            scope.isPlayerLoading = false;

            authService.promise.then(function(status) {
              userStatus = status;
              scope.user.isAuthenticated = status.isAuthenticated;

              if (Drupal.settings.enableRefreshSlate && scope.showPlayer && !status.isAuthenticated) {
                // Live player display slate.
                livePlayerRefreshSlate();
              }

              if (status.isAuthenticated && attr['entitlement'] == 'auth') {
                initiateAuthorization();
              }

              if (scope.showPlayer = showPlayer()) {
                scope.isPlayerLoading = true;
              }
            });

            $timeout(function() {
              if (tve.watchwith) {
                tve.watchwith.loadSideCar();
              }
              _bindPlayerEvents();
            }, 0);

            // Referencing openLoginModal function to the current scope.
            scope.openLoginWindow = authService.openLoginModal;

            // Callback for initiating playback.
            scope.play = function() {
              scope.previouslyWatched = null;
              $pdk.controller.clickPlayButton(true);
            };
            // Callback for displaying the watchwith sidecar .
            scope.showWatchwithSidecar = function() {
              scope.showWatchwithSideCar = true;
            };
            // Callback for displaying the metadata about section.
            scope.showAboutSection = function() {
              scope.showWatchwithSideCar = false;
            };

            if (tve.watchwith) {
              tve.watchwith.showSideCarTabs = function() {
                authService.promise.then(function() {
                  if (showPlayer()) {
                    scope.showSideCarTabs = true;
                    scope.hideSideCarErrorMessage = true;
                    scope.showWatchwithSideCar = true;
                  }
                });
              };
            }
            // Callback for initiating the authorization request.
            function initiateAuthorization() {
              var DEFAULT_RATING = 'TV-14',
                adobePassResourceId = Drupal.settings.adobePass.adobePassResourceId,
                resource = [
                  '<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/">',
                  '<channel>',
                  '<title>', adobePassResourceId, '</title>',
                  '<item>',
                  '<title><![CDATA[', episodeTitle, ']]></title>',
                  '<guid>', mpxGuid, '</guid>',
                  '<media:rating scheme="urn:v-chip">', episodeRating || DEFAULT_RATING, '</media:rating>',
                  '</item>',
                  '</channel>',
                  '</rss>'
                ].join('');
              tve.adobePass.getAuthorization(resource, function(status, response) {
                if (status) {
                  encodedToken = encodeURIComponent(response.token);
                  // If Adobe Pass getAuthorization status is true proceeds with playback.
                  authSuccess();
                }
                else {
                  authzFailure(response);
                }
              });
            }

            /**
             * Callback for displaying the ad section.
             */
            function showAds() {
              scope.showAssetDetails = false;
              scope.showCompanionAdd = true;
            }

            /**
             * Callback for displaying the asset details section.
             */
            function showAssetDetails() {
              scope.showAssetDetails = true;
              scope.showCompanionAdd = false;
            }

            /**
             * Callback for displaying the leaderboard ad section
             */
            function showLeaderboardAdds() {
              isLeaderBoardAddsApplied = true;
              $leaderBoardBlock.show();
              $leaderBoardAdsBlock.show();
              $dartBlock.hide();
            }

            /**
             * Callback for hiding the leaderboard ad section.
             */
            function hideLeaderboardAdds() {
              if (!isLeaderBoardAddsApplied) {
                $leaderBoardBlock.hide();
                $dartBlock.hide();
              }
            }

            /**
             * Returns true if we are ready to display the player.
             *
             * @returns {boolean}
             */
            function showPlayer() {
              if (scope.isMobile) {
                // Platform is mobile.
                return false;
              }

              if (attr['entitlement'] != 'auth') {
                // Entitlement is not "auth".
                return true;
              }

              if (!authService.isAuthenticated()) {
                // Visitor is not authenticated.
                return false;
              }

              if (typeof Drupal.settings.tve_cookie_detection !== 'undefined' && !Drupal.settings.tve_cookie_detection.status) {
                // Client (browser) doesn't support 3rd party cookies.
                return false;
              }

              return true;
            }

            /**
             * Live player display slate function.
             */
            function livePlayerRefreshSlate() {
              scope.showLivePlayerSlateTimer = setInterval(function() {
                showLivePlayerSlate();
              }, TIME_INTERVAL_FOR_SLATE);
            }

            /**
             * Live player show slate when time elapse timer function.
             */
            function showLivePlayerSlate() {
              var MS_IN_SECOND = 1000,

              // EST Unix Timestamp configured to show Live player slate.
                refreshSlateDisplayTimestamp = Drupal.settings.refreshSlateDisplayTime,
                currentTime = Date.now(),

              // Current unix timestamp of the user timezone.
                currentTimestamp = Math.round(currentTime / MS_IN_SECOND);

              if (currentTimestamp >= refreshSlateDisplayTimestamp) {
                $('#' + tveConfig.PLAYER_ID).remove();
                scope.$apply(function() {
                  scope.isLivePlayerRefreshSlate = true;
                  scope.refreshSlateTitle = Drupal.settings.refreshSlateTitle;
                  scope.refreshSlateSignInText = Drupal.settings.refreshSlateSignInText;
                });

                clearInterval(scope.showLivePlayerSlateTimer);
                $interval.cancel(scope.updateLivePlayerSlateTimer);
              }
            }

            /**
             * Bind Player Events.
             * @private
             */
            function _bindPlayerEvents() {
              // Rebind $pdk each time directive is loaded.
              if (typeof $pdk.controller.iframe == 'undefined') {
                $pdk.bind(tveConfig.PLAYER_ID);
              }

              passKruxParams();

              $pdk.controller.addEventListener('OnPlayerLoaded', function() {
                if (attr['entitlement'] == 'free') {
                  // Commenting the code temporarily due to platform bug.
                  // $pdk.controller.setReleaseURL(scope.releaseUrl, true);
                }
              });

              if (Drupal.settings.tve_widgets.live && Drupal.settings.tve_widgets.live.embargoed_content.source == scope.embargoedContentUseCases.schedule) {
                scope.$watch('isShowingProposedContent', function(newValue, oldValue) {
                  if (newValue !== oldValue) {
                    $pdk.controller.mute(scope.isShowingProposedContent);
                  }
                });
              }

              $pdk.controller.addEventListener('companion_ad', companionAd);
              $pdk.controller.addEventListener('OnMediaStart', onMediaStart);
              $pdk.controller.addEventListener('OnShowProviderPicker', showMvpdPicker);
              $pdk.controller.addEventListener('OnMediaPlaying', _onMediaPlaying);
              $pdk.controller.addEventListener('OnShowPlayOverlay', _initiateAutoPlay);

              // commented until player team wil provide additional info
              //$pdk.controller.addEventListener('InStreamMetadataEvent', inStreamMetadataHandler);
            }
            // Passes the Krux Params to the player.
            function passKruxParams() {
              $pdk.controller.setVariable({
                kuid:  helper.storage.get('kxuser'),
                ksg: helper.storage.get('kxsegs')
              });
            }
            // Display the mvpd picker to the user.
            function showMvpdPicker() {
              scope.$apply(function() {
                $.cookie(tveAuthConfig.cookies.NBCU_USER, '', {
                  expires: -1,
                  path: Drupal.settings.basePath
                });

                authService.openLoginModal();
              });
            }

            /**
             * Initiate autoplay for live asset.
             */
            function _initiateAutoPlay() {
              if (encodedToken != null) {
                $pdk.controller.clickPlayButton();
              }
            }

            /**
             * Media Start event callback so that we can show the metadata section.
             */
            function onMediaStart(pdkEvent) {
              var baseClip = pdkEvent && pdkEvent.data && pdkEvent.data.baseClip;
              // Remove the event listener once media starts playback.
              $pdk.controller.removeEventListener('OnShowPlayOverlay', _initiateAutoPlay);

              $rootScope.$broadcast('forceImagesLoading');
              scope.$apply(function() {
                scope.isPlayerLoading = false;
              });

              if (baseClip && baseClip.isAd) {
                // Functionality for ad playing event.
                if ((!isLive && Drupal.settings.tve_player.vod.lb_ad_status) || (isLive && Drupal.settings.tve_player.live.lb_ad_status)) {
                  hideLeaderboardAdds();
                }
              }
              else {
                scope.$apply(function() {
                  if (!isLargePlayer) {
                    showAssetDetails();
                  }
                });
              }

              if (!isLive && baseClip) {
                var videoData = pdkEvent.data;

                currentAsset = {
                  contentId: baseClip.contentID,
                  duration: videoData.mediaLength
                };
              }
            }

            function _onMediaPlaying(e) {
              var eventInfo = e.data;
            }

            /**
             * Callback for authz Failure.
             * @private
             */
            function authzFailure(errorResponse) {
              var errorCode = errorResponse.requestErrorCode;
              // Hides the player loading gif and displays the error message.
              scope.isPlayerLoading = false;

              authService.getSelectedProvider()
                .then(function(providerInfo) {
                  showError(providerInfo);
                }, function() {
                  showError(null)
                });

              tveAnalytics.authzTrack(false, {
                mvpd_id: userStatus.mvpdId
              });

              function showError(providerInfo) {
                $('#' + tveConfig.PLAYER_ID).remove();

                scope.isAuthZError = true;

                scope.message =
                  (providerInfo && _getAuthzErrorMessage(errorCode, providerInfo)) ||
                    $.trim(errorResponse.requestErrorDetails) ||
                    _getAuthzErrorMessage(errorCode, Drupal.settings.adobePass.errorMessages);

                scope.$apply();
              }
            }

            /**
             * Callback for Companion Ad.
             * @private
             */
            function companionAd(pdkEvent) {
              var targetId = pdkEvent.data.holderId,
                targetElem = document.getElementById(targetId);

              if (isLeaderBoardEnabled && helper.toBoolean(targetId.match(REGEXP_FOR_AD_SIZES))) {
                $leaderBoardAdsArea.html(pdkEvent.data.message);
                showLeaderboardAdds();
              }

              if (targetElem && ~targetId.indexOf(SMALL_ADD_ID)) {
                $(targetElem).html(pdkEvent.data.message);
                // Hide video description and show companion advertisment.
                if (!isLargePlayer) {
                  showAds();
                }
                else {
                  scope.showCompanionAdd = true;
                }

                scope.$digest();
              }
            }

            /**
             * Callback for authz Success.
             * @private
             */
            function authSuccess() {
              $pdk.controller.setToken(encodedToken, 'authToken');
              if (!scope.isLive) {
                // Commenting the code temporarily due to platform bug.
                // $pdk.controller.setReleaseURL(scope.releaseUrl, true);
              }
              _initiateAutoPlay();

              tveAnalytics.authzTrack(true, {
                mvpd_id: userStatus.mvpdId
              });
            }

            /**
             * Gets Error Message for the mvpd/error code.
             * @private
             */
            function _getAuthzErrorMessage(errorCode, messages) {
              var errorMessage = '';

              if (messages) {
                switch (errorCode) {
                  case 'User not Authorized Error' :
                    errorMessage = messages.authorized_err;
                    break;
                  case 'Generic Authorization Error' :
                    errorMessage = messages.generic_err;
                    break;
                  case 'Internal Authorization Error' :
                    errorMessage = messages.internal_err;
                    break;
                }
              }

              return errorMessage;
            }

            /**
             * Callback for Live In-stream metadata
             * @private
             */
            function inStreamMetadataHandler(eventObject) {
              if (eventObject.data.type == 'AnvatoInStreamContentBeaconEvent' && eventObject.data.Alternate) {
                scope.isShowingProposedContent = true;
                $pdk.controller.mute(true);
              } else if (!scope.isShowingProposedContent) {
                $pdk.controller.mute(false);
              }
            }

            if (typeof Drupal.settings.tve_cookie_detection != 'undefined') {
              if (Drupal.settings.tve_cookie_detection.status == false && attr['entitlement'] == 'auth' && authService.isAuthenticated()) {
                tveModal.open({
                  controller: 'CookieCtrl',
                  windowClass: 'cookieNotify tveModal tveModalBx',
                  templateUrl: 'third-party-cookie-notification.html',
                  keyboard: true,
                  backdrop : 'static'
                });
              }
            }
          }
        };
      }
    ]);

})(angular, jQuery, tve, this);
;

//Source: ../../libraries/tve/scripts/directives/tve-animated-png.js
(function(ng, window) {

  ng.module('tve.directives')
    .directive('tveAnimatedPng', [
      function() {
        return {
          link : function(scope, elem, attr) {
            var GIF_TYPE = 'gif',
              originalElem = elem[0];

            scope.$evalAsync(function() {
              var cssRule = getBackgroundImage(originalElem),
                imgSource = getImgSource(cssRule);

              if (getImgExtention(imgSource) == GIF_TYPE) {
                return;
              }
              else if (imgSource) {
                init(imgSource);
              }
            });

            //
            function init(imgSource) {
              var imgInstance = new Image(),
                backgroundYPosition = 0,
                dimension,
                animationId;

              imgInstance.src = imgSource;
              imgInstance.onload = function() {
                var spriteHeight = int(imgInstance.height);

                dimension = int(imgInstance.width);
                elem.css({
                  width: dimension,
                  height: dimension
                });

                scope.$watch(ng.isDefined(attr.ngShow) ? attr.ngShow : attr.loading, function(newVal) {
                  if (newVal) {
                    animationId = setInterval(animate, 30);
                  }
                  else {
                    clean();
                  }
                });

                scope.$on('$destroy', clean);

                function loop() {
                  animate();
                  animationId = requestAnimationFrame(loop);
                }

                function animate() {
                  backgroundYPosition = (backgroundYPosition - dimension) % spriteHeight;
                  elem.css('background-position', '0 ' + backgroundYPosition + 'px');
                }

                function clean() {
                  clearInterval(animationId);
                  elem.css('background-position', '0 0');
                }
              };
            }

            function getBackgroundImage(elem) {
              var pseudoSelectors = [null, ':after', ':before'],
                rule;

              try {
                ng.forEach(pseudoSelectors, function(pseudoElt) {
                  rule = window.getComputedStyle(elem, pseudoElt).getPropertyValue('background-image');

                  if (rule && rule !== 'none') {
                    throw new Error();
                  }
                });
              }
              catch (e) {
              }

              return rule;
            }

            function getImgSource(source) {
              var urlMatch = source.match(/^url\(['"]?([^'"]+)['"]?\)$/);

              return urlMatch && urlMatch[1];
            }

            function isBase64Url(source) {
              var DATA_URL_PATTERN = 'data:image/';

              return source ? source.substr(0, DATA_URL_PATTERN.length) === DATA_URL_PATTERN : null;
            }

            function getImgExtention(source) {
              var ext = '';

              if (source) {
                try {
                  ext = isBase64Url(source) ?
                    source.split(';').shift().split('/').pop() :
                    source.split('.').pop()
                }
                catch (e) {
                }
              }

              return ext;
            }

            function int(val) {
              return parseInt(val, 10);
            }
          }
        };
      }
    ]);

})(angular, this);
