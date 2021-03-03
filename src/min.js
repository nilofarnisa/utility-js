const minimum = (array,len) => {
    if( len == 1)
    {
        return array[0];
    }
    return Math.min(array[len-1],minimum(array,len-1));
}
module.exports.minimum = minimum;

