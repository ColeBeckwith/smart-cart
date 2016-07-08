(function() {
  'use strict';

  angular
    .module('coleTraining')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.meals = [];
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
      if (vm.cart.indexOf(meal) === -1) {
        vm.cart.push(meal);
      } else {
        vm.cart = vm.cart.splice(vm.cart.indexOf(meal), 1);
      };
      meal.added = !meal.added;
      console.log(vm.cart);
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
