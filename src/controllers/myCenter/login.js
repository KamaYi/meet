"use strict";
var login = angular.module('login', []);
login.controller('loginCtrl', '$scope', 'api',function($scope, api) {
        $scope.ceshi = "hello world!";
    }
]);
