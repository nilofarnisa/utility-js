const user = require('./reduce');

describe('Reduce', () =>{

    it('Reduce Empty Array', () => {
        expect(user.reduceFunction([],(x,y) => x+y)).toEqual(undefined);
    });

    it('Reduce Empty Array with initial value 10', () => {
        expect(user.reduceFunction([],(x,y) => x+y,10)).toEqual(10);
    });

    it('Reduce Array [a,b,c]', () => {
        expect(user.reduceFunction(["a","b","c"],(x,y) => x+y)).toEqual("abc");
    });

    it('Reduce Array [a,b,c] with initail value z', () => {
        expect(user.reduceFunction(["a","b","c"],(x,y) => x+y,"z")).toEqual("zabc");
    });
})