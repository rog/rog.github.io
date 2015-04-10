angular.module('Cvitae', [])
	.filter('rawHtml', ['$sce', function($sce){
		return function(val) {
			return $sce.trustAsHtml(val);
		};
	}])
	.controller('CvitaeCtrl', ['$scope', '$http', function ($scope, $http) {
    	$scope.cvitae = {};
    	$http.get('cvitae.json')
      		.success(function (data) {
        		$scope.cvitae = data;
      	});
  	}]);


