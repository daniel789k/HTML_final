$(document).ready(function() {
    $('.button').click(function(event){
        $('.text').toggleClass('active');
    });

    $('.start').click(function(evevt){
        $('.box2').slideUp(1000).slideDown(1000);
    });

    $('.close').click(function (event) { 
        event.preventDefault();
        $('.box3').slideUp();
    });

    $('.box4').css('width','500px');

    $('.open').click(function(evevt){ 
        $('.box5').delay(0).slideDown();
        $('.box6').delay(1000).slideDown();
        $('.box7').delay(2000).slideDown();
    });

    $('.ad-close').click(function (event) { 
        event.preventDefault();
        $('.ad').hide();
    });

    $('.open2').click(function (e) { 
        $('.box8').toggleClass('animate__shakeX');
        
    });

    
});