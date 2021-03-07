userName = ""
function userNameLength() {
    var userName = document.getElementById('userName').value;
    var nameLength = userName.length;
    document.getElementById('result').innerHTML = nameLength;
}