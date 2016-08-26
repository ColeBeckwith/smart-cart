/**
 * Created by CBeckwith411 on 8/26/16.
 */
(function () {
  'use strict';

  angular
    .module('coleTraining')
    .directive('mealPageDisplay', mealPageDisplay);

  mealPageDisplay.$inject = ["cartMealsService", "mealMoverService", "featuredMeals"];

  function mealPageDisplay() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/mealDisplays/mealPageDisplay.html',
      controller: mealPageDisplayController,
      controllerAs: 'mealPageDisplay',
      bindToController: true
    };

    return directive;

    function mealPageDisplayController(cartMealsService, mealMoverService, featuredMeals) {

      var vm = this;

      getFeaturedMeals();

      function getFeaturedMeals() {
        vm.meals = featuredMeals.getMeals();
        angular.forEach(vm.meals, function (meal) {
          meal.rank = Math.random();
          meal.added = false;
        });
      }

      vm.addToCart = function(meal) {
        mealMoverService.addToCart(meal);
      };

      vm.removeFromCart = function(meal) {
        mealMoverService.removeFromCart(meal);
      };

      vm.customMeals = cartMealsService.getCustomMeals();
    }
  }
})();
