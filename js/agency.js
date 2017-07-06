// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict


var app=angular.module('app', ['ngAnimate', 'ngRoute', 'simple-slideshow']);
app.controller("myCtrl", ['$scope', function($scope){
	
	$scope.bool=[];
	$scope.bool[0]=false;
	$scope.bool[1]=false;
	$scope.bool[2]=false;
	$scope.onOff=true;
	$scope.slides=[
		{
			name:"not my cat",
			url: "img/scegliMeta.jpeg"
		},
		{
			name:"halo giacomo",
			url:" img/conosciStudenti.jpg"
		}
	];
	setTimeout(function(){
		console.log("bool", $scope.bool)
		}, 6000);
		
}]);