'use strict';

angular.module('lendyApp').factory('lends', function($rootScope) {

  var LOCAL_STORAGE_ID = 'lends',
      lendsString = localStorage[LOCAL_STORAGE_ID];

  var lends = lendsString ? JSON.parse(lendsString) : [];

  $rootScope.$watch(function() { return lends; }, function() {
    localStorage['lends'] = JSON.stringify(lends);
  }, true);

  lends.add = function(lend) {
    lends.push(lend);
  }

  lends.remove = function(index) {
    lends.splice(index, 1);
  }

  lends.removeAll = function(lend) {
    lends = [];
  }

  return lends;
});

