// arrays
const arr = [];

arr[2] = 10; // [undefined, undefined, 10]
console.log(arr.length); // 3

// loops
for (var i = 0, j = 0; i < 19 && j < 17; i++, j++) {
    console.log("im here");
}
console.log(i);

for (var t = 0; t < 10; ++t) {}

console.log(t); // 10

const num = ++t;
console.log("num : ", num, "t : ", t);

console.log(15 && true && 10 > 5 && 1 + 1);
console.log(false || 445 || 10 < 5 || 1 - 1);

console.log(false || (10 < 5 && 5) || 1 - 1);

if (false || (10 < 5 && 5) || 1 + 1) {
    console.log("should  work");
}
