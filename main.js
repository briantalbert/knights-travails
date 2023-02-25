import { Board } from "./board.js";
import { Knight } from "./knight.js";
import { Tree } from "./tree.js";
import { Cell } from "./cell.js";

const chessBoard = new Board();
const myKnight = new Knight(3, 3);

let moveTree = new Tree(myKnight.posX, myKnight.posY);
let board = chessBoard.board;
let graph = chessBoard.adjList;

let path = moveTree.travel(board, graph, [1, 4], []);

let coords = idxToCoords(path);
console.log('Traveling from (' + myKnight.posX + ', ' + myKnight.posY + ') to (1, 4)' )
console.log('Made it in ' + coords.length + ' moves:');
coords.forEach(coord => {
    console.log(coord);
});

function idxToCoords(idxList) {
    let coordsList = [];
    idxList.forEach(idx => {
        coordsList.push([Math.floor(idx/8), idx % 8]);
    });
    return coordsList
}


    /*
var doBFS = function(graph, source) {
 var bfsInfo = [];

    for (var i = 0; i < graph.length; i++) {
	    bfsInfo[i] = {
	        distance: null,
	        predecessor: null };
    }

    bfsInfo[source].distance = 0;

    var queue = new Queue();
    queue.enqueue(source);

 while (!queue.isEmpty()) {
        let u = queue.dequeue();

        for (var i = 0; i < graph[u].length ; i++) {
            var v = graph[u][i];

            if (bfsInfo[v].distance === null) {
                bfsInfo[v].distance = bfsInfo[u].distance + 1;
                bfsInfo[v].predecessor = u;
                queue.enqueue(v);
            }
        };
    }

*/