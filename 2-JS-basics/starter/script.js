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
