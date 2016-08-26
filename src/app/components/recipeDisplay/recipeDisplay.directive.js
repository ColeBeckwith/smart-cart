(function () {
  'use strict';

  angular
    .module('coleTraining')
    .directive('recipeDisplay', recipeDisplay);

  recipeDisplayController.$inject = ['toggleRecipeService'];

  function recipeDisplay() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/recipeDisplay/recipeDisplay.html',
      controller: recipeDisplayController,
      controllerAs: 'recipeDisplay',
      bindToController: true
    };

    return directive;

    function recipeDisplayController(toggleRecipeService) {
      var vm = this;

      vm.toggleSomeShit = toggleSomeShit;

      function toggleSomeShit() {
        toggleRecipeService.openRecipe();
      }

    }
  }
})();
