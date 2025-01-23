


// VARIABLES IN JAVASCRIPT

// "Var" is a Keyword. 
// It is used to declare a variable in JavaScript. 
// It is a global scope variable. 
// It is accessible outside the block. 
// It is a "function scope or global scope"

Example:

var x = 10;
{ 
    var y = 20;
}

console.log(y);

Output: 20

// var can be accessible outside the block.



// "LET" IN JAVASCRIPT

// "Let" is a keyword.
// It is used to declare a variable in JavaScript.
// It is a block scope variable.
// It is not accessible outside the block.
// It is a "block scope variable".

Example1:

let x = 10;
{ 
    let y = 20; 
}

console.log(y);

Output: ReferenceError: "y is not defined"

Example2:

wrong:
let x = "100"
let x = "Let Keyword"

correct:
{ 
    let x = 2 
}
// let is not accessible outside the block.



// "CONST" IN JAVASCRIPT

// "Const" is a keyword.
// It is used to declare a variable in JavaScript.
// It is a block scope variable.
// It is not accessible outside the block.
// It is a "block scope variable".
// It is a constant variable.

Example:

const x = 10;
      x = 20;

console.log(y);

Output: 10

// const cannnot change its value after declaring like "let" and "var".



// "VAR" VS "LET" VS "CONST"

// "Var" is a global scope variable.   it can be accessible outside the block.
// "Let" is a block scope variable.    it is not accessible outside the block.
// "Const" is a block scope variable.  it cannot change its value after declaring.



// DATA TYPES IN JAVASCRIPT

// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Object
// 7. Symbol

// 1. Number: It is used to represent numbers.
// 2. String: It is used to represent text.
// 3. Boolean: It is used to represent true or false.
// 4. Undefined: It is used to represent undefined value.
// 5. Null: It is used to represent null value.
// 6. Object: It is used to represent complex data structures.

// Example:


// Number


var x = 10;
var y = 20;
var z = x + y;

console.log(z);

Output: 30


// String


var x = "Hello";
var y = "World";
var z = x + y;

console.log(z);

Output: HelloWorld


// Boolean


var x = 10;
var y = 20;
var z = x > y;

console.log(z);

Output: false


// Undefined


var x;

console.log(x);

Output: undefined


// Null


var x = null;

console.log(x);

Output: null


// Object


var x = { name: "John", age: 30 };

console.log(x);

Output: { name: "John", age: 30 }


// Symbol


var x = Symbol("Hello");

console.log(x);

Output: Symbol(Hello)



// OPERATORS IN JAVASCRIPT

// 1. Arithmetic Operators

// + (Addition)

var x = 10;
var y = 20;

console.log(x + y);

Output: 30

// - (Subtraction)

var x = 20;
var y = 10;

console.log(x - y);

Output: 10

// * (Multiplication)

var x = 10;
var y = 20;

console.log(x * y);

Output: 200

// / (Division)

var x = 20;
var y = 10;

console.log(x / y);

Output: 2

// % (Modulus)

var x = 20;
var y = 10;

console.log(x % y);

Output: 0

// ++ (Increment)

var x = 10;

console.log(x++);
console.log(x);

Output: 10
        11

// -- (Decrement)

var x = 10;

console.log(x--);
console.log(x);

Output: 10
        9




// 2. Assignment Operators


// = (Assignment)

var x = 10;

console.log(x);

Output: 10


// += (Addition Assignment)

var x = 10;
x += 20;

console.log(x);

Output: 30


// -= (Subtraction Assignment)

var x = 20;
x -= 10;

console.log(x);

Output: 10


// *= (Multiplication Assignment)

var x = 10;
x *= 20;

console.log(x);

Output: 200


// /= (Division Assignment)

var x = 20;
x /= 10;

console.log(x);

Output: 2


// %= (Modulus Assignment)

var x = 20;
x %= 10;

console.log(x);

Output: 0


// 3. Comparison Operators


// == (Equal)

var x = 10;
var y = 20;

console.log(x == y);

Output: false


// === (Strict Equal)

var x = 10;
var y = 10;

console.log(x === y);

Output: true


// != (Not Equal)

var x = 10;
var y = 20;

console.log(x != y);

Output: true


// !== (Strict Not Equal)

var x = 10;
var y = 20;

console.log(x !== y);

Output: true


// > (Greater Than)

var x = 20;
var y = 10;

console.log(x > y);

Output: true


