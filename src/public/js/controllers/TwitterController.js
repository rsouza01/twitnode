

angular.module('analytics-dashboard').controller('TwitterController',
	function($scope) {

		$scope.pageName = 'Twitter';
		$scope.subHeading = 'Dashboard';

		$scope.searchHashtag = function() {
			alert($scope.hashtag);

		};

});