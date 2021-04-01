/** 6. Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values). */

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

// solution = 

function oddLengths(strings) {
  let lengths = arr.map((letters) => letters.length);
  let oddLengths = lengths.filter((number) => number % 2 === 1);
  return oddLengths;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));