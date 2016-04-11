//1  creating a script with two variables assigned to them  and adding them together

var a =3;
var b =4;

a+b ; 

7 
// adding two strings together
var c="its monday blues"
var d=" but you can change that :)"

c+d;

//Its monday blues but you can change that :)
//2    

var food = [
			[ "pasta"  ,"pasta sauce" ,"garlic bread"  ],
			[ " mac n cheese" ,"greens" ,"sweet potatoes"  ]
];

console.log (food[1][0]);
console.log (food[0][0]);
console.log (food[0][2]);


//3 Write a script that checks if a variable is less than 10.
  function add (a,b){ 
	if (a<10) { 
		console.log ("the variable is less than 10")}
		 	else {
		 		console.log(" the variable is more than 10")

		 }

		}
		
add(5,10)  //checking  to see if it works 
add(6,7)
add(12,2)

		//5
		// Writing a string stores in a variable to see if it is same as another
		
	function stringCheck(x,y){
		if(x===y){
			console.log("these strings match")
			}
				else{
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

	return alert(x);
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
var classmates = ["kim","kasim","sonia","gio","greg"]

	for (var i =0 ; i<classmates.length;i++){

		console.log(classmates[i]+" is my classmate")
											}

//9
// DIFFERENT DATA TYPES
// boolean - true/false
// arrays-  var array= ["the","yes"]
//functions  -function (a){   return a}
// objects - var lamp = {desc:"lamp",lightType:"black light"}
//variable var a;
//string - "hello world "

// 10
//how to make a comment  in javascript 










