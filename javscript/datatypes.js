var value = "Hello World";
console.log(value); // Hello World
console.log(typeof value); // string
var value = 100;
console.log(value); // 100

console.log(value2) // undefined
var value2;

console.log(value3) // ReferenceError: Cannot access 'value3' before initialization becuase of Temporal Dead Zone

let value3 = 100;
// let value3 = 200; // SyntaxError: Identifier 'value3' has already been declared
value3 = 'Hello World';