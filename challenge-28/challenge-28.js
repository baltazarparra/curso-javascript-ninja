(function(DOM){

    'use strict';

    function app() {

        var $formCEP = new DOM('[data-js="form-cep"]');
        var $inputCEP = new DOM('[data-js="input-cep"]');
        var $logradouro = new DOM('[data-js="logradouro"]');
        var $bairro = new DOM('[data-js="bairro"]');
        var $estado = new DOM('[data-js="estado"]');
        var $cidade = new DOM('[data-js="cidade"]');
        var $cep = new DOM('[data-js="cep"]');
        var $status = new DOM('[data-js="status"]');
        var ajax = new XMLHttpRequest();
        $formCEP.on('submit', handleSubmitFormCEP);

        function handleSubmitFormCEP(event) {
            event.preventDefault();
            var url = getUrl();
            ajax.open('GET', url);
            ajax.send();
            getMessage('loading');
            ajax.addEventListener('readystatechange', handleReadyStateChange);
        }

        function handleReadyStateChange() {
            if(isRequestOk())
                fillCEPFields();
            getMessage('ok');
        }

        function getUrl() {
            return 'https://viacep.com.br/ws/[CEP]/json/'.replace('[CEP]', clearCEP());
        }

        function clearCEP() {
            return $inputCEP.get()[0].value.replace(/\D/g, '');
        }

        function isRequestOk() {
            return ajax.readyState === 4 && ajax.status === 200;
        }

        function fillCEPFields() {
            var data = parseData();
            if(!data)
                getMessage('error');

            $logradouro.get()[0].textContent = data.logradouro;
            $bairro.get()[0].textContent = data.bairro;
            $estado.get()[0].textContent = data.uf;
            $cidade.get()[0].textContent = data.localidade;
            $cep.get()[0].textContent = data.cep;
        }

        function parseData() {
            var result;
            try {
                result = JSON.parse(ajax.responseText);
            }
            catch(e) {
                result = null;
            }
            return result;
        }

        function getMessage(type) {
            var cep = clearCEP();
            var messages = {
                loading: 'Buscando CEP ' + cep + '...',
                ok: 'CEP ' + cep + ' encontrado!',
                error: 'CEP ' + cep + ' Não encontrado!'
            };
            $status.get()[0].textContent = messages[type];
        }

    }

    app();

})(window.DOM);
