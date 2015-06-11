(function(ng) {
	ng.module('tve.directives')
	/*
	 * loader
	 */
	.directive('tveScreenSize', ['$window', 'helper', function($window, helper) {
		return {
      link : function($scope, $elem, $attrs) {
        var resizeHandler = function() {
          $scope.$apply(function() {
            $scope.mobileResolutionFlag = !helper.isMobile();
          });
        };

        $scope.mobileResolutionFlag = !helper.isMobile();
        ng.element($window).bind('resize.breakpoint', helper.throttle(100, resizeHandler));
      }
		};
	}]);
})(angular);
