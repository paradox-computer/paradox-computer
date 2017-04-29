angular
  .module('app')
  .controller('democratCtrl', ['$scope', function($scope) {
    $scope.title = "Home";
    $scope.items = ['democrat','work','mission','news','contact',];
    $scope.selectedValue = 'democrats';

  
  }]);