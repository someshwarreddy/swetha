// functions

// iife iimmediately invoked function expression
(function (a) {
    console.log(a);
})('iife');

// function declaration
function named(b, c, a = 110) { // a is fdefault value we have to pass other arguments before default value in ES6
    console.log(a, b, c); // 110 200 10
}

named(200, 10);

// rest operator
function rest(...args) {
    let a = args;
    console.log(a);
}

rest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
[
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
].map((element) => { })

for (let i = 0; i < [1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10]; i++) {
    console.log(i);
}

for (const element of [1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10]) {

}


function fexpression(...args) {
    console.log(args);
}
// // function expression or anonymous function or un named function
// var fexpression = function(...args) {

//     console.log( args);
// }
// fexpression();


// callback function

function a() {
    console.log('i am a callback function');
}
var ddd = 100;
function b(callback) {
    callback();
    console.log('i am b');
}

b(a); // here we are passing a as a callback function to b here b i

// higer order function 

function c() { // this is higher order function
    return function () {
        console.log('i am c');
    }
}

// c()(); // here we are calling c and then calling the returned function

var d = c(); // here we are calling c and storing the returned function in d

d(); // here we are calling the returned function

// call back hell example
// ...existing code...

function firstFunction(callback) {
    setTimeout(() => {
        console.log('First function completed');
        callback();
    }, 1000);
}

function secondFunction(callback) {
    setTimeout(() => {
        console.log('Second function completed');
        callback();
    }, 1000);
}

function thirdFunction(callback) {
    setTimeout(() => {
        console.log('Third function completed');
        callback();
    }, 1000);
}

// Callback hell
firstFunction(() => {
    secondFunction(() => {
        thirdFunction(() => {
            console.log('All functions completed');
        });
    });
});

// ...existing code...

// arrow function 

var arrow = (a, b) => {
    console.log(a, b);
}

var withoutreturn = (a, b) => a + b;

console.log(withoutreturn(10, 20));

var gb = 100;

// pure function
// function should return the same output for the same input
// function should not have any side effect
// function should not modify the input
// function should not have any dependency on the outside world
function pure(a, b) {
    return a + b + 100;
}

console.log(pure(10, 20));

// impure function
// function should return different output for the same input
// function should have side effect
// function should modify the input 
// function should have dependency on the outside world

function impure(a, b) {
    return a + b + gb;
}

console.log(impure(10, 20));

var v = 100;

function a() {
    var v = 200;
    function b() {
        var v = 300;
        function c() {
            var v = 400;
            console.log(v);
        }
        c()
        console.log(v);
    }
    b()
    console.log(v);
}
a();


// closures

// Closure Scope
// arguments: { length: 0 }
// this: window
// a: fn()
// b: fn()

function a() {
    var value = 10;
    function b() {
        console.log("function b", value);
    }
    return b;
}

var cv = a();
cv();
// Closure Scope

function out(x) {
    return function () {
        console.log(x);
    }
}
out(10)(); // 10 function is called immediately curry function
var outvalue = out(10);
outvalue();

function counter(x) {
    // let  count = 0;
    return {
        increment: function () {
            x++;
            console.log(x);
        },
        decrement: function () {
            x--;
            console.log(x);
        }
    }
}

var counterValue = counter(1);
counterValue.increment();
counterValue.increment();
counterValue.increment();
counterValue.decrement();

for (let i = 0; i < 10; i++) {
 
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

// use iife to solve the above problem 
(function () {
    for (let i = 0; i < 10; i++) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    }
})();
// use clouser to solve the above problem

    for (var i = 0; i < 10; i++) {
        (function (i) {
            setTimeout(function () {
                console.log(i);
            }, 1000);
        })(i);
    }


// clousers memorize the scope of the function and the variables in the function
// clousers are used to create private variables
// clousers are used to create higher order functions
// clousers are used to create partial functions
// clousers are used to create currying functions
// clousers are used to create memoization functions
// clousers are used to create data hiding
// clousers are used to create encapsulation

// memoization
// memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

function memoization() {
    let cache = {};
    return function (n) {
        if (n in cache) {
            console.log('from cache');
            return cache[n];
        } else {
            console.log('calculating result');
            cache[n] = n + 10;
            return cache[n];
        }
    }
}
