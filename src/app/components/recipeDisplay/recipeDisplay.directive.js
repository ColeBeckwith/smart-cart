(function () {
  'use strict';

  angular
    .module('coleTraining')
    .directive('recipeDisplay', recipeDisplay);

  function recipeDisplay() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/recipeDisplay/recipeDisplay.html',
      controller: recipeDisplayController,
      controllerAs: 'recipeDisplay',
      bindToController: true
    };

    return directive;

    recipeDisplayController.$inject = ['toggleRecipeService'];

    function recipeDisplayController(toggleRecipeService) {
      var vm = this;

      vm.toggleSomeShit = toggleSomeShit;

      function toggleSomeShit() {
        toggleRecipeService.openRecipe();
      }

    }
  }
})();
