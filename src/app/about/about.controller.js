(function () {
    'use strict';

    angular
        .module('coleTraining')
        .controller('AboutController', AboutController);

    function AboutController() {
        var vm = this;
        vm.name = 'Cole';
    }
})();
