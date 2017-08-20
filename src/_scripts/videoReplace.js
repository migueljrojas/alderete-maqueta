'use strict';

// Constructor
var videoReplace = function() {
    var container = $('.js-video');
    var frame = container.find('iframe');
    var videoHome = 'https://www.youtube.com/embed/J3CawfqexeU?rel=0&showinfo=0&autoplay=1&controls=0&t=15s';
    var videoItad = 'https://www.youtube.com/embed/5RXrUV2N7ZA?rel=0&showinfo=0&autoplay=1&controls=0';
    var videoTPM = 'https://www.youtube.com/embed/myd-VNDUC1I?rel=0&showinfo=0&autoplay=1&controls=0';

    if( container.length > 0 ) {
        $(window).on("scroll", function() {

            var scroll = $(window).scrollTop();
            var containerTop = container.get(0).getBoundingClientRect().top;

            if ( !container.hasClass('-playback') ) {
                if ( containerTop <= 500 && containerTop > -100 ) {

                    if ( container.hasClass('-itad') ) {
                        frame.attr('src', videoItad);
                    } else if (container.hasClass('-tpm')) {
                        frame.attr('src', videoTPM);
                    } else {
                        frame.attr('src', videoHome);
                    }

                    container.addClass('-playback');
                }
            }

            if ( container.hasClass('-playback') ) {
                if ( containerTop > 500 || containerTop < -100 ) {
                    frame.attr("src","");
                    container.removeClass('-playback');
                }
            }

        });
    }
};

module.exports = videoReplace;
