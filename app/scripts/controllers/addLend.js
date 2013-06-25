'use strict';

angular.module('lendyApp')
  .controller('AddLendCtrl', function AddNewController($scope, lends, $location, $timeout) {
    $scope.name = '';
    $scope.photo = '';
    $scope.borrowedTo = {
      name: '',
      address: '',
      phone: ''
    };

    $scope.addNew = function() {
      if ($scope.submitting) return;

      $scope.submitting = true;
      $timeout (function () {
        lends.add({
          name: $scope.name,
          photo: $scope.photo,
          borrowedTo: {
            name: $scope.borrowedTo.name,
            address: $scope.borrowedTo.address,
            phone: $scope.borrowedTo.photo
          }
        });
        $location.path('/gosomwehereplease');
      }, Math.random() * 500);
    };

    $scope.cancel = function() {
      console.log('cancel');
    };
  });


