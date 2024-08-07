const palindromes = function (str) {
    const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
