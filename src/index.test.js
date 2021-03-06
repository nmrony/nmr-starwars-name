import { expect } from 'chai'
import starWars from './index'

describe('nmr-starwars-name', function() {
  describe('all', function() {
    it('should be an array of string', function () {
      expect(starWars.all).to.satisfy(isArrayOfString);
      function isArrayOfString(array) {
        return array.every(function (item) {
          return typeof item === 'string'
        });
      }
    });

    it('should contain `Luke Skywalker`', function () {
      expect(starWars.all).to.include('Luke Skywalker')
    });
  });

  describe('random', function () {
    it('should return a random item from the starWars.all', function () {
      const randomItem = starWars.random();
      expect(starWars.all).to.include(randomItem)
    });

    it('should return an array of random items if passed a number', function () {
      const randomItems = starWars.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function (item) {
        expect(starWars.all).to.include(item)
      });
    });
  });
});