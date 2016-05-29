'use strict';

angular.module('todoListApp', ['ngResource', 'ngRoute'])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/main/main.html',
				controller: 'MainCtrl',
				reloadOnSearch: false
			})
			.otherwise({
				redirectTo: '/'
			});

		$locationProvider.html5Mode(true);
	});