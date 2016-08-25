/**
 * Created by CBeckwith411 on 8/25/16.
 */
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
      console.log("working");
      console.log(vm.openStatus);
      vm.openStatus = true;
      console.log(vm.openStatus);
    }

    function closeRecipe() {
      vm.openStatus = false;
    }
  }
})();
