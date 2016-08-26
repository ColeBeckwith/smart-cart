(function () {
    'use strict';

    angular
        .module('coleTraining')
        .directive('shoppingList', shoppingList);

    shoppingList.$inject = ["foodBySection", "mealMoverService"];

    function shoppingList(foodBySection, mealMoverService) {
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
            vm.ingredientList = mealMoverService.ingredientList;

            vm.customIngredient = '';

            vm.sortOptions = [
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

            vm.sortBy = 'storeSection';

            vm.addCustomIngredient = function() {
              mealMoverService.ingredientList.push({
                'name': vm.customIngredient.replace(/\w\S*/g, function (txt) {
                  return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                }),
                'added': false,
                'source': 'Manually Added',
                'storeSection': foodBySection.findStoreSection(vm.customIngredient)
              });
              vm.customIngredient = '';
            };

            vm.removeCustomIngredient = function(ingredient) {
              mealMoverService.ingredientList.splice(mealMoverService.ingredientList.indexOf(ingredient), 1);
            }
        }
    }
})();
