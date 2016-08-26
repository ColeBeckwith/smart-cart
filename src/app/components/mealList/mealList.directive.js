(function () {
  'use strict';

  angular
    .module('coleTraining')
    .directive('mealList', mealList);
  
  mealList.$inject = ["mealMoverService"];

  function mealList(mealMoverService) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/mealList/mealList.html',
      controller: mealListController,
      controllerAs: 'mealList',
      bindToController: true
    };

    return directive;
    
    function mealListController() {
      var vm = this;

      vm.addedMeals = mealMoverService.addedMeals;
    }
  }

})();
