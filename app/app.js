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

var lastScrollTop = 0; 
document.addEventListener('scroll', function (event) {
	var sticky =  document.getElementById('me');
	var cv =  document.getElementById('cv');
	var window_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var st = window.pageYOffset, direction = 0;
	var offset_height = sticky.offsetHeight;
	if( window_width > 500 ){
		if (st > lastScrollTop) {
			direction = 0;
		} else if (st < lastScrollTop ){
			direction = 1;
		}
		if ( !direction ){
			offset_height = offset_height - 120;
		}
		if( document.body.scrollTop > offset_height ){
			sticky.className = 'sticky';
			cv.style.paddingTop = '290px';
		} else {
			sticky.className = '';
			cv.style.paddingTop = 0;
		}
		lastScrollTop = st;
	}
});