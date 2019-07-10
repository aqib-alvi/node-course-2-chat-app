let expect = require('expect');

let {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        const msg = {
            from: 'Aqib Alvi',
            text: 'I am an object'
        }
        let result = generateMessage(msg.from, msg.text);

        expect(result).toInclude({
            from: 'Aqib Alvi',
            text: 'I am an object'
        });
        expect(result.createdAt).toBeA('number');
    });
});