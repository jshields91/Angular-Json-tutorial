(function() {
  var app = angular.module('listJson', []);

  app.controller('ListController', ['$http', function($http){
    var list = this;
    list.items = [];
    $http.get("https://jshields91.github.io/Angular-Json-tutorial/tutorials.json").success(function(data){
    list.items = data;
    });
    
  }]);
})();
