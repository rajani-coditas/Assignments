var app = angular.module("myapp",["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
	.when("/", {
		templateUrl : "main.html"
	})
	.when ("/signup", {
		templateUrl : "signup.html"
	})
	.when("/red", {
		templateUrl : "red.html"
	});
});