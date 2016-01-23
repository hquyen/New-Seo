'use strict';

angular.module('alBookingApp')
    .controller('NavbarCtrl', function ($scope) {
        $scope.menu = [{
            'title': 'Home',
            'state': 'main'
        }];

        $scope.isCollapsed = true;
    });
