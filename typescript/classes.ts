
interface personinterface {
    name: string; //this is type annotation
    age: number; //this is type annotation
    greet: any //this is type annotation    
}

interface studentinterface {
    id: number; //this is type annotation
}

interface courses {
    name: string; //this is type annotation
    id: number; //this is type annotation
}

// class person {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
//     }
// }

class person implements personinterface {
    name: string; //this is type annotation
    age: number; //this is type annotation

    constructor(name: string, age: number) {    //this is type annotation       
        this.name = name; //this is type inference
        this.age = age; //this is type inference

    }
    //this is type inference  
    greet() { //this is type inference
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`); //this is type inference
    }
}

let person1 = new person('swetha', 30); //this is type inference
person1.greet(); //this is type inference

let person2 = new person('someshwar', 30); //this is type inference

class student extends person implements studentinterface {
   
    id: number; //this is type annotation

    courses: courses[] = [] //this is type annotation

    constructor(name: string, age: number, id: number,) { //this is type annotation
        super(name, age); //this is type inference
        this.id = id; //this is type    

    }

    addCourse(course: courses) { //this is type annotation
        this.courses.push(course); //this is type inference 
    }



    override greet(): void {
        console.log(` ${super.greet()} and is ${this.age} years old.`); //this is type inference`)
    }
}

let student1 = new student('swetha', 30, 1); //this is type inference
student1.greet()//this is type inference

let student2 = new student('someshwar', 30, 2); //this is type inference
student2.greet()//this is type inference

let course = { //this is type annotation
    name: 'typescript', //this is type annotation
    id: 1 //this is type annotation
}
let cour = {
    name: 'ja',
    id: 2
}

student1.addCourse(course); //this is type inference
student1.addCourse(cour); //this is type inference

console.log(student1.courses); //this is type inference
console.log(student2.courses); //this is type inference

class teacher extends person {

}