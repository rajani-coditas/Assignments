angular.module('myapp',[])
.controller('userController',function($scope,$http){
	$scope.users = [];
	var  url="https://jsonplaceholder.typicode.com/users";

	$http({
		method : 'GET',
		url : url
	}).then(function(response){
		$scope.users = response.data;
	})
	$scope.showDetail = function(user){
		user.showUser = true;
	}
	$scope.hideDetails = function(user){
		user.showUser = false;
	}
})