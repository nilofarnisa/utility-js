const mapFunction = (array,functionName) => {
    if(functionName == 'cube')
    {
        return array.map(findCube);
    }
    if(functionName == 'identity')
    {
        return array.map(findIdentity);
    }
    return array.map(functionName);
}

function findCube(num)
{
    return num*num*num;
}

function findIdentity(num)
{
    return num*1;
}
module.exports.mapFunction = mapFunction;
