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
            controllerAs: 'listSelector',
            bindToController: true
        };

        return directive;

        function listSelectorController() {
            var vm = this;
            vm.activeTab = 'ingredients';
        }
    }
})();
