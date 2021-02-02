const students = [
  { id: 21, name: "Imran Khan" },
  { id: 221, name: "Imran Khan" },
  { id: 231, name: "Imran Khan" },
  { id: 241, name: "Imran Khan" },
  { id: 251, name: "Imran Khan" },
];

const names = students.map((ele,index) => `${index} ${ele.name}`)
console.log(names);
// gather than 221
const ids = students.map(ele => ele).filter(id => id.id > 221).map(n => n.name)
const ids2 = students.map(ele => ele).find(id => id.id > 221).name
console.log(ids,ids2);