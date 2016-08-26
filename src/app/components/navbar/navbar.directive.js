(function () {
    'use strict';

    angular
        .module('coleTraining')
        .directive('smartCartNav', smartCartNav);

    function smartCartNav() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/navbar/navbar.html',
            controller: NavbarController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function NavbarController() {
          
        }
    }

})();
