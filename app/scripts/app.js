'use strict';

angular.module('lendyApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'AddLendCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
