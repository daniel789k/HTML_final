$(document).ready(function () {
    $('.show_menu').click(function (e) { 
        e.preventDefault();
        $('.menu').toggleClass('menu_show');
        
    });
});