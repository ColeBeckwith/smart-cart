(function () {
  'use strict';

  angular
    .module('coleTraining')
    .service('cartIngredients', cartIngredients);

  function cartIngredients() {

    var vm = this;

    vm.ingredientList = [];

  }
})();
