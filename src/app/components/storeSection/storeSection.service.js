(function() {
  'use strict';

  angular
    .module('coleTraining')
    .service('storeSection', storeSection);

  /** @ngInject */
  function storeSection() {
    var foodBySection = [
      {
        'category' : 'Fruits',
        'foodInCategory' : ['blueberry', 'blueberries', 'raspberry', 'raspberries', 'apple', 'apples', 'limes', 'grapefruit']
      },
      {
        'category' : 'Vegetables',
        'foodInCategory' : ['kale', 'broccoli', 'carrots', 'asparagus', 'avocado', 'lettuce', 'tomatoes', 'red peppers', 'green peppers', 'jalapenos', 'spinach']
      },
      {
        'category' : 'Meats',
        'foodInCategory' : ['chicken', 'beef', 'lamb', 'lamb meat', 'turkey', 'ham', 'salmon', 'shrimp', 'sausage', 'canadian bacon', 'bison']
      },
      {
        'category' : 'Dairy',
        'foodInCategory' : ['eggs', 'milk', 'cheese', 'butter', 'yogurt']
      },
      {
        'category' : 'Snacks',
        'foodInCategory' : ['chips', 'salsa', 'cereal', 'queso', 'chocolate', 'chocolate frosting', 'icing', 'pine nuts']
      },
      {
        'category' : 'Bread',
        'foodInCategory' : ['bread', 'tortillas', 'pitas', 'burger buns', 'buns', 'hot dog buns']
      },
      {
        'category' : 'Spices & Condiments',
        'foodInCategory' : ['salt', 'pepper', 'ground pepper', 'paprika', 'cumin', 'crushed red pepper', 'ketchup', 'mustard', 'mayonnaise']
      },
      {
        'category' : 'Other',
        'foodInCategory' : []
      }
    ];

    this.getSections = getSections;

    function getSections() {
      return foodBySection;
    }
  }

})();
