'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('BookCtrl', function ($scope,$http) {

    // Data Init
    $scope.createBookTextBox = {};

    // Event
    $scope.$on('$viewContentLoaded', function(){
     // Here your view content is fully loaded
     getBooks();
    });

    // Scope functions
    $scope.createBook = function(){
      postBook($scope.createBookTextBox);
    };

    // Private functions
    function postBook(data){
      $http({
          method: 'POST',
          url: '/api/books',
          data: { 'title' : data.title, 'isbn': data.isbn }
      })
      .then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.books = response.data;
      },
      function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(response);
      });
    }

    function getBooks(){
      $http({
         method: 'GET',
         url: '/api/books'
       }).then(function successCallback(response) {
           // this callback will be called asynchronously
           // when the response is available
           $scope.books = response.data;
         }, function errorCallback(response) {
           // called asynchronously if an error occurs
           // or server returns response with an error status.
           console.log(response);
       });
    }

  });
