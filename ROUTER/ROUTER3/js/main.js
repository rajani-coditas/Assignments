var mainApp = angular.module("mainApp",["ngRoute"]);
mainApp.config(function($routeProvider){
	$routeProvider
	.when("/home", {
		templateUrl : 'home.html',
		controller : 'studentController'
	})
	.when("/viewStudents", {
		templateUrl : 'viewStudents.html',
		controller : 'studentController'
	})
	.otherwise({
		redirectTo: '/home'
	});
	
});
mainApp.controller('studentController',function($scope){
		$scope.students = [
				{name: 'Rajani Dudam', city:'New Yark'},
				{name: 'laxmikant Dudam', city: 'India'},
				{name: 'johan Marcus', city:'London'},
				{name: 'Mark Waugh', city:'Paris'}
		];
			$scope.message = "click on link to view student list";
	});