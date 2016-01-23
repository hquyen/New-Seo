'use strict';
(function () {
    angular.module('alBookingApp')
        .controller('ProgramsController', function ($scope, $http) {
            $scope.$parent.pageTitle = App.pageTitle.program;
            $scope.$parent.activeMenu =  App.pageMenu.item1.name;
            $scope.menuFilters = App.program.sideBar;
            $(".programs").scrollTop(0);
    });
})();
