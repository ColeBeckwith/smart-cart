(function() {
  'use strict';

  angular
      .module('coleTraining')
      .service('webDevTec', featuredMeals);

  /** @ngInject */
  function featuredMeals() {
    var mealList = [
      {
        'name': 'Chicken Alfredo',
        "cartIngredients": ['Chicken', 'Alfredo Sauce', 'Fettuccine Noodles', 'Broccoli'],
        'calories': 850,
        'image': 'chicken-alfredo.png'
      },
      {
        'name': 'Smoked Salmon',
        "cartIngredients": ['Salmon', 'Capers', 'Asparagus'],
        'calories': 300,
        'image': 'smoked-salmon.png'
      },
      {
        'name': 'Vegetable Pot Pie',
        "cartIngredients": ['Carrots', 'Broccoli', 'Bread', 'Cream Of Mushroom Soup'],
        'calories': 500,
        'image': 'vegetable-pot-pie.png'
      },
      {
        'name': 'Grilled Shrimp Tacos',
        "cartIngredients": ['Shrimp', 'Tortillas', 'Salsa', 'Avocado', 'Lettuce', 'Limes'],
        'calories': 400,
        'image': 'shrimp-tacos.png'
      },
      {
        'name': 'Gyros',
        "cartIngredients": ['Lamb Meat', 'Pitas'],
        'calories': 900,
        'image': 'gyros.png'
      },
      {
        'name': 'Braised Lamb Shank',
        "cartIngredients": ['Lamb Meat', 'Marinade', 'Butter'],
        'calories': 700,
        'image': 'braised-lamb-shank.png'
      },
      {
        'name': 'Deep Dish Pizza',
        "cartIngredients": ['Tomato Sauce', 'Cheese', 'Sausage'],
        'calories': 1000,
        'image': 'deep-dish-pizza.png'
      },
      {
        'name': 'Chicken Masala',
        "cartIngredients": ['Chicken', 'Yogurt', 'Jalapenos'],
        'calories': 200,
        'image': 'chicken-masala.png'
      },
      {
        'name': 'Kale Salad',
        "cartIngredients": ['Kale', 'Apples', 'Pine Nuts'],
        'calories': 150,
        'image': 'kale-salad.png'
      },
      {
        'name': 'Eggs Benedict',
        "cartIngredients": ['Eggs', 'Tomatoes', 'Hollandaise Sauce', 'Canadian Bacon', 'Blueberries'],
        'calories': 300,
        'image': 'eggs-benedict.png'
      },
      {
        'name': 'Chocolate Cake',
        "cartIngredients": ['Chocolate', 'Eggs', 'Milk', 'Chocolate Frosting'],
        'calories': 500,
        'image': 'chocolate-cake.png'
      },
      {
        'name': 'Bison Burger',
        "cartIngredients": ['Bison', 'Burger Buns', 'Tomatoes', 'Spinach', 'Mayonnaise', 'Ketchup', 'Mustard'],
        'calories': 450,
        'image': 'bison-burger.png'
      }
    ];

    this.getMeals = getMeals;

    function getMeals() {
      return mealList;
    }
  }

})();
