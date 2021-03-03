const user = require('./min');

describe('Minimum', () => {
    
    it('Minimum Element is 1', () => {
        expect(user.minimum([1,2,3,4],4)).toEqual(1);
    });

})
