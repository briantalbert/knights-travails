export class Board {

    constructor() {
        this.board = [['_','_','_','_','_','_','_','_'],
                      ['_','_','_','_','_','_','_','_'],
                      ['_','_','_','_','_','_','_','_'],
                      ['_','_','_','_','_','_','_','_'],
                      ['_','_','_','_','_','_','_','_'],
                      ['_','_','_','_','_','_','_','_'],
                      ['_','_','_','_','_','_','_','_'],
                      ['_','_','_','_','_','_','_','_'],];
    }

    placeKnight(knight) {
        let row = knight.posX;
        let col = knight.posY;

        this.board[row][col] = 'K';
    }

    printBoard() {      
        console.log(' _ _ _ _ _ _ _ _')  
        this.board.forEach(row => {
            let rowString = '|';
            row.forEach(square => {
                rowString += square + '|';
            });
            console.log(rowString);
        });
    }
}