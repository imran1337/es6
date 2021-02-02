let bonus = 20; // <-- global scope

function sum(first, second) {
  let result = first + second + bonus;
  if (result > 10) {
    //   const mood = "happy"
    let mood = "fishy";
    mood = "funky";
    mood = "cranky";
    console.log(mood); // <-- block scope
  }
  // console.log(mood); // <-- error throw because try to access block scope variable
  //   console.log(result); // <-- block scope
  return result;
}

const output = sum(5, 7);
console.log(bonus); // <-- global scope
console.log(output);

// console.log(test);
let test = "test";

// this code don't work because function expressions are not hoisted
// helloWorld()
var helloWorld = function () {
  console.log("hello hoisting");
};

// console.log(a);
let a = 3;

function foo() {
  console.log(num);
}
let num = 204141;
foo();
