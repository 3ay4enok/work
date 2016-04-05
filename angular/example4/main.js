var app = angular.module('app', []);

app.controller('firstCntrl', function($scope, myFactory){
    $scope.hell = "hello";
    $scope.myFactory = myFactory;

    $scope.myFunction = function() {
        return 'My Function';
    }

    $scope.newHell = function(text) {
        $scope.hell = text;
    }
    $scope.newBar = function(text) {
        $scope.hell = text;
    }
});

app.factory('myFactory', function(){
    return {
        hello: function () {
            return 'hello world';
        }
    }
});

