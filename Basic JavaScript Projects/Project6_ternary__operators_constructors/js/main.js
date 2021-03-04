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
    " " +  Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year + ".";
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