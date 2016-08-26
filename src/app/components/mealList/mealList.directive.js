(function () {
  'use strict';

  angular
    .module('coleTraining')
    .directive('mealList', mealList);

  mealList.$inject = ["mealMoverService"];

  function mealList() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/mealList/mealList.html',
      controller: mealListController,
      controllerAs: 'mealList',
      bindToController: true
    };

    return directive;

    function mealListController(mealMoverService) {
      var vm = this;

      vm.addedMeals = mealMoverService.addedMeals;
    }
  }

})();
