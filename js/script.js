
var app = angular.module("internalApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "pages/home.html",
        controller : "mainCtrl"
    })
    .when("/boardManag", {
        templateUrl : "pages/boardManag.html"
    })
     .when("/orgChart", {
        templateUrl : "pages/orgChart.html"
    })
    .when("/missionAndVision", {
        templateUrl : "pages/missionAndVision.html",
        controller : "missionAndVisionCtrl"
    })
     .when("/missions", {
        templateUrl : "pages/missions.html",
    
    })
});


app.controller("mainCtrl", function ($scope) {
	
	$scope.$on('$viewContentLoaded', function(event) {
		//Your code goes here.
	    $('#js-news').ticker();
		});
	
	 $(document).ready(function(){

		    var clickEvent = false;
		    $('#demo').carousel({
		    interval:   4000
		    }).on('click', '.list-group li', function() {
		      clickEvent = true;
		      $('.list-group li').removeClass('active');
		      $(this).addClass('active');
		    }).on('slid.bs.carousel', function(e) {
		    if(!clickEvent) {
		      var count = $('.list-group').children().length -1;
		      var current = $('.list-group li.active');
		      current.removeClass('active').next().addClass('active');
		      var id = parseInt(current.data('slide-to'));
		      if(count == id) {
		        $('.list-group li').first().addClass('active');
		      }
		    }
		    clickEvent = false;
		    });
		   
		    });
		    
	 $(window).load(function() {
		    var boxheight = $('#demo .carousel-inner').innerHeight();
		    var itemlength = $('#demo .item').length;
		    var triggerheight = Math.round(boxheight/itemlength+1);
		    $('#demo .list-group-item').outerHeight(triggerheight);
		    });
	 
});


app.controller('orgChartctrl', function($scope) {

});
app.controller('missionAndVisionCtrl', function($scope) {
	$scope.$on('$viewContentLoaded', function(event) {
		//Your code goes here.
		 $('.card').css('display','none');

		 $('#v').slideDown(700,function(){
			 $('#m').slideDown(700,function(){
				 $('#vl').slideDown(700,function(){
					 $(".card-text").fadeIn('slow');

				 }); 
			 });
		 });
		});
	
	
});

