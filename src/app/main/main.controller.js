(function () {
    'use strict';

    angular
        .module('coleTraining')
        .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, featuredMeals, foodBySection, cartIngredients) {
    var vm = this;

    var newMealMode = false;

    vm.yourMeals = [];
    vm.addedMeals = [];
    vm.classAnimation = '';
    vm.addToCart = addToCart;
    vm.removeFromCart = removeFromCart;
    vm.addCustomMeal = addCustomMeal;
    vm.formatCustomIngredients = formatCustomIngredients;

    activate();

    function activate() {
      clearCustomFields();
      getFeaturedMeals();
      getStoreSections();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function getFeaturedMeals() {
      vm.meals = featuredMeals.getMeals();
      angular.forEach(vm.meals, function (meal) {
        meal.rank = Math.random();
        meal.added = false;
      });
    }

    function getStoreSections() {
      vm.foodSections = foodBySection.getSections();
    }

    function addToCart(meal) {
      if(meal.added) {
        return;
      }

      meal.added = !meal.added;
      vm.addedMeals.push({
        'name' : meal.name
      });

      for (var i = 0; i < meal.ingredients.length; i++ ) {
        cartIngredients.ingredientList.push({
          'name': meal.ingredients[i],
          'added': false,
          'source': meal.name,
          'storeSection': foodBySection.findStoreSection(meal.ingredients[i])
        });
      }
    }

    function removeFromCart(meal) {
      if(!meal.added) {
        return;
      }

      meal.added = !meal.added;

      for (var i = 0; i < vm.addedMeals.length; i++) {
        if (vm.addedMeals[i].name === meal.name) {
          vm.addedMeals.splice(i, 1);
          i--;
        }
      }

      for (var i = 0; i < cartIngredients.ingredientList.length; i++) {
        if (meal.name === cartIngredients.ingredientList[i].source) {
          cartIngredients.ingredientList.splice(i, 1);
          i--;
        }
      }
    }

    function addCustomMeal() {
      vm.yourMeals.push({
        'name': vm.customMealName.replace(/\w\S*/g, function (match) {
          return match.charAt(0).toUpperCase() + match.substr(1).toLowerCase()
        }),
        "ingredients": formatCustomIngredients(vm.customMealIngredients),
        'calories': vm.customMealCalories,
        'added': false
      });
      clearCustomFields();
    }

    function formatCustomIngredients(str) {
      var arr = str.replace(/,\s*$/, "").split(", ");
      for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replace(/\w\S*/g, function (match) {
           return match.charAt(0).toUpperCase() + match.substr(1).toLowerCase()
        })
      }
      return arr;
    }

    function clearCustomFields() {
      vm.customMealCalories = 0;
      vm.customMealIngredients = '';
      vm.customMealName = '';
      vm.newMealMode = false;
    }
  }

})();
