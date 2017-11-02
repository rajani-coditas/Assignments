angular.module('myapp',[])
.controller('mycntrl',function($scope){
	$scope.addresslist=[];
	$scope.addressdetails = function(){
		var temp = {
			name:$scope.yourName,
			address:$scope.youraddress,
			city:$scope.yourcity,
			contact:$scope.yourcontact
		}
		$scope.addresslist.push(temp);
		$scope.yourName = "";
		$scope.youraddress = "";
		$scope.yourcity = "";
		$scope.yourcontact = "";
	}

});
