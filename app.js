angular.module('myNews', [])
	.controller('NewsCtrl', ['$scope', function($scope){
		$scope.say_hello = "Hey!!!!!!";
		
		$scope.news = [										//Additional information
			 {title : 'News 1', upvotes: 3},
			 {title : 'News 2', upvotes: 2},
			 {title : 'News 3', upvotes: 12},
			 {title : 'News 4', upvotes: 3},
			 {title : 'News 5', upvotes: 7}
		];
		
		$scope.addNews = function(){						//A function to add a news
			if(!$scope.title || $scope.title === '') {return;}		//Preventing user to input empty title
			$scope.news.push({
				title : $scope.title,
				upvotes: 0,
				link: $scope.link,
			});	//Now pushing custom news
			$scope.title = '';
		};
		
		$scope.increaseVotes = function(n){							//As n means a news only so its property upvotes			
			n.upvotes += 1;											//directly referenced, hence increasing it will 
		};															//get reflected on the view
	}
]);