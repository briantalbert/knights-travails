import { Cell } from "./cell.js";

export class Board {

    constructor() {
        this.board = [];
        let ctr = 0;
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++){
                let newCell = new Cell (i, j);
                this.board.push(newCell);
                ctr++;
            }
        }

        this.adjList = this.makeAdjList();
    }

    makeAdjList() {
        let adjList = [];
        this.board.forEach(cell => {
            adjList.push(cell.validMoves);
        });

        return adjList;
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


/*

this.board = [['_','_','_','_','_','_','_','_'],
                      ['_','_','_','_','_','_','_','_'],
                      ['_','_','_','_','_','_','_','_'],
                      ['_','_','_','_','_','_','_','_'],
                      ['_','_','_','_','_','_','_','_'],
                      ['_','_','_','_','_','_','_','_'],
                      ['_','_','_','_','_','_','_','_'],
                      ['_','_','_','_','_','_','_','_'],];

*/