(function() {
  var app = angular.module('listJson', []);

  app.controller('ListController', ['$scope','$http', function($scope,$http){
    var $scope = this;
    $scope.items = [];
    $http.get('tutorials.json').success(function(data){
    $scope.items = data;
    });
    $scope.order = 'title';
  }]);
})();
