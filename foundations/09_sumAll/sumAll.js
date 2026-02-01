const sumAll = function(a,b) {
    if (!(typeof(a) == "number" && typeof(b) == "number" && parseInt(a) === a &&
            parseInt(b) === b && a > 0 && b > 0)) {
        return "ERROR";
    }

    if (b < a) {
        let c = a;
        a = b;
        b = c;
    }

    return ((a+b) * (b-a+1))/2
    
};

// Do not edit below this line
module.exports = sumAll;
