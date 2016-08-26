(function () {
  'use strict';

  angular
    .module('coleTraining')
    .service('cartMealsService', cartMealsService);

  function cartMealsService() {

    var vm = this;
    vm.getCustomMeals = getCustomMeals;

    vm.customMeals = [];

    function getCustomMeals() {
      return vm.customMeals;
    }

  }
})();
