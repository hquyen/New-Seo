'use strict';
(function () {
    angular.module('alBookingApp')
        .controller('MomentumProgramController', function ($scope, $http) {
            $scope.$parent.pageTitle = App.pageTitle.momentum;
            $scope.$parent.activeMenu =  App.pageMenu.item1.name;
            $scope.menuFilters = App.momentumProgram.sideBar;
            $(".momentum-program").scrollTop(0);
    });
})();
