console.log("Hello World");

// 1. cannot be a reserved keyword
// 2. names should be meaningful
// 3. cannot start with a number 
// 4. cannot contain a space or hyphen (-)
// 5. names are case-sensitive
let firstName, lastName, fullName;
firstName = 'Julian'; // String literal
lastName = 'Shen';
fullName = firstName + " " + lastName;
let age = 33; // Number literal
let isApproved = true; // Boolean literal
console.log(fullName);
const person1 = {
	firstName: 'Julian',
	lastName: 'Shen',
	fullName: firstName + ' ' + lastName,
	age: 33
};
const person2 = {
	firstName: 'Susan',
	lastName: 'Emberton',
	fullName: firstName + ' ' + lastName,
	age: 36
};

// Dot Notation
console.log(person1.lastName);

// Bracket Notation
console.log(person2['age']);

// Output object
console.log(person2);

// =========================

// arrays are dynamic and can store different types
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 3290.1930;
console.log(selectedColors);
console.log(selectedColors.length);

// ===========================

// function is performing a task
function greet(name) {
	if(isApproved) {
		console.log('Hello ' + name);
	}
}
greet(person1.fullName);
greet(person2.fullName);

// Calculating a value
function square(number) {
	return number * number;
}
let number = square(2);
console.log(number);
