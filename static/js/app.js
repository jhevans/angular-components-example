/**
 * Created by stephen.murby on 1/13/2015.
 */

var directoryApp = angular.module("directory",['ngRoute']);

directoryApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/list', {
        templateUrl: 'list.html'
    }).
    when('/edit', {
        templateUrl: "edit.html"
    }).
    otherwise({
        redirectTo: '/list'
    });
}]);

directoryApp.directive("aceList", [function() {
    return {
        templateUrl: "ui/directory/ace-list.html",
        restrict: 'E',
        scope: {},
        controller: function($scope) {
            return;
        }
    }
}]);

directoryApp.directive("aceEdit", ['$window', function() {
    return {
        templateUrl: "ui/directory/ace-edit.html",
        restrict: 'E',
        scope: {},
        controller: function($scope, $window) {
            $scope.cancel = function() {
                $window.history.back();
            };

            $scope.submit = function() {

            }
        }
    }
}]);

directoryApp.directive("aceInput", [function() {
    return {
        templateUrl: "ui/common/ace-input.html",
        restrict: 'E',
        scope: {},
        controller: function($scope) {
            return;
        }
    }
}]);

directoryApp.directive("aceButton", [function() {
    return {
        templateUrl: "ui/common/ace-button.html",
        restrict: 'E',
        scope: {
            aceLabel: '@'
        },
        controller: function($scope) {
        }
    }
}]);

directoryApp.directive("aceErrorMessage", [function() {
    return {
        templateUrl: "ui/common/ace-error-message.html",
        restrict: 'E',
        scope: {},
        controller: function($scope) {
            return;
        }
    }
}]);