'use strict';

/**
 * @ngdoc function
 * @name jlucoderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jlucoderApp
 */
angular.module('jlucoderApp')
  .controller('MainCtrl', function ($scope) {
    $scope.hotTopics = hotTopics;
  });

var hotTopics = [
    {title: '林哥真帅', author: '派拉斯'},
    {title: '林哥真帅', author: '派拉斯'},
    {title: '林哥真帅', author: '派拉斯'},
    {title: '林哥真帅', author: '派拉斯'},
    {title: '林哥真帅', author: '派拉斯'}
]