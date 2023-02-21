export class Knight {
    constructor(row, col) {
        this.posX = row;
        this.posY = col;
    }

    travel(startCoords, endCoords, path = []) {
        if (startCoords == endCoords) {
            return startCoords;
        }
    }

    coordsMatch(startCoords, endCoords) {
        if (startCoords[0] == endCoords[0] && startCoords[1] == endCoords[1]) {
            return true;
        }

        return false;
    }

    
}