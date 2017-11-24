var app = angular.module('myapp',["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl : "main.html"
    })
    .when("/red",{
        templateUrl : "login.html"
    })
    .when("/green",{
        templateUrl : "green.html"
    });
});