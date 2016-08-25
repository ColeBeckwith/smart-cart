(function () {
  'use strict';

  angular
    .module('coleTraining')
    .service('toggleRecipe', toggleRecipe);

  function toggleRecipe() {

    var vm = this;

    vm.openStatus = false;

    vm.openRecipe = openRecipe;
    vm.closeRecipe = closeRecipe;

    function openRecipe() {
      vm.openStatus = true;
    }

    function closeRecipe() {
      vm.openStatus = false;
    }
  }
})();
