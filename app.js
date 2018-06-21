var app = angular.module('myapp', ['ngRoute']);

app.config(function($routeProvider){

    $routeProvider.when('/',{
        templateUrl:  '/login.html',
        controller: 'loginCtrl'
    })
    .when('/signup',{
        templateUrl: '/signup.html'
    })
    .when('/home',{
        templateUrl: '/home.html'
    })
    .when('/profile',{
        templateUrl: '/profile.html'
    })
    .when('/message',{
        templateUrl: '/message.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});

app.controller('loginCtrl', function($scope, $location, $rootScope){
    $scope.submit = function(){
        if($scope.username == "" && $scope.password == ""){
            alert("please enter the username and password");
        }
    }
});


// app.controller('signup', function($scope){

// });