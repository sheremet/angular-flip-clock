(function() {
'use strict';
angular.module('dyFlipClock').run(['$templateCache', function($templateCache) {
  $templateCache.put('src/js/angular-flip-clock-directive/angular-flip-clock-directive.html',
    '<div class="dy-flip-clock">\n' +
    '  <dy-flip-clock-label text="Days" hide-divider="true"></dy-flip-clock-label>\n' +
    '  <dy-flip-clock-number value="vm.getDaysTensPlace()"></dy-flip-clock-number>\n' +
    '  <dy-flip-clock-number value="vm.getDaysOnesPlace()"></dy-flip-clock-number>\n' +
    '\n' +
    '  <dy-flip-clock-label text="Hours"></dy-flip-clock-label>\n' +
    '  <dy-flip-clock-number value="vm.getHoursTensPlace()"></dy-flip-clock-number>\n' +
    '  <dy-flip-clock-number value="vm.getHoursOnesPlace()"></dy-flip-clock-number>\n' +
    '\n' +
    '  <dy-flip-clock-label text="Minutes"></dy-flip-clock-label>\n' +
    '  <dy-flip-clock-number value="vm.getMinutesTensPlace()"></dy-flip-clock-number>\n' +
    '  <dy-flip-clock-number value="vm.getMinutesOnesPlace()"></dy-flip-clock-number>\n' +
    '\n' +
    '  <dy-flip-clock-label text="Seconds"></dy-flip-clock-label>\n' +
    '  <dy-flip-clock-number value="vm.getSecondsTensPlace()"></dy-flip-clock-number>\n' +
    '  <dy-flip-clock-number value="vm.getSecondsOnesPlace()"></dy-flip-clock-number>\n' +
    '  </ul>\n' +
    '</div>\n' +
    '');
}]);

angular.module('dyFlipClock').run(['$templateCache', function($templateCache) {
  $templateCache.put('src/js/angular-flip-clock-label-directive/angular-flip-clock-label-directive.html',
    '<span class="dy-flip-clock-divider" ng-class="{\'dy-flip-clock-divider-hidden\': !!vm.hideDivider}">\n' +
    '  <span class="dy-flip-clock-label">{{vm.text}}</span>\n' +
    '  <span class="dy-flip-clock-dot dy-flip-clock-dot-top"></span>\n' +
    '  <span class="dy-flip-clock-dot dy-flip-clock-dot-bottom"></span>\n' +
    '</span>\n' +
    '');
}]);

angular.module('dyFlipClock').run(['$templateCache', function($templateCache) {
  $templateCache.put('src/js/angular-flip-clock-number-directive/angular-flip-clock-number-directive.html',
    '<ul class="dy-flip-clock-number" ng-class="{\'dy-flip-clock-number-animated\': vm.isAnimated()}">\n' +
    '  <li\n' +
    '    ng-repeat="number in ::vm.numbers"\n' +
    '    class="dy-flip-clock-number-digit"\n' +
    '    ng-class="{\'dy-flip-clock-number-digit-active\': vm.isActive(number), \'dy-flip-clock-number-digit-before\': vm.isBefore(number)}"\n' +
    '  >\n' +
    '    <div class="dy-flip-clock-card">\n' +
    '      <div class="dy-flip-clock-card-up">\n' +
    '        <div class="dy-flip-clock-card-shadow"></div>\n' +
    '        <div class="dy-flip-clock-card-value dy-flip-clock-card-value-up">{{::number}}</div>\n' +
    '      </div>\n' +
    '      <div class="dy-flip-clock-card-down">\n' +
    '        <div class="dy-flip-clock-card-shadow"></div>\n' +
    '        <div class="dy-flip-clock-card-value dy-flip-clock-card-value-down">{{::number}}</div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </li>\n' +
    '</ul>\n' +
    '');
}]);
}());