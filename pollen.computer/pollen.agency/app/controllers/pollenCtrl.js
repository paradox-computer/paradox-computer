angular
  .module('pollenApp')
  .controller('pollenCtrl', ['$scope', function($scope) {
  	$scope.title = "pollen ~ next selector  : And we bring you a digital agency:: ";
    $scope.items = ['focus','hover','active','visited','ampersand','pollen'];
    $scope.selectedValue = 'pollen';
  }]);
