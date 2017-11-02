angular.module('myapp',[])
.controller('mycontrl', function($scope){

	$scope.itemList = [];

	$scope.addItems = function(){
		var temp = {
			yourItem : $scope.yourItem
		}

		$scope.itemList.push(temp);
	}

});