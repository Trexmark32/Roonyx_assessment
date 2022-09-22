// solution to problem number: 2
function counter(val) {
    console.log("Value passed to counter is ", val);
    var count;
    if (val === undefined) {
        console.log("Since no value passed, Taking default as 0");
        count = 0;
    }
    else {
        count = val;
    }
    function get() {
        return count;
    }
    function Next() {
        return count++;
    }
    return [get, Next];
}
// test
var _a = counter(1), getA = _a[0], nextA = _a[1];
console.log("getA ", getA());
nextA();
console.log("getA ", getA());
var _b = counter(10), getB = _b[0], nextB = _b[1];
nextB();
console.log("getA ", getA());
console.log("getB ", getB());
nextA();
console.log("getA ", getA());
console.log("getB ", getB());
// when no data is passed 
var _c = counter(), getC = _c[0], nextC = _c[1];
console.log("getC ", getC());
nextC();
console.log("getC ", getC());
