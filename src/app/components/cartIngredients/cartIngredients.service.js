/**
 * Created by CBeckwith411 on 8/25/16.
 */
(function () {
  'use strict';

  angular
    .module('coleTraining')
    .service('cartIngredients', cartIngredients);

  function cartIngredients() {

    var vm = this;

    vm.ingredientList = []

  }
})();
