(function() {
  'use strict';

  angular
    .module('coleTraining')
    .directive('shoppingList', shoppingList);

  /** @ngInject */
  function shoppingList() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/shoppingList/shoppingList.html',
      scope: {
          creationDate: '='
      },
      controller: ShoppingListController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ShoppingListController(moment) {
      var vm = this;

      // "vm.creationDate" is available by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
