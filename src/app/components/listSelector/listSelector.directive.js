(function () {
    'use strict';

    angular
        .module('coleTraining')
        .directive('listSelector', listSelector);

    listSelector.$inject = ["mealMoverService"];

    function listSelector(mealMoverService) {
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
            vm.addedMeals = mealMoverService.addedMeals;
        }
    }
})();
