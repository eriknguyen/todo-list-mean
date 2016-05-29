'use strict';

angular.module('todoListMeanApp.todoFocus')
  .directive('todoFocus', function () {
    return {
      template: '<div></div>',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        element.text('this is the todoFocus directive');
      }
    };
  });
