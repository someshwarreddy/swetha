
console.log(a);
let a = 100; 
var b=100;
function test() {
    console.log(a);
    console.log(b);
    let a = 200;
    var b = 200;
    console.log(a);
    console.log(b);
}
test();
// let is block scoped, var is function scoped. let is not hoisted, var is hoisted.

