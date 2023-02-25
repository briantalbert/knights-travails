import { Cell } from "./cell.js";
import { Queue } from "./queue.js";

export class Tree {
    constructor(row, col) {
        this.startIdx = (8 * row) + col;
    }

    coordsToIdx(coords) {
        let x = coords[0];
        let y = coords[1];

        return (8 * x) + y;
    }

    travel(board, graph, dest, path, source = this.startIdx) {
        //board is a 1 dimensional array of cells objects.
        //Each cell has a row and column, a list of valid
        //moves, and a boolean to state if it has been 
        //visited yet.
        //
        //graph is adjacency list.
        //the index is the cell number, the array
        //at that index is the list of cell numbers
        //that it connects to.
        //
        //dest is the destination in coordinate
        //form. i.e., (x, y). I change that to 
        //a single number index (0 - 63).
        
        let destIdx = this.coordsToIdx(dest);
        path.push(source);
        //console.log('Going from ' + source + ' to ' + destIdx);

        if (source == destIdx) {
            return path;
        }
        
        let neighbors = graph[source];
        neighbors.forEach(nbr => {
            if (!board[nbr].visited) {
                board[nbr].visit();

                if (nbr == destIdx && path[-1] != destIdx) {
                    path.push(nbr);
                }
                
                if (graph[nbr].includes(destIdx)) {
                    path.push(nbr);
                    path.push(destIdx);
                } else {
                    //console.log('concatting');
                    path.concat(this.travel(board, graph, dest, path, nbr));
                }

            }
        });
        path.pop();
        return path;
    }
        


    

}