// < (Less Than)

var x = 10;
var y = 20;

console.log(x < y);

Output: true


// >= (Greater Than or Equal)

var x = 20;
var y = 10;

console.log(x >= y);

Output: true


// <= (Less Than or Equal)

var x = 10;
var y = 20;

console.log(x <= y);

Output: true



// 4. Logical Operators


// && (Logical AND)

var x = 10;
var y = 20;

console.log(x < 20 && y > 10);

Output: true


// || (Logical OR)

var x = 10;
var y = 20;

console.log(x < 20 || y < 10);

Output: true


// ! (Logical NOT)

var x = 10;

console.log(!(x < 20));

Output: false



// 5. Bitwise Operators


// & (Bitwise AND)

var x = 5;
var y = 3;

console.log(x & y);

Output: 1


// | (Bitwise OR)

var x = 5;
var y = 3;

console.log(x | y);

Output: 7


// ~ (Bitwise NOT)

var x = 5;

console.log(~x);

Output: -6


// ^ (Bitwise XOR)

var x = 5;
var y = 3;

console.log(x ^ y);

Output: 6


// << (Left Shift)

var x = 5;

console.log(x << 1);

Output: 10


// >> (Right Shift)

var x = 5;

console.log(x >> 1);

Output: 2



// 6. Type Operators


// typeof

var x = 10;

console.log(typeof x);

Output: number


// instanceof

var x = new Array();




// 7. Other Operators


// , (Comma)

var x = 10, y = 20;

console.log(x, y);

Output: 10 20


// delete

var x = { name: "John", age: 30 };

delete x.age;

console.log(x);

Output: { name: "John" }


// in

var x = { name: "John", age: 30 };

console.log("name" in x);

Output: true


// new

var x = new Date();

console.log(x);

Output: current date and time


// this

var x = { name: "John", age: 30 };

console.log(x.name);

Output: John


// void

var x = 10;

console.log(void x);

Output: undefined



// CONDITIONAL STATEMENTS IN JAVASCRIPT

// 1. If Statement

var x = 10;

if (x > 5) {

    console.log("x is greater than 5");

}

Output: x is greater than 5


// 2. If Else Statement

var x = 10;

if (x > 5) {

    console.log("x is greater than 5");

} else {

    console.log("x is less than 5");

}

Output: x is greater than 5


// 3. If Else If Statement

var x = 10;

if (x > 5) {
    
    console.log("x is greater than 5");

} else if (x < 5) {

    console.log("x is less than 5");

} else {

    console.log("x is equal to 5");

}

Output: x is greater than 5


// 4. Switch Statement

var x = 10;

switch (x) {

    case 5:
        console.log("x is equal to 5");
        break;

    case 10:
        console.log("x is equal to 10");
        break;

    default:
        console.log("x is not equal to 5 or 10");

}

Output: x is equal to 10



// LOOPS IN JAVASCRIPT

// 1. For Loop

for (var i = 0; i < 5; i++) {

    console.log(i);

}

Output: 0
        1
        2


// 2. While Loop

var i = 0;

while (i < 5) {
    
    console.log(i);

    i++;

}

Output: 0
        1
        2     
        3
        4



// 3. Do While Loop

var i = 0;

do {

    console.log(i);


    i++;

} while (i < 5);

Output: 0
        1
        2
        3   
        4



// 4. For In Loop

var x = { name: "John", age: 30 };

for (var key in x) {
    
    console.log(key);

}

Output: name
        age 



// 5. For Of Loop

var x = [10, 20, 30];

for (var value of x) {

    console.log(value);

}

Output: 10
        20
        30  



// FUNCTIONS IN JAVASCRIPT

// 1. Function Declaration

function add(x, y) {
    
    return x + y;

}

console.log(add(10, 20));

Output: 30


// 2. Function Expression

var add = function(x, y) {
    
    return x + y;

}

console.log(add(10, 20));

Output: 30


// 3. Arrow Function

var add = (x, y) => x + y;

console.log(add(10, 20));

Output: 30



// 4. Function Constructor

var add = new Function("x", "y", "return x + y");

console.log(add(10, 20));

Output: 30




// OBJECTS IN JAVASCRIPT

// 1. Object Literal

var x = { name: "John", age: 30 };

console.log(x);

Output: { name: "John", age: 30 }


// 2. Object Constructor

var x = new Object();

x.name = "John";

x.age = 30;

console.log(x);

