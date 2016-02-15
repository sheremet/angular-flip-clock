(function() {
'use strict';
angular.module('scrnzFlipClock', [
  'scrnzFlipClock.scrnzFlipClockDirective',
  'scrnzFlipClock.scrnzFlipClockNumberDirective',
  'scrnzFlipClock.scrnzFlipClockLabelDirective'
]);

angular.module('scrnzFlipClock.scrnzFlipClockDirective', [
  'scrnzFlipClock.scrnzFlipClockNumberDirective',
  'scrnzFlipClock.scrnzFlipClockLabelDirective'
])
  .directive('scrnzFlipClock', scrnzFlipClockDirective)
  .controller('scrnzFlipClockController', scrnzFlipClockController);

scrnzFlipClockDirective.$inject = [];
function scrnzFlipClockDirective() {
  return {
    restrict: 'EA',
    scope: {
      time: '@'
    },
    bindToController: true,
    controller: 'scrnzFlipClockController',
    controllerAs: 'vm',
    templateUrl: 'src/js/angular-flip-clock-directive/angular-flip-clock-directive.html'
  };
}

scrnzFlipClockController.$inject = ['$interval'];
function scrnzFlipClockController($interval) {
  var MILISECONDS_IN_SECOND = 1000;
  var MILISECONDS_IN_MINUTE = MILISECONDS_IN_SECOND * 60;
  var MILISECONDS_IN_HOUR = MILISECONDS_IN_MINUTE * 60;
  var MILISECONDS_IN_24_HOURS = MILISECONDS_IN_HOUR * 24;

  var vm = this;

  vm.time = 0;

  vm.getDaysTensPlace = getDaysTensPlace;
  vm.getDaysOnesPlace = getDaysOnesPlace;
  vm.getHoursTensPlace = getHoursTensPlace;
  vm.getHoursOnesPlace = getHoursOnesPlace;
  vm.getMinutesTensPlace = getMinutesTensPlace;
  vm.getMinutesOnesPlace = getMinutesOnesPlace;
  vm.getSecondsTensPlace = getSecondsTensPlace;
  vm.getSecondsOnesPlace = getSecondsOnesPlace;

  //////////

  function getDaysTensPlace() {
    return _getTensPlace(_getDays(_getTimeAsNumber()));
  }

  function getDaysOnesPlace() {
    return _getOnesPlace(_getDays(_getTimeAsNumber()));
  }

  function getHoursTensPlace() {
    return _getTensPlace(_getHours(_getTimeAsNumber()));
  }

  function getHoursOnesPlace() {
    return _getOnesPlace(_getHours(_getTimeAsNumber()));
  }

  function getMinutesTensPlace() {
    return _getTensPlace(_getMinutes(_getTimeAsNumber()));
  }

  function getMinutesOnesPlace() {
    return _getOnesPlace(_getMinutes(_getTimeAsNumber()));
  }

  function getSecondsTensPlace() {
    return _getTensPlace(_getSeconds(_getTimeAsNumber()));
  }

  function getSecondsOnesPlace() {
    return _getOnesPlace(_getSeconds(_getTimeAsNumber()));
  }

  function _getDays(time) {
    return Math.floor(time / MILISECONDS_IN_24_HOURS);
  }

  function _getHours(time) {
    return Math.floor((time % MILISECONDS_IN_24_HOURS - _getMinutes(time)) / MILISECONDS_IN_HOUR);
  }

  function _getMinutes(time) {
    return Math.floor((time % MILISECONDS_IN_HOUR - _getSeconds(time)) / MILISECONDS_IN_MINUTE);
  }

  function _getSeconds(time) {
    return Math.floor((time % MILISECONDS_IN_MINUTE - _getMiliseconds(time)) / MILISECONDS_IN_SECOND);
  }

  function _getMiliseconds(time) {
    return Math.floor(time % MILISECONDS_IN_SECOND);
  }

  function _getTensPlace(number) {
    return (number % 100 - _getOnesPlace(number)) / 10;
  }

  function _getOnesPlace(number) {
    return number % 10;
  }

  function _getTimeAsNumber() {
    var timeAsNumber = window.parseInt(vm.time, 10);
    var isTimeNaN = (timeAsNumber !== timeAsNumber);
    return isTimeNaN ? 0 : timeAsNumber;
  }
}

angular.module('scrnzFlipClock.scrnzFlipClockLabelDirective', [])
  .directive('scrnzFlipClockLabel', scrnzFlipClockLabelDirective)
  .controller('scrnzFlipClockLabelController', scrnzFlipClockLabelController);

scrnzFlipClockLabelDirective.$inject = [];
function scrnzFlipClockLabelDirective() {
  return {
    restrict: 'EA',
    scope: {
      text: '@',
      hideDivider: '='
    },
    bindToController: true,
    controller: 'scrnzFlipClockLabelController',
    controllerAs: 'vm',
    templateUrl: 'src/js/angular-flip-clock-label-directive/angular-flip-clock-label-directive.html'
  };
}

scrnzFlipClockLabelController.$inject = [];
function scrnzFlipClockLabelController() {
}

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

angular.module('scrnzFlipClock').run(['$templateCache', function($templateCache) {
  $templateCache.put('src/js/angular-flip-clock-directive/angular-flip-clock-directive.html',
    '<div class="scrnz-flip-clock">\n' +
    '  <scrnz-flip-clock-label text="D" hide-divider="true"></scrnz-flip-clock-label>\n' +
    '  <scrnz-flip-clock-number value="vm.getDaysTensPlace()"></scrnz-flip-clock-number>\n' +
    '  <scrnz-flip-clock-number value="vm.getDaysOnesPlace()"></scrnz-flip-clock-number>\n' +
    '\n' +
    '  <scrnz-flip-clock-label text="H"></scrnz-flip-clock-label>\n' +
    '  <scrnz-flip-clock-number value="vm.getHoursTensPlace()"></scrnz-flip-clock-number>\n' +
    '  <scrnz-flip-clock-number value="vm.getHoursOnesPlace()"></scrnz-flip-clock-number>\n' +
    '\n' +
    '  <scrnz-flip-clock-label text="M"></scrnz-flip-clock-label>\n' +
    '  <scrnz-flip-clock-number value="vm.getMinutesTensPlace()"></scrnz-flip-clock-number>\n' +
    '  <scrnz-flip-clock-number value="vm.getMinutesOnesPlace()"></scrnz-flip-clock-number>\n' +
    '\n' +
    '  <scrnz-flip-clock-label text="S"></scrnz-flip-clock-label>\n' +
    '  <scrnz-flip-clock-number value="vm.getSecondsTensPlace()"></scrnz-flip-clock-number>\n' +
    '  <scrnz-flip-clock-number value="vm.getSecondsOnesPlace()"></scrnz-flip-clock-number>\n' +
    '  </ul>\n' +
    '</div>\n' +
    '');
}]);

angular.module('scrnzFlipClock').run(['$templateCache', function($templateCache) {
  $templateCache.put('src/js/angular-flip-clock-label-directive/angular-flip-clock-label-directive.html',
    '<span class="scrnz-flip-clock-divider" ng-class="{\'scrnz-flip-clock-divider-hidden\': !!vm.hideDivider}">\n' +
    '  <span class="scrnz-flip-clock-label">{{vm.text}}</span>\n' +
    '  <span class="scrnz-flip-clock-dot scrnz-flip-clock-dot-top"></span>\n' +
    '  <span class="scrnz-flip-clock-dot scrnz-flip-clock-dot-bottom"></span>\n' +
    '</span>\n' +
    '');
}]);

angular.module('scrnzFlipClock').run(['$templateCache', function($templateCache) {
  $templateCache.put('src/js/angular-flip-clock-number-directive/angular-flip-clock-number-directive.html',
    '<ul class="scrnz-flip-clock-number" ng-class="{\'scrnz-flip-clock-number-animated\': vm.isAnimated()}">\n' +
    '  <li\n' +
    '    ng-repeat="number in ::vm.numbers"\n' +
    '    class="scrnz-flip-clock-number-digit"\n' +
    '    ng-class="{\'scrnz-flip-clock-number-digit-active\': vm.isActive(number), \'scrnz-flip-clock-number-digit-before\': vm.isBefore(number)}"\n' +
    '  >\n' +
    '    <div class="scrnz-flip-clock-card">\n' +
    '      <div class="scrnz-flip-clock-card-up">\n' +
    '        <div class="scrnz-flip-clock-card-shadow"></div>\n' +
    '        <div class="scrnz-flip-clock-card-value scrnz-flip-clock-card-value-up">{{::number}}</div>\n' +
    '      </div>\n' +
    '      <div class="scrnz-flip-clock-card-down">\n' +
    '        <div class="scrnz-flip-clock-card-shadow"></div>\n' +
    '        <div class="scrnz-flip-clock-card-value scrnz-flip-clock-card-value-down">{{::number}}</div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </li>\n' +
    '</ul>\n' +
    '');
}]);
}());