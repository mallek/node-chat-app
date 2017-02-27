const expect = require('expect');

var {isRealString} = require('./validation');

describe('validation - isRealString', function () {
    it('should return false when sent an empty string', function () {
        var sut = isRealString('    ');
        expect(sut).toBe(false);
    });

    it('should return false when passed a non string value', function () {
        var sut = isRealString(123);
        expect(sut).toBe(false);
    });

    it('should return true when passed a valid string', function () {
        var sut = isRealString('  this is a string  ');
        expect(sut).toBe(true);
    });
});