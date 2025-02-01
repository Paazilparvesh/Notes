

    Keyword    -   Description

//  var        -   Declares a variable
//  let        -   Declares a block variable
//  const      -   Declares a block constant
//  switch     -   Marks a block of statements to be executed in different cases
//  if         -   Marks a block of statements to be executed on a condition
//  for        -   Marks a block of statements to be executed in a loop
//  function   -   Declares a function
//  return     -   Exits a function
//  try        -   Implements error handling to a block of statements

// ---------------------------------------------------------------------------------------------------------------


VARIABLES :

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

// ---------------------------------------------------------------------------------------------------------------


LET : 

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

// ---------------------------------------------------------------------------------------------------------------


CONST :

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

// ---------------------------------------------------------------------------------------------------------------


// Var VS Let VS Const :

// "Var" is a global scope variable.   it can be accessible outside the block.
// "Let" is a block scope variable.    it is not accessible outside the block.
// "Const" is a block scope variable.  it cannot change its value after declaring.

// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------

COMMENTS :

//  JavaScript comments can be used to Explain JavaScript code, and to make it more Readable.
//  JavaScript comments can also be used to Prevent execution, when testing Alternative code


//  Types of Comments:

//     Single Line Comments     -    // 

//     Multi-line Comments     -    /* */   


// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------

OPERATORS :

/*   JavaScript provides various operators that perform operations on values
     or variables. These operators can be categorized into different types
     based on their functionality.                                             */


//    Operator Type :   


//    Arithmetic Operators         -        + , - , * , / , % , ++ , -- 

//    Assignment Operators         -        = , += , -= , *= , /= , %=

//    Comparison Operators         -        == , != , === , !== , > , < , >= , <=

//    Logical Operators            -        && , || , !

//    Bitwise Operators            -        &

//    String Operators             -        + 

//    Conditional Operator         -        ? :

//    Type Operators               -        ' typeof ' , ' instanceof '

//    Unary Operators              -        + , - , ! , " , ' typeof ' , ' delete ' , ' void '


// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------

// 1. Arithmetic operators

Addition : "+" 

Example :

    var x = 10;
    var y = 20;

    console.log(x + y);

    Output: 30

// ---------------------------------------------------------------------------------------------------------------

Subtraction : "-"

Example :

    var x = 20;
    var y = 10;

    console.log(x - y);

    Output: 10

// ---------------------------------------------------------------------------------------------------------------

Multiplication : "*"

    var x = 10;
    var y = 20;

    console.log(x * y);

    Output: 200

// ---------------------------------------------------------------------------------------------------------------

Division : "/"

    var x = 20;
    var y = 10;

    console.log(x / y);

    Output: 2

// ---------------------------------------------------------------------------------------------------------------

Modulus : "%"

    var x = 20;
    var y = 10;

    console.log(x % y);

    Output: 0

// ---------------------------------------------------------------------------------------------------------------

Increment : "++"

// Increment operators increase the value of the variable by 1.

Example : "complex"

let x = 10;
let y = x++ + 5; // y = 10 + 5; x becomes 11
let z = ++x + 5; // x becomes 12, z = 12 + 5


types : 

  1. Post Increment :

// Post-increment: variable++
// Post-increment (i++): Returns the value first, then increments it.

    var x = 10;

    console.log(x++);
    console.log(x);

    Output: 10
            11

  2. Pre Increment :

// Pre-increment (++i): Increments the value first, then returns the updated value.
// Pre-increment: ++variable

    var x = 10;

    console.log(++x);
    console.log(x);

    Output: 11
            11

// ---------------------------------------------------------------------------------------------------------------

Decrement : "--"

// Both operators decrease the value of the variable by 1.

Example : "complex"

let x = 10;
let y = x-- - 5; // y = 10 - 5; x becomes 9
let z = --x - 5; // x becomes 8, z = 8 - 5

Types :

  1. Post Decrement :

// Post-decrement: variable--
// Post-decrement (i--): Returns the value first, then decrements it by 1.

    var x = 10;

    console.log(x--);
    console.log(x);

    Output: 10
            9

            
  2. Pre Increment :

// Pre-decrement: --variable
// Pre-decrement (--i): Decrements the value by 1 first, then returns the updated value.

    var x = 10;

    console.log(--x);
    console.log(x);

    Output: 9
            9

// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------

// 2. Assignment operator


Assignment : "="

    var x = 10;

    console.log(x);

    Output: 10

// ---------------------------------------------------------------------------------------------------------------

Addition : "+="

    var x = 10;
    x += 20;

    console.log(x);

    Output: 30

// ---------------------------------------------------------------------------------------------------------------

