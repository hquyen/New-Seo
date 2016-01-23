'use strict';
(function () {
    angular.module('alBookingApp')
        .controller('DonateController', function ($scope, $sce) {
            $scope.$parent.pageTitle = App.pageTitle.donate;
            $scope.$parent.activeMenu =  App.pageMenu.item5.name;
            $scope.videoSrc = $sce.trustAsResourceUrl(App.donate.video);
            $(".donate").scrollTop(0);
    });
})();
