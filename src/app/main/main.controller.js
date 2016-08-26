(function () {
    'use strict';

    angular
        .module('coleTraining')
        .controller('MainController', MainController);

    MainController.$inject = ['featuredMeals', 'foodBySection', 'cartIngredients'];

    function MainController(featuredMeals, foodBySection, cartIngredients) {
        var vm = this;

        vm.yourMeals = [];
        vm.addedMeals = [];
        vm.classAnimation = '';
        vm.addToCart = addToCart;
        vm.removeFromCart = removeFromCart;


        activate();

        function activate() {
            getFeaturedMeals();
            getStoreSections();
        }

        function getFeaturedMeals() {
            vm.meals = featuredMeals.getMeals();
            angular.forEach(vm.meals, function (meal) {
                meal.rank = Math.random();
                meal.added = false;
            });
        }

        function getStoreSections() {
            vm.foodSections = foodBySection.getSections();
        }

        function addToCart(meal) {
            if ( meal.added ) {
                return;
            }

            meal.added = !meal.added;

            vm.addedMeals.push(meal);

            for ( var i = 0; i < meal.ingredients.length; i++ ) {
                cartIngredients.ingredientList.push({
                    'name': meal.ingredients[i],
                    'added': false,
                    'source': meal.name,
                    'storeSection': foodBySection.findStoreSection(meal.ingredients[i])
                });
            }
        }

        function removeFromCart(meal) {
            if ( !meal.added ) {
                return;
            }

            meal.added = !meal.added;

            for ( var i = 0; i < vm.addedMeals.length; i++ ) {
                if ( vm.addedMeals[i].name === meal.name ) {
                    vm.addedMeals.splice(i, 1);
                    i--;
                }
            }

            for ( var i = 0; i < cartIngredients.ingredientList.length; i++ ) {
                if ( meal.name === cartIngredients.ingredientList[i].source ) {
                    cartIngredients.ingredientList.splice(i, 1);
                    i--;
                }
            }
        }
    }

})();
