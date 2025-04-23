
interface personinterface {
    name: string; //this is type annotation
    age: number; //this is type annotation
    greet(): string;//this is type annotation    
}

interface studentinterface {
    id: number; //this is type annotation
    enroll(course: courses): void; //this is type annotation
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


    constructor(public name: string, public age: number) {    //this is type annotation       
        this.name = name; //this is type inference
        this.age = age; //this is type inference

    }
    //this is type inference  
    greet(): string { //this is type inference

        return `Hello, my name is ${this.name} and I'm ${this.age} years old.`; //this is type inference
    }
}

let person1 = new person('swetha', 30); //this is type inference
person1.greet(); //this is type inference

let person2 = new person('someshwar', 30); //this is type inference

class student extends person implements studentinterface { //this is type annotation

    courses: courses[] = [] //this is type annotation

    constructor(name: string, age: number, public id: number,) { //this is type annotation
        super(name, age); //this is type inference
        this.id = id; //this is type    

    }

    enroll(course: courses) { //this is type annotation
        this.courses.push(course); //this is type inference 
    }



    override greet(): string {
        return ` ${super.name} and is ${this.age} years old.` //this is type inference`)
    }
}

let student1 = new student('swetha', 30, 1); //this is type inference
student1.greet()//this is type inference

let student2 = new student('someshwar', 30, 2); //this is type inference
student2.greet()//this is type inference

let course: courses = { //this is type annotation
    name: 'typescript', //this is type annotation
    id: 1 //this is type annotation
}
let cour: courses = {
    name: 'ja',
    id: 2 //this is type annotation   
}

student1.enroll(course); //this is type inference
student1.enroll(cour); //this is type inference

console.log(student1.courses); //this is type inference
console.log(student2.courses); //this is type inference


class Manager<T, K extends keyof T> { //this is type annotation
    private studentdata: T[] = []; //this is type annotation

    constructor(private idkey: K) { //this is type annotation
        //this is type inference
    }
    add(item: T) { //this is type annotation
        this.studentdata.push(item); //this is type inference
    }

    get(id: T[K]): T | undefined { //this is type annotation
        return this.studentdata.find(item => item[this.idkey] === id); //this is type inference
    }
    remove(id: T[K]): void { //this is type annotation
        this.studentdata = this.studentdata.filter(item => item[this.idkey] !== id); //this is type inference   

    }
    getAll(): T[] { //this is type annotation
        return this.studentdata; //this is type inference
    }

}

// let studentmanager = new Manager<student, 'id', student>('id'); //this is type annotation
let studentmanager = new Manager<student, 'id'>('id'); //this is type annotation
studentmanager.add(student1); //this is type inference
studentmanager.add(student2); //this is type inference
studentmanager.getAll().forEach(student => { //this is type inference){
    console.log(`Name: ${student.name}, Age: ${student.age}, ID: ${student.id}`); //this is type inference
}); //this is type inference