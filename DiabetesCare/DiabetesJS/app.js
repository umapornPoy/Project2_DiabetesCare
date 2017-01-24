var app = angular.module('Diabetes', ['ngRoute', 'ui.bootstrap']);
app.config(function ($routeProvider) {
    $routeProvider

    .when("/", {
        templateUrl: "Home/Index"
    })

});