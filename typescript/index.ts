let a = 10; //this is type inference

// a = ''; // a = 10; // Error: Type 'number' is not assignable to type 'string'.
// a = true; // a = 10; // Error: Type 'number' is not assignable to type 'boolean'.   
// a = null; // a = 10; // Error: Type 'number' is not assignable to type 'null'.
// a = undefined; // a = 10; // Error: Type 'number' is not assignable to type 'undefined'.
// a = Symbol(); // a = 10; // Error: Type 'number' is not assignable to type 'symbol'.
// // a = BigInt(10); // a = 10; // Error: Type 'number' is not assignable to type 'bigint'.
// a = {}; // a = 10; // Error: Type 'number' is not assignable to type '{}'.
// a = []; // a = 10; // Error: Type 'number' is not assignable to type 'any[]'.
// a = () => {}; // a = 10; // Error: Type 'number' is not assignable to type '() => void'.
let b: string = 'hello'; //this is type annotation
//b= 10; // b = 'hello'; // Error: Type 'number' is not assignable to type 'string'.
// b = true; // b = 'hello'; // Error: Type 'boolean' is not assignable to type 'string'.
// b = null; // b = 'hello'; // Error: Type 'null' is not assignable to type 'string'.
// b = undefined; // b = 'hello'; // Error: Type 'undefined' is not assignable to type 'string'.
// b = Symbol(); // b = 'hello'; // Error: Type 'symbol' is not assignable to type 'string'.

let obj = {
    name: 'John',
} //this is type inference

let obj2: { name: string, age: number } = {
    name: 'John',
    age: 30,
} //this is type annotation      
//obj2.name= 10; // obj2.name = 'John'; // Error: Type 'number' is not assignable to type 'string'.
// obj2 = { name: 10 }; // Error: Type 'number' is not assignable to type 'string'.
// obj2 = { name: true }; // Error: Type 'boolean' is not assignable to type 'string'.  
// obj2 = { name: null }; // Error: Type 'null' is not assignable to type 'string'.

let obj3: { name: string, age: number } = {
    name: 'John', // this is type inference
    age: 30, // this is type inference
}


obj3.age = 10; // obj3.name = 'John'; // Error: Type 'number' is not assignable to type 'string'.

let arr = [1, 2, 3]; //this is type inference
let arr2: number[] = [1, 2, 3]; //this is type annotation

arr2.push(4); // arr2.push(4); // this is type inference
// arr2.push('4'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// arr2.push(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
// arr2.push(null); // Error: Argument of type 'null' is not assignable to parameter of type 'number'.
// arr2.push(undefined); // Error: Argument of type 'undefined' is not assignable to parameter of type 'number'.
// arr2.push(Symbol()); // Error: Argument of type 'symbol' is not assignable to parameter of type 'number'.
// arr2.push(BigInt(10)); // Error: Argument of type 'bigint' is not assignable to parameter of type 'number'.
// arr2.push({}); // Error: Argument of type '{}' is not assignable to parameter of type 'number'.      
// arr2.push([]); // Error: Argument of type 'any[]' is not assignable to parameter of type 'number'.
// arr2.push(() => {}); // Error: Argument of type '() => void' is not assignable to parameter of type 'number'.

// tuple
let t: [string, number] = ['hello', 10]; //this is type annotation
// tuple = [10, 'hello']; // Error: Type 'number' is not assignable to type 'string'.   
// tuple = ['hello', 'world']; // Error: Type 'string' is not assignable to type 'number'.
// tuple = [10, 20]; // Error: Type 'number' is not assignable to type 'string'.
// tuple = [true, 10]; // Error: Type 'boolean' is not assignable to type 'string'.
// tuple = [null, 10]; // Error: Type 'null' is not assignable to type 'string'.
// tuple = [undefined, 10]; // Error: Type 'undefined' is not assignable to type 'string'.
// tuple = [Symbol(), 10]; // Error: Type 'symbol' is not assignable to type 'string'.
// tuple = [BigInt(10), 10]; // Error: Type 'bigint' is not assignable to type 'string'.
// tuple = [{}, 10]; // Error: Type '{}' is not assignable to type 'string'.
// tuple = [[], 10]; // Error: Type 'any[]' is not assignable to type 'string'.

