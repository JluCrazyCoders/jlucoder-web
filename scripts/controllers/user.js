'use strict';

/**
 * @ngdoc function
 * @name jlucoderApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the jlucoderApp
 */
angular.module('jlucoderApp')
    .controller('UserCtrl', ['$scope', '$location', 'service', 
        function($scope, $location, service) {
            var tips = {},
                emailValidated = false,
                passwordValidated = false,
                repeatPasswordValidated = false;

            $scope.invalidate = 
                !(emailValidated & passwordValidated & repeatPasswordValidated);

            $scope.showSignUp = function() {
                $location.path('/user/signup');
            };
            $scope.showSignIn = function() {
                $location.path('/user/signin');
            };
            $scope.signup = function() {
                var user = {};
                user.email = $scope.email;
                user.password = $scope.password;
                service.signup(user);
            };
            $scope.showTip = function() {
                return true;
            };
            $scope.showTips = function(type) {
                $scope.level = 'info';
                eval('$scope.' + type + 'Msg = eval(\'tips.\' + type + \'.info.msg\')');
            };
            $scope.vilidateTips = function(type) {
                eval('$scope.' + type + 'Msg = null');
                var level = null;
                switch(type) {
                    case 'email':
                        level = validateEmail();
                        break;
                    case 'password':
                        level = validatePassword();
                        break;
                    case 'repeatPassword':
                        level = validateRepeatPassword();
                        break;
                };
                eval('$scope.' + type + "Msg = eval('tips.' + type + '.' + level + '.msg')");
            };
            $scope.$watch('$scope.invalidate', function(oldVal, newVal, scope) {
                if (newVal) {
                    invalidate = false;
                }
            })

            // functinos for validate
            var validateEmail = function() {
                if (service.validateEmail($scope.email)) {
                    emailValidated = true;
                    return $scope.emailLevel = 'success';
                } else {
                    return $scope.emailLevel = 'error';
                }
            };
            var validatePassword = function() {
                var password = $scope.password == null ? '' : $scope.password;
                if (password.length < 6 || password.length > 14) {
                    return $scope.passwordLevel = 'error';
                } else {
                    passwordValidated = true;
                    return $scope.passwordLevel = 'success';
                }
            }
            var validateRepeatPassword = function() {
                if ($scope.password = $scope.repeatPassword) {
                    repeatPasswordValidated = true;
                    return $scope.repeatPasswordLevel = 'success';
                } else {
                    return $scope.repeatPasswordLevel = 'error';
                }
            }

            tips = {
                email: {
                    info: {
                        level: 'info',
                        msg: '请输入正确的邮箱地址作为你的登录名'
                    },
                    error: {
                        level: 'error',
                        msg: '邮箱地址有误，请仔细核对'
                    },
                    success: {
                        level: 'success',
                        msg: ''
                    }
                },
                password: {
                    info: {
                        level: 'info',
                        msg: '请输入你喜欢的密码，长度在6~14位之间'
                    },
                    error: {
                        level: 'error',
                        msg: '密码不符合要求，请重新输入'
                    },
                    success: {
                        level: 'success',
                        msg: ''
                    }
                },
                repeatPassword: {
                    info: {
                        level: 'info',
                        msg: '请输入你喜欢的密码，长度在6~14位之间1111'
                    },
                    error: {
                        level: 'error',
                        msg: '密码不符合要求，请重新输入'
                    },
                    success: {
                        level: 'success',
                        msg: ''
                    }
                }
            }
        }]);
