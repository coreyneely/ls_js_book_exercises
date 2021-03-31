/* 3. What happens when you run the following program? Why do we get that result?  */

{
  let foo = 'bar';
}

console.log(foo);

// foo is not defined. It was declared insdie of the of the block, it doesn't exist outside of it, it's out of scope.