Subtraction : "-="

    var x = 20;
    x -= 10;

    console.log(x);

    Output: 10

// ---------------------------------------------------------------------------------------------------------------

Multiplication : "*="

    var x = 10;
    x *= 20;

    console.log(x);

    Output: 200

// ---------------------------------------------------------------------------------------------------------------

Division : "/="

    var x = 20;
    x /= 10;

    console.log(x);

    Output: 2

// ---------------------------------------------------------------------------------------------------------------

Modulus : "%="

    var x = 20;
    x %= 10;

    console.log(x);

    Output: 0

// ---------------------------------------------------------------------------------------------------------------    
// ---------------------------------------------------------------------------------------------------------------

// 3. Comparison Operators


Equal : "=="

    var x = 10;
    var y = 20;

    console.log(x == y);

    Output: false

// ---------------------------------------------------------------------------------------------------------------

Strict Equal : "==="

    var x = 10;
    var y = 10;

    console.log(x === y);

    Output: true

// ---------------------------------------------------------------------------------------------------------------

Not Equal : "!="

    var x = 10;
    var y = 20;

    console.log(x != y);

    Output: true

// ---------------------------------------------------------------------------------------------------------------

Strict Not Equal : "!=="

    var x = 10;
    var y = 20;

    console.log(x !== y);

    Output: true

// ---------------------------------------------------------------------------------------------------------------

Greater Than : ">"

    var x = 20;
    var y = 10;

    console.log(x > y);

    Output: true

// ---------------------------------------------------------------------------------------------------------------

Less Than : "<"

    var x = 10;
    var y = 20;

    console.log(x < y);

    Output: true

// ---------------------------------------------------------------------------------------------------------------

Greater Than or Equal : ">="

    var x = 20;
    var y = 10;

    console.log(x >= y);

    Output: true

// ---------------------------------------------------------------------------------------------------------------

Less Than or Equal : "<="

    var x = 10;
    var y = 20;

    console.log(x <= y);

    Output: true

// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------

// 4. Logical Operators



Logical AND : "&&"

Syntax : 
    console.log(true && true); // true
    console.log(true && false); // false

Example :

    var x = 10;
    var y = 20;

    console.log(x < 20 && y > 10);

    Output: true

// ---------------------------------------------------------------------------------------------------------------

Logical OR : "||"

Syntax :
    console.log(true || false); // true

Example :    

    var x = 10;
    var y = 20;

    console.log(x < 20 || y < 10);

    Output: true

// ---------------------------------------------------------------------------------------------------------------

Logical NOT : "!"

Syntax :
    console.log(!(true)); // False

Example :zxs

    var x = 10;

    onsole.log(!(x < 20));

    Output: false

// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------

// 5. Bitwise Operators


Bitwise AND : "&"

    var x = 5;
    var y = 3;

    console.log(x & y);

    Output: 1

// ---------------------------------------------------------------------------------------------------------------

Bitwise OR : "|"

    var x = 5;
    var y = 3;

    console.log(x | y);

    Output: 7

// ---------------------------------------------------------------------------------------------------------------

Bitwise NOT : "~"

    var x = 5;

    console.log(~x);

    Output: -6

// ---------------------------------------------------------------------------------------------------------------

Bitwise XOR : "^"

    var x = 5;
    var y = 3;

    console.log(x ^ y);

    Output: 6

// ---------------------------------------------------------------------------------------------------------------

Left Shift : "<<"

    var x = 5;

    console.log(x << 1);

    Output: 10

// ---------------------------------------------------------------------------------------------------------------

Right Shift : ">>"

    var x = 5;

    console.log(x >> 1);

    Output: 2

// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------

// 6. Type Operators


typeof :

    var x = 10;

    console.log(typeof x);

    Output: number

// ---------------------------------------------------------------------------------------------------------------

instanceof :

    var x = new Array();

// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------

// 7. Other Operators


Comma : ","

    var x = 10, y = 20;

    console.log(x, y);

    Output: 10 20

// ---------------------------------------------------------------------------------------------------------------

delete :

    var x = { name: "John", age: 30 };

    delete x.age;

    console.log(x);

    Output: { name: "John" }

// ---------------------------------------------------------------------------------------------------------------

in :

    var x = { name: "John", age: 30 };

    console.log("name" in x);

    Output: true

// ---------------------------------------------------------------------------------------------------------------

new :

    var x = new Date();

    console.log(x);

    Output: current date and time

// ---------------------------------------------------------------------------------------------------------------

this :

    var x = { name: "John", age: 30 };

    console.log(x.name);

    Output: John

// ---------------------------------------------------------------------------------------------------------------

