import { Board } from "./board.js";
import { Knight } from "./knight.js";
import { Tree } from "./tree.js";
import { Cell } from "./cell.js";

const chessBoard = new Board();
const myKnight = new Knight(0, 7);

let moveTree = new Tree(myKnight.posX, myKnight.posY);
let board = chessBoard.board;
let graph = chessBoard.adjList;

console.log('Traveling from (' + myKnight.posX + ', ' + myKnight.posY + ') to (7, 0)' )

let path = moveTree.travel(board, graph, [7, 0], []);
console.log('Made it in ' + path.length + ' moves:');
path.forEach(coord => {
    console.log(coord);
});

