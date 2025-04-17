var a = 10; //this is type inference
// a = ''; // a = 10; // Error: Type 'number' is not assignable to type 'string'.
// a = true; // a = 10; // Error: Type 'number' is not assignable to type 'boolean'.   
// a = null; // a = 10; // Error: Type 'number' is not assignable to type 'null'.
// a = undefined; // a = 10; // Error: Type 'number' is not assignable to type 'undefined'.
// a = Symbol(); // a = 10; // Error: Type 'number' is not assignable to type 'symbol'.
// // a = BigInt(10); // a = 10; // Error: Type 'number' is not assignable to type 'bigint'.
// a = {}; // a = 10; // Error: Type 'number' is not assignable to type '{}'.
// a = []; // a = 10; // Error: Type 'number' is not assignable to type 'any[]'.
// a = () => {}; // a = 10; // Error: Type 'number' is not assignable to type '() => void'.
var b = 'hello'; //this is type annotation
//b= 10; // b = 'hello'; // Error: Type 'number' is not assignable to type 'string'.
// b = true; // b = 'hello'; // Error: Type 'boolean' is not assignable to type 'string'.
// b = null; // b = 'hello'; // Error: Type 'null' is not assignable to type 'string'.
// b = undefined; // b = 'hello'; // Error: Type 'undefined' is not assignable to type 'string'.
// b = Symbol(); // b = 'hello'; // Error: Type 'symbol' is not assignable to type 'string'.
var obj = {
    name: 'John',
}; //this is type inference
var obj2 = {
    name: 'John',
    age: 30,
}; //this is type annotation      
//obj2.name= 10; // obj2.name = 'John'; // Error: Type 'number' is not assignable to type 'string'.
// obj2 = { name: 10 }; // Error: Type 'number' is not assignable to type 'string'.
// obj2 = { name: true }; // Error: Type 'boolean' is not assignable to type 'string'.  
// obj2 = { name: null }; // Error: Type 'null' is not assignable to type 'string'.
var obj3 = {
    name: 'John', // this is type inference
    age: 30, // this is type inference
};
obj3.age = 10; // obj3.name = 'John'; // Error: Type 'number' is not assignable to type 'string'.
var arr = [1, 2, 3]; //this is type inference
var arr2 = [1, 2, 3]; //this is type annotation
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
var t = ['hello', 10]; //this is type annotation
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
function add(a, b) {
    return a + b; //this is type inference                 
}
var result = add(10, 20); //this is type inference
console.log(typeof result); //this is type inference
var personone = {
    credentials: "swetha", //this is type inference
    age: 30, //this is type inference
    greet: function () {
        console.log('Hello!'); //this is type inference
    },
    //this is type inference
}; //this is type annotation
var persontwos = {
    credentials: 'someshwar', //this is type inference
    age: 30, //this is type inference
    greet: function () {
        console.log('Hello!'); //this is type inference
    },
    //this is type inference
}; //this is type annotation
var personthree = {
    credentials: { id: 1, password: '' }, //this is type inference
    age: 30, //this is type inference
    greet: function () {
        console.log('Hello!'); //this is type inference
    },
    //this is type inference
}; //this is type annotation
function add1(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return (a + b);
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        return (a + b);
    }
    else {
        throw new Error('Invalid types for addition');
    }
} //this is type annotation
var result1 = add1(20, 20); //this is type inference
