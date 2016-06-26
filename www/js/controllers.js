angular.module('app.controllers', [])

.controller('spareKalkulatorCtrl', function($scope, localStorageService) {
  var defaults = localStorageService.get('calcModel') || {
    startAmount: 5000,
    monthlyAmount: 1000,
    interest: 3.14,
    years: 10
  }
  localStorageService.bind($scope, 'calcModel', defaults)

  var graphFn = function (model) {
    console.log('graphFn', model)
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40]
    ];
  }
  $scope.$watchCollection('calcModel', graphFn)
})

.controller('instillingerCtrl', function($scope) {
  console.log($scope)
})
