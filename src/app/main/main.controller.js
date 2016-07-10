(function() {
  'use strict';

  angular
    .module('coleTraining')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.meals = [];
    vm.yourMeals = [
      {
        'name' : 'No Custom Meals Available',
        'description' : 'Click above to add your own meals.'
      }
    ];
    vm.classAnimation = '';
    vm.creationDate = 1466020001865;
    vm.showToastr = showToastr;
    vm.getIngredients = getIngredients;
    vm.cart = [];
    vm.ingredients = [];
    vm.shoppingList = '';

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
      angular.forEach(vm.meals, function(meal) {
        if (meal.added === true) {
          vm.ingredients.push(meal.description.split(', '));
        }
      });
      angular.forEach(vm.ingredients, function(recipe) {
        vm.shoppingList += recipe.join(", ") + ", "
      });
      //This doesn't feel like the best way to do it, but I'm struggling to come up with a more concise approach.
      // A way to avoid the whole thing might be to add the ingredients upon adding the menu item, but then you have to
      // remove the ingredients if the item is removed which seems to be the more complex route.
      // Let me know what you might do.
      console.log(vm.shoppingList.slice(0, vm.shoppingList.length-2) + '.');
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.meals = webDevTec.getTec();

      angular.forEach(vm.meals, function(meal) {
        meal.rank = Math.random();
        meal.added = false;
      });
    }
  }


})();
