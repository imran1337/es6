const numbers = [
  1,
  2,
  3,
  4,
  54,
  4,
  4,
  3,
  7,
  5,
  4,
  1,
  5,
  1,
  45,
  456,
  15,
  456,
  51231,
  8,
  0,
  548,
  45616,
  4894,
  5,
  5454,
  8451,
  84,
  15,
  4815,
  1564,
  561,
  154,
  56,
  564,
  5,
  51,
  56456,
  1,
];

 numbers.forEach(n => console.log("number:", n * n))

const res = numbers.map((element, i, arr) => {
  return { index: `${i}`, element: `${element}` };
}).filter(n => n.element > 1000)
 console.log(res);

 res.forEach(ele => console.log(ele.element*2))

//return all matched element in array 
 const filterValues = res.filter((x) => x.element > 1000);
//  find return matched first element in object
 const filterValues2 = res.find((x) => x.element > 1000);

 console.log(filterValues);
 console.log(filterValues2);
