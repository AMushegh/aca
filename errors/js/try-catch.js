// _____________________________
try {
    console.log(a);
} catch (error) {
    console.log("first: ", error.message + "\n");
}

console.log("first one ends ends\n");

try {
    console.log("the second try\n", abc);
} catch (error) {
    console.log("second: ", error.message + "\n");
} finally {
    console.log("I'm always here\n");
}

console.log("second one ends\n");

// _____________________________
const obj = {};
obj.sayMyName();

console.log("jkaljljawad");

// _____________________________
let x = 14;

try {
    if (x === 7) {
        throw new Error("x shouldnt be equal to 7");
    }
    console.log("im here");
} catch (error) {
    console.log("this error is about: " + error.message);
} finally {
    console.log("I'm always here\n");
}
