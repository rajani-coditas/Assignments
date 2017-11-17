angular.module('myApp',[])
.controller('myController',function($scope){
	//Click event
	
	$scope.reset = function(){
		$scope.fstName = "Rajani";
		$scope.lastName = "Dudam";
		$scope.email = "rajani@gmail.com";
	}
	$scope.reset();

	
})