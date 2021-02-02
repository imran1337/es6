function f(x, y, ...a) {
  console.log((x + y) * a.length);
  console.log(a.length);
}
f(1, 2, "hello", true, 7) === 9;

let params = ["imran", true, 7];
let other = [1, 2, ...params];
console.log(other);

// var params = ["hello", true, 7];
// var other = [1, 2,2].concat(params); // [ 1, 2, "hello", true, 7 ]

// function f(x, y) {
//   var a = Array.prototype.slice.call(arguments, 2);
// //   console.log((x + y) * a.length);
// }
// f.apply(undefined, [1, 2].concat(params)) === 9;

// var str = "foo";
// var chars = str.split(""); // [ "f", "o", "o" ]
