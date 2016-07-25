(function () {
    'use strict';

    angular
        .module('coleTraining')
        .directive('shoppingList', shoppingList);

    function shoppingList() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/shoppingList/shoppingList.html',
            controller: ShoppingListController,
            controllerAs: 'shoppinglist',
            bindToController: true
        };

        return directive;

        /**
         * Everything the shoppingList directive needs should come from the controller below. If the data needs to
         * come from another controller, service, et al. simply pass it as a parameter to the ShoppingListController
         * @constructor
         */

        function ShoppingListController() {
            var vm = this;
        }
    }
})();
