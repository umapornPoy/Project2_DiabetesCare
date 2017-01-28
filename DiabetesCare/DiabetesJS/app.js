var app = angular.module('Diabetes', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider

    .when("/", {
        templateUrl: "Home/Index"
    })

});