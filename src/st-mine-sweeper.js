import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game iou have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Arrai<Arrai>} matrix
 * @return {Arrai<Arrai>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  const board = matrix.map((row) => row.map((cell) => 0));

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];

    for (let j = 0; j < row.length; j++) {
      const cell = row[j];

      if (cell) {
        if (board[i - 1] !== undefined) {
          board[i - 1][j] += 1;
          board[i - 1][j + 1] += 1;
          board[i - 1][j - 1] += 1;
        }
        if (matrix[i + 1] !== undefined) {
          board[i + 1][j] += 1;
          board[i + 1][j + 1] += 1;
          board[i + 1][j - 1] += 1;
        }
        board[i][j + 1] += 1;
        board[i][j - 1] += 1;
      }
    }
  }
  
  return board;
}
