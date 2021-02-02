/**
 * there are only six falsy values in Javascript:
 * undefined
 * null
 * NaN
 * 0
 * ""
 * and false of course
 */

// let variable = "";
// console.log(!variable);

// General Examples
const string = ""; // <-- falsy
console.log(`string: ${!string}`);
const filledString = "Imran Khan"; // <-- truthy
console.log(!filledString);
let numberGreaterThanZero; // <-- truthy
const emptyArray = []; // <-- truthy
console.log("emptyArray:", !emptyArray);
const emptyObject = {}; // <-- truthy
console.log("emptyObject:", !emptyObject);

// fun with arrays
if ([] == false) {
  console.log(`empty array is false`);
}
console.log(![]);
console.log([] == 0 ? true : false);

// be aware
const gfList = { imran: 0, jhankar: 5 };
if (gfList.imran) {
  console.log(`Imran total gf : ${gfList.imran}`);
}

const gfList2 = { imran: 5, jhankar: 0 };
if (typeof gfList2.jhankar === "number") {
    console.log(`Jhankar total gf: ${gfList2.jhankar}`);
}


// function
function truthyOrFalsy(val){
    return val ? "truthy" : "falsy"
}
console.log(truthyOrFalsy([]));
console.log(truthyOrFalsy(""));
console.log(truthyOrFalsy(0));
console.log(truthyOrFalsy(undefined));
console.log(truthyOrFalsy(null));
console.log(truthyOrFalsy(NaN));
console.log(truthyOrFalsy("minus",-5));
console.log(truthyOrFalsy(0*54545));
console.log(truthyOrFalsy('0'));

