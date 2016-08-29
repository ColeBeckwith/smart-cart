(function () {
  'use strict';

  angular
    .module('coleTraining')
    .directive('newMeal', newMeal);

  newMeal.$inject = ["cartMealsService"];

  function newMeal(cartMealsService) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/newMeal/newMeal.html',
      controller: newMealController,
      controllerAs: 'newMeal',
      bindToController: true
    };

    return directive;

    function newMealController() {
      var vm = this;

      clearCustomFields();

      function clearCustomFields() {
        vm.customMealCalories = 0;
        vm.customMealIngredients = '';
        vm.customMealName = '';
        vm.customMealRecipe = '';
        vm.newMealMode = false;
      }

      vm.addCustomMeal = function() {
        cartMealsService.customMeals.push({
          'name': vm.customMealName.replace(/\w\S*/g, function (match) {
            return match.charAt(0).toUpperCase() + match.substr(1).toLowerCase()
          }),
          "ingredients": vm.formatCustomIngredients(vm.customMealIngredients),
          'calories': vm.customMealCalories,
          'added': false,
          'recipe': vm.customMealRecipe
        });
        clearCustomFields();
      };

      vm.formatCustomIngredients = function(str) {
        var arr = str.replace(/,\s*$/, "").split(", ");
        for ( var i = 0; i < arr.length; i++ ) {
          arr[i] = arr[i].replace(/\w\S*/g, function (match) {
            return match.charAt(0).toUpperCase() + match.substr(1).toLowerCase()
          })
        }
        return arr;
      }


    }
  }
})();
