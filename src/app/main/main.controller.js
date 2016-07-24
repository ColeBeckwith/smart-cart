(function() {
  'use strict';

  angular
    .module('coleTraining')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec) {
    var vm = this;
    var sortBy = 'storeSection';
    var foodBySection = [
      {
        'category' : 'Fruits',
        'foodInCategory' : ['blueberry', 'blueberries', 'raspberry', 'raspberries', 'apple', 'apples']
      },
      {
        'category' : 'Vegetables',
        'foodInCategory' : ['kale', 'broccoli', 'carrots', 'asparagus', 'avocado', 'lettuce', 'tomatoes']
      },
      {
        'category' : 'Meats',
        'foodInCategory' : ['chicken', 'beef', 'lamb', 'lamb meat', 'turkey', 'ham', 'salmon', 'shrimp', 'sausage', 'canadian bacon', 'bison']
      },
      {
        'category' : 'Dairy',
        'foodInCategory' : ['eggs', 'milk', 'cheese', 'butter']
      },
      {
        'category' : 'Snacks',
        'foodInCategory' : ['chips', 'salsa', 'cereal', 'queso']
      },
      {
        'category' : 'Bread',
        'foodInCategory' : ['bread', 'tortillas', 'pitas', 'burger buns', 'buns', 'hot dog buns']
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
