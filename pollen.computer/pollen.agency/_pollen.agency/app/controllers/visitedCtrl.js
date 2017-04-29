angular
  .module('pollenApp')
  .controller('visitedCtrl', ['$scope', function($scope) {
  	$scope.title = "::visited";
    $scope.items = ['focus','hover','active','visited','ampersand','pollen'];
    $scope.selectedValue = 'visited';
  }]);


  
