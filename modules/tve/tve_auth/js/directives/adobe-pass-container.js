;(function(ng, document) {
  'use strict';

  ng.module('tve.directives')
      .directive('tveAdobePassContainer', ['tveModal', function(tveModal) {
        return {
          link: function($scope, $element, $attrs) {
            var container = document.getElementById($attrs.tveAdobePassContainer);
            $element.append(container);
            tveModal
              .getTop()
              .key.result
              ['finally'](function() {
                var empty = document.createElement('div');
                empty.id = empty.className = $attrs.tveAdobePassContainer;
                document.body.appendChild(empty);
              });
          }
        };
      }]);
})(angular, this.document);
