/** 5. What does the following function do? */

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// solution = 

console.log(doSomething("Pursuit of happiness")); // => [ 9, 2, 7 ]
