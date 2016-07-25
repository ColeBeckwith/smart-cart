(function() {
  'use strict';

  describe('service featuredMeals', function() {
    var featuredMeals;

    beforeEach(module('coleTraining'));
    beforeEach(inject(function(_featuredMeals_) {
      featuredMeals = _featuredMeals_;
    }));

    it('should be registered', function() {
      expect(featuredMeals).not.toEqual(null);
    });

    describe('getMeals function', function() {
      it('should exist', function() {
        expect(featuredMeals.getMeals).not.toEqual(null);
      });

      it('should return array of object', function() {
        var data = featuredMeals.getMeals();
        expect(data).toEqual(jasmine.any(Array));
        expect(data[0]).toEqual(jasmine.any(Object));
        expect(data.length > 5).toBeTruthy();
      });
    });
  });
})();
