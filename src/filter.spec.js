const user = require('./filter');

describe('Filter', () => {
    it('Filter of Empty Array is []',() => {
        expect(user.filterFunction([],x => true)).toEqual([]);
    });

    it('Filter of Array with x => true',() => {
        expect(user.filterFunction([1,2,3],x => true)).toEqual([1,2,3]);
    });

    it('Filter of Array with x => false',() => {
        expect(user.filterFunction([1,2,3],x => false)).toEqual([]);
    });

    it('Filter of Array with x > 1',() => {
        expect(user.filterFunction([1,2,3],x => x > 1)).toEqual([2,3]);
    });

    it('Filter Array with UpperCase',() => {
        expect(user.filterFunction(["a","B","c","D"],'filterUpperCase')).toEqual(["B","D"]);
    });

})