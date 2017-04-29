angular
  .module('app')
  .controller('missionCtrl', ['$scope', function($scope) {
  	$scope.title = "Mission";
    $scope.items = ['democrat','work','mission','news','contact',];
    $scope.selectedValue = 'mission';
  }]);