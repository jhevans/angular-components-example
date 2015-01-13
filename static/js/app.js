/**
 * Created by stephen.murby on 1/13/2015.
 */

var directoryApp = angular.module("directory",['ngRoute', 'angular-data.DS', 'ngMockE2E']);

directoryApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/records', {
        templateUrl: 'partials/list.html'
    }).
    when('/records/create', {
        templateUrl: "partials/edit.html"
    }).
    when('/records/:recordId', {
        templateUrl: "partials/edit.html"
    }).
    otherwise({
    redirectTo: '/records'
    });
}]);

directoryApp.directive("aceList", ['$location', function($location) {
    return {
        templateUrl: "ui/directory/ace-list.html",
        restrict: 'E',
        scope: {},
        controller: function($scope) {
            $scope.create = function() {
                $location.path('records/create');
            };
        }
    }
}]);

directoryApp.directive("aceEdit", ['$window', '$routeParams', 'Record', function($window, $routeParams, Record) {
    return {
        templateUrl: "ui/directory/ace-edit.html",
        restrict: 'E',
        scope: {},
        controller: ['$scope', function($scope) {
            $scope.record = null;

            function setRecord(record){
                $scope.record = record;
            };

            if($routeParams.recordId !== undefined) {
                Record.find($routeParams.recordId).then(setRecord);
            };

            $scope.cancel = function() {
                $window.history.back();
            };

            $scope.save = function() {
                debugger
                console.log("Saving to record " + $scope.recordId);
                Record.save($rootParams.recordId, $scope.record);
            };
        }]
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

directoryApp.factory('Record', ['DS', function(DS) {
    var Record = DS.defineResource({
        name: 'record',
        idAttribute: 'id',
        endpoint: 'records'
    });
    return Record;
}]);



// Everything following this comment is just mocking out the backend

directoryApp.run(['$httpBackend', function($httpBackend){
    var DEFAULT_RECORDS = [{
        id: 1,
        name: 'John Evans',
        number: '01928 356115'
    },{
        id: 16,
        name: 'Murbs',
        number: '53180 080000'
    }];

    $httpBackend.whenGET('records').respond(DEFAULT_RECORDS);
    $httpBackend.whenGET('records/1').respond(DEFAULT_RECORDS[0]);
    $httpBackend.whenGET('records/16').respond(DEFAULT_RECORDS[1]);

    $httpBackend.whenPUT('records').respond(function(method, url, data) {
//        var vehicle = angular.fromJson(data);
        return [200, data, {}];
    });
    $httpBackend.whenDELETE(/records\/\d*/).respond(function(method, url, data) {
//        var vehicle = angular.fromJson(data);
        return [200, data, {}];
    });
    $httpBackend.whenGET(/partials/).passThrough()
    $httpBackend.whenGET(/ui/).passThrough()
}]);