angular.module('app.controllers', [])

.controller('spareKalkulatorCtrl', function($scope, localStorageService, _) {
  var defaults = localStorageService.get('calcModel') || {
    startAmount: 5000,
    monthlyAmount: 1000,
    interest: 3.14,
    years: 10
  }
  localStorageService.bind($scope, 'calcModel', defaults)

  var graphFn = function (model) {
    var years = _.range(parseInt(model.years, 10))
    var startAmount = parseInt(model.startAmount, 10)
    var monthlyAmount = parseInt(model.monthlyAmount, 10)
    var interest = parseFloat(model.interest, 10) / 100

    var totalSavings = startAmount
    var savingsPerYear = _.map(years, function() {
      totalSavings = Math.floor((totalSavings + (monthlyAmount * 6)) * (1 + interest)) + (monthlyAmount*6)
      return totalSavings
    })
    $scope.total = totalSavings
    $scope.labels = _.map(years, function () { return ''})
    $scope.data = [savingsPerYear]
  }
  $scope.$watchCollection('calcModel', graphFn)
})

.controller('nedtellingCtrl', function($scope) {
  console.log($scope)
})
