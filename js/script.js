$(document).ready(function () {
    $('.slide-info').owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        dots: false,
        onTranslated: slide,
    });
    function slide(e) {
        var index = e.relatedTarget;
        var data = index.relative(index.current()) + 1;
        $('.page-bottom .owl-theme .owl-dots button').each(function (index) {
            $(this).removeClass('active');
            if ($(this).data('item') == data) {
                $(this).addClass('active');
            }
        });
    }
    $('.page-bottom .owl-theme .owl-dots button').click(function () {
        $('.page-bottom .owl-theme .owl-dots button').each(function (index) {
            $(this).removeClass('active');
        });
        var index = $(this).data('item');
        $(this).addClass('active');
        $('.slide-info').trigger('to.owl.carousel', index - 1);
    });
    $('#agree').click(function () {
        if (this.checked) {
            $('button').addClass('active').removeClass('no-active');
        } else {
            $('button').addClass('no-active').removeClass('active');
        }
    });
    $('.modal-bg').hide();
    $('.modal-global').hide();
    $('.icon-getquan').click(function () {
        $('.modal-bg').fadeIn();
        $('.modal-global').fadeIn();
    });
    $('.modal-bg, .btn-cancel').click(function (e) {
        $('.modal-bg').hide();
        $('.modal-global').fadeOut();
    });
});
