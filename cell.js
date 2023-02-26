export class Cell {
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.validMoves = this.getValidMoves();
        this.parent = null;
        this.visited = false;
    }

    setParent(cell) {
        this.parent = cell;
    }

    unParent() {
        this.parent = null;
    }

    toString() {
        return this.row + ', ' + this.col;
    }

    visit() {
        this.visited = true;
    }

    setDistance(dist) {
        this.distance = dist;
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

        return this.coordToIndex(validated);
    }

    coordToIndex(coordList) {
        let idxList = [];
        coordList.forEach(coord => {
            let x = coord[0];
            let y = coord[1];

            let idx = (8 * x) + y;
            idxList.push(idx);
        });

        return idxList;
    }
}
