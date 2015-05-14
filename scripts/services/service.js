'use strict';

/**
 * @ngdoc service
 * @name jlucoderApp.service
 * @description
 * # service
 * Service in the jlucoderApp.
 */
angular.module('jlucoderApp')
  .service('service', function($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.signup = function(user) {
        $http.post('http://localhost:8080/user/signup', user)
            .success(function(user) {
                alert(user.id);
            });
    }
    this.validateEmail = function(email) {
        return true;
    }
  });
var userService = {
    emailValidate : function() {

    }
}
