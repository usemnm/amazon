
/*toFix() have some problem with rounding so for some numbers that end in  5 it won't round the number properly  */
export function formatCurrency(priceCents){
  return (Math.round(priceCents) / 100).toFixed(2);
};

/* 6 .1 this is called a default export a default export is another way of exporting something from a file we can use it when we only want to export one thing ,each file can only have one default export,the syntax of import with curly bracket is called named export not all the external never have esm version so sometimes we still have to use script tag version/

export default formatCurrency

import formatCurrency './utils/money.js';
*/

/* 9  test  code
disadvantage of manual testing hard to test every situation like number 0;2,000.5 in order to test this situation we have to manually set up our website go to run with those code this will take a lot of time and effort to retest the code to solve this problem we're going to learn another way to test our code called automated testing basically means using code to test code instead of money opening their website and clicking around to try our code where can I tell the computer to test for us and this will save a lot of time and effort 
9.1 create a folder to group all of our test code together*/