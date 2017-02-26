const expect = require('expect');

var {generateMessage} = require('./message')

describe('generateMessage', function () {
    it('should generate correct message object', () => {

        var message = {
            from: 'TestUser',
            text: 'This is a test message'
        }

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