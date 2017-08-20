'use strict';

// Constructor
var Home = function() {
    var team = $('.home__team');

    if ( team.length > 0 ) {
        var member = team.find('.home__team__member');
        var state;

        member.each(function(el) {
            var $this = $(this);
            var trigger = $this.find('.home__team__member__expand');

            console.log('El: ' + el);
            console.log('State whe cycle initiated: ' + state + el);

            function changeState() {
                console.log('State when function executed: ' + state + el);
                if ( state ) {
                    member.removeClass('-open');
                    $this.addClass('-open');
                    state = !state;
                } else if (!state) {
                    member.removeClass('-open');
                }
            }

            $this.on('click', function() {
                console.log('State after clicked member: ' + state + el);
                if (!state) {
                    state = !state;
                }
                changeState();
            });

            trigger.on('click', function(e) {
                console.log('State after clicked trigger: ' + state + el);
                //state = !state;
                changeState();
                e.stopPropagation();
            });
        });
    }
};

module.exports = Home;
