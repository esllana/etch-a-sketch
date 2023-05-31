let board = document.querySelector('.board');

//make 16 columns and each column have width of 1/16 of the width of container. Same for rows
board.style.gridTemplateColumns = 'repeat(16, 1fr)';
board.style.gridTemplateRows = 'repeat(16, 1fr)';

for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.style.backgroundColor = 'blue';
    board.insertAdjacentElement('beforeend', square);
}

console.log(document.body);