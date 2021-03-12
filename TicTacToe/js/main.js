//tracks whose turn it is
let activePlayer = 'X';

//array stores moves and is used for win condition
let selectedSquares = [];

//function for x or o placement in a square
function placeXOrO(squareNumber) {
    //enmsures a square hasn't been previously selected
    //.some() checks each element of selectedSquare array
    //to see if it container the square number clicked on.
    if(!selectedSquares.some(element => element.includes(squareNumber))) {
        //retrieves the html element id that was clicked
        let select = document.getElementById(squareNumber);
        //condition checks whos turn it is
        if(activePlayer === 'X') {
            //if activePlayer is == x, the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/x.png")';
            //active player may only be X or O, so, if not x then o
        } else {
            //if activePlayer is == o, the o.png is placed in HTML
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to the array
        selectedSquares.push(squareNumber + activePlayer);
        //calls function to check for any win conditions
        checkWinConditions();
        //condition for changing active player
        if (activePlayer === 'X') {
            //if x change to o
            activePlayer = 'O';
        } else {
            //if not x, then o
            //change to X
            activePlayer = 'X';
        }


        //function plays placement sound
        audio('./media/place.mp3');
        //condition check if it's the computers turn
        if(activePlayer === 'O') {
            //disables clicking for computer choice
            disableClick();
            //this function waits 1 sec before computer places image and enables click
            setTimeout(function () { computersTurn(); }, 1000)
        }
        //return true 
        return true;
    }
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
    }
}

//function parses slecetedSquares array to search for win conditions
//drawWinLine function is called to draw the line if a condition is met
function checkWinConditions() {
    //X,0,1,2 condition
    if      (arrayIncludes('0X', '1X', '2X')) {drawWinLine(50,100,558,100)}
    //X,3,4,5 condition
    else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50,304,558,304)}
    //X,6,7,8 condition
    else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50,508,558,508)}
    //X,0,3,6 condition
    else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100,50,100,558)}
    //X,1,4,7 condition
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304,50,304,558)}
    //X,2,5,8 condition
    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508,50,508,558)}
    //X,6,4,2 condition
    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100,508,510,90)}
    //X,0,4,8 condition
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100,100,520,520)}
    //O,0,1,2 condition
    else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50,100,558,100)}
    //O,3,4,5 condition
    else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50,304,558,304)}
    //O,6,7,8 condition
    else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50,508,558,508)}
    //O,0,3,6 condition
    else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100,50,100,558)}
    //O,1,4,7 condition
    else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304,50,304,558)}
    //O,2,5,8 condition
    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508,50,508,558)}
    //O,6,4,2 condition
    else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100,508,510,90)}
    //O,0,4,8 condition
    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100,100,520,520)}
    //condition crecks for tie game
    //squares are selected, code exectutes 
    else if (selectedSquares.length >= 9) {
        //function plays tie game sounds
        audio('./media/tie.mp3');
        //sunction sets a .3 second timer before resetGame is called
        setTimeout(function() { resetGame(); }, 1000);
    }


    //function checks if an array includes 3 strings for win condition
    function arrayIncludes(squareA, squareB, squareC) {
        //3 variables used to check for 3 in a row
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)

        //check tie, if tie return true for all 3 variables
        if ( a === true && b === true && c === true) {return true}
    }
}

//function makes body element temp. non-clickable
function disableClick() {
    //makes body non clickable
    body.style.pointerEvents = 'none';
    //makes body clickable again
    setTimeout( function() {body.style.pointerEvents = 'auto';}, 1000);
}

//function take string parameters of path set
function audio (audioURL) {
    //create new audio object and pass file path as parameter
    let audio = new Audio(audioURL);
    //play method
    audio.play();
}

//function utilizes canvas to draw string lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2){
    //accesses HTML element
    const canvas = document.getElementById('win-lines')
    const c = canvas.getContext('2d');

    //plots line path
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

    
    //function interacts with canvas
    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0,0,608,608)
        c.beginPath();
        c.moveTo(x1,y1)
        c.lineTo(x,y)
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70,225,33,0.8)';
        c.stroke();

        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop);}
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);}
        }
    }

    //fuction clears canvas after win line is drawn
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0,0,608,608);
        cancelAnimationFrame(animationLoop);
    }
    disableClick();
    audio('./media/winGame.mp3');
    animateLineDrawing();
    setTimeout(function () {clear(); resetGame(); }, 1000);
}

//function resets game in the event of win or tie
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i))
        square.style.backgroundImage = ''
    }
    selectedSquares = [];
}