function add(a: number, b: number): number { //this is type annotation
    return a + b; //this is type inference                 
}
let result = add(10, 20); //this is type inference

console.log(typeof result); //this is type inference



interface Person<Type> {
    credentials: Type; //this is type annotation
    age: number; //this is type annotation
    greet: () => void; //this is type annotation    
}

interface user {
    id: Number; //this is type annotation
    password: string; //this is type annotation
}
let personone: Person<any> = {
    credentials: "swetha", //this is type inference
    age: 30, //this is type inference
    greet: () => { //this is type inference
        console.log('Hello!'); //this is type inference
    },
    //this is type inference
} //this is type annotation

let persontwos: Person<string> = {
    credentials: 'someshwar', //this is type inference
    age: 30, //this is type inference
    greet: () => { //this is type inference
        console.log('Hello!'); //this is type inference
    },
    //this is type inference
} //this is type annotation

let personthree: Person<user> = {
    credentials: { id: 1, password: '' }, //this is type inference
    age: 30, //this is type inference
    greet: () => { //this is type inference
        console.log('Hello!'); //this is type inference
    },
    //this is type inference
} //this is type annotation



function add1<T extends string | number>(a: T, b: T): T { //this is type annotation
    if (typeof a === 'string' && typeof b === 'string') {
        return (a + b) as T;
    } else if (typeof a === 'number' && typeof b === 'number') {
        return (a + b) as T;
    } else {
        throw new Error('Invalid types for addition');
    }
} //this is type annotation
let result1 = add1(20, 20); //this is type inference


type operation = 'add' | 'subtract' | 'multiply' | 'divide'; //this is type annotation

// genric function
 function add2<T extends number | string>(a: T, b: T, operation: operation): T { //this is type annotation
    switch (operation) { //this is type inference       
        case 'add':
            if (typeof a === 'string' && typeof b === 'string') {
                return (a + b) as T; //this is type inference
            } else if (typeof a === 'number' && typeof b === 'number') {
                return (a + b) as T; //this is type inference
            }
            throw new Error('Invalid types for addition');
        case 'subtract':
            if (typeof a === 'number' && typeof b === 'number') {
                return (a - b) as T; //this is type inference
            }
            throw new Error('Invalid types for subtraction');
        case 'multiply':
            if (typeof a === 'number' && typeof b === 'number') {
                return (a * b) as T; //this is type inference
            }
            throw new Error('Invalid types for multiplication');
        case 'divide':
            if (typeof a === 'number' && typeof b === 'number') {
                return (a / b) as T; //this is type inference
            }
            if (b===0) {
                throw new Error('Division by zero is not allowed'); //this is type inference
                }
            throw new Error('Invalid types for division');
        default:
            throw new Error('Invalid operation'); //this is type inference
    }
} //this is type annotation

let result2 = add2(20, 20, 'add'); //this is type inference
let result3 = add2('20', '20', 'add'); //this is type inference
let result4 = add2(20, 20, 'subtract'); //this is type inference
let result5 = add2(20, 20, 'multiply'); //this is type inference
let result6 = add2(20, 20, 'divide'); //this is type inference
let result7 = add2(20, 0, 'divide'); //this is type inference


let url: string = 'https://www.google.com'; //this is type annotation

 async function fetchData<T>(url: string): Promise<any> { //this is type annotation
    try { //this is type inference
        let response = await fetch(url); //this is type inference
        if (!response.ok) { //this is type inference
            throw new Error('Network response was not ok'); //this is type inference
        }
        let data = await response.json(); //this is type inference
        return data; //this is type inference
    }
    catch (error) { //this is type inference
        console.error('There has been a problem with your fetch operation:', error); //this is type inference
    }
} //this is type annotation

let data = fetchData<number>(url); //this is type inference
data.then((data) => { //this is type inference
    console.log(data); //this is type inference
})
.catch((error) => { //this is type inference
    console.error('Error:', error); //this is type inference
}); //this is type annotation

(async () => { //this is type annotation
    let data = await fetchData<number>(url); //this is type inference   
    console.log(data); //this is type 
    data.forEach((item: number) => { //this is type inference
        console.log(item); //this is type inference
})
})() //this is type annotation