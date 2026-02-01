const reverseString = function(s) {
    let acc = "";

    for (let i = s.length-1; i >= 0; i--) {
        acc += s[i];
    }

    return acc;
};

// Do not edit below this line
module.exports = reverseString;
