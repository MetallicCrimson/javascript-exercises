const findTheOldest = function(arr) {
    arr.sort((a,b) => {
        let yearFromA = a.yearOfDeath || new Date().getFullYear();
        let yearFromB = b.yearOfDeath || new Date().getFullYear();

        return (yearFromA-a.yearOfBirth) - (yearFromB-b.yearOfBirth);
    });

    return arr.at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;
