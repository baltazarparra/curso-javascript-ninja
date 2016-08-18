;(function(window, document){

    'use strict';

    var $input = document.querySelector('[data-js="input"]');
    var $button = document.querySelectorAll('[data-js="button"]');
    var $ce = document.querySelector('[data-js="ce"]');
    var $equal = document.querySelector('[data-js="equal"]');
    var $operation = document.querySelectorAll('[data-js="operation"]');

    Array.prototype.forEach.call($button, function(button) {
        button.addEventListener('click', handleClick, false);
    });

    Array.prototype.forEach.call($operation, function(ope) {
        ope.addEventListener('click', handleOpe, false);
    });

    $ce.addEventListener('click', handleCe, false);
    $equal.addEventListener('click', handleEqual, false);

    function handleClick(e) {
        $input.value += this.value;
    }

    function handleOpe(e) {
        $input.value = remove($input.value);
        $input.value += this.value;
    }

    function handleCe(e) {
        $input.value = 0;
    }

    function isLast(number) {
        var opera = ['+', '-', '*', '/'];
        var lastItem = number.split('').pop();
        return opera.some(function(operator) {
            return operator === lastItem;
        });
    }

    function remove(number) {
        if(isLast(number)) {
            return number.slice(0, -1);
        }
        return number;
    }

    function handleEqual(e) {
        $input.value = remove($input.value);
        var allValues = $input.value.match(/\d+[+*/-]?/g);
        $input.value = allValues.reduce(function(accumulated, actual) {
            var firstValue = accumulated.slice(0, -1);
            var operator = accumulated.split('').pop();
            var lastValue = actual;
            switch(operator) {
                case '+':
                    return Number(firstValue) + Number(lastValue);
                case '-':
                    return Number(firstValue) - Number(lastValue);
                case '*':
                    return Number(firstValue) * Number(lastValue);
                case '/':
                    return Number(firstValue) / Number(lastValue);
            }
        });
    }

})(window, document);
