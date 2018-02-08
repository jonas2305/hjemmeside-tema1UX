


$(document).ready(function () {


    $('.menu-toggle').click(function() {
        $('ul').slideToggle("fast");
        $(this).toggleClass('open');
    });


    $('.menupunkt').on('click', function () {
        var menuId = $(this).attr('data-menuid');
        $('#'+menuId).slideToggle('fast');
    });

    $('.kategoriknap').click(function () {
        $(this).css('opacity', '1');
    });

});