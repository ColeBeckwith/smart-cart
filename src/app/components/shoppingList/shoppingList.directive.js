(function () {
    'use strict';

    angular
        .module('coleTraining')
        .directive('shoppingList', shoppingList);

    function shoppingList() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/shoppingList/shoppingList.html',
            controller: shoppingListController,
            controllerAs: 'shoppingList',
            bindToController: true
        };

        return directive;

        /**
         * Everything the shoppingList directive needs should come from the controller below. If the data needs to
         * come from another controller, service, et al. simply pass it as a parameter to the ShoppingListController
         * @constructor
         */

        function shoppingListController(foodBySection) {
            var vm = this;

            vm.foodBySection = foodBySection.getSections();

            var sortBy = 'storeSection';
            var sortOptions = [
              {
                'displayText': 'Alphabetical',
                'sortByString': 'name'
              },
              {
                'displayText': 'Meal',
                'sortByString': 'source'
              },
              {
                'displayText': 'Store Section',
                'sortByString': 'storeSection'
              }
            ];

            vm.sortBy = sortBy;
            vm.sortOptions = sortOptions;
            vm.sortBy = 'storeSection';
        }
    }
})();
