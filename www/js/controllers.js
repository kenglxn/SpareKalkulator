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
    var years = _.range(parseInt(model.years, 10)) || 0
    var startAmount = parseInt(model.startAmount, 10) || 0
    var monthlyAmount = parseInt(model.monthlyAmount, 10) || 0
    var interest = (parseFloat(model.interest, 10) || 0) / 100

    var totalSavings = startAmount
    var savingsOnly = startAmount
    var savingsWithInterest = _.map(years, function() {
      totalSavings = Math.floor((totalSavings + (monthlyAmount * 6)) * (1 + interest)) + (monthlyAmount*6)
      return totalSavings
    })
    var savingsNoInterest = _.map(years, function() {
      savingsOnly = Math.floor((savingsOnly + (monthlyAmount * 6)) * (1 + 0)) + (monthlyAmount*6)
      return savingsOnly
    })
    $scope.total = totalSavings.toLocaleString() + ',-'
    $scope.labels = _.map(years, function (y) { return y + 1 +'. År'})
    $scope.series = ['Inkl. avkastning', 'Kun innskudd']
    $scope.data = [savingsWithInterest, savingsNoInterest]
    $scope.options = {
      scales: {
        yAxes: [{
          stacked: true
        }]
      }
    };
  }
  $scope.$watchCollection('calcModel', graphFn)
})

.controller('nedtellingCtrl', function($scope) {
  console.log($scope)
})
