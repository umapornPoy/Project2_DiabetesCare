var app = angular.module('Diabetes', ['ngRoute','ui.bootstrap']);
app.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "Home/Index"
    })
        .when("/CalSugar", {
            templateUrl: "Calculate/CalSugar",
            controller: 'CalSugarController'
        })
     .otherwise({
         templateUrl: "/"
     })

});