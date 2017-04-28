
         






angular
  .module('pollenApp', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {


    $urlRouterProvider.otherwise('/visited');
    $stateProvider
      // .state('pollen', {
      //   url: '/pollen',
      //   templateUrl: 'app/templates/pollen.html',
      //   controller: 'pollenCtrl'
      // })
      .state('focus', {
        url: '/focus',
        templateUrl: 'app/templates/focus.html',
        controller: 'focusCtrl'
      })
      .state('hover', {
        url: '/hover',
        templateUrl: 'app/templates/hover.html',
        controller: 'hoverCtrl'
      })
      .state('active', {
        url: '/active',
        templateUrl: 'app/templates/active.html',
        controller: 'activeCtrl'
      })
      .state('visited', {
        url: '/visited',
        templateUrl: 'app/templates/visited.html',
        controller: 'visitedCtrl'
      })
      .state('ampersand', {
        url: '/ampersand',
        templateUrl: 'app/templates/ampersand.html',
        controller: 'ampersandCtrl'
      })

   .state("otherwise", {
        url : '/visited'   
 });


    
// .config(function($locationProvider) {
//    $locationProvider.html5Mode(false).hashPrefix('~');
// }); 

$locationProvider.html5Mode(true);// use the HTML5 History API -- removes the #


 }])

(function (ng) {
  'use strict';

  var app = ng.module('ngLoadScript', []);

  app.directive('script', function() {
    return {
      restrict: 'E',
      scope: false,
      link: function(scope, elem, attr) {
        if (attr.type === 'text/javascript-lazy') {
          var code = elem.text();
          var f = new Function(code);
          f();
        }
      }
    };
  });

}(angular));