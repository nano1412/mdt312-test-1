// console.log(Math.PI);
// console.log(Math.round(4.7));
// let a = Math.pow(8, 2);
// console.log(a);

// let intwhile = 0;
// let sumwhile = 0;
// let sumfor = 0;

// console.log("while loop mod 2 and 5");
// while(intwhile <= 99){
//     if(intwhile % 2 == 0 || intwhile % 5 == 0){
//         console.log(intwhile);
//         sumwhile = sumwhile + intwhile;
//     }
//     intwhile = intwhile + 1;
// }
// console.log("sum of number that can be devide by 2 and 5 between 0 - 99 is " + sumwhile);

// console.log("for loop mod 3 and 5");
// for(let intfor = 0; intfor <=99 ; intfor = intfor + 1){
//     if(intfor % 3 == 0 && intfor % 5 == 0){
//         console.log(intfor);
//         sumfor = sumfor + intfor;
//     }
// }
// console.log("sum of number that can be devide by 3 and 5 between 0 - 99 is " + sumfor);


// For loop
// var sum = 0;
// for (var i = 0; i < 100; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// While loop
// var sum = 0;
// var i = 0;
// while (i < 100){
//     sum = sum+i;
//     i += 1;
// }
// console.log(sum);

// Array
// var name = [];
// var names = [5,8,9,7,4,10];
// console.log(names[5]);
// names[5] = 6;
// console.log(names);

// var names = new Array(5,8,9,7,4,10)
// console.log(names[4]);

// Array method
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// fruits.push("Mango");
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// fruits.unshift("Banana");
// console.log(fruits);

// fruits.sort();
// console.log(fruits);

// Array object
// var person = [];
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 46;
// var x = Object.keys(person).length; 
// console.log(x);

// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 46
// };
// console.log(person);
// console.log(person.lastName);
// console.log(person["lastName"]);

// Array method in Object
// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 46,
//     fullName : function() {
//         return this.firstName + " " + this.lastName;
//       }
// };
// console.log(person.fullName());

// For of
// let cars = ["BMW", "Volvo", "Mini"];
// let text = "";

// for (let x of cars) {
//   text += x + "  ";
// }
// console.log(text);

// Unobtrusive event handlers
// function myFunction(){
// 	alert("Hello!"); 
// }

// function pageLoad(){
// 	var clickButton = document.getElementById("clickme");
// 	clickButton.onclick = myFunction;
// }

window.onload = pageLoad;

// Form element
window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
	form.onsubmit = myFormfunction;
}

function myFormfunction(){
	alert("OK");
	var x = document.forms["myForm"]["firstname"];
	alert(x.value);
}

// URL parameter
const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);
const firstname = urlParams.get('firstname')
console.log(firstname);

const lastname = urlParams.get('lastname')
console.log(lastname);