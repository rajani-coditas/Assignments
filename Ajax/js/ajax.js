angular.module('myapp',[])
.controller('mycontroller',function($scope, $http){
	$scope.todoList= [];
	var url="https://jsonplaceholder.typicode.com/todos";
	$http({
		method:'GET',
		url:url
	}).then(function(response){
		$scope.todoList = response.data;
		
	})
})