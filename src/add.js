const add = (first,second) => {
    return first + second;   
}

const head = (array) => {
    return array[0];
}

const tail = (array) =>{
    return array.slice(1);
}

const minimum = (array,len) => {
    if( len == 1)
    {
        return array[0];
    }
    return Math.min(array[len-1],minimum(array,len-1));
}

const maximum = (array,len) => {
    if( len == 1)
    {
        return array[0];
    }
    return Math.max(array[len-1],maximum(array,len-1));
}

module.exports.add = add;
module.exports.head = head;
module.exports.tail = tail;
module.exports.minimum = minimum;
module.exports.maximum = maximum;
