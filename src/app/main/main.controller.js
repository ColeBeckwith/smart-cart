(function() {
  'use strict';

  angular
    .module('coleTraining')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.meals = [];
    vm.yourMeals = [
      {
        'name' : 'No Custom Meals Available',
        'description' : 'Click above to add your own meals.'
      }
    ];
    vm.classAnimation = '';
    vm.creationDate = 1466020001865;
    vm.showToastr = showToastr;
    vm.getIngredients = getIngredients;
    vm.cart = [];
    vm.ingredients = [];

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function getIngredients() {
      angular.forEach(vm.meals, function(meal) {
        if (meal.added === true) {
          vm.ingredients += meal.description;
        }
      });
      console.log(vm.ingredients);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.meals = webDevTec.getTec();

      angular.forEach(vm.meals, function(meal) {
        meal.rank = Math.random();
        meal.added = false;
      });
    }
  }


})();
