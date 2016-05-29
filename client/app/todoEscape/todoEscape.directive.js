'use strict';

angular.module('todoListMeanApp.todoEscape')
  .directive('todoEscape', function () {
    return {
      template: '<div></div>',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        element.text('this is the todoEscape directive');
      }
    };
  });
