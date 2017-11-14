angular.module('myapp',[])
.controller('studentController',function($scope){
	$scope.studentDetails = [];
	$scope.submitDetails = function(){
	var temp = ({
			seatNo : $scope.seatNo,
			fullName : $scope.fstName+" "+$scope.middleName+"  "+$scope.lastName,
			email : $scope.email,
			submaths : $scope.subMaths,
			subEng : $scope.subEng,
			subMarathi : $scope.subMarathi,
			subSci : $scope.subSci,
			subHindi : $scope.subHindi,
			marksTotal: parseInt($scope.subMaths)+parseInt($scope.subEng)+parseInt($scope.subMarathi)+parseInt($scope.subSci)+parseInt($scope.subHindi)
			
		})
			
			$scope.studentDetails.push(temp)
			$scope.seatNo = ""
			$scope.email=""
			$scope.subMaths=""
			$scope.subEng=""
			$scope.subMarathi=""
			$scope.subSci=""
			$scope.subHindi=""
			$scope.fstName=""
			$scope.middleName=""
			$scope.lastName=""
		}
})