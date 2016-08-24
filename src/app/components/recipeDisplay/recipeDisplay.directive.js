/**
 * Created by CBeckwith411 on 8/24/16.
 */
(function () {
  'use strict';

  angular
    .module('coleTraining')
    .directive('recipeDisplay', recipeDisplay);

  function mealList() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/mealList/recipeDisplay.html',
      controller: recipeDisplayController,
      controllerAs: 'recipeDisplay',
      bindToController: true
    };

    return directive;

    function recipeDisplayController() {
      var vm = this;

      vm.openRecipe = function() {
        alert('Working');
      }
    }
  }

})();
