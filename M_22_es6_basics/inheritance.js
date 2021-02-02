class Parent {
    constructor(){
        this.fatherName = "Schwerzengger"
    }
}

class Child extends Parent{
    constructor(name){
        super()
        this.name = name;
    }

    getFullName(){
        return `${this.name} ${this.fatherName}`
    }
}

const baby = new Child("Arnold")
const baby2 = new Child("Tom")
const fullName = baby.getFullName();
console.log(baby);
console.log(baby2);
console.log(baby2.getFullName());
console.log(fullName);
