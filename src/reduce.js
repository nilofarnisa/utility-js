const reduceFunction = (array,x,y) => {
    if(array.length != 0 && y === undefined)
    {
        return array.reduce(x);
    }
    return array.reduce(x,y);
}

module.exports.reduceFunction=reduceFunction;