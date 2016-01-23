'use strict';
(function () {
    angular.module('alBookingApp')
        .controller('PartnersController', function ($scope, $http) {
            $scope.$parent.pageTitle = App.pageTitle.partner;
            $scope.$parent.activeMenu =  App.pageMenu.item4.name;
            $scope.enableOpacity = false;
            $scope.menuFilters = App.partners.sideBars;
            $scope.branches = [];
            $scope.filter = function(data, event) {
                $scope.branches = [];
                $('.branch-grid__item').removeClass("branch-grid__item--opacity");
                if (data === undefined || data === null) {
                    return;
                }
                if (data === 'all') {
                    var golds = [];
                    var silvers = [];
                    var normals = [];
                    for (var i=0; i<App.partners.sideBars.length; i++) {
                        Array.prototype.push.apply(golds, App.partners.sideBars[i].items.golds);
                        Array.prototype.push.apply(silvers, App.partners.sideBars[i].items.silvers);
                        Array.prototype.push.apply(normals, App.partners.sideBars[i].items.normals);
                    }
                    Array.prototype.push.apply($scope.branches, golds);
                    Array.prototype.push.apply($scope.branches, silvers);
                    Array.prototype.push.apply($scope.branches, normals);
                } else {
                    for (var j=0; j<App.partners.sideBars.length; j++) {
                        if (App.partners.sideBars[j].title.toLowerCase() === data.toLowerCase()) {
                            Array.prototype.push.apply($scope.branches, App.partners.sideBars[j].items.golds);
                            Array.prototype.push.apply($scope.branches, App.partners.sideBars[j].items.silvers);
                            Array.prototype.push.apply($scope.branches, App.partners.sideBars[j].items.normals);
                            break;
                        }
                    }
                }

                if (event !== undefined && event !== null) {
                    $('.side-bar__item__title').removeClass('side-bar__item--active');
                    var element = angular.element(event.currentTarget.firstChild);
                    element.addClass('side-bar__item--active');
                    //if (data === 'all') {
                    //    //$('.side-bar__item__branch--container').show();
                    //} else {
                    $('.side-bar__item__branch--container').hide();
                    $(event.currentTarget.nextSibling).show();
                    //}
                }
            };

            $scope.filter('all', null);
            $(".partners").scrollTop(0);
    });
})();
