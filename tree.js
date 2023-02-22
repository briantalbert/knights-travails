import { Cell } from "./cell.js";
import { Queue } from "./queue.js";

export class Tree {
    constructor(row, col) {
        this.root = new Cell(row, col);
        this.moveList = this.getValidMoves();
    }

    travel(startCoords, endCoords) {
        let source = new Cell(startCoords[0], startCoords[1]);
        let dest = new Cell(endCoords[0], endCoords[1]);
        
    }
        
    

    coordsMatch(startCoords, endCoords) {
        if ((startCoords[0] == endCoords[0]) && (startCoords[1] == endCoords[1])) {
            return true;
        }
        return false;
    }

    getValidMoves() {
        let row = this.root.row;
        let col = this.root.col;

        let possibleMoveList = [[row + 2, col - 1],
                                [row + 2, col + 1],
                                [row - 2, col - 1],
                                [row - 2, col + 1],
                                [row + 1, col + 2],
                                [row - 1, col + 2],
                                [row + 1, col - 2],
                                [row - 1, col - 2]];
        
        let validMoves = this.validate(possibleMoveList);
        return validMoves;
    }

    validate(moveList) {
        let validated = [];
        moveList.forEach(coords => {
            let row = coords[0];
            let col = coords[1];

            if (row > 7 || col > 7 || row < 0 || col < 0) {
            } else {
                validated.push(coords);
            }
        });

        return validated;
    }
}