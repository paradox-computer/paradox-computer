angular
  .module('pollenApp')
  .controller('focusCtrl', ['$scope', function($scope) {
  	$scope.title = "::focus";
    $scope.items = ['focus','hover','active','visited','ampersand','pollen'];
    $scope.selectedValue = 'focus';
  }]);




