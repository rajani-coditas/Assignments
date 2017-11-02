angular.module('myapp',[])
.controller('mycontroller', function($scope){

	$scope.itemList = [];

	$scope.additem = function(){

		var temp = {
			yourItem: $scope.yourItem
		}

		$scope.itemList.push(temp);

		$scope.yourItem = "";
	}

});