Output: { name: "John", age: 30 }


// 3. Object Methods

var x = { name: "John", age: 30 };

x.greet = function() {

    return "Hello " + this.name;    

}

console.log(x.greet());

Output: Hello John


// 4. Object Prototypes

function Person(name, age) {

    this.name = name;

    this.age = age;

}

Person.prototype.greet = function() {

    return "Hello " + this.name;

}

var x = new Person("John", 30);

console.log(x.greet());

Output: Hello John



// ARRAYS IN JAVASCRIPT

// 1. Array Literal

var x = [10, 20, 30];

console.log(x);

Output: [10, 20, 30]


// 2. Array Constructor

var x = new Array(10, 20, 30);

console.log(x);

Output: [10, 20, 30]


// 3. Array Methods

var x = [10, 20, 30];

x.push(40);

console.log(x);

Output: [10, 20, 30, 40]


// 4. Array Iteration

var x = [10, 20, 30];

x.forEach(function(value) {

    console.log(value);

});

Output: 10

        20  

        30




// STRINGS IN JAVASCRIPT

// 1. String Literal

var x = "Hello";

console.log(x);

Output: Hello


// 2. String Constructor

var x = new String("Hello");

console.log(x);

Output: Hello


// 3. String Methods

var x = "Hello";

console.log(x.length);

Output: 5


// 4. String Concatenation

var x = "Hello";

var y = "World";

console.log(x + " " + y);

Output: Hello World



// MATH OBJECT IN JAVASCRIPT

// 1. Math Object Properties

console.log(Math.PI);

Output: 3.141592653589793


// 2. Math Object Methods

console.log(Math.round(4.7));

Output: 5


console.log(Math.pow(2, 3));

Output: 8




// DATE OBJECT IN JAVASCRIPT

// 1. Date Object Constructor

var x = new Date();

console.log(x);

Output: current date and time


// 2. Date Object Methods

var x = new Date();

console.log(x.getFullYear());

Output: current year


// 3. Date Object Formats

var x = new Date();

console.log(x.toDateString());

Output: current date



// REGULAR EXPRESSIONS IN JAVASCRIPT

// 1. Regular Expression Literal

var x = /hello/;

console.log(x);

Output: /hello/


// 2. Regular Expression Constructor

var x = new RegExp("hello");

console.log(x);

Output: /hello/



// ERROR HANDLING IN JAVASCRIPT

// 1. Try Catch Statement

try {

    throw "An error has occurred";

} catch (error) {

    console.log(error);

}

Output: An error has occurred



// EVENTS IN JAVASCRIPT

// 1. Event Handler

function greet() {
    
    console.log("Hello");

}

<button onclick="greet()">Click Me</button>


// 2. Event Listener

var x = document.getElementById("button");

x.addEventListener("click", function() {
    
    console.log("Hello");

}



// DOM IN JAVASCRIPT

// 1. Document Object

console.log(document);

Output: document object


// 2. Element Object

var x = document.getElementById("button");

console.log(x);

Output: element object


// 3. Node Object

var x = document.getElementById("button");

console.log(x.childNodes);

Output: node object



// WINDOW OBJECT IN JAVASCRIPT

// 1. Window Object Properties

console.log(window.innerHeight);

Output: window height


// 2. Window Object Methods

console.log(window.open("https://www.google.com"));

Output: opens a new window



// BOM IN JAVASCRIPT

// 1. Navigator Object

console.log(navigator.appName);

Output: browser name


// 2. Screen Object

console.log(screen.width);

Output: screen width



// COOKIES IN JAVASCRIPT

// 1. Create a Cookie

document.cookie = "name=John";

Output: name=John


// 2. Read a Cookie

console.log(document.cookie);

Output: name=John


// 3. Delete a Cookie

document.cookie = "name=John; expires=Thu, 01 Jan 1970 00:00:00 UTC";

Output: name=John; expires=Thu, 01 Jan 1970 00:00:00 UTC



// LOCAL STORAGE IN JAVASCRIPT

// 1. Set Item

localStorage.setItem("name", "John");

Output: name=John


// 2. Get Item

console.log(localStorage.getItem("name"));

Output: John


// 3. Remove Item

localStorage.removeItem("name");

Output: name=John; expires=Thu, 01 Jan 1970 00:00:00 UTC






















var price = 100;
var product = "mouse";
var tax = 18;
console.log(product);
var total = price + (price + tax);
console.log(total);