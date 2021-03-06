var app = angular.module("internalApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "pages/home.html",
            controller: "mainCtrl"
        })
        .when("/boardManag", {
            templateUrl: "pages/boardManag.html",
        })
        .when("/orgChart", {
            templateUrl: "pages/orgChart.html",
            controller: "orgChartCtrl"
        })
        .when("/missionAndVision", {
            templateUrl: "pages/missionAndVision.html",
            controller: "missionAndVisionCtrl"
        })
        .when("/missions", {
            templateUrl: "pages/missions.html",

        })
        .when("/media", {
            templateUrl: "pages/media.html",
            controller: "media"

        })
        .when("/news", {
            templateUrl: "pages/news.html",
            controller: "newsCtrl"

        })
        .when("/circulars", {
            templateUrl: "pages/circulars.html",

        })
        .when("/media-details", {
            templateUrl: "pages/media-details.html",

        })
        .when("/events", {
            templateUrl: "pages/events.html",

        })
        .when("/regulationsPolicies", {
            templateUrl: "pages/Regulations_policies.html",
            controller: "regulationsPolicies"

        })
        .when("/services", {
            templateUrl: "pages/services.html",

        })
        .when("/profile", {
            templateUrl: "pages/profile.html",
            controller: "profile"
        })
        .when("/digital-library", {
            templateUrl: "pages/digitalLib.html",
            controller: "digital-library"

        })


});



app.controller("mainCtrl", function($scope) {

    $scope.$on('$viewContentLoaded', function(event) {
        //Your code goes here.
        $('#js-news').ticker();
        $("#about").click(function() {
            $('.events-list').css("display", "none");
            $("#mails").slideDown();

        });


        $("#blog").click(function() {
            $('.events-list').css("display", "none");
            $("#late_tasks").slideDown();

        });

        $("#projects").click(function() {
            $('.events-list').css("display", "none");
            $("#loading_tasks").slideDown();
        });

        $("#contact").click(function() {
            $('.events-list').css("display", "none");
            $("#meetings").slideDown();
        });
    });

    $(document).ready(function() {

        var clickEvent = false;
        $('#demo').carousel({
            interval: 4000
        }).on('click', '.list-group li', function() {
            clickEvent = true;
            $('.list-group li').removeClass('active');
            $(this).addClass('active');
        }).on('slid.bs.carousel', function(e) {
            if (!clickEvent) {
                var count = $('.list-group').children().length - 1;
                var current = $('.list-group li.active');
                current.removeClass('active').next().addClass('active');
                var id = parseInt(current.data('slide-to'));
                if (count == id) {
                    $('.list-group li').first().addClass('active');
                }
            }
            clickEvent = false;
        });
        $(".footer_noti").click(function(){
            $(".events-list").css("display","none");
        });
    });

    $(window).load(function() {
        var boxheight = $('#demo .carousel-inner').innerHeight();
        var itemlength = $('#demo .item').length;
        var triggerheight = Math.round(boxheight / itemlength + 1);
        $('#demo .list-group-item').outerHeight(triggerheight);
    });
});



app.controller('missionAndVisionCtrl', function($scope) {
    $scope.$on('$viewContentLoaded', function(event) {
        //Your code goes here.
        // $('.card').css('display', 'none');
        $('.notifications div').css('display', 'block');

        $('#v').slideDown(500, function() {
            $('#m').slideDown(500, function() {
                $('#vl').slideDown(500, function() {
                    $(".card-text").fadeIn('slow');
                });
            });
        });

    });
});


app.controller('media', function($scope) {
    $scope.$on('$viewContentLoaded', function(event) {
        $('#a1').css('display', 'none');
        $('#a2').css('display', 'none');
        $('#a3').css('display', 'none');
        $('#a4').css('display', 'none');
        $('#a5').css('display', 'none');
        $('#a6').css('display', 'none');
        $('#a7').css('display', 'none');
        $('#a8').css('display', 'none');
        $('#a9').css('display', 'none');

        $("#a1").fadeIn(200, function() {
            $("#a2").fadeIn(200, function() {
                $("#a3").fadeIn(200, function() {
                    $("#a4").fadeIn(200, function() {
                        $("#a5").fadeIn(200, function() {
                            $("#a6").fadeIn(200, function() {
                                $("#a7").fadeIn(200, function() {
                                    $("#a8").fadeIn(200, function() {
                                        $("#a9").fadeIn(200);
                                    });

                                });

                            });

                        });

                    });
                });
            });
        });
    });
});


app.controller('profile', function($scope) {
    $scope.$on('$viewContentLoaded', function(event) {
        //Your code goes here.
        $(".profile-usermenu a").click(function() {
            $("html, body").animate({ scrollTop: 650 });

        });
    });
});

app.controller('digital-library', function($scope) {
    $scope.$on('$viewContentLoaded', function(event) {
        //Your code goes here.
        $("#text_search").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#links tbody tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });
});

app.controller('regulationsPolicies', function($scope) {
    $scope.$on('$viewContentLoaded', function(event) {
        //Your code goes here.
        $("table a").addClass("btn");
        $("table a").css({
            'font-weight': 'bold',
            'background-color': '#4eba93'
        });
    });
});

app.controller('orgChartCtrl', function($scope) {
    $scope.$on('$viewContentLoaded', function(event) {
        //Your code goes here.
        $(".panel-title a").attr("target", "_self");
        $("._clicked").trigger('click');

    });
});
app.controller('newsCtrl', function($scope) {
    //tabs for sub news 
    $scope.tab = 1;
    $scope.setTab = function(newTab) {
        $scope.tab = newTab;
    };
    $scope.isSet = function(tabNum) {
        return $scope.tab === tabNum;
    };

    $scope.$on('$viewContentLoaded', function(event) {

        function animateText(textArea) {
            let text = textArea.value;
            let to = text.length,
                from = 0;

            animate({
                duration: 1000,
                timing: bounce,
                draw: function(progress) {
                    let result = (to - from) * progress + from;
                    textArea.value = text.substr(0, Math.ceil(result))
                }
            });
        }


        function bounce(timeFraction) {
            // return timeFraction;
            return Math.pow(timeFraction, 2)
                //  return 1 - Math.sin(Math.acos(timeFraction));
                //  x= 1.5;
                //   return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)

        }
    });

});