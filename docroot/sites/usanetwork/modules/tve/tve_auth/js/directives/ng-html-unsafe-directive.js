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
