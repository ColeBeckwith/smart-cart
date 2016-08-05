(function () {
  'use strict';

  angular
    .module('coleTraining')
    .directive('listSelector', listSelector);

  function listSelector() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/listSelector/listSelector.html',
      controller: listSelectorController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    function listSelectorController() {
      var vm = this;

      var activeTab = 'ingredients';
      //TODO Page doesn't load with shoppingCart directive being displayed.
      //TODO These declarations have no effect on the page. They work fine without only activeTab and no 'listSelector.' prefix.

      vm.activeTab = activeTab;
    }
  }

})();
