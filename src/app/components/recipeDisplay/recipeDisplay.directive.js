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

    function recipeDisplayController() {
      var vm = this;

      //vm.closeRecipe = toggleRecipe.closeRecipe;

    }
  }
})();
