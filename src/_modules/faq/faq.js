'use strict';

// Constructor
var Faq = function() {

    var faqs = $('.faq');

    if (faqs) {
        faqs.each(function(){
            var $this = $(this);
            var question = $this.find('.faq__question');
            var answer = $this.find('.faq__answer');
            var answerHeight = answer.outerHeight();
            var category = $('.faqs__categories li');
            answer.css('max-height', 0);

            question.on('click', function(){
                $this.toggleClass('-open');

                if ($this.hasClass('-open')) {
                    answer.css('max-height', answerHeight);
                } else {
                    answer.css('max-height', 0);
                }
            });

            category.each(function(){
                $(this).on('click', function(){
                    category.removeClass('-active');
                    $(this).addClass('-active');
                });
            });
        });
    }
};

module.exports = Faq;
