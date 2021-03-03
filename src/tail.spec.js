const user = require('./tail');

describe('Tail', () => {

    it('Tail of Empty Array is null', () => {
        expect(user.tail([])).toEqual([]);
    });

    it('Tail of Array is 2,3', () => {
        expect(user.tail([1,2,3])).toEqual([2,3]);
    });

})
