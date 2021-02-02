// for (let i = 0; i < a.length; i++) {
//     let x = a[i]
//     console.log(x);
// }
// for (let i = 0; i < b.length; i++) {
//     let y = b[i]
//     console.log(x);
// }

let callbacks = [];
for (let i = 0; i <= 2; i++) {
  callbacks[i] = () => i * 2;
}
console.log(callbacks[0]() === 0, callbacks[1]() === 2, callbacks[2]() === 4);
console.log(callbacks[0](), callbacks[1](), callbacks[2]());