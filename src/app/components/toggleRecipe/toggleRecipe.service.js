(function () {
  'use strict';

  angular
    .module('coleTraining')
    .service('toggleRecipeService', toggleRecipeService);

  function toggleRecipeService() {

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
