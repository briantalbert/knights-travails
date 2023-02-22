export class Cell {
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.validMoves = this.getValidMoves();
        this.distance = null;
        this.prev = null;
        this.isSource = false;
    }

    toString() {
        return this.row + ', ' + this.col;
    }

    setDistance(dist) {
        this.distance = dist;
    }

    setPrev(node) {
        if (node) {
            this.prev = node;
        }    
    }

    getValidMoves() {
        let row = this.row;
        let col = this.col;

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
