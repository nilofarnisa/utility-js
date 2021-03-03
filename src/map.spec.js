const user = require('./map');

describe('Map', () => {

    it('Map of Empty Array for Cube',() => {
        expect(user.mapFunction([],'cube')).toEqual([]);
    });

    it('Map of Array for Identity',() => {
        expect(user.mapFunction([1,2,3],'identity')).toEqual([1,2,3]);
    });

    it('Map of Array for Cube',() => {
        expect(user.mapFunction([1,2,3],'cube')).toEqual([1,8,27]);
    });

    it('Map of Array with Object',() => {
        expect(user.mapFunction([{ x : 10}],a => a.x + 1)).toEqual([11]);
    });

})
