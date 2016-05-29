'use strict';

angular.module('todoListMeanApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<main></main>'
      });
  })
  .factory('Todo', function ($resource) {
    return $resource('api/todos/:id', {
      id: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  });
