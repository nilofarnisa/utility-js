const add = (first,second) => {
    return first + second;   
}

const head = (array) => {
    return array[0];
}

const tail = (array) =>{
    return array.slice(1);
}
module.exports.add = add;
module.exports.head = head;
module.exports.tail = tail;
