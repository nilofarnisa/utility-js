const user = require('./max');

describe('Maximum', () => {

    it('Maximum Element is 4', () => {
        expect(user.maximum([1,2,3,4],4)).toEqual(4);
    });

})
