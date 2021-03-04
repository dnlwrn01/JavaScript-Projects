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
//  BOOLEAN LOGIC    T/F
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