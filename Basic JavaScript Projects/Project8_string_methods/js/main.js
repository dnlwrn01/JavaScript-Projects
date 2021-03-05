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