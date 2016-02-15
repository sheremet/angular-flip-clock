angular.module('scrnzFlipClock.scrnzFlipClockNumberDirective', [])
  .directive('scrnzFlipClockNumber', scrnzFlipClockNumberDirective)
  .controller('scrnzFlipClockNumberController', scrnzFlipClockNumberController);

scrnzFlipClockNumberDirective.$inject = [];
function scrnzFlipClockNumberDirective() {
  return {
    restrict: 'EA',
    scope: {},
    bindToController: true,
    controllerAs: 'vm',
    controller: 'scrnzFlipClockNumberController',
    templateUrl: 'src/js/angular-flip-clock-number-directive/angular-flip-clock-number-directive.html'
  };
}

scrnzFlipClockNumberController.$inject = ['$scope', '$parse', '$attrs'];
function scrnzFlipClockNumberController($scope, $parse, $attrs) {
  var vm = this;

  vm.numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  vm.currentValue = 0;
  vm.previousValue = 0;

  vm.isActive = isActive;
  vm.isBefore = isBefore;
  vm.isAnimated = isAnimated;

  activate();

  //////////

  function activate() {
    $scope.$watch(function getValueFromParentScope() {
      return $parse($attrs.value)($scope.$parent);
    }, function onValueChanged(newValue, oldValue) {
      vm.currentValue = newValue;
      vm.previousValue = oldValue;
    });
  }

  function isActive(number) {
    return vm.currentValue === number;
  }

  function isBefore(number) {
    return vm.previousValue !== vm.currentValue && number === vm.previousValue;
  }

  function isAnimated() {
    return vm.previousValue !== vm.currentValue;
  }
}
