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
        //attempting to use BFS
        //
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
        //
        //----------------------------------------------------
        //convert destination coordinates to index in 1D array
        let destIdx = this.coordsToIdx(dest);
        
        if (source == destIdx) {
            return [source];
        }
        
        let q = new Queue();
        q.enqueue(source);
        board[source].visit;
        while (!q.isEmpty()) {
            let v = q.dequeue();
            let neighbors = graph[v];

            for (let i = 0; i < neighbors.length; i++) {
                let thisCell = board[neighbors[i]];

                if (!thisCell.visited) {
                    q.enqueue(neighbors[i]);
                    thisCell.visit();
                    thisCell.setParent(board[v]);
                    
                }

                if (neighbors[i] == destIdx) {
                    q.flush();
                    break;
                }
            }
            
            
        }
        board[source].unParent();
        path = this.getPath(board[source], board[destIdx]);
            
        return path;
        
    }

    getPath(start, dest, path = []) {
        let current = dest;
        while (current.parent) {
            path.push([current.row, current.col]);
            current = current.parent;
        }
        
        path.push([start.row, start.col]);
        path.reverse()
        return path;

    }    

}