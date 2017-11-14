angular.module('myapp',[])
.controller('userController',function($scope,$http){
	$scope.userDetails = [];
	var url="https://jsonplaceholder.typicode.com/users";

	$http({
		method : 'GET',
		url : url
		}).then(function(response){
			$scope.userDetails = response.data;
	})
		$scope.showDetails = function(index){
			$scope.userInfo = $scope.userDetails[index];
		}
})
