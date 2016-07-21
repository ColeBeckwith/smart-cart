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
        vm.ingredients.push({'name': meal.ingredients[i], 'added': false, 'source': meal.name});
      }
    }

    function removeIngredients(meal) {
      meal.added = !meal.added;
      for (var i = 0; i < vm.ingredients.length; i++) {
        if (meal.name === vm.ingredients[i].source) {
          vm.ingredients.splice(i, 1);
          i--;
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
