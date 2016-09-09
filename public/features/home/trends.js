angular.module('smartNews.home')

.controller('TopTrendsCtrl', function($scope, $http, TopTrendsFactory) {
  var sanitizeTitle = TopTrendsFactory.sanitizeTitle;
  $scope.topTrends = TopTrendsFactory.topTrends;
  $scope.selectArticle = function (topic) {
    console.log(topic, 'this is my topic');
    var title = sanitizeTitle(topic.articleTitle);
    TopTrendsFactory.getPrimaryArticle(title)
      .then(function (article) {
        var article = article.data.stories[0];
        TopTrendsFactory.primaryArticle[0] = article;
      });
  };

});