(function() {
  'use strict';

  angular
    .module('coleTraining')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.meals = [];
    vm.yourMeals = [];
    vm.classAnimation = '';
    vm.creationDate = 1466020001865;
    vm.showToastr = showToastr;
    vm.getIngredients = getIngredients;
    vm.cart = [];
    vm.ingredients = [];
    vm.shoppingList = '';
    vm.getIngredientsRun = false;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function getIngredients() {
      vm.ingredients = [];
      vm.shoppingList = '';
      vm.getIngredientsRun = true;
      if (vm.meals.length === 0) {
        //This currently does not work because the meals are in the array either way, it is only the added attribute that
        //needs to be true for each object. The conditional should check if each 'added' attribute in the array is false.
        //May be easier to change everything so that the meals are added to a separate array, especially because this will
        //eventually need to include custom meals and shared meals as well. All meals should be put into the same array
        //but somehow be displayed by their category. Each meal could have 'type' attribute that would be 'featured','custom'
        //or 'shared'.
        vm.shoppingList = "Add meals to create a shopping list  "
      } else {
        angular.forEach(vm.meals, function (meal) {
          if (meal.added === true) {
            vm.ingredients.push(meal.ingredients.split(', '));
          }
        });
        angular.forEach(vm.ingredients, function (recipe) {
          vm.shoppingList += recipe.join(", ") + ", "
        });
      }
    }


    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.meals = webDevTec.getTec()
      angular.forEach(vm.meals, function(meal) {
        meal.rank = Math.random();
        meal.added = false;
      });
    }
  }


})();
