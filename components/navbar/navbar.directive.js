'use strict';

angular.module('alBookingApp')
    .directive('navbar', function () {
        return {
            templateUrl: 'components/navbar/navbar.html',
            restrict: 'E',
            controller: 'NavbarCtrl'
        };
    });
