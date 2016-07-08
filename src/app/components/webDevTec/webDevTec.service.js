(function() {
  'use strict';

  angular
      .module('coleTraining')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
      {
        'name': 'Chicken Alfredo',
        'description': 'Chicken, Alfredo Sauce, Noodles'
      },
      {
        'name': 'Smoked Salmon',
        'description': 'Salmon, Capers, Asparagus'
      },
      {
        'name': 'Vegetable Pot Pie',
        'description': 'Carrots, Brocolli, Bread, Cream of Mushroom Soup'
      },
      {
        'name': 'Grilled Shrimp Tacos',
        'description': 'Shrimp, Tortillas, Salsa, Avocado, Lettuce'
      },
      {
        'name': 'Gyros',
        'description': 'Lamb Meat, Pitas'
      },
      {
        'name': 'Braised Lamb Shank',
        'description': 'Lamb Meat, Marinade, Butter'
      },
      {
        'name': 'Deep Dish Pizza',
        'description': 'Tomato Sauce, Cheese, Sausage'
      },
      {
        'name': 'Chicken Masala',
        'description': 'Chicken, Masala'
      },
      {
        'name': 'Kale Salad',
        'description': 'Kale, Apples, Pine Nuts'
      }
    ];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
