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
      
    }
  }
})();
