'use strict';

angular.module('todoListMeanApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        reloadOnSearch: false
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
