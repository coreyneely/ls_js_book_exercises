/** Without using Object.is, write a function that will return true if the argument is -0, and false if it is 0 or any other number. */

// solution =

function isNegativeZero(value) {
  return 1 / value === -Infinity;
}