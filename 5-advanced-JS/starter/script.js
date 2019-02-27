// Function constructor

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function (
    name,
    yearOfBirth,
    job
) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function () {
        console.log(2019 - this.yearOfBirth);
    }
}

var john = new Person(
    'John',
    1990,
    'teacher'
);

john.calculateAge();

var jane = new Person(
    'Jane',
    1968,
    'designer'
);

jane.calculateAge();

var mark = new Person(
    'Mark',
    1948,
    'retired'
);

mark.calculateAge();