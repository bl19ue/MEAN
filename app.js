angular.module('myNews', [])
	.controller('NewsCtrl', ['$scope', function($scope){
		$scope.say_hello = "Hey!!!!!!";
		$scope.news = [										//News array
			'News 1',
			'News 2',
			'News 3',
			'News 4',
			'News 5'
		];
	}
]);