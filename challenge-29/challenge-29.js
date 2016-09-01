(function($) {

    'use strict';

    function app() {
        return {
            init: function init() {
                this.companyInfo();
                this.initEvents();
            },

            initEvents: function initEvents() {
              $('[data-js="form-register"]').on('submit', this.handleSubmit);
            },

            handleSubmit: function handleSubmit(e) {
                e.preventDefault();

            },

            companyInfo: function companyInfo() {
                var ajax = new XMLHttpRequest();
                ajax.open('GET', 'company.json', true);
                ajax.send();
                ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
            },

            getCompanyInfo: function getCompanyInfo() {
                if(!app().isReady.call(this))
                    return;

                var data = JSON.parse(this.responseText);
                var $companyName = $('[data-js="company-name"]').get();
                var $companyPhone = $('[data-js="company-phone"]').get();
                $companyName.textContent = data.name;
                $companyPhone.textContent = data.phone;
            },

            isReady: function isReady() {
                return this.readyState === 4 && this.status === 200;
            }
        };
    }

    app().init();

})(window.DOM);
