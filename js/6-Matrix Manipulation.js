// Since matrixManipulation function manipulates the given matrix,
// it calculates the minimum value in the matrix.

function matrixManipulation(matrix) {
  const min = Math.min(...matrix.map((row) => Math.min(...row)));
  // calculates the minimum value in the entire matrix.

  return matrix.map((row) =>
    row.map((value) => (value % 2 !== 0 ? value * min : value))
  // maps over each row of the matrix
  );
}

// Example usage:
const matrix = [
  [5, 3, 6], // [10, 6, 6]
  [7, 11, 2], // [14, 22, 2]
  [15, 9, 4], // [30, 18, 4]
];

console.log(matrixManipulation(matrix));
