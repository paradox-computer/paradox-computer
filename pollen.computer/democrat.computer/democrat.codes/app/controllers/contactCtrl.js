angular
  .module('app')
  .controller('contactCtrl', ['$scope', function($scope) {
    $scope.title = "Contact Page";
    $scope.items = ['democrat','work','mission','news','contact',];
    $scope.selectedValue = 'contact';

  
  }]);