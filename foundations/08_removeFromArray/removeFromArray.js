const removeFromArray = function(arr, ...deletables) {
    console.log(deletables);
    arr = arr.filter(a => !deletables.includes(a));

    console.log(arr);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
