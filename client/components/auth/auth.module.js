'use strict';

angular.module('todoListMeanApp.auth', ['todoListMeanApp.constants', 'todoListMeanApp.util',
    'ngCookies', 'ngRoute'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
