///////////////////////////////////////

// // EXECUTION CONTEXT

// var name = 'noel';

// function first() {
//     var a = 'hello!';
//     second();
//     var x = a + name; // hello!noel
//     console.log('First!', x);
// }

// function second() {
//     var b = 'hi!';
//     var z = b + name; // hi!noel
//     console.log('Second!', z);
// }

// first();

// // Second! hi!noel
// // First! hello!noel

////////////////////////////////////////

// Lecture: Hoisting


// // START - FUNCTION DECLARATION {
// calculateAge(1965);

// // function declaration -- This works, hoisting works for declarations
// function calculateAge(year) {
//     console.log((new Date()).getFullYear() - year);
// }
// // } END - FUNCTION DECLARATION


// // START - FUNCTION EXPRESSION {
// // function expression -- hoisting does not work for expressions
// // retirement(1965); <-- This will break, has to be declared after the function expression
// let retirement = function(year) {
//     console.log(65 - ((new Date()).getFullYear() - year));
// }
// retirement(1990);
// // } END - FUNCTION EXPRESSION


// // // variables
// console.log(age); // undefined
// var age = 23;
// console.log(age); // '23'

// function foo() { 
//     console.log(age); // undefined 
//     var age = 65;
//     console.log(age); // '65'
// }
// foo();
// console.log(age); // '23'


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';       // store a
first();                // run first()

function first() {
    var b = 'Hi!';      // store b
    second();           // run second()

    function second() {
        var c = 'Hey!'; // store c
        console.log(a + b + c); // 
    }
}
// */


// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

// // console.log(this);

// calculateAge(year);

// function calculateAge(year) {
//     console.log(((new Date()).getFullYear()) - year);
//     console.log(this);
// }

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(((new Date()).getFullYear()) - this.yearOfBirth); 

        /*
        function innerFunction() {
            console.log(this); // !!!!!! Points to the Window object, not the john object
        }
        innerFunction();
        */
        
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1965,
}

mike.calculateAge = john.calculateAge;

mike.calculateAge();



