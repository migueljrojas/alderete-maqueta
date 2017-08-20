'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var main = $('main');
    var footer = $('footer');

    header.addClass('-ontop');

    $('.header__hamburguer').on('click', function(){
        header.toggleClass('-open');
        body.toggleClass('-hideOverflow');
    });

    function setHeaderOnTop(el) {
        var scroll = $(window).scrollTop();
        var el = el;

        if (scroll >= 100) {
            el.removeClass('-ontop');
        } else {
            el.addClass('-ontop');
        }
    }

    setHeaderOnTop(header);

    $(window).scroll(function() {
        setHeaderOnTop(header);
    });
};

module.exports = Header;