void :

    var x = 10;

    console.log(void x);

    Output: undefined


// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------

DATA TYPES :

Syntax:

    console.log(typeof(10))
    
    output : number


Types :

1. Primitive Data Type : 

// 1. Number: It is used to represent numbers.
// 2. String: It is used to represent text.
// 3. Boolean: It is used to represent true or false.
// 4. Undefined: It is used to represent undefined value.
// 5. Null: It is used to represent null value.
// 6. symbol: A unique and immutable value used as object keys.
// 7. Bigint: Represents integers larger than Number.MAX_SAFE_INTEGER.

2. Non-Primitive Data Type :

// 8. Object: It is used to represent complex data structures.
// 9. array: An ordered list of values (can include mixed types).
// 10.Date: Represents date and time.

// ---------------------------------------------------------------------------------------------------------------

// 1. Number

// Represents integers and floating-point numbers.
// Special values: Infinity , -Infinity and NaN (Not-a-Number).

let age = 25;    // Integer
let pi = 3.14;   // Float
let x = NaN;     // Not-a-Number

Example :

    var x = "10";
    var y = "20";
    var z = x + y;

    console.log(z);

    Output: 30

// ---------------------------------------------------------------------------------------------------------------

// 2. String

// Represents text data enclosed in single quotes ' ', double quotes " ", or backticks `.

let name = "Alice";
let greeting = `Hello, ${name}!`;

Example :

    var x = "Hello";
    var y = "World";
    var z = x + y;

    console.log(z);

    Output: HelloWorld

// ---------------------------------------------------------------------------------------------------------------

// 3. Boolean

// Represents logical values: "true" or "false".

let isAdmin = true;
let isLoggedIn = false;

Example :

    var x = 10;
    var y = 20;
    var z = x > y;

    console.log(z);

    Output: false

// ---------------------------------------------------------------------------------------------------------------

// 4. Undefined

// A variable declared but not assigned a value has the type "undefined".

Example :

    var x; // undefined

    console.log(x);

    Output: undefined

// ---------------------------------------------------------------------------------------------------------------

// 5. Null

// Represents an intentional absence of any value. It is an object type.

Example :

    var x = null;

    console.log(x);

    Output: null

// ---------------------------------------------------------------------------------------------------------------

// 6. symbol

//  A unique and immutable value used as object keys.

Example :

let sym = Symbol('unique');

// ---------------------------------------------------------------------------------------------------------------

//  7.Bigint

// Represents integers larger than Number.MAX_SAFE_INTEGER.

Example : 

let bigNumber = 123456789012345678901234567890n;

// ---------------------------------------------------------------------------------------------------------------

// 8. Object

// A collection of key-value pairs.

Example :

    var x = { name: "John", age: 30 };

    console.log(x);

    Output: { name: "John", age: 30 }

// ---------------------------------------------------------------------------------------------------------------

// 9. Array

// An ordered list of values (can include mixed types).

Example :

var x = Symbol("Hello");

console.log(x);

Output: Symbol(Hello)

// ---------------------------------------------------------------------------------------------------------------

// 10.date

// Represents date and time.

Example :

let today = new Date();

// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------


FUNCTIONS :

// A function is a block of code designed to perform a particular task.
// A function is executed when we calls the function name.

Syntax :

    function <function name>( ) { };

Example :

    function JavaScript() {

        console.log("Hey there");

    };

    hi()  // we need to call the function name to execute

// ---------------------------------------------------------------------------------------------------------------    

// 1. Function Declaration

// A function declaration is the most common way to define a function.
// It's a named function that is hoisted to the top of its scope,
// meaning you can call it before it’s defined in your code.

// Hoisting: Function declarations are hoisted, so you can call the function before its definition

// Named Functions: The function has a name, which is used to call it.

Syntax :

    function functionName(parameters) {
        // Function body
        return value; // Optional

    }


Example :

    function add(x, y) {
    
        return x + y;

    };

console.log(add(10, 20));

Output: 30

// ---------------------------------------------------------------------------------------------------------------

// 2. Function Expression

// A function expression defines a function as part of an expression.
// These functions can be named or anonymous, 
// and they are not hoisted like function declarations.

// Not Hoisted: You cannot call a function expression before its definition

Syntax :

    const functionName = function(parameters) {
        // Function body
        return value; // Optional
    
    };

Example :

var add = function(x, y) {
    
    return x + y;

};

console.log(add(10, 20));

Output: 30

// ---------------------------------------------------------------------------------------------------------------

// 3. Arrow Function

// Arrow functions are a shorthand for writing functions in JavaScript.
// They are always anonymous and are especially useful for concise one-line functions.
// Arrow functions have a different behavior for this.

