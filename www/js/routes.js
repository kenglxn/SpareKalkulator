angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('tabsController.spareKalkulator', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/spareKalkulator.html',
        controller: 'spareKalkulatorCtrl'
      }
    }
  })

  .state('tabsController.nedtelling', {
    url: '/page3',
    views: {
      'tab3': {
        templateUrl: 'templates/nedtelling.html',
        controller: 'nedtellingCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/page2')



});
