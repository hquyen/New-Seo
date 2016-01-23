'use strict';

angular.module('alBookingApp')
    .directive('mainHeader', function () {
        return {
            templateUrl: 'components/header/main-header.html',
            restrict: 'E',
            link: function (scope, element) {
                element.addClass('main-header').addClass('main-header--fixed');
                //$("main-header").headroom({
                //    "offset": 100,//$(window).height(),//TODO:get 100vh * 1.5
                //    "tolerance": {
                //        down: 0,
                //        up:100
                //    },
                //    "classes": {
                //        "initial": "animated"
                //        //"pinned": "slideInDown",
                //        //"unpinned": "slideOutUp"
                //    }
                //});
            }
        };
    });
