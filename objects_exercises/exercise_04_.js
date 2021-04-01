/** 4. Create an array from the keys of the object obj below, with all of the keys converted to uppercase. Your implementation must not mutate obj. */

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

// solution =

let objKeys = Object.keys(obj);
let upperKeys = objKeys.map((key) => key.toUpperCase());
console.log(upperKeys); // => [ 'B', 'A', 'C' ]
console.log(obj); // => { b: 2, a: 1, c: 3 }