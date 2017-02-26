const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', function () {
    it('should generate correct message object', () => {

        var message = {
            from: 'TestUser',
            text: 'This is a test message'
        };

        var sut = generateMessage(message.from, message.text);
        expect(sut.from).toBe(message.from);
        expect(sut.text).toBe(message.text);
        expect(sut.createdAt).toBeA('number');

        expect(sut).toInclude({
            from: message.from,
            text: message.text
        });
    });
});

describe('generateLocationMessage', function () {
    it('should generate correct location object', function () {
        var from = "TestUser";
        var lat = 1;
        var long = 1;

        var sut = generateLocationMessage(from, lat, long);
        expect(sut.from).toBe(from);
        expect(sut.url).toBe(`https://www.google.com/maps?q=1,1`);
        expect(sut.createdAt).toBeA('number');

    });
});