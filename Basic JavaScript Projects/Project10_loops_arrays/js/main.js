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
