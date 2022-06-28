arr.length = 99 ** 99;
const arr = [];

arr.length = 5;
arr[6] = true;
console.log(arr);

const rngError = new RangeError("the value is too big"); // {message: 'the value is too big'}

try {
    let a;

    function setA(value) {
        if (value > 10) {
            throw new RangeError("the value is too big");
        }
        a = value;
    }

    setA(11);

    console.log("1232q2");
} catch (error) {
    console.log(error.message);
}

try {
    throw new Error("Oops something went wrong!");
} catch (e) {
    console.log(e.name + ": " + e.message);
}

for (let i = 1; i > 0; i++) {
    if (i === 50) {
        break;
    }
    console.log("a");
}
