(function() {
  'use strict';

  angular
    .module('coleTraining')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.yourMeals = [];
    vm.classAnimation = '';
    vm.creationDate = 1466020001865;
    vm.ingredients = [];
    vm.addIngredients = addIngredients;
    vm.removeIngredients = removeIngredients;

    activate();

    function activate() {
      getFeaturedMeals();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function addIngredients(meal) {
      meal.added = !meal.added;
      for (var i = 0; i < meal.ingredients.length; i++) {
        vm.ingredients.push({'name': meal.ingredients[i], 'added': false});
      }
    }

    function removeIngredients(meal) {
      meal.added = !meal.added;
      for (var i = 0; i < meal.ingredients.length; i++) {
        for (var j = 0; j < vm.ingredients.length; j++) {
          if (vm.ingredients[j].name === meal.ingredients[i]) {
            vm.ingredients.splice(j, 1);
            break;
            //break makes sure that it only removes the first instance of the ingredient.
          }
        }
      }
    }

    function getFeaturedMeals() {
      vm.meals = webDevTec.getMeals();
      angular.forEach(vm.meals, function(meal) {
        meal.rank = Math.random();
        meal.added = false;
      });
    }
  }


})();
