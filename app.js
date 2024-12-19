var name = 'Vence';
const STATES = 50;  // number of states in the U.S.
var sum = (5 + 4);

sayHello();
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

var vegetables = ["Carrots","Spinach", "Broccoli", "Eggpant"];

for (i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);
}

var pet = {
    name: 'Jaylin',
    breed: 'short-hair'
}

console.log(pet);

//array of objects with people's name and age
const list1 = [
    {name: 'Charles', age: 25},
    {name: 'Abby', age: 27},
    {name: 'James', age: 18},
    {name: 'John', age: 17},
    {name: 'Vence', age: 32},
];    


//checkAge(list1[2].name, list1[2].age)


for (i=0; i < list1.length; i++) {
    checkAge(list1[i].name, list1[i].age);    
}

var wordLength = getLength('Hello World');

if (wordLength % 2 == 0) {
    console.log('The world is nice and even!');
} else {
    console.log('The world is an odd place!');
}

function sayHello() {
    console.log('Hello World!');
}

function checkAge(name, age) {
    if (age < 21) {
        console.log("Sorry " + name + ", you aren't old enough to view this page!");

    }
}

function getLength(word) {
    return word.length;
}