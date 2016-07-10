(function() {
  'use strict';

  angular
    .module('coleTraining')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.meals = [];
    vm.yourMeals = [];
    vm.classAnimation = '';
    vm.creationDate = 1466020001865;
    vm.showToastr = showToastr;
    vm.addToCart = addToCart;
    vm.cart = [];

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function addToCart(meal) {
      meal.added = !meal.added;
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
