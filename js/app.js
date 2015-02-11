(function() {
  var app = angular.module('listJson', []);

  app.controller('ListController', ['$http', function($http){
    var list = this;
    list.items = [];
    $http.get("/tutorials.json").success(function(data){
    list.items = data;
    });
    
  }]);
})();
