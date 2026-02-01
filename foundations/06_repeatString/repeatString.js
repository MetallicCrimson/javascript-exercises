const repeatString = function(s, n) {
    acc = ""
    
    if (n < 0) {
        return "ERROR";
    }

    for (let i = 0; i < n; i++) {
        acc += s;
    }

    return acc;
};

// Do not edit below this line
module.exports = repeatString;
