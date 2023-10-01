/*

We have a two-dimensional board game involving snakes.  The board has two types of squares on it: +'s represent impassable squares where snakes cannot go, and 0's represent squares through which snakes can move.  Snakes can only enter on the edges of the board, and each snake can move in only one direction.  We'd like to find the places where a snake can pass through the entire board, moving in a straight line.

Here is an example board:

    col-->        0  1  2  3  4  5  6
               +----------------------
    row      0 |  +  +  +  0  +  0  0
     |       1 |  0  0  +  0  0  0  0
     |       2 |  0  0  0  0  +  0  0
     v       3 |  +  +  +  0  0  +  0
             4 |  0  0  0  0  0  0  0

Write a function that takes a rectangular board with only +'s and 0's, and returns two collections:

* one containing all of the row numbers whose row is completely passable by snakes, and  
* the other containing all of the column numbers where the column is completely passable by snakes.

Sample Inputs:

board1 = [['+', '+', '+', '0', '+', '0', '0'],
          ['0', '0', '+', '0', '0', '0', '0'],
          ['0', '0', '0', '0', '+', '0', '0'],
          ['+', '+', '+', '0', '0', '+', '0'],
          ['0', '0', '0', '0', '0', '0', '0']]

board2 = [['+', '+', '+', '0', '+', '0', '0'],
          ['0', '0', '0', '0', '0', '+', '0'],
          ['0', '0', '+', '0', '0', '0', '0'],
          ['0', '0', '0', '0', '+', '0', '0'],
          ['+', '+', '+', '0', '0', '0', '+']]

board3 = [['+', '+', '+', '0', '+', '0', '0'],
          ['0', '0', '0', '0', '0', '0', '0'],
          ['0', '0', '+', '+', '0', '+', '0'],
          ['0', '0', '0', '0', '+', '0', '0'],
          ['+', '+', '+', '0', '0', '0', '+']]

board4 = [['+']]

board5 = [['0']]

All test cases:

findPassableLanes(board1) => Rows: [4], Columns: [3, 6]
findPassableLanes(board2) => Rows: [], Columns: [3]
findPassableLanes(board3) => Rows: [1], Columns: []
findPassableLanes(board4) => Rows: [], Columns: []
findPassableLanes(board5) => Rows: [0], Columns: [0]

Complexity Analysis:

r: number of rows in the board
c: number of columns in the board

*/

"use strict";

const board1 = [
  ["+", "+", "+", "0", "+", "0", "0"],
  ["0", "0", "+", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "+", "0", "0"],
  ["+", "+", "+", "0", "0", "+", "0"],
  ["0", "0", "0", "0", "0", "0", "0"],
];

const board2 = [
  ["+", "+", "+", "0", "+", "0", "0"],
  ["0", "0", "0", "0", "0", "+", "0"],
  ["0", "0", "+", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "+", "0", "0"],
  ["+", "+", "+", "0", "0", "0", "+"],
];

const board3 = [
  ["+", "+", "+", "0", "+", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "+", "+", "0", "+", "0"],
  ["0", "0", "0", "0", "+", "0", "0"],
  ["+", "+", "+", "0", "0", "0", "+"],
];

const board4 = [["+"]];

const board5 = [["0"]];

function findPassableLanes(board) {
  let Rows = [];
  let Columns = [];
  const len = board.length;
  for (let i = 0; i < len; i++) {
    // determine which row and columns index
    // check for '+' if it exist snake cannot pass through
    if (!board[i].includes("+")) {
      // add row snake can pass through
      console.log(Rows.concat(i));
    }
  }

  // check columns snake can pass through
  for (let i = 0; i < board[0].length; i++) {
    let allZeros = true;

    for (let j = 0; j < len; j++) {
      if (board[j][i].includes("+")) {
        allZeros = false;
      }
    }
    if (allZeros) {
      Columns.push(i);
    }
  }
  console.log(Columns);
}

findPassableLanes(board1);
findPassableLanes(board2);
findPassableLanes(board3);
findPassableLanes(board4);
findPassableLanes(board5);
