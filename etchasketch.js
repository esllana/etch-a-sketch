//make a function to populate the board with squares of a given size
function populateBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
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

//TODO Function to change the background color of a square to black
function colorSquare() {
    this.style.backgroundColor = 'black';
}