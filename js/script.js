
var app = angular.module("internalApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "pages/home.html"
    })
    .when("/boardManag", {
        templateUrl : "pages/boardManag.html"
    })
     .when("/orgChart", {
        templateUrl : "pages/orgChart.html"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});


