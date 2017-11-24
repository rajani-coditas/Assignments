var myapp = angular.module('myapp',['ngRoute']);
myapp.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl : "home.html",
		controller : 'studentController'	
	})
	.when("/viewstudents"{
		templateUrl : "viewstudents.html"
		controller : 'studentController'
	});
});
myapp.controller('studentController',function($scope){
	$scope.students = [{name:'rajani', rollno:'10'},
						{name:'raj', rollno:'11'},
						{name:'rani', rollno:'15'}
						];
});