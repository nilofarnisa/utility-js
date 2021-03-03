const user = require('./head');

describe('Head', () => {

    it('Head of Empty Array is null', () => {
        expect(user.head([])).toEqual(undefined);
    });

    it('Head of Array is 1', () => {
        expect(user.head([1,2,3])).toEqual(1);
    });

})
