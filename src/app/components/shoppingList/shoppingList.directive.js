(function () {
    'use strict';

    angular
        .module('coleTraining')
        .directive('shoppingList', shoppingList);

    shoppingList.$inject = ["foodBySection", "cartIngredients"];

    function shoppingList(foodBySection, cartIngredients) {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/shoppingList/shoppingList.html',
            controller: shoppingListController,
            controllerAs: 'shoppingList',
            bindToController: true
        };

        return directive;

        function shoppingListController() {

            var vm = this;

            vm.foodBySection = foodBySection.getSections();
            vm.ingredientList = cartIngredients.ingredientList;

            vm.customIngredient = '';
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
            vm.removeCustomIngredient = removeCustomIngredient;

            function addCustomIngredient() {
              cartIngredients.ingredientList.push({
                'name': vm.customIngredient.replace(/\w\S*/g, function (txt) {
                  return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                }),
                'added': false,
                'source': 'Manually Added',
                'storeSection': foodBySection.findStoreSection(vm.customIngredient)
              });
              vm.customIngredient = '';
            }

            function removeCustomIngredient(ingredient) {
              cartIngredients.ingredientList.splice(cartIngredients.ingredientList.indexOf(ingredient), 1);
            }
        }
    }
})();
