angular
  .module('app')
  .controller('elizabethCtrl', ['$scope', function($scope) {
    $scope.title = "Home";
    $scope.items = ['data','work','mission','news','contact',];
    $scope.selectedValue = 'elizabeths';

  
  }]);