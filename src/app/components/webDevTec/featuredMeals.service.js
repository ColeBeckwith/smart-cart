(function() {
  'use strict';

  angular
      .module('coleTraining')
      .service('webDevTec', featuredMeals);
  //changed name of repository webDevTec to featuredMeals and app now populate featuredMeals.

  /** @ngInject */
  function featuredMeals() {
    var mealList = [
      {
        'name': 'Chicken Alfredo',
        "ingredients": ['Chicken', 'Alfredo Sauce', 'Noodles'],
        'calories': 3000,
        'image': 'chicken-alfredo.png'
      },
      {
        'name': 'Smoked Salmon',
        "ingredients": ['Salmon', 'Capers', 'Asparagus'],
        'calories': 2000,
        'image': 'smoked-salmon.png'
      },
      {
        'name': 'Vegetable Pot Pie',
        "ingredients": ['Carrots', 'Brocolli', 'Bread', 'Cream of Mushroom Soup'],
        'calories': 1000,
        'image': 'vegetable-pot-pie.png'
      },
      {
        'name': 'Grilled Shrimp Tacos',
        "ingredients": ['Shrimp', 'Tortillas', 'Salsa', 'Avocado', 'Lettuce'],
        'calories': 800,
        'image': 'shrimp-tacos.png'
      },
      {
        'name': 'Gyros',
        "ingredients": ['Lamb Meat', 'Pitas'],
        'calories': 1900,
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
        'calories': 3300,
        'image': 'deep-dish-pizza.png'
      },
      {
        'name': 'Chicken Masala',
        "ingredients": ['Chicken', 'Masala'],
        'calories': 400,
        'image': 'chicken-masala.png'
      },
      {
        'name': 'Kale Salad',
        "ingredients": ['Kale', 'Apples', 'Pine Nuts'],
        'calories': 300,
        'image': 'kale-salad.png'
      }
    ];

    this.getMeals = getMeals;

    function getMeals() {
      return mealList;
    }
  }

})();
