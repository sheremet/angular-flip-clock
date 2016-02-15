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
