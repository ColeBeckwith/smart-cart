(function () {
    'use strict';

    angular
        .module('coleTraining')
        .controller('MainController', MainController);

    function MainController() {
      var vm = this;
      
      vm.toggleBottomMenu = false;
    }
})();
