(function () {
    'use strict';

    angular
        .module('coleTraining')
        .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, featuredMeals) {
    var vm = this;
    var sortBy = 'storeSection';
    var customIngredient = '';
    var newMealMode = false;
    var foodBySection = [
      {
        'category': 'Fruits',
        'foodInCategory': ['blueberry', 'blueberries', 'raspberry', 'raspberries', 'apple', 'apples', 'limes', 'grapefruit']
      },
      {
        'category': 'Vegetables',
        'foodInCategory': ['kale', 'broccoli', 'carrots', 'asparagus', 'avocado', 'lettuce', 'tomatoes', 'red peppers', 'green peppers', 'jalapenos', 'spinach']
      },
      {
        'category': 'Meats',
        'foodInCategory': ['chicken', 'beef', 'lamb', 'lamb meat', 'turkey', 'ham', 'salmon', 'shrimp', 'sausage', 'canadian bacon', 'bison']
      },
      {
        'category': 'Dairy',
        'foodInCategory': ['eggs', 'milk', 'cheese', 'butter', 'yogurt']
      },
      {
        'category': 'Snacks',
        'foodInCategory': ['chips', 'salsa', 'cereal', 'queso', 'chocolate', 'chocolate frosting', 'icing', 'pine nuts']
      },
      {
        'category': 'Bread',
        'foodInCategory': ['bread', 'tortillas', 'pitas', 'burger buns', 'buns', 'hot dog buns']
      },
      {
        'category': 'Spices & Condiments',
        'foodInCategory': ['salt', 'pepper', 'ground pepper', 'paprika', 'cumin', 'crushed red pepper', 'ketchup', 'mustard', 'mayonnaise']
      },
      {
        'category': 'Other',
        'foodInCategory': []
      }
    ];
    var sortOptions = [
      {
        'displayText': 'Alphabetical',
        'sortByString': 'name'
      },
      {
        'displayText': 'Meal',
        'sortByString': 'source'
      },
      {
        'displayText': 'Store Section',
        'sortByString': 'storeSection'
      }
    ];

    vm.yourIngredients = [];
    vm.yourMeals = [];
    vm.classAnimation = '';
    vm.ingredients = [];
    vm.addToCart = addToCart;
    vm.removeFromCart = removeFromCart;
    vm.sortBy = sortBy;
    vm.foodBySection = foodBySection;
    vm.sortOptions = sortOptions;
    vm.addCustomIngredient = addCustomIngredient;
    vm.customIngredient = customIngredient;
    vm.newMealMode = newMealMode;
    vm.addCustomMeal = addCustomMeal;
    vm.formatCustomIngredients = formatCustomIngredients;
    /*vm.customMealName = customMealName;
    vm.customMealIngredients = customMealIngredients;
    vm.customMealCalories = customMealCalories;
    vm.clearCustomFields = clearCustomFields;*/
    // TODO if these declarations are uncommented the Custom Meal Creation window starts opened.

    activate();

    function activate() {
      getFeaturedMeals();
      clearCustomFields();
      //getStoreSections();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

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
          'storeSection': findStoreSection(meal.ingredients[i])
        });
      }
    }

    /*function getStoreSections() {
      vm.foodBySection = storeSection.getSections();
    }*/

    function addCustomIngredient() {
      vm.ingredients.push({
        'name': vm.customIngredient.replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        }), 'added': false, 'source': 'Manually Added', 'storeSection': findStoreSection(vm.customIngredient)
      });
      vm.customIngredient = '';
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

    function getFeaturedMeals() {
      vm.meals = featuredMeals.getMeals();
      angular.forEach(vm.meals, function (meal) {
        meal.rank = Math.random();
        meal.added = false;
      });
    }

    function findStoreSection(ingredient) {
      for ( var i = 0; i < foodBySection.length; i++ ) {
        if ( vm.foodBySection[i].foodInCategory.indexOf(ingredient.toLowerCase()) !== -1 ) {
          return vm.foodBySection[i].category
        }
      }
      return 'Other';
    }
  }

})();
