//1  creating a script with two variables assigned to them  and adding them together

var a =3;  
var b =4;
var c =a+b;
	c =7 ;  
// adding two strings together
var c = "its monday blues"
var d = "but you can change that"
var e = c+d; 
   	e=Its monday blues but you can change that  // will print out 


//2    

var food = [
	[ "pasta"  ,"pasta sauce" ,"garlic bread"  ],
	[ " mac n cheese" ,"greens" ,"sweet potatoes"  ]
];

console.log (food[1][0]);  // prints out mac n cheese 
console.log (food[0][0]); // prints out pasta
console.log (food[0][2]);//  prints out garlic bread


//3 Write a script that checks if a variable is less than 10.
function add (a,b){ 
	if (a<10) { 
		console.log ("the variable is less than 10");
		 	}else{
		 		console.log(" the variable is more than 10");

		 	}
}
//checking  to see if it works	
add(5,10)
add(6,7)   
add(12,2)

//5
// Writing a string stores in a variable to see if it is same as another
		
function stringCheck(x,y){
		if(x===y){
			console.log("these strings match")
			}else{
				console.log("these strings dont match");
			}
}
		 

stringCheck("yeah","yeah")
stringCheck("no","the")
stringCheck("sure","notsure")

// 6 
//Declaring a function that takes in a name as an argument
// and tells the user what name they endtered 
function name(x) {
	return alert(x)
}

name("mandisa");


//7
// Declaring a function that takes no arguments 
//but prints something to the console

function empty(){
	console.log("hey");
}


//8 
//for loop how to print out an array with a for loop 
var classmates = ["kim","kasim","sonia","gio","greg"];

for (var i =0 ; i<classmates.length;i++){
		console.log(classmates[i]+" is my classmate");
}

//9
// DIFFERENT DATA TYPES

// BOOLEAN
// true/false
// In programming many times you need a data type to only have one
// or two answers such as yes/no or true/false when you need that you will
// use the Boolean technique .Boolean test only true or false you can use the
// Boolean function find out if a function is true
// booleans determines whether an element is true or false 
//ex. 
//  9>10 = false
//  10>0 = true
// 	arrays - var array= ["the","yes"];
//

//FUNCTION
// function is a enclosed block of code with a name 
//function threeFour(a){  
// 	return a;
//	}

// OBJECT
// an object  has properties and methods 
//var lamp = {desc:"lamp",lightType:"black light"};
//VARIABLE
// variable is similiar to a box where you can add a variety of elements to it 
// var a; this is declaring a variable    labeling the box 
// a = 1;  this is assigning a variable    add something to the box 
// var a = 1 ; this is assining and declaring a variable 

//STRING 
// strings store a series of characters 
/// ex. "hello world "

// 10
//how to make a comment  in javascript 
 
 // LOGIC
//  you can use the boolean for logic in javscript there are signs as well 
// comparison operators
//comparison operators
// >greater than

// < less than

// <=less than or equal to

// +>greater than or equalto

// === equal to

// !== not equal to
 
 // DEBUGGING 
 // in debugginh you can also make comment on your code so you  know how each section work 
/// allows you to break  your scrip 
// ex. 
//	console.log("hey")
// debugger;
// alert('I'm a bug!')
//  the debugger will stop your code
 
 
 // TESTING
 // to test a code you can use console.log 
 // you can also use the alert box as well  to see if a function or jqeury works









