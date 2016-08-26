(function () {
  'use strict';

  angular
    .module('coleTraining')
    .directive('newMeal', newMeal);

  function newMeal() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/newMeal/newMeal.html',
      controller: NewMealController,
      controllerAs: 'newMeal',
      bindToController: true
    };

    return directive;

    function NewMealController() {
      var vm = this;
      
      var newMealMode = false;

      vm.addCustomMeal = addCustomMeal;
      vm.formatCustomIngredients = formatCustomIngredients;
      vm.newMealMode = newMealMode;
      

      clearCustomFields();

      function clearCustomFields() {
        vm.customMealCalories = 0;
        vm.customMealIngredients = '';
        vm.customMealName = '';
        vm.newMealMode = false;
      }

      function addCustomMeal() {
        vm.yourMeals.push({
          //TODO no longer vm.yourMeals. Needs to be moved to service.
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
