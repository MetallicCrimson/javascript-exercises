const palindromes = function (s) {
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        while (s[start].match(/[A-Za-z0-9]/) === null) {
            start++;
        }

        while (s[end].match(/[A-Za-z0-9]/) === null) {
            end--;
        }

        if (s[start].toLowerCase() !== s[end].toLowerCase()) {
            return false;
        }

        start++;
        end--;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
