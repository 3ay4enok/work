var app = angular.module('app', []);

app.controller('firstCntrl', function($scope, myFactory){
    $scope.myFactory = myFactory;
    $scope.hello = "Привет всем";
});

app.controller('secondCntrl', function($scope, myFactory){
    $scope.myFactory = myFactory;
    $scope.hello = "Привет всем";
});

app.factory('myFactory', function(){
    return {
        hello: "Привет мир!"
    }
});


