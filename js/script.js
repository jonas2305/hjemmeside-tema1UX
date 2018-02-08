


$(document).ready(function () {


    $('.menu-toggle').click(function() {
        $('ul').slideToggle("fast");
        $(this).toggleClass('open');
    });


    $('.menupunkt').on('mouseover', function () {
        var menuId = $(this).attr('data-menuid');
        $('#'+menuId).show();
    });
    $('.menupunkt').on('click', function () {
        var menuId = $(this).attr('data-menuid');
        $('#'+menuId).hide();
    });

});