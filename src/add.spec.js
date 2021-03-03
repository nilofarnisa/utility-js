const user = require('./add');

describe('Add', () => {

    it('Sum of 0 and 0 is 0', () => {
        expect(user.add(0, 0)).toEqual(0);
    });

    it('Sum of 1 and 0 is 1', () => {
        expect(user.add(1, 0)).toEqual(1);
    });

    it('Head of Empty Array is null', () => {
        expect(user.head([])).toEqual(undefined);
    });

    it('Head of Array is 1', () => {
        expect(user.head([1,2,3])).toEqual(1);
    });

    it('Tail of Empty Array is null', () => {
        expect(user.tail([])).toEqual([]);
    });

    it('Tail of Array is 2,3', () => {
        expect(user.tail([1,2,3])).toEqual([2,3]);
    });

    it('Minimum Element is 1', () => {
        expect(user.minimum([1,2,3,4],4)).toEqual(1);
    });

    it('Maximum Element is 4', () => {
        expect(user.maximum([1,2,3,4],4)).toEqual(4);
    });

})
