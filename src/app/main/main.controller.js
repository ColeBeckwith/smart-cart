(function () {
    'use strict';

    angular
        .module('coleTraining')
        .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, featuredMeals, foodBySection) {
    var vm = this;

    var newMealMode = false;

    vm.yourIngredients = [];
    vm.yourMeals = [];
    vm.classAnimation = '';
    vm.ingredients = [];
    vm.addToCart = addToCart;
    vm.removeFromCart = removeFromCart;
    vm.newMealMode = newMealMode;
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
      vm.foodBySection = foodBySection.getSections();
    }

    function addToCart(meal) {
      if(meal.added) {
        return;
      }

      meal.added = !meal.added;
      vm.yourMeals.push({
        'name' : meal.name
      });

      for ( var i = 0; i < meal.ingredients.length; i++ ) {
        vm.ingredients.push({
          'name': meal.ingredients[i],
          'added': false,
          'source': meal.name,
          'storeSection': foodBySection.findStoreSection(meal.ingredients[i])
        });
      }
    }

    vm.findStoreSection = function(ingredient) {
     foodBySection.findStoreSection(ingredient)
    };

    function removeFromCart(meal) {
      if(!meal.added) {
        return;
      }

      meal.added = !meal.added;

      for (var i = 0; i < vm.yourMeals.length; i++) {
        if (vm.yourMeals[i].name === meal.name) {
          vm.yourMeals.splice(i, 1);
          i--;
        }
      }

      for (var i = 0; i < vm.ingredients.length; i++) {
        if (meal.name === vm.ingredients[i].source) {
          vm.ingredients.splice(i, 1);
          i--;
          //alternative is to have vm.ingredients.splice(i, meal.ingredients.length).
        }
      }
    }

    function addCustomMeal() {
      vm.yourIngredients.push({
        'name': vm.customMealName.replace(/\w\S*/g, function (match) {
          return match.charAt(0).toUpperCase() + match.substr(1).toLowerCase()
        }),
        'ingredients': formatCustomIngredients(vm.customMealIngredients),
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
