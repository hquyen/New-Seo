'use strict';
(function () {

    function MainController($scope, $http) {
        $scope.$parent.pageTitle = App.pageTitle.home;
    }

    angular.module('alBookingApp')
        .controller('MainController', MainController);
})();
