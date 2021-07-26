# JavaScript Projects
*Developed for educational purposes*
## Overview
These are Javascript Projects from basic to intermeadiate programming. There are 10 Basic Projects reviewing JS fundamentals, and 3 Projects putting these skills to the test.  Explore the code below:
### Basics
- [Alert](#alert)
- [Functions](#functions)
- [Operators](#operators)
- [Dictionaries](#dictionaries)
- [Type Coercion](#type-coercion)
- [Ternary Operators and Constructors](#ternary-operators-and-constructors)
- [Time and Scope](#time-and-scope)
- [ String Methods](#string-methods)
- [Countdown Slideshow](#countdown-slideshow)
- [Loops and Arrays](#loops-and-arrays)

### Projects
-  [Calculator](#calculator)
-  [Tik Tac Toe](#tik-tac-toe)
-  [Pizza Project](#pizza-project)

## Basics
### Alert
```js 
// alert('Hello World!');
window.alert('Hello World'); // Popup Message
document.write('Hello again?'); // Write text on page
var hello = 'Don\'t say hello to me lol'; // Variable Declaration
window.alert(hello); // display variable string on screen

// String Concatenation
document.write('Hello! '
+ 'My name is Daniel '
+ 'This is call concatenating a string.'
);
var test = ('Concatenated' + ' String');
document.write (test);
var drinkType = 'Latte', carShot = 'Caramel Syrup', vanShot = 'Vanilla Syrup', hazShot = 'Hazelnut Syrup';
var vanShot = vanShot.fontcolor('blue'); // set font color to blue

document.write(vanShot);
Document.write(3+3);
```
### Functions
```js
function colorChangeG() {
var str = "Green Text";
var result = str.fontcolor('green');
document.getElementById('green-text').innerHTML = result;
}

function colorChangeB() {
var str = "Who's There?"
var result = str.fontcolor('blue');
document.getElementById('links-hover').innerHTML = result;
}
```
### Operators
```js
function stringC() { //create function 'stringC()'
var sentence = "My name is"; //declare variable and set to string
sentence += " Daniel Warren"; //concatenate string variable
document.getElementById('Concatenate').innerHTML = sentence; //set content of ID to variable sentenc

}
```
### Dictionaries
```js
function birthMonth() {
var userSign = {
January : 'Capricorn',
Febuary : 'Aquarius',
March : 'Pisces',
April : 'Aries',
May : 'Taurus',
June : 'Gemini',
July : 'Cancer',
August : 'Leo',
Septemmber : 'Virgo',
October: 'Libra',
November : 'Scorpio',
December : 'Sagittarius',
Month: 'Remove From Dictionary' //test removing a KVP
};
delete userSign.Month;
document.getElementById('user-sign').innerHTML = userSign.Month; //diplaying removed item returns undefined
}
```
### Type Coercion
```js
document.write(typeof "Hello"); //Displays a String
document.write("<br>") //break
document.write(typeof 3); //Displays a Number

function My_Function() {
document.getElementById("Test").innerHTML = 0/0; //NaN (Not a Number) because 0/0 is undefined
document.getElementById("Test").innerHTML = isNaN('Hello'); //True because a string is not a number
document.getElementById("Test").innerHTML = isNaN('007'); //False because an integer is a number
}

document.write("<br>") //break
document.write(2E310); // displays infinity (higher than floating max number)
document.write("<br>") //break
document.write(-2E310);
document.write("<br>") //break

//------------------------
// BOOLEAN LOGIC T/F
//------------------------

//GREATER THAN
document.write( 10 > 2);
document.write("<br>") //break

//LESS THAN
document.write( 10 < 2);
document.write("<br>") //break

//AND &&
document.write( [10 < 2] && [5 > 1]);
document.write("<br>") //break
document.write( [10 > 2] && [5 > 1]);
document.write("<br>") //break

//OR ||
document.write( [10 < 2] || [5 > 1]);
document.write("<br>") //break
document.write( [10 < 2] || [5 < 1]);
document.write("<br>") //break

//NOT !
function not_Function() {
document.getElementById('Not').innerHTML = !(20>1); //returns opposite values
}

//CONSOLE.LOG
console.log(2+14);
console.log(2 > 14);

//Compare Vaule for equality use '=='
document.write(12 == 12);
document.write("<br>") //break
document.write(4 == 12);
document.write("<br>") //break

//Compare data type & equality use '==='
x = "Hello";
y = 5;

document.write(x===y)
document.write("<br>") //break
X = "Hello";
Y = "Hello";
document.write(X===Y);
```
### Ternary Operators and Constructors
```js
function Ride_Function() {
var Height, Can_Ride;
Height = document.getElementById('Height').value;
Can_Ride = (Height < 52) ? "You are too short" : "You are tall enough";
document.getElementById('Ride').innerHTML = Can_Ride + " to ride."
}

//virifies user age is over 18 to vote
function verifyAge() {
var age, canVote;
age = document.getElementById('age').value;
canVote = (age < 18) ? "You are not old enough to vote" : "You can vote!";
document.getElementById('verified').innerHTML = canVote;
}

//keywords and constructors
function Vehicle(Make, Model, Year, Color) {
this.Vehicle_Make = Make;
this.Vehicle_Model = Model;
this.Vehicle_Year = Year;
this.Vehicle_Color = Color;
}

var Jack = new Vehicle('Dodge', 'Viper', 2020, 'Red');
var Emily = new Vehicle('Jeep', 'Trail Hawk', 2019, 'White and Black');
var Erik = new Vehicle('Ford', 'Pinto', 1971, 'Mustard');

function myFunction() {
document.getElementById('Keywords_and_Constructors').innerHTML =
"Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Make +

" " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year + ".";

}

//Basic Profile using 'new' & 'this'
function userProfile(Name, Age, Email, Username, Password) {
this.userProfile_Name = Name;
this.userProfile_Age = Age;
this.userProfile_Email = Email;
this.userProfile_Username = Username;
this.userProfile_Password = Password;
}

var Daniel = new userProfile('Daniel Warren', 21, 'dnlwrn@outlook.com', 'dnlwrn', '********');

function viewUser() {
document.getElementById('listUserProfile').innerHTML =
"Name: " + Daniel.userProfile_Name + "<br>Age: " + Daniel.userProfile_Age + "<br>Email: " +
Daniel.userProfile_Email + "<br>Username: " + Daniel.userProfile_Username + "<br>Password: " + Daniel.userProfile_Password;

}

//count nested function
function count_Function() {
document.getElementById('counting').innerHTML = Count();

function Count() {
var Starting_point = 9;

function Plus_one() {Starting_point += 1;}
Plus_one();

return Starting_point;

}

}
```
### Time and Scope
```js
var x = 55;
function Add_numbers_1() {
document.write(20 + x + "<br>");
}

function Add_numbers_2() {
document.write(x + 100);
}

Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() {
var x = 10;
console.log(15 + x);
}

function Add_numbers_4() {
console.log(x + 100);
}

Add_numbers_3();
Add_numbers_4();

//Date().getHours() method
function myFunction(){
if(new Date().getHours() < 12) {
document.getElementById('text-replace').innerHTML = "Good Morning";
}
else{
document.getElementById('text-replace').innerHTML = "Good Afternoon";
}

}

//Senior Discount Ex.
function Age_Function() {
Age = document.getElementById('Age').value;
if (Age >= 65) {
discount = "You get a 15% discount";
}

else {
discount = "You are too young to recieve the senior discount";
}
document.getElementById("userDiscount").innerHTML = discount;
}

//else if example
function Time_Function() {
var Time = new Date().getHours();
var Reply;
if (Time < 12 == Time > 0){
Reply = "It is Morning";
}
else if (Time >= 12 == Time < 18) {
Reply = "It is Afternoon";
}
else {
Reply = "It is Evening";
}
document.getElementById('Time_of_day').innerHTML = Reply;
}
```
### String Methods
```js
function full_Sentence() {
var part_1 = "I have ";
var part_2 = "made this ";
var part_3 = "into a complete ";
var part_4 = "sentence. "
var whole_sentence = part_1.concat(part_2, part_3, part_4);
document.getElementById('Concatenate').innerHTML = whole_sentence;
}

function slice_Method() {
var Sentence = "Hello, My name is Daniel";
var Section = Sentence.slice(18,24);
document.getElementById("Slice").innerHTML = Section;
}

//.toUpperCase capitalizes text in a string
var Name = "Daniel";
var Name = Name.toUpperCase();
document.write(Name);

//.search for index of match
function findNum() {
var str = "I am 21 Years old";
var n = str.search('21');
document.getElementById('userNum').innerHTML = n;
}

//.toString
function string_method() {
var x = 900;
document.getElementById('Numbers_to_string').innerHTML = x.toString();
}

//precision method
function precision_method() {
var X = 12938.12345647;
document.getElementById('Precision').innerHTML = X.toPrecision(8);
}

//tofixed rounds decimal place
function roundNum() {
var num = 24.221144;
var n = num.toFixed(2);
document.getElementById('value').innerHTML = n;
}

//valueOf
function myFunction() {
var str = "This is text";
var res = str.valueOf();
document.getElementById("string").innerHTML = res;
}
```
### Countdown Slideshow
```js
function countdown() {
var seconds = document.getElementById('seconds').value;
function tick() {
seconds = seconds - 1;
timer.innerHTML = seconds;
setTimeout(tick, 1000);
if (seconds == -1){
alert("Time's Up!");
}
}

tick();
}
```
### Loops and Arrays
```js
//print 0 - 100 by 10's
function Call_Loop() {
var Digit = "";
var x = 0;
while (x <= 100) {
Digit += "<br>" + x;
x = x + 10;
}
document.getElementById("Loop").innerHTML = Digit;
}

//print pizza types
var pizza = ["Cheese", "Pepperoni", "Sausage", "Supreme"];
var content = "";
var i;
function for_loop() {
for(i=0; i < pizza.length; i++) {
content += pizza[i] + "<br>";
}
document.getElementById('List_of_Pizza').innerHTML = content;
}

//array display user mood
function user_mood() {
var feeling = [];
feeling[0] = 'Happy';
feeling[1] = 'Sad';
feeling[2] = 'Mad';
feeling[3] = 'Excited';
document.getElementById('array').innerHTML = "Today you are feeling " + feeling[3] + ".";
}

//contants
function constant_function() {
const newCar ={year : '2018', type : 'Ford', model : 'Focus'};
newCar.year = '2019';
document.getElementById('constant').innerHTML = 'I drive a ' + newCar.year + " "
+ newCar.type + " " + newCar.model + ".";
}

let t = 10; // let keyword
//Retun Statements
function math() {
var n = addition(2,2);
function addition(x,y) {
return x + y;
}
document.getElementById('result').innerHTML = n;
}

//object let & method
let healthInfo = {
Name: "John Doe",
Blood_Type: "O-",
Allergies: "None",
Doner: "Yes",
description: function () {
return "Name: " + this.Name + "<br>Blood Type: " +
this.Blood_Type + "<br>Known Allergies: " +
this.Allergies + "<br>Organ Doner: " + this.Doner;
}
}
document.getElementById('bioObject').innerHTML = healthInfo.description();

//break & continue
for (i = 0; i < 10; i++) {
if (i === 3) { break; } //breaks loop
text += "The number is " + i + "<br>";
}

for (i = 0; i < 10; i++) {
if (i === 3) { continue; } //breaks loop & starts next iteration
text += "The number is " + i + "<br>";
}
```

## Projects
### Calculator
```js
const Calculator = {
Display_Value: '0',
First_Operand: null,
Wait_Second_Operand: false,
operator: null,
};
function Input_Digit(digit) {
const { Display_Value, Wait_Second_Operand} = Calculator;
if(Wait_Second_Operand === true) {
Calculator.Display_Value = digit;
Calculator.Wait_Second_Operand = false;
} else {
Calculator.Display_Value = Display_Value === '0' ? digit: Display_Value + digit;
}
}
function Input_Decimal(dot) {
if (Calculator.Wait_Second_Operand === true) return;
if (!Calculator.Display_Value.includes(dot)) {
Calculator.Display_Value += dot;
}
}
function Handle_Operator(Next_Operator) {
const { First_Operand, Display_Value, operator } = Calculator
const Value_of_Input = parseFloat(Display_Value);
if (operator && Calculator.Wait_Second_Operand) {
Calculator.operator = Next_Operator;
return;
}
if (First_Operand == null) {
Calculator.First_Operand = Value_of_Input;
} else if (operator) {
const Value_Now = First_Operand || 0;
let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
result = Number(result).toFixed(9)
result = (result * 1).toString()
Calculator.Display_Value = parseFloat(result);
Calculator.First_Operand = parseFloat(result);
}
Calculator.Wait_Second_Operand = true;
Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
'/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
'*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
'+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
'-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
'=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
Calculator.Display_Value = '0';
Calculator.First_Operand = null;
Calculator.Wait_Second_Operand = false;
Calculator.operator = null;
}

function Update_Display() {
const display = document.querySelector('.calculator-screen');
display.value = Calculator.Display_Value;
}

Update_Display();
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
const { target } = event;
if (!target.matches('button')) {
return;
}

if(target.classList.contains('operator')) {
Handle_Operator(target.value);
Update_Display();
return;
}

if(target.classList.contains('decimal')) {
Input_Decimal(target.value);
Update_Display();
return;
}

if(target.classList.contains('all-clear')) {
Calculator_Reset();
Update_Display();
return;
}

Input_Digit(target.value);
Update_Display();
})
```
### Tik Tac Toe
```js
//function results in a random square being selected
function computersTurn() {
//boolean for while loop
let success = false;
//store a radond num (0-8)
let pickASquare;
//while keeps trying to find an unselected sqaure
while(!success) {
//rand between 0-8 is selected
pickASquare = String(Math.floor(Math.random()*9));
//if the rand number returns true, square has not yet been selected
if (placeXOrO(pickASquare)) {
//calls the function
placeXOrO(pickASquare);
//this changes bool and ends loop
success = true;
}
}
```
```js
//function checks if an array includes 3 strings for win condition
function arrayIncludes(squareA, squareB, squareC) {
//3 variables used to check for 3 in a row
const a = selectedSquares.includes(squareA)
const b = selectedSquares.includes(squareB)
const c = selectedSquares.includes(squareC)
//check tie, if tie return true for all 3 variables
if ( a === true && b === true && c === true) {return true}
}
```
```js
//fuction clears canvas after win line is drawn
function clear() {
const animationLoop = requestAnimationFrame(clear);
c.clearRect(0,0,608,608);
cancelAnimationFrame(animationLoop);
}
```
### Pizza Project
```js
function getReceipt() {
//initializes the string to pass through the function
var text1 = "<h3>You Ordered</h3>";
var runningTotal = 0;
var sizeTotal = 0;
var sizeArray = document.getElementsByClassName('size');
for (var i =0; i < sizeArray.length; i++) {
if (sizeArray[i].checked) {
var selectedSize = sizeArray[i].value;
text1 = text1 + selectedSize + "<br>";
}
}
if (selectedSize === "Personal Pizza") {
sizeTotal = 6;
} else if (selectedSize === "Small Pizza") {
sizeTotal = 8;
} else if (selectedSize === "Medium Pizza") {
sizeTotal = 10;
} else if (selectedSize === "Large Pizza") {
sizeTotal = 14;
} else if (selectedSize === "Extra Large Pizza") {
sizeTotal = 16;
}
runningTotal = sizeTotal;
console.log(selectedSize + "= $" + sizeTotal + ".00");
console.log("size text1: $" + text1);
console.log("subtotal: $" + runningTotal + ".00");

//these variables will get passed on to each function
getTopping(runningTotal, text1);
}

function getTopping(runningTotal,text1) {
var toppingTotal = 0;
var selectedTopping = [];
var toppingArray = document.getElementsByClassName("toppings");
for (var j = 0; j < toppingArray.length; j++) {
if (toppingArray[j].checked){
selectedTopping.push(toppingArray[j].value);
console.log("selected topping item: (" + toppingArray[j].value + ")");
text1 = text1 + toppingArray[j].value + "<br>";
}
}
var toppingCount = selectedTopping.length;
if (toppingCount > 1) {
toppingTotal = (toppingCount - 1);
} else {
toppingTotal = 0;
}

runningTotal = (runningTotal + toppingTotal);
console.log("total selected topping items: " + toppingCount);
console.log(toppingCount + " topping - 1 free topping = $" + toppingTotal + ".00");
console.log("topping text1: " + text1);
console.log("Purchase Total: $" + runningTotal + ".00")
document.getElementById('showText').innerHTML = text1;
document.getElementById('totalPrice').innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}

for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}
```
