// ADD,SUBTRACT,MULTIPLY,DIVIDE Basic Functions

//addition
function addition(p1, p2) {
    return p1 + p2;
}

function displayNum() {
    document.getElementById('math').innerHTML = '2 + 2 = ' + addition(2,2);
}

//subtraction
function subtraction(p1, p2) {
    return p1 - p2;
}

function displayNum2() {
    document.getElementById('math2').innerHTML = '2 - 2 = ' + subtraction(2,2);
}


//multiply
function multiplication(p1, p2) {
    return p1 * p2;
}

function displayNum3() {
    document.getElementById('math3').innerHTML = '2 * 2 = ' + multiplication(2,2);
}

//divide
function division(p1, p2) {
    return p1 / p2;
}

function displayNum4() {
    document.getElementById('math4').innerHTML = '2 / 2 = ' + division(2,2);
}

//modulus
function modulus(p1, p2) {
    return p1 % p2;
}

function displayNum5() {
    document.getElementById('math5').innerHTML = 'The remainder of 143 / 10 is = ' + modulus(143,10);
}

//negation
function negation(p1) {
    return -p1;
}

function displayNum6() {
    document.getElementById('math6').innerHTML = 'The negitive value of 10 is ' + negation(10);
    
}

//increment
var x = 25;
x++;
document.write(x);

document.write("<br>") //break line

//decrement
var x = 25;
x--;
document.write(x);

document.write("<br>") //break line

//random between 0-1
document.write(Math.random());

document.write("<br>") //break line

//random between 0-100
document.write(Math.random() * 100);

document.write("<br>") //break line

//math method
document.write(Math.round(-4.2));    // returns -4