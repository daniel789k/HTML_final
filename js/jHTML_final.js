$(document).ready(function () {
    $('.dropdown').click(function(event) { 
        event.preventDefault();
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
        $(this).children('a').toggleClass('dropdown_open');
        $(this).siblings().children('a').removeClass('dropdown_open');
        $(this).find('ul').slideToggle();
        $(this).siblings().find('ul').slideUp();

    });
    
    $('.top a').click(function (event) { 
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
});