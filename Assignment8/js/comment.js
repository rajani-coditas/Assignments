angular.module('myapp',[])
.controller('mycontroller',function($scope,$http){
	$scope.commentList=[];
	var url="https://jsonplaceholder.typicode.com/comments";

		$http({
			method :'GET',
			url : url
		}).then(function(response){
			$scope.commentList = response.data;
		})

		$scope.showComment = function(index){
			$scope.commentData = $scope.commentList[index] ;
		}
})