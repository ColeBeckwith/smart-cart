(function() {
  'use strict';

  describe('service webDevTec', function() {
    var webDevTec;

    beforeEach(module('coleTraining'));
    beforeEach(inject(function(_webDevTec_) {
      webDevTec = _webDevTec_;
    }));

    it('should be registered', function() {
      expect(webDevTec).not.toEqual(null);
    });

    describe('getTec function', function() {
      it('should exist', function() {
        expect(webDevTec.getMeals).not.toEqual(null);
      });

      it('should return array of object', function() {
        var data = webDevTec.getMeals();
        expect(data).toEqual(jasmine.any(Array));
        expect(data[0]).toEqual(jasmine.any(Object));
        expect(data.length > 5).toBeTruthy();
      });
    });
  });
})();
