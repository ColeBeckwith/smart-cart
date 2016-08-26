(function () {
  'use strict';

  angular
    .module('coleTraining')
    .service('toggleRecipeService', toggleRecipeService);
  
  function toggleRecipeService() {
    var vm = this;
    
    vm.openStatus = false;

    vm.toggleRecipeOpen = toggleRecipeOpen;

    function toggleRecipeOpen() {
      vm.openStatus = !vm.openStatus;
    }
  }
})();
