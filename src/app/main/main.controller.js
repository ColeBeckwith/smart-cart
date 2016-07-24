(function() {
  'use strict';

  angular
    .module('coleTraining')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec) {
    var vm = this;
    var sortBy = 'storeSection';
    var customIngredient = '';
    var foodBySection = [
      {
        'category' : 'Fruits',
        'foodInCategory' : ['blueberry', 'blueberries', 'raspberry', 'raspberries', 'apple', 'apples', 'limes', 'grapefruit']
      },
      {
        'category' : 'Vegetables',
        'foodInCategory' : ['kale', 'broccoli', 'carrots', 'asparagus', 'avocado', 'lettuce', 'tomatoes', 'red peppers', 'green peppers', 'jalapenos', 'spinach']
      },
      {
        'category' : 'Meats',
        'foodInCategory' : ['chicken', 'beef', 'lamb', 'lamb meat', 'turkey', 'ham', 'salmon', 'shrimp', 'sausage', 'canadian bacon', 'bison']
      },
      {
        'category' : 'Dairy',
        'foodInCategory' : ['eggs', 'milk', 'cheese', 'butter', 'yogurt']
      },
      {
        'category' : 'Snacks',
        'foodInCategory' : ['chips', 'salsa', 'cereal', 'queso', 'chocolate', 'chocolate frosting', 'icing', 'pine nuts']
      },
      {
        'category' : 'Bread',
        'foodInCategory' : ['bread', 'tortillas', 'pitas', 'burger buns', 'buns', 'hot dog buns']
      },
      {
        'category' : 'Spices & Condiments',
        'foodInCategory' : ['salt', 'pepper', 'ground pepper', 'paprika', 'cumin', 'crushed red pepper', 'ketchup', 'mustard', 'mayonnaise']
      },
      {
        'category' : 'Other',
        'foodInCategory' : []
      }
    ];
    var sortOptions = [
      {
        'displayText' : 'Alphabetical',
        'sortByString' : 'name'
      },
      {
        'displayText' : 'Meal',
        'sortByString' : 'source'
      },
      {
        'displayText' : 'Store Section',
        'sortByString' : 'storeSection'
      },
    ];

    vm.yourMeals = [];
    vm.classAnimation = '';
    vm.ingredients = [];
    vm.addIngredients = addIngredients;
    vm.removeIngredients = removeIngredients;
    vm.sortBy = sortBy;
    vm.foodBySection = foodBySection;
    vm.sortOptions = sortOptions;
    vm.addCustomIngredient = addCustomIngredient;
    vm.customIngredient = customIngredient;


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
        vm.ingredients.push({'name': meal.ingredients[i], 'added': false, 'source': meal.name, 'storeSection' : getStoreSection(meal.ingredients[i])});
      }
    }

    function removeIngredients(meal) {
      meal.added = !meal.added;
      for (var i = 0; i < vm.ingredients.length; i++) {
        if (meal.name === vm.ingredients[i].source) {
          vm.ingredients.splice(i, 1);
          i--;
          //alternative is to have vm.ingredients.splice(i, meal.ingredients.length).
        }
      }
    }

    function addCustomIngredient() {
      vm.ingredients.push({'name': vm.customIngredient.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()}), 'added': false, 'source': 'Manually Added', 'storeSection' : getStoreSection(vm.customIngredient)});
      vm.customIngredient = '';
    }

    function getFeaturedMeals() {
      vm.meals = webDevTec.getMeals();
      angular.forEach(vm.meals, function(meal) {
        meal.rank = Math.random();
        meal.added = false;
      });
    }


    function getStoreSection(ingredient) {
      for (var i = 0; i < foodBySection.length; i++) {
        if (vm.foodBySection[i].foodInCategory.indexOf(ingredient.toLowerCase()) !== -1) {
          return vm.foodBySection[i].category
        }
      }
      return 'Other';
    }

    }

})();
