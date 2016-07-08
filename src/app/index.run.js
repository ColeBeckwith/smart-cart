(function() {
  'use strict';

  angular
    .module('coleTraining')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
