import {renderOderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
//this is another syntax we can use for imports this just runs all the code inside this file without importing anything
//import '../data/cart-class.js';
// import '../data/backend-practice.js'
import {loadProducts,loadProductsFetch} from '../data/products.js';
import{loadCart} from '../data/cart.js';

/*19.1.5 we don't need to create a function name every time we can just create an anonymous function,it is going to save this function inside of the load products function as a parameter fun */

/*19.2.1 promise 1 better way to handle asynchronous code 2 similar to done() function 3 let us wait for some code to finish before going to the next step,*/

/*19.2.2 promise is a class,when we create this function it's going to run this function immediately,promise takes a perimeter name the  resolve is a function 1 is similar to down function 2 it let's control when to go to the next step,promise keep our coat flat without more nesting that's why we use promise instead of callbacks*/

/*19.2.6 promise have another feature called Promise.all() let us run multiple Promises at the same time */

/*21.1 async await even better way to handle asynchronous code it's a short hand of promises,async make a function return a promise*/

async function loadPage() {

  /*21.1.2 return 'value2' gets converted into resolved 'value2' */

  /*21.1.3 we just  use await to wait  this line to finish we don't need to use .then(),1 we can only use awiat when we are inside an async function 2 async await can only be used with promise,it doesn't do anything  with callback 3 the closest function has to be async*/
  /*20.2.3 we use try catch to error handling in async await */
  try{
    /*21.1.8 we can manually create errors throw,this error1 is going to save in the catch (error)*/
    // throw 'error1'
    await loadProductsFetch();
    /*21.1.9 reject is a function it lets us create an error in the future */
    const value = await new Promise((resolve,reject)=>{

      // throw 'error2'  
      loadCart(()=>{
       //reject('error3');
        /*21.1.4 if a promise resolve with a value it will normally saved in the next step however,however even we use await this valuer just gets returned and we can save it in a variable instead of using .then() we can Simply Save whatever it resolved inside a variable */
        /*21.1.5 we can actually use try catch with synchronous code */
        /*21.1.6 whenever we get an error it will skip the rest of the code */
        /*21.1.7 why don't we just try catch everywhere it means to handle unexpected errors code is correct outside our control */

        resolve('value');
      });
    });

  } catch (error){
    console.log('unexpected error.please try again later');
  }

  renderOderSummary();
  renderPaymentSummary ();
  /*21.1.1 the reason we use async is because it lets us use the second feature called await await let us wait for a promise to finish before going to the next line */

}

loadPage()

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  }),

]).then((values)=>{
  console.log(values);
  renderOderSummary();
  renderPaymentSummary ();
});
*/

/*new Promise((resolve)=>{

  loadProducts(()=>{
    //19.2.3 This Promise function we can run some asynchronous code and then we wait for it to finish and then we call resolve to go to the next step

    //19.2.5 resolve can have a parameter whatever we give resolve it will be saved inside then ,this let us share a value between two steps of a promise
    resolve('value1');
  });
  //19.2.4 promise create a separate thread code this thread code doesn't have Next Step so we are going to add one 
}).then((value)=>{
  console.log(value)
  return new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  });

}).then(()=>{
  renderOderSummary();
  renderPaymentSummary ();
});*/



/*loadProducts(()=>{
  loadCart(()=>{
    renderOderSummary();
    renderPaymentSummary ();
  })
});*/

