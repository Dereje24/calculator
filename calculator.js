/*
Dec 4th Coding Challenge

Assignment
It’s time to build an on-screen calculator
Build a function add() which takes two numbers and adds them together.
Build multiply, divide and subtract functions in a similar fashion.
Build a grid of <div>s in the browser that are labeled with the numbers 0-9.
Set up a listener so when the user clicks on one of these squares, it displays that number in the console log. This can be done by assigning a function to the onclick() property of the div (use this if you haven’t been introduced to jQuery listeners before). It’s okay to hard-code them in for now (e.g. onclick(function(){ console.log "1" }))
Now add “buttons” (more divs) to your calculator which represent “+”, “-“, “*”, “/”, “=” and “clear”.
Make your calculator work! This means that you’ll need to “save” the first number that is pressed (to a variable or array) and you’ll also need to “save” which operation has been chosen (e.g. addition). Once the equals sign is pressed, it should run a function which evaluates the expression by calling the simple functions you created earlier and outputting the result to the command line. It may take some practice to be able to pass the values from your “buttons” to your main calculator function. It’s a bit tricky, but you can do it.
Pressing “=” or “clear” should clear any saved variables or operations so you can start over.
Push your project to Github and share the solution below.
Extra credit: If you’re comfortable with jQuery, create a “screen” for your calculator – another <div> which displays the numbers and the results like a normal calculator would.
Extra credit: Create a “parent filter” which checks if the user has inputted any immature numbers “e.g. 80085” and scolds the user if so.
*/

var numberMap = {
	'zero': 0,
	'one': 1,
	'two': 2,
	'three': 3,
	'four': 4,
	'five': 5,
	'six': 6,
	'seven': 7,
	'eight': 8,
	'nine': 9,
}



var numberElements = document.getElementsByClassName("number");
var operatorElements = document.getElementsByClassName("operators");
var decimal = document.getElementById("decimal");
var clear = document.getElementById("clear");
var displayDiv = document.getElementById("display");
var equalsButton = document.getElementById("equals");


var input =	[];
var display = "";
var operatorClicked = false;
var temp = 0;
var operator = '';
var result = 0;
var num1 = "";
var num2 = "";
var operator = "";


decimal.addEventListener("click", function(event) {
	if (operatorClicked) {
		num2 = num2 + ".";
		updateDisplay(num2);
	}
	else {
		num1 = num1 + ".";
		updateDisplay(num1);
	}
})

clear.addEventListener("click", function(event) {
	num1 = "";
	num2 = "";
	operator = "";
	operatorClicked = false;
	updateDisplay("");
})

equalsButton.addEventListener("click", function(event) {
	var result = getResult(operator, parseFloat(num1), parseFloat(num2));
	updateDisplay(result);
})

function updateDisplay(display) {
	displayDiv.innerHTML = display;
}




function makeNumberCallback(elem) {
	return function() {
		var id = elem.getAttribute("id");
		// input.push(id);
		if (operatorClicked) {
			num2 = num2 + numberMap[id].toString(); // 7
			updateDisplay(num2);
		}
		else {
			num1 = num1 + numberMap[id].toString();
			updateDisplay(num1);
		}

		// display = display + numberMap[id];
		// updateDisplay(display);
		// console.log(input);
	}
}

function makeOperatorCallback(elem) {
	return function() {
		var id = elem.getAttribute("id");
		input.push(id);
		operatorClicked = true;
		operator = id;
		console.log(input);
	}
}

for (var i = 0; i < numberElements.length; i++) {
	var elem = numberElements[i];
	elem.addEventListener("click", makeNumberCallback(elem));
}

for (var i = 0; i < operatorElements.length; i++) {
	var elem = operatorElements[i];
	elem.addEventListener("click", makeOperatorCallback(elem));
}







// add function
function add(num1, num2){
	return num1 + num2;
}
// subtract function
function subtract(num1, num2){
	return num1 - num2;
}
// multiply function
function multiply(num1, num2){
	return num1 * num2;
}
// divide function
function divide(num1, num2){
	return num1 / num2;
}


// functionality

//document.getElementById('one').onclick = function () {console.log(1)};

function getResult(operator, num1, num2){
	//console.log("operator: ", operator);

	switch (operator) {
		case 'add': {
			var result = add(num1, num2);
			return result;
		}
		case 'subtract': {
			var result = subtract(num1, num2);
			return result;
		}
		case 'multiply': {
			var result = multiply(num1, num2);
			return result;
		}
		case 'divide': {
			var result = divide(num1, num2);
			return result;
		}
		default: {
			throw new Error('Operator not recognized: ', operator);
		}
	}

}

function clear(){

var input = ["","",""];
temp = 0;
operatorHolder = '';
result = 0;
}
/*
var calcButtons = function (num){
	document.body.getElementByClassName("number");
	addListener(calcButtons);		
}
*/
