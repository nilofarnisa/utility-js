const filterFunction = (array,x) => {
    if(x == 'filterUpperCase')
    {
        return array.filter(filterUpperCase);
    }
    return array.filter(x);
}

function filterUpperCase(ch)
{
    if(ch == ch.toUpperCase())
    {
        return ch;
    }
}
module.exports.filterFunction=filterFunction;