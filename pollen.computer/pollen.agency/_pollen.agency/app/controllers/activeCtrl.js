angular
  .module('pollenApp')
  .controller('activeCtrl', ['$scope', function($scope) {
  	$scope.title = "::active";
    $scope.items = ['focus','hover','active','visited','ampersand','pollen'];
    $scope.selectedValue = 'active';
  }]);
