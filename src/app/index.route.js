(function () {
    'use strict';

    angular
        .module('coleTraining')
        .config(routerConfig);
  
    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'app/about/about.html',
                controller: 'AboutController',
                controllerAs: 'about'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
