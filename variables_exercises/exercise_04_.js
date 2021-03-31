/* What happens when you run the following code? Why? */

const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

/**Solution =  
 * Good Morning, Victor
 * Good Afternoon, Victor
 * Good Evening, Victor
 * The program first greets Victor 3 times. It then encounters an error on line 6, which prevents it from greeting Joe. You can't reassign a constant after defining it. You must use regular variables instead:
 **/