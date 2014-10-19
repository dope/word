(function(window, document, $, undefined) {

    'use strict';

    var trigger = '.js-trigger';
    var nav     = '.js-nav';

    $(trigger).on('click', function() {
        $(nav).slideToggle(200);
    });

    $(window).resize(function() {
        if ($(window).width() > 700) {
            $(nav).css('display', 'inline-block');
        } else {
            $(nav).css('display', 'none');
        }
    });


})(window, document, jQuery);