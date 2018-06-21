var app = angular.module('myapp', ['ngRoute']);



app.config(function($routeProvider){

    $routeProvider.when('/',{
        templateUrl:  '/login.html'
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
    });

});




app.controller('login', function($scope){

});


app.controller('signup', function($scope){

   

});