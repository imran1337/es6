const ages = [12, 14, [46, 43,[5],[3],[[[[[[5]]],[54, [65]]]]]], 23];
console.log(ages.reduce((p,c) => p+c));
const ages2 = [43, 53, 23, 53, 23];

// const allAges = ages.concat(ages2).concat(['imran'])
const allAges = [...ages, ...ages2,'Imran', 2, 1, 2, 3, 4, 5, 6, 'Khan', 7, 8, 1];

let sum = allAges.flat(Infinity).reduce((p, c) => {
  if (typeof c != "number") {
      console.log(`string found value: ${c}`);
    c = 0;
  }
  return p + c;
});

console.log(sum);

// let sum = 0;
// for (let i = 0; i < allAges.length; i++) {
//   let age = allAges[i];
//   if (typeof age != "number") {
//     age = 0;
//   } else {
//     sum += age;
//   }
// }
// console.log(sum);
