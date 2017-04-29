angular
  .module('pollenApp')
  .controller('ampersandCtrl', ['$scope', function($scope) {
  	$scope.title = "&amp; / States otherwise ",
    $scope.items = ['focus','hover','active','visited','ampersand','pollen'];
    $scope.selectedValue = 'ampersand';
  }]);
