(function(win, doc){

    'use strict';

    var $input = document.querySelector('[data-js="input"]');
    var $start = document.querySelector('[data-js="start"]');
    var $stop = document.querySelector('[data-js="stop"]');
    var $reset = document.querySelector('[data-js="reset"]');
    var counter = 0;
    var crono;

    $start.addEventListener('click', function(event) {
        event.preventDefault();

        function timer() {
            $input.value = counter++;
        }
        crono = setInterval(timer, 100);

    }, false);

    $stop.addEventListener('click', function(event) {
        event.preventDefault();

        clearInterval(crono);

    }, false);

    $reset.addEventListener('click', function(event) {
        event.preventDefault();

        $input.value = 0;
        clearInterval(crono);

    }, false);

})(window, document);
