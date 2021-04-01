/** 7. Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets: */

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

myObj.qux = 3;

// solution - qux