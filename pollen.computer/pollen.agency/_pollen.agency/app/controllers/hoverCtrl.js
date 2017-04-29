angular
  .module('pollenApp')
  .controller('hoverCtrl', ['$scope', function($scope) {
  	$scope.title = "::hover";
    $scope.items = ['focus','hover','active','visited','ampersand','pollen'];
    $scope.selectedValue = 'hover';
  }]);
