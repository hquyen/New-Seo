'use strict';
(function () {
    angular.module('alBookingApp')
        .controller('ApplyController', function ($scope) {
            $scope.$parent.pageTitle = App.pageTitle.apply;
            $scope.$parent.activeMenu =  App.pageMenu.item2.name;
            var option = {
                items: 1,
                smartSpeed: 500,
                loop: false,
                nav: true,
                navText: ['<a class="prev apply__carousel__item__link" href="javascript:void(0)"><span class="glyphicon glyphicon-triangle-left"></span></a>', '<a class="next apply__carousel__item__link" href="javascript:void(0)"><span class="glyphicon glyphicon-triangle-right"></span></a>'],
                dots: false
            };
            $(".owl-carousel").owlCarousel(option);
    });
})();
