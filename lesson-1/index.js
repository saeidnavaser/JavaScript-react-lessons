//this is my first javascript coding!
//console.log('Hello World');

//let name = 'Saeid';
//console.log(name);

//let firstName ='Saeid';
//let lastName = 'Navaser';
//console.log(firstName);
//console.log(lastName);

//let interestRate= 0.3;
//interestRate= 1;
//console.log(interestRate);

//let name = 'Saeid'; //String Literal
//let age = 31; //Number Literal
//let isApproved = false; //Boolean Literal (true or false)
//let firstName = undefined;
//let selectedColor = null;

let person ={
    name: 'Saeid',
    age: 31
};

console.log(person);

//Dot Notation
person.name = 'Ali';

//Bracket Notation
person['name']= 'Mary';

console.log(person.name);

//let selectedColor = ['red', 'blue'];
//selectedColor[2] = 'green';
//console.log(selectedColor);

let selectedColor = ['red', 'blue'];
selectedColor[2] = '1';
console.log(selectedColor.length);


//function greet(){
    //console.log('Hello World');
//}
//greet();

//performing a task
function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}

//greet('Saeid', 'Navaser');

//calculating a value
function square(number){
    return number * number;
}

let number = square(2);
console.log(number);