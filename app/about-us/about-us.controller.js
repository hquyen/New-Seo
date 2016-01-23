'use strict';
(function () {
    angular.module('alBookingApp')
        .controller('AboutUsController', function ($scope, $stateParams) {
            $scope.$parent.pageTitle = App.pageTitle.about;
            $scope.$parent.activeMenu =  App.pageMenu.item3.name;
            $scope.menuFilters = App.aboutUs.sideBar;
            $scope.isActive = function(active) {
                return active === $stateParams.active;
            };

            $(".about-us").scrollTop(0);
    });
})();
