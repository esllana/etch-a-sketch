let color = 'black';  // Set the initial color to black


//make a function to populate the board with squares of a given size
function populateBoard(size) {
    let board = document.querySelector('.board'); // Select the board element
    let squares = board.querySelectorAll('div'); // Select all the squares on the board
    squares.forEach((div) => div.remove()); // Remove all the squares from the board
    // Set the grid template columns and rows to create a grid layout
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;  // Calculate the total number of squares
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div'); // Create a new square element
        square.addEventListener('mouseover', colorSquare); // Add a mouseover event listener
        square.style.backgroundColor = 'white'; // Set the initial background color of the square
        board.insertAdjacentElement('beforeend', square); // Add the square to the board
    }
}

populateBoard(16);

//change the size of the board linked with input html
function changeSize(input) {
    if(input >= 2 && input <= 100) {
        populateBoard(input);
    } else {
        console.log('Please enter a number between 2 and 100');
    }
}

//change the color of the squares
function colorSquare() {
    if((color == 'random')) {
        // Generate a random color using HSL
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        // Set the background color of the square to the selected color
        this.style.backgroundColor = color;
    }
}

//change the color of the squares linked with input html
function changeColor(input) {
    color = input;
}

//reset the board
function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}