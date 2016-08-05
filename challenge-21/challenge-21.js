(function(win, doc){

    'use strict';

    var $input = document.querySelector('[data-js="input"]');
    var $start = document.querySelector('[data-js="start"]');
    var $stop = document.querySelector('[data-js="stop"]');
    var $reset = document.querySelector('[data-js="reset"]');
    var chronos;

    $start.addEventListener('click', startChronos, false);
    $stop.addEventListener('click', stopChronos, false);
    $reset.addEventListener('click', resetChronos, false);

    function startChronos() {
        $input.value = +$input.value + 1;
        chronos = setTimeout(startChronos, 100);
    }

    function stopChronos() {
        clearTimeout(chronos);
    }

    function resetChronos() {
        $input.value = 0;
        stopChronos();
    }

})(window, document);
