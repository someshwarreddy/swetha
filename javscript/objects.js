// object litral syntax

var userobj = {
    name: 'John',
    age: 30,
    email: 'some@gmail.com',
    address: {
        city: 'New York',
        state: 'NY'
    },
    hobbies: ['music', 'sports'],
    getBirthYear: function () {
        return 2019 - this.age;
    }
};

// here name, age, email are properties or keys of userobj object and 'John', 30, 'some@gmail.com' are values of these properties.

// we want accsess the properties of object we can use dot notation or bracket notation.

console.log(userobj.name); // John dot notation
console.log(userobj['name']); // John bract notation

console.log(userobj.address.city); // new york
console.log(userobj.hobbies[0]); // music
console.log(userobj['address']['city']); // 1989

console.log(userobj.getBirthYear()); // 1989

// we can add new properties to object
userobj.phone = '123-456-7890';
userobj['gender'] = 'male';
console.log(userobj);

// we can delete properties from object
delete userobj.phone;
console.log(userobj);

// object constructor syntax 

var car = new Object();
car.make = 'Toyota';
car.model = 'Camry';
car.year = 2019;
console.log(car);

// object constructor with function
function product(name, price) {
    this.name = name;
    this.price = price;
    this.details = function () {
        return 'Product name is ' + this.name + ' and price is ' + this.price;
    }
}

var product1 = new product('phone', 500);

console.log(product1.name);
console.log(product1.price);
console.log(product1.details());


// object.create method 
var obj = Object.create(userobj);
console.log(obj.name); // John  // it will inherit all the properties of userobj object 

// object.keys method
console.log(Object.keys(userobj)); // ['name', 'age', 'email', 'address', 'hobbies', 'getBirthYear']    
// it will return all the keys of object in array format
console.log(Object.values(userobj)); // ['John', 30, ']
// it will return all the values of object in array format  

// object.entries method
console.log(Object.entries(userobj));
// [
// ['name', 'John'], ['age', 30], ['email', '    // it will return all the keys and values of object in array format 
// address', {city: 'New York', state: 'NY'}], ['hobbies', ['music', 'sports']], ['getBirthYear', [Function: getBirthYear]]]

// object.freeze method
Object.freeze(userobj);
userobj.name = 'Mike';
console.log(userobj.name); // John
// it will not allow to change the value of object properties
Object.seal(userobj);
userobj.name = 'Mike';
console.log(userobj.name); // Mike
// it will allow to change the value of object properties but not allow to add new properties
userobj.myname = 'Mike';
console.log(userobj.myname); // undefined

// class constructor syntax
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getBirthYear() {
        return 2019 - this.age;
    }
}

const person1 = new Person('John', 30);
console.log(person1.name); // John
console.log(person1.age); // 30 
console.log(person1.hasOwnProperty('name')); // true
console.log(person1.hasOwnProperty('getBirthYear')); // false

let usermap = new Map();

// Map is used to handle the larger data sets

usermap.set('usermapobj', { name: 'swetha' })

console.log(usermap.get('usermapobj'))
let usg = usermap.get('usermapobj')
console.log(usg);


// clone 

let obj1 = { name: 'swetha', age: 100 };
let obj2 = { city: 'hyd', name: 'swetha' };

console.log(obj1 === obj2);

let orginal = { name: 'teacher', age: { newage: 10 } };

//  shallow copy 
let copy = { ...orginal };
console.log(copy);

// copy.age.newage = 1000; // we cahenged the value in copy object
// copy.name = "sssssssssssssssssssss"
console.log(orginal);


let deepcopy = JSON.parse(JSON.stringify(orginal));

console.log(deepcopy)

deepcopy.age.newage = 1000;

console.log(orginal);

let merge = { ...userobj, ...product1 }; // last object have higest priority

console.log(merge);


const { key, ...rest } = obj1;
console.log(obj1);

// obj1.hasown('name')

let defult = { 'theme': 'red', lanuage: 'eng' };
let lan = { language: 'fr' };


let arr = [1, 2, 3, 4, 5, 6];

let freach = arr.forEach((value, index) => {
    return value;
    // Performs the specified action for each element in an array.
    console.log(index, value)
})

console.log(freach);

let fnda = arr.find((value) => {
    return value
})
console.log(fnda)
let filter = arr.filter((value) => value)
console.log(filter)

let map = arr.map(value => value)

console.log(map);

//  update product 
let productarray = ['mobile', 'tv', {}, {}];

productarray.push({});
console.log(productarray)

let popedarray = productarray.pop(); //which removes last index value

console.log(popedarray, productarray) // {}, array[4]

let shiftedarr = productarray.shift(); // which removes first index postion value that is 0 index value
console.log(shiftedarr, productarray)
let ma = 'manager'

let unshiarr = productarray.unshift(ma); // simply high priority task 
console.log(productarray);
let emp = ['emp1', 'emp2', 'emp3', 'emp4']
let splicearr = emp.splice(2, 1, 'newswetha') // adding and removing employee data at a time
console.log(splicearr, emp)

let slicearr = emp.slice(0, 2); // which cut the values up to provided index postion and it does not modify the orginal array
console.log(slicearr, emp)

// discounts 

let originalarr = [100, 200, 300,];

let discount = originalarr.map((price) => price * 0.50);
console.log(discount, originalarr);

let empsalarr = [{
    name: 'manager',
    sal: 10000
},
{
    name: 'productmanager',
    sal: 5000
},
{
    name: 'dev',
    sal: 10000
},
]

let filterdemp = empsalarr.filter((empobj) => empobj.sal > 5000);
console.log(filterdemp);

let findarr = empsalarr.find((empobj) => empobj.name == 'dev');
console.log(findarr);

let jumblearr = [10, 9, 6, 4, 5, 2, 1];

console.log(jumblearr.sort((a, b) => {
    return a - b;
}));

let arrvalues = ['somesh', 'hi', 'no']

console.log(arrvalues.includes('hi'));

let mergearr = arrvalues.concat(originalarr);

let mr = [...originalarr]
mr[1] = 600;
// console.log(mergearr, mr);
console.log(originalarr, mr);



var abc = { a: 1 };

var bac = { a: 1 };

var one = 1;
var two = 1;
console.log(abc.a == bac.a);
console.log(one == two);
console.log([] == {}); // object references 
console.log(typeof ([]) == typeof ({})); // comparing data types 

console.log("2" == 2); // it is wrong answear because which is not checking type of the data;

console.log("2" === 2); // answear is flase which is correct so === is comparing the data type of given value.


console.log(null === undefined); //false

console.log(typeof (null));

var add = 55;
console.log(add + 5); //number + number

console.log(55 + +"5"); // here +converts the "5" string to number;
console.log(55 + Number('5'));

var to = 55 + '5';
console.log(typeof(to));

console.log(isNaN(NaN)); // here it checking only NaN value ;

var total = 22 + undefined;

console.log(x);






