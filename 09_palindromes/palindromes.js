const palindromes = function (str) {
    let string = str.split(" ").join("").replace(/[!,.]/g, "").toLowerCase();
    let reversedString = string.toLowerCase().split("").reverse().join("");
    return string === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
