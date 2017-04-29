angular
  .module('app', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {
         
    $locationProvider.html5Mode(true);// use the HTML5 History API -- removes the #
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/templates/home.html',
        controller: 'dataCtrl'
      })
      .state('work', {
        url: '/work',
        templateUrl: 'app/templates/work.html',
        controller: 'workCtrl'
      })
      .state('mission', {
        url: '/mission',
        templateUrl: 'app/templates/mission.html',
        controller: 'missionCtrl'
      })
      .state('news', {
        url: '/news',
        templateUrl: 'app/templates/news.html',
        controller: 'newsCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/templates/contact.html',
        controller: 'contactCtrl'
      })
  }])