'use strict';

angular.module('lendyApp')
  .controller('MainCtrl', function ($scope, lends) {
    console.log(lends)
    $scope.lends = lends;
  });
