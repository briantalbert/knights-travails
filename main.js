import { Board } from "./board.js";
import { Knight } from "./knight.js";
import { Tree } from "./tree.js";
import { Cell } from "./cell.js";

const chessBoard = new Board();
const myKnight = new Knight(4, 4);
//chessBoard.placeKnight(myKnight);
//chessBoard.printBoard();

let moveTree = new Tree(myKnight.posX, myKnight.posY);
let path = moveTree.travel([4,4],[2,5]);
console.log(path);