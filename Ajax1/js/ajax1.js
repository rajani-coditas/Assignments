angular.module('myapp',[])
.controller('mycntrl',function($scope,$http){
	$scope.completedTodolist = [];
	var url="https://jsonplaceholder.typicode.com/todos";
	$http({
		method:'GET',
		url:url
	}).then(function(response){
		$scope.completedTodolist = response.data;
	})
})