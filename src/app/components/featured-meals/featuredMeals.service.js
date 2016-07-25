(function () {
    'use strict';

    angular
        .module('coleTraining')
        .service('featuredMeals', featuredMeals);

    function featuredMeals() {

        var vm = this;

        vm.getMeals = getMeals;

        var mealList = [
            {
                'name': 'Chicken Alfredo',
                "ingredients": ['Chicken', 'Alfredo Sauce', 'Fettuccine Noodles', 'Broccoli'],
                'calories': 850,
                'image': 'chicken-alfredo.png'
            },
            {
                'name': 'Smoked Salmon',
                "ingredients": ['Salmon', 'Capers', 'Asparagus'],
                'calories': 300,
                'image': 'smoked-salmon.png'
            },
            {
                'name': 'Vegetable Pot Pie',
                "ingredients": ['Carrots', 'Broccoli', 'Bread', 'Cream of Mushroom Soup'],
                'calories': 500,
                'image': 'vegetable-pot-pie.png'
            },
            {
                'name': 'Grilled Shrimp Tacos',
                "ingredients": ['Shrimp', 'Tortillas', 'Salsa', 'Avocado', 'Lettuce', 'Limes'],
                'calories': 400,
                'image': 'shrimp-tacos.png'
            },
            {
                'name': 'Gyros',
                "ingredients": ['Lamb Meat', 'Pitas'],
                'calories': 900,
                'image': 'gyros.png'
            },
            {
                'name': 'Braised Lamb Shank',
                "ingredients": ['Lamb Meat', 'Marinade', 'Butter'],
                'calories': 700,
                'image': 'braised-lamb-shank.png'
            },
            {
                'name': 'Deep Dish Pizza',
                "ingredients": ['Tomato Sauce', 'Cheese', 'Sausage'],
                'calories': 1000,
                'image': 'deep-dish-pizza.png'
            },
            {
                'name': 'Chicken Masala',
                "ingredients": ['Chicken', 'Yogurt', 'Jalapenos'],
                'calories': 200,
                'image': 'chicken-masala.png'
            },
            {
                'name': 'Kale Salad',
                "ingredients": ['Kale', 'Apples', 'Pine Nuts'],
                'calories': 150,
                'image': 'kale-salad.png'
            },
            {
                'name': 'Eggs Benedict',
                "ingredients": ['Eggs', 'Tomatoes', 'Hollandaise Sauce', 'Canadian Bacon', 'Blueberries'],
                'calories': 300,
                'image': 'eggs-benedict.png'
            },
            {
                'name': 'Chocolate Cake',
                "ingredients": ['Chocolate', 'Eggs', 'Milk', 'Chocolate Frosting'],
                'calories': 500,
                'image': 'chocolate-cake.png'
            },
            {
                'name': 'Bison Burger',
                "ingredients": ['Bison', 'Burger Buns', 'Tomatoes', 'Spinach', 'Mayonnaise', 'Ketchup', 'Mustard'],
                'calories': 450,
                'image': 'bison-burger.png'
            },
        ];

        function getMeals() {
            return mealList;
        }
    }
})();
