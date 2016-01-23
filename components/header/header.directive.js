'use strict';

angular.module('alBookingApp')
    .directive('header', function () {
        return {
            templateUrl: 'components/header/header.html',
            restrict: 'E',
            link: function (scope, element) {
                element.addClass('header').addClass('header--fixed');
                $("header").headroom({
                    "offset": 100,//$(window).height(),//TODO:get 100vh * 1.5
                    "tolerance": {
                        down: 0,
                        up:100
                    },
                    "classes": {
                        "initial": "animated"
                        //"pinned": "slideInDown",
                        //"unpinned": "slideOutUp"
                    }
                });
            }
        };
    });
