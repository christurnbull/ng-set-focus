'use strict';

/**
 * @ngdoc function
 * @name ngApp.directive:ngSetFocus
 * @description Set focus to element when a given expression changes
 * https://github.com/christurnbull/ng-set-focus
 */
 
angular.module('ngSetFocus', [])
  .directive('ngSetFocus', ['$timeout' ,function ($timeout) {
  	return {
  	  restrict: 'A',
  	  link: function(scope, element, attrs) {
        
        // set focus when attribute variable has changed
        attrs.$observe('ngSetFocus', function() {
          
          // dont set focus on load
          if(attrs.ngSetFocus == 'true' || attrs.ngSetFocus == 'false'){
            
            // after other events have complete
            $timeout(function(){
              element[0].focus();
            }, 1);

          }
        })
  	    
  	    // apply default focus after other events have complete
  	    $timeout(function(){
          if(attrs.hasOwnProperty('setFocusDefault')){
            element[0].focus();
          }
        }, 1);

  	  }	  
  	};
  }]);
  
