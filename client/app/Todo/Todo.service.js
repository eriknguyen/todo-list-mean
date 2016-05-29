'use strict';

angular.module('todoListApp')
  .factory('Todo', function ($resource) {
    return $resource('api/todos/:id', {
      id: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  });
