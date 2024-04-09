const fibonacci = function(n) {
    n = parseInt(n);
    if (n < 0) return "OOPS";
    let a = 0;
    let b = 1;
    let c = a + b;
    if (n === 0) return a;
    for (let i = 2; i < n; i++) {
        a = b;
        b = c;
        c = a + b;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
