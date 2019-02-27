// // Function constructor

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// var Person = function (
//     name,
//     yearOfBirth,
//     job
// ) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     // this.calculateAge = function () {
//     //     console.log(2019 - this.yearOfBirth);
//     // }
// }

// // Adding a function to the Person prototype, the original function can be seen above
// Person.prototype.calculateAge =
//     function () {
//         console.log(2019 - this.yearOfBirth);
//     };

// // Giving all the objects the same 'lastName' value
// Person.prototype.lastName = 'Smith';

// var john = new Person(
//     'John',
//     1990,
//     'teacher'
// );

// var jane = new Person(
//     'Jane',
//     1968,
//     'designer'
// );

// var mark = new Person(
//     'Mark',
//     1948,
//     'retired'
// );

// console.log(john.name + ' ' + john.lastName);
// john.calculateAge();
// console.log(jane.name + ' ' + jane.lastName);
// jane.calculateAge();
// console.log(mark.name + ' ' + mark.lastName);
// mark.calculateAge();




// Object.create
var personProto = {
    calculateAge: function () {
        console.log(2019 -
            this.yearOfBirth);
    }
};

var john = Object.create(personProto);

john.name='John';
john.yearOfBirth = 1990;
john.job='teacher';

// Same functionality as with function constructor
// Object.create builds an object that directly inherits from the object passed as the first argument
// Gives the ability to directly specify which will be the object's prototype
var jane = Object.create(personProto, 
    {
        name: {value: 'Jane '},
        yearOfBirth: {value: 1969},
        job: {value: 'designer'}
    });