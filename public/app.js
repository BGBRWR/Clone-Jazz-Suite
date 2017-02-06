angular.module("stock", ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");

  });
