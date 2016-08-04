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

      
    }
  }

})();
