(function () {
  'use strict';

  angular
    .module('coleTraining')
    .service('cartMealsService', cartMealsService);

  function cartMealsService() {

    var vm = this;

    vm.customMeals = [];

  }
})();
