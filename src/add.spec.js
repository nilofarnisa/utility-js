const user = require('./add');
//const head = require('./add');

//var emptyArray  = [];
//var array = [1,2,3];
describe('Add', () => {

    it('Sum of 0 and 0 is 0', () => {
        expect(user.add(0, 0)).toEqual(0);
    });

    it('Sum of 1 and 0 is 1', () => {
        expect(user.add(1, 0)).toEqual(1);
    });

    /*it('Head of Empty Array is null', () => {
        expect(head(emptyArray)).toEqual([]);
    })*/

    it('Head of Array is 1', () => {
        expect(user.head([1,2,3])).toEqual(1);
    })

})
