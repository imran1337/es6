const list = [1,2,3]
let [a,,b] = list;
[b,a] = [a,b]
console.log(a,b);

// object
const list1 = {
    friends : [1,2,3,4,5,6],
    gfs : [4,3,4,5]
}

let {friends,gfs} = list1
friends.forEach(n => console.log(n))

const list2 = {
    friends : {fName: 'King',lName: 'Imran'},
    details : {age: 20}
}

let firstName = list2.friends.fName;
let lastName = list2.friends.lName;
console.log(firstName + lastName);

let list3 = {a3:1}
let {a3,b3=2} = list3;
console.log(a3,b3);

function f({name,val}){
    console.log(name,val);
}
f({name: "imran",val: "4"})