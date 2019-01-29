console.log('Hello World! 😀');
console.log('Goodbye World! 😀');

/**
 * Variables and data types
 */

// var firstName = 'John';
// var age = 28;
// var fullAge = true;
// var job;
// var love = null;

// console.log('firstName: ', firstName);
// console.log('age: ', age);
// console.log('fullAge: ', fullAge);
// console.log('job: ', job);
// console.log('love: ', love);

/**
 * Variable mutation and type coercion
 */

// var firstName = 'John';
// var age = 28;

// // Type coercion
// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(job, isMarried);
// console.log(firstName + ' is a ' + age + ' years old ' + '. Is he married? ' + isMarried);

// // Variable mutation
// age = 'twenty eight'
// console.log(age);
// job = 'driver';
// alert(job);

// var lastName = prompt('What is his last Name?');
// console.log('His last name is: ', lastName);

/**
 * Basic Operators
 */

// var now, yearJohn, yearMark;
// now = 2020;
// ageJohn = 28;
// ageMark = 33;
//  // Math Operators

//  yearJohn = now - ageJohn;
//  yearMark = now - ageMark;
//  console.log(yearJohn);
//  console.log(yearMark);

//  console.log(now + 2);
//  console.log(now * 2);
//  console.log(now / 10);

//  // Logical Operators
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder); //false
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder); //true

// // typeof Operator
// console.log(typeof johnOlder); //boolean
// console.log(typeof ageJohn); //number
// console.log(typeof 'Mark is older than John'); //string
// var x;
// console.log(typeof x); //undefined

/**
 * Operator precedence
 * * Operator Precedence MDN
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
 */

// now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// var isFullAge = now - yearJohn >= fullAge; // first the math operator (-), then the logical operator (>=)
// console.log(isFullAge); // true

// x = y = (3+5) * 4-6; //26 -> 8 * 4 - 6 -> 32 - 6
// console.log(x,y); //26 26

// // More Operators
// x = x * 2
// console.log(x);
// x *= 2
// console.log(x);

/**
 * Coding Challenge
 */

// // formula for BMI = mass / height ^ 2 | mass in kg, height in m
// let bmi = (mass, height)  => {
//     return mass / height ** 2
// }

// johnMass = 80;
// johnHeight = 1.8;
// markMass = 67;
// markHeight = 1.72;

// if(bmi(johnMass, johnHeight) > bmi(markMass, markHeight)) {
//     // console.log('John\'s BMI is bigger than Mark\'s: ')
//     result = false;
// } else {
//     // console.log('Mark\'s BMI is bigger than John\'s: ')
//     result = true;
// }

// console.log('Is Mark\'s BMI higher than John\'s? ', result);

// console.log(bmi(johnMass, johnHeight));
// console.log(bmi(markMass, markHeight));

/**
 * If / esle statements
 */

// var firstName = 'John';
// var civilStatus = 'single';

/**
 * Boolean Logic
 */

// var firstName = 'John';
// var age = 16;

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager.');
// } else {
//     console.log(firstName + ' is a man.');
// }

/**
 * Ternary operator and Switch statements
 */

// var firstName = 'John';
// var age = 16;

// // Ternary operator
// age >= 18 ? console.log(firstName + ' drinks beer.')
//     : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// // // if / else -->
// // if (age >= 18) {
// //     var drink = 'beer';
// // } else {
// //     var drink = 'juice';
// // }

// // Switch statement
// var job = 'teacher';
// // var job = 'driver';
// // var job = 'designer';
// // var job = ''; // default

// switch (job) {
//     case 'teacher':
//         console.log(firstName + ' teaches kids how to code');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in Lisbon');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites');
//         break;
//     default:
//         console.log(firstName + ' does something else');
// }

// // if (age < 13) {
// //     console.log(firstName + ' is a boy.');
// // } else if (age >= 13 && age < 20) {
// //     console.log(firstName + ' is a teenager.');
// // } else {
// //     console.log(firstName + ' is a man.');
// // }

// // ^ if / else --> switch statement
// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.');
//         break;
//     default:
//         console.log(firstName + ' is a man.');
// }

/**
 * Truthy and Falsy values and equality operators
 */

// falsy values: undefined, null, 0, '', NaN --> converted to false, when evaluated in a truth/false condition
// truthy values: NOT falsy values

// var height;

// height = 0;

// if (height || height === 0) {
//     console.log('the var is defined');
// } else {
//     console.log('the var has NOT been defined');
// }

// // Equality operator
// height = 23;

// if(height == '23') { // NOT strict equality operator
//     console.log('The == operator does type coercion!');
// }

/**
 * Coding Challenge 2
 */
// var johnTeam = [89, 120, 103];
// var mikeTeam = [116, 94, 123];
// var maryTeam = [97, 134, 105];

// const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;

// const johnResult = average(johnTeam);
// const mikeResult = average(mikeTeam);
// const maryResult = average(maryTeam);

// var winer = 0;

// switch (true) {
//     case (johnResult > mikeResult && johnResult > maryResult):
//         console.log('John is the winner!');
//         break;
//     case (mikeResult > johnResult && mikeResult > maryResult):
//         console.log('Mike is the winner!');
//         break;
//     case (maryResult > johnResult && maryResult > mikeResult):
//         console.log('Mary is the winner!');
//         break;
//     default:
//         console.log('Its a tie!! ' + johnResult + ' - ' + mikeResult + ' - ' + maryResult);
// }

// console.log('John\'s team : ' + johnResult);
// console.log('Mike\'s team : ' + mikeResult);
// console.log('Mary\'s team : ' + maryResult);

