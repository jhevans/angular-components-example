/**
 * Created by stephen.murby on 1/13/2015.
 */

var directoryApp = angular.module("directory",['ngRoute']);

directoryApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/list', {
        templateUrl: 'list.html'
    }).otherwise({
            redirectTo: '/list'
        })
}]);

directoryApp.directive("aceList", [function() {
    return {
        templateUrl: "ui/directory/ace-list.html",
        restrict: 'E',
        scope: {},
        controller: function($scope, $iElement, $iAttributes) {
            return;
        }
    }
}]);

directoryApp.directive("aceInput", [function() {
    return {
        templateUrl: "ui/common/ace-input.html",
        restrict: 'E',
        scope: {},
        controller: function($scope, $iElement, $iAttributes) {
            return;
        }
    }
}]);

directoryApp.directive("aceButton", [function() {
    return {
        templateUrl: "ui/common/ace-button.html",
        restrict: 'E',
        scope: {},
        controller: function($scope, $iElement, $iAttributes) {
            return;
        }
    }
}]);

directoryApp.directive("aceErrorMessage", [function() {
    return {
        templateUrl: "ui/common/ace-error-message.html",
        restrict: 'E',
        scope: {},
        controller: function($scope, $iElement, $iAttributes) {
            return;
        }
    }
}]);