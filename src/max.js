const maximum = (array,len) => {
    if( len == 1)
    {
        return array[0];
    }
    return Math.max(array[len-1],maximum(array,len-1));
}

module.exports.maximum = maximum;

