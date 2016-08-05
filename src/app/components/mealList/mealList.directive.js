(function () {
  'use strict';

  angular
    .module('coleTraining')
    .directive('mealList', mealList);

  function mealList() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/mealList/mealList.html',
      controller: mealListController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    function mealListController() {
      var vm = this;
    }
  }

})();
