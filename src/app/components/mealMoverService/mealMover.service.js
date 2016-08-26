/**
 * Created by CBeckwith411 on 8/26/16.
 */
(function () {
  'use strict';

  angular
    .module('coleTraining')
    .service('mealMoverService', mealMoverService);

  mealMoverService.$inject = ["foodBySection"];

  function mealMoverService(foodBySection) {
    var vm = this;

    vm.addToCart = addToCart;
    vm.removeFromCart = removeFromCart;

    vm.addedMeals = [];
    vm.ingredientList = [];

    function addToCart(meal) {
      if ( meal.added ) {
        return;
      }

      meal.added = !meal.added;

      vm.addedMeals.push(meal);

      for ( var i = 0; i < meal.ingredients.length; i++ ) {
        vm.ingredientList.push({
          'name': meal.ingredients[i],
          'added': false,
          'source': meal.name,
          'storeSection': foodBySection.findStoreSection(meal.ingredients[i])
        });
      }
    }

    function removeFromCart(meal) {
      if ( !meal.added ) {
        return;
      }

      meal.added = !meal.added;

      for ( var i = 0; i < vm.addedMeals.length; i++ ) {
        if ( vm.addedMeals[i].name === meal.name ) {
          vm.addedMeals.splice(i, 1);
          i--;
        }
      }

      for ( var i = 0; i < vm.ingredientList.length; i++ ) {
        if ( meal.name === vm.ingredientList[i].source ) {
          vm.ingredientList.splice(i, 1);
          i--;
        }
      }
    }
  }
})();
