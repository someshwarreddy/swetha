var person = /** @class */ (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I'm ").concat(this.age, " years old."));
    };
    return person;
}());
var person1 = new person('someshwar', 30); //this is type inference
person1.greet(); //this is type inference
