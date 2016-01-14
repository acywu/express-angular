'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:sortlist
 * @description
 * # A simple sortlist
 */
angular.module('publicApp')
  .directive('filterlist', function () {
    return {
        templateUrl: 'scripts/directives/filterlist.html'
    };
  });
