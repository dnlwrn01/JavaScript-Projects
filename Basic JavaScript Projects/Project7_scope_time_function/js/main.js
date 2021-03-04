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