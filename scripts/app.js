'use strict';

/**
 * @ngdoc overview
 * @name jlucoderApp
 * @description
 * # jlucoderApp
 *
 * Main module of the application.
 */
angular
  .module('jlucoderApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/user/signup', {
        templateUrl: 'views/signup.html',
        controller: 'UserCtrl'
      })
      .when('/user/signin', {
        templateUrl: 'views/signin.html',
        controller: 'UserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      // $locationProvider.html5Mode(true);
  });
