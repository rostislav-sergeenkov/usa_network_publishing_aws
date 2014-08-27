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
