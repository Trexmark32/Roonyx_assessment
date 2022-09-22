// solution to problem number: 2

function counter(val?: number) {
    console.log("Value passed to counter is ", val);
    let count: number;
    if (val === undefined) {
        console.log("Since no value passed, Taking default as 0");
        count = 0;
    } else {
        count = val;
    }
    function get() {
        return count;
    }
    function Next() {
        return count++;
    }
    return [get, Next]
}

// test
const [getA, nextA] = counter(1);
console.log("getA ", getA());
nextA();
console.log("getA ", getA());
const [getB, nextB] = counter(10);
nextB();
console.log("getA ", getA());
console.log("getB ", getB());
nextA();
console.log("getA ", getA());
console.log("getB ", getB());

// when no data is passed 
const [getC, nextC] = counter();
console.log("getC ", getC());
nextC();
console.log("getC ", getC());