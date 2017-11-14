angular.module('myapp',[])
.controller('myController',function($scope){
	$scope.dataList = [];
	$scope.ShowData = function(){
			var temp =({
			yourName : $scope.yourName,
			yourAdd : $scope.yourAdd,
			yourEmail : $scope.yourEmail,
			yourContact : $scope.yourContact

		})
			$scope.dataList.push(temp)
			$scope.yourName = ""
			$scope.yourAdd = ""
			$scope.yourEmail =""
			$scope.yourContact=""
	}
	
	
})