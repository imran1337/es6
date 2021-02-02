const numbers = [1,2,3,4,5,6,7,8,9]
const part = numbers.slice(1,5)
console.log(part);

const removed = numbers.splice(1,5,77,77,88,99)
console.log("removed:",removed);

console.log("mainArr:",numbers);

const together = numbers.join("")
console.log(together);