'use strict';

angular.module('lendyApp')
  .controller('MainCtrl', function ($scope, lends, $timeout) {
    function emptyForm() {
      return {
        name: '',
        photo: '',
        borrowedTo: {
          name: '',
          address: '',
          phone: ''
        }
      };
    }

    console.log('MainCtrl', lends);
    $scope.lends = lends;
    $scope.isSubmitting = false;

    $scope.toggleForm = function(obj, $event) {
      console.log('toggleForm', $event);
      document.querySelector('.slide-panel').classList.toggle('slide-panel-active');
      document.querySelector('input[name="name"]').focus();
    };

    $scope.create = emptyForm();

    $scope.create.add = function() {
      if ($scope.isSubmitting) return;

      $scope.isSubmitting = true;
      $timeout(function () {
        lends.add({
          name: $scope.create.name,
          photo: $scope.create.photo,
          borrowedTo: {
            name: $scope.create.borrowedTo.name,
            address: $scope.create.borrowedTo.address,
            phone: $scope.create.borrowedTo.photo
          },
          lendedAt: new Date()
        });
        $scope.create = emptyForm();

        $scope.toggleForm();
      }, Math.random() * 500);
    };

  });

