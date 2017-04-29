angular
  .module('app')
  .controller('newsCtrl', ['$scope', function($scope) {
    $scope.title = "NEWS";
    $scope.items = ['data','work','mission','news','contact',];
    $scope.selectedValue = 'news';

  
  }]);