Syntax :

    const functionName = (parameters) => {
        // Function body
        return value; // Optional
    };

Example :

var add = (x, y) => x + y;

console.log(add(10, 20));

Output: 30



// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------


PARAMETERS :

// "parameters" refers to the variables or placeholders that you define when declaring a function.
// These parameters serve as inputs to the function and allow you to pass data into the function when you call it.

    function add(a,b) {

        console. log(a+b)
    
    }

    add(10,2)

    output: 12

// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------

RETURN :

//  the return keyword is used within a function to specify the value that the function 
//  should produce as its result or return to the caller. When a function is executed and encounters a 
//  return statement, it immediately stops executing and returns the specified value to the calling code.

Example :

    function add(a,b) {
   
        return (a+b)

    }

    let a = add(10,10)

    console.log(a)

    output: 20

// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------


CONDITIONAL STATEMENTS :

// 1. If Statement

    if (condition) {
        // Code to be executed if the condition is true
    }   // if the condition is false, the code inside the block will not be executed.

Example :
   
    var x = 10;
    if (x > 5) {

    console.log("x is greater than 5");

    }

    Output: "x is greater than 5"




// ---------------------------------------------------------------------------------------------------------------

// 2. If Else Statement

    if (condition) {
        // Code to be executed if the condition is true
    } else {
        // Code to be executed if the condition is false
    }

Example :

    var x = 10;
    if (x > 5) {

        console.log("x is greater than 5");

    } else {

        console.log("x is less than 5");

    }

Output: "x is greater than 5"

// ---------------------------------------------------------------------------------------------------------------

// 3. If Else If Statement

    if (condition) {
        // Code to be executed if the condition is true
    } else if ( condition ) {
        // Code to be executed if the condition is true
    } else {
        // Code to be executed if the condition is false
    }

Example :

    var x = 10;

    if (x > 5) {
    
        console.log("x is greater than 5");

    } else if (x < 5) {

        console.log("x is less than 5");

    } else {

        console.log("x is equal to 5");

    }

Output: "x is greater than 5"

// ---------------------------------------------------------------------------------------------------------------

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

Output: "x is equal to 10"



// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------



LOOPS :

// 1. For Loop

// In JavaScript, a for loop is a control flow statement used to repeatedly execute a block of
// code based on a specified condition.

// "FOR" loop stops when the condition we gave returns "false"

Syntax :

for (initialization; condition; iteration) {
     // Code to be executed in each iteration 

     // Initialization = Where to start
     // condition = Condition to be given
     // Iteration = How many times to iterate 
}

Example :

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

// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------


// DOM - Document Object Model

// DOM stands for Document Object Model, an interface for web documents
// that represents their structure as a tree-like object. It allows dynamic
// manipulation of page content using languages like JavaScript.

// the HTML DOM structure is in tree structure

// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------

// DOM Manipulation :

//   Selecting and Manipulating Elements Using ID

//     What is document.getEIementBylD() ?
//         It is a method in the Document Object Model (DOM) that allows you to select a
//         single element from the document using its unique ID attribute. IDs should be unique
//         within the document, meaning that there should be only one element with a specific
//         ID. If multiple elements have the same ID, this method will only select the first one it
//         encounters.

Example :

    <hl id="h1">Hello World</h1>

    // selecting hl tag
    var hi=document.getElementById("h1")
    console.log(hl.textContent)
    hl.textContent="Bye World"

// "document.getElementById" is used to get the ID from the HTML Document
// ".textContent" is used to manipulate the Text or Content Inside The ID 


// .textContent is used for tags with content like p,hi,Etc.
// .value is used for tags like input tag

// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------

Events :

// An event in JavaScript is an action or occurrence that happens
// within a web page, such as a user's interaction (clicking a button) or
// a page loading.

// Event                 Description

// onchange        -     An HTML element has been changed

// onclick         -     The user clicks an HTML element

// onmouseover     -     The user moves the mouse over an HTML element

// onmouseout      -     The user moves the mouse away from an HTML element

// onkeydown       -     The user pushes a keyboard key
 
// onload          -     The browser has finished loading the page


// OnClick Event :

Example :
    <body>
    <p id="subtit1e">Hello</p>
    <button onclick="changeword()">C1ick</button>
    </body>
    
    function changeword() {
    document.getE1ementById ("subtitle").textContent = "Bye"
    }
    
Output : Hello 
// after clicking button
         Bye



Event Handler :

// An event handler in JavaScript is a function that responds to an
// event when it occurs. It listens for specific events and executes
// code to perform actions based on those events, creating interactive
// and dynamic web applications.


// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------


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