angular
  .module('app')
  .controller('missionCtrl', ['$scope', function($scope) {
  	$scope.title = "Mission";
    $scope.items = ['data','work','mission','news','contact',];
    $scope.selectedValue = 'mission';
  }]);