/**
 * Functions
 */
// function calculateAge(birthYear) {
//     return (new Date()).getFullYear() - birthYear;
// }

// // let userIn = prompt('Please enter the year you were born!')
// // console.log(calculateAge(userIn));
// let ageJohn = calculateAge(1988);
// let ageMike = calculateAge(1982);
// let ageMary = calculateAge(1994);

// console.log(ageJohn, ageMike, ageMary);

// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(firstName + ' is already retired.');
//     }
// }

// yearsUntilRetirement(1999, 'John');
// yearsUntilRetirement(1969, 'Mike');
// yearsUntilRetirement(1948, 'Mary');

/**
 * Function Statements and Expressions
 */

// // Function declaration
// // function whaatDoYouDo(job, firstName) {}

// // Function expression
// var whatDoyouDo = function(job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code.';
//         case 'driver':
//             return firstName + ' drives an uber in Lisbon.';
//         case 'designer':
//             return firstName + ' designs beautiful websites!';
//         default:
//             return firstName + ' does something else.';
//     }   
// }

// console.log(whatDoyouDo('teacher', 'John'));
// console.log(whatDoyouDo('designer', 'Jane'));
// console.log(whatDoyouDo('retired', 'Mike'));

/**
 * Arrays
 */
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);

// // Initialize new array
// console.log(names[0]);
// console.log(names);
// console.log(names.length);

// // Mutate array data
// names[1] = 'Ben';
// names[names.length] = 'Mary';
// names.push('Peter');

// console.log(names);

// // Different data types
// var john = ['John', 'Smith', 1990, 'teacher', false];

// john.push('Blue');      // adds to the end
// john.unshift('Mr.');    // adds to the beginning

// console.log(john);

// john.pop();     // removes element in the end
// john.pop();     // removes element in the end
// john.shift();   // remove element in the beginning
// console.log(john);

// // console.log(john.indexOf(1990)); // 2

// // console.log(john.indexOf('designer')); // -1

// var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer'; // NOT
// console.log(isDesigner); 

/**
 * Coding Challenge 3
 */

// let bills = [124, 48, 268];
// let tips = [];
// let finalPaid = [];

// // MDN - round the number to two decimal places
// function roundToTwo(num) {
//     return +(Math.round(num + "e+2") + "e-2");
// }

// let tipCalc = function (bill) {
//     if (bill < 50) {
//         tip = bill * .2;
//         return roundToTwo(tip);
//     } else if (bill >= 50 && bill <= 200) {
//         tip = bill * .15;
//         return roundToTwo(tip);
//     } else if (bill >= 200) {
//         tip = bill * .1;
//         return roundToTwo(tip);
//     } else {
//         console.log('Problem!');

//     }
// }

// bills.forEach(function(num) {
//     tips.push(tipCalc(num));
//     finalPaid.push(num+tipCalc(num));
// });

// console.log('The bills array: ', bills);
// console.log('The tips array: ', tips);
// console.log('The final paid array: ', finalPaid);

/**
 * Objects and properties
 */
// Object literal
// let john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false
// };

// console.log(john.firstName);
// var x = 'birthYear';
// console.log(john['lastName']);
// console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

// // new Object syntax
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);

/**
 * Objects and methods
 */

// let john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function(){
//         this.age = (new Date()).getFullYear() - this.birthYear; // Current/systems year
//     }
// };

// // console.log(john.calcAge());
// john.calcAge();
// console.log(john);

/**
 * Coding Challenge 4
 */

// let john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 62,       // in kg
//     height: 1.71,    // in metres
//     // mass: 80,       // in kg
//     // height: 1.8,    // in metres
//     calcBMI: function(){
//         return this.bmi = this.mass / this.height**2
//     }
// }

// john.calcBMI();

// // console.log(john.firstName + ' ' + john.lastName + '\'s BMI is: '  + john.bmi + '.');

// let mark = {
//     firstName: 'Mark',
//     lastName: 'Doe',
//     // mass: 62,       // in kg
//     // height: 1.71,    // in metres
//     mass: 80,       // in kg
//     height: 1.8,    // in metres
//     calcBMI: function(){
//         this.bmi = this.mass / this.height**2
//     }
// }

// mark.calcBMI();

// // console.log(mark.firstName + ' ' + mark.lastName + '\'s BMI is: '  + mark.bmi + '.');

// if (john.bmi > mark.bmi) {
//     console.log(john.firstName + ' ' + john.lastName + '\'s BMI is: '  + john.bmi + ', higher than ' + mark.firstName + '\'s BMI.');   
// } else if (john.bmi < mark.bmi) {
//     console.log(mark.firstName + ' ' + mark.lastName + '\'s BMI is: '  + mark.bmi + ', higher than ' + john.firstName + '\'s BMI.');   
// } else {
//     console.log('Both ' + john.firstName + ' and ' + mark.firstName + ' have the same BMI!');
// }

/**
 * Loops and iteration
 */

// // for Loop
// let john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

// for(let i = 0; i < john.length; i++) {
//     console.log(john[i]);
// }

// // while Loop
// let i = 0;
// while(i < john.length) {
//     console.log(john[i]);
//     i++;
// }

// // continue and break statements
// let john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

// // continue
// for (let i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') continue; // only type of string elementd will be printed, because of this condition
//     console.log(john[i]);
// }

// // break
// for (let i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') break; // --> John , Smith , exits the loop
//     console.log(john[i]);
// }

// // Looping backwards
// console.log('Backwards iteration: end --> beginning');
// for (let i = john.length - 1; i >= 0; i--) {
//     console.log(john[i]);
// }