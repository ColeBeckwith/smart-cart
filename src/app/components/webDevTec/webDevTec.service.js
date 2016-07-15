(function() {
  'use strict';

  angular
      .module('coleTraining')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var mealList = [
      {
        'name': 'Chicken Alfredo',
        'ingredients': 'Chicken, Alfredo Sauce, Noodles',
        'calories': 3000
      },
      {
        'name': 'Smoked Salmon',
        "ingredients": 'Salmon, Capers, Asparagus',
        'calories': 1000
      },
      {
        'name': 'Vegetable Pot Pie',
        "ingredients": 'Carrots, Brocolli, Bread, Cream of Mushroom Soup',
        'calories': 2000
      },
      {
        'name': 'Grilled Shrimp Tacos',
        "ingredients": 'Shrimp, Tortillas, Salsa, Avocado, Lettuce'
      },
      {
        'name': 'Gyros',
        "ingredients": 'Lamb Meat, Pitas'
      },
      {
        'name': 'Braised Lamb Shank',
        "ingredients": 'Lamb Meat, Marinade, Butter'
      },
      {
        'name': 'Deep Dish Pizza',
        "ingredients": 'Tomato Sauce, Cheese, Sausage'
      },
      {
        'name': 'Chicken Masala',
        "ingredients": 'Chicken, Masala'
      },
      {
        'name': 'Kale Salad',
        "ingredients": 'Kale, Apples, Pine Nuts'
      }
    ];

    this.getTec = getTec;

    function getTec() {
      return mealList;
    }
  }

})();
