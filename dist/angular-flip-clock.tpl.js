(function() {
'use strict';
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