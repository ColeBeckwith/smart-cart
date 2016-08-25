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

            var customIngredient = '';
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

            vm.sortOptions = sortOptions;
            vm.sortBy = 'storeSection';
            vm.addCustomIngredient = addCustomIngredient;
            vm.customIngredient = customIngredient;

            function addCustomIngredient() {
              main.ingredients.push({
                'name': vm.customIngredient.replace(/\w\S*/g, function (txt) {
                  return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                }),
                'added': false,
                'source': 'Manually Added',
                'storeSection': foodBySection.findStoreSection(vm.customIngredient)
              });
              vm.customIngredient = '';
            }
            //TODO Can't push ingredient into array from the main controller. Thinking that main.ingredients belongs in a service?

        }
    }
})();
