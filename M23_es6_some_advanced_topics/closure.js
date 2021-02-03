// const num1 = 2;
// const num2 = 3;

// const sum = function () {
//   return function () {
//     return num1 + num2;
//   };
// };

// const myFunc = sum()
// console.dir(myFunc)

// 2
// function bankAccount(initialBalance) {
//   const balance = initialBalance;
//   return function () {
//     return balance;
//   }
// }

// const account = bankAccount(1000000)
// console.log(account());

// ex 3
let num1 = 2;
let num2 = 3;

const sum = function () {
  return function () {
    return num1 + num2;
  };
};

const myFunc = sum()
console.dir(myFunc())

num1 = 10;
num2 = 20;

// let myFunc = sum()
console.dir